import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Modal,
  Image,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  I18nManager,
  TextInput,
  ScrollView
} from "react-native";

var i = 0;
export default class RNModalPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedFlag: this.props.defaultValue,
      dataSource: []
    };
  }
  
  componentDidMount() {    
    this.setState({ dataSource: this.props.dataSource });
  }

  static _setDefaultValue(
    defaultText,
    pickerStyle,
    textStyle,
    dropDownImageStyle,
    dropDownImage
  ) {
    return (
      <View style={pickerStyle}>
        <Text style={textStyle}>{defaultText}</Text>
        <Image
          style={dropDownImageStyle}
          resizeMode="contain"
          source={dropDownImage}
        />
      </View>
    );
  }

  static _setSelectedValue(
    defaultText,
    pickerStyle,
    textStyle,
    dropDownImageStyle,
    dropDownImage
  ) {
    return (
      <View style={pickerStyle}>
        <Text style={textStyle}>{defaultText}</Text>
        <Image
          style={dropDownImageStyle}
          resizeMode="contain"
          source={dropDownImage}
        />
      </View>
    );
  }
  _searchFilterFunction(searchText, data) {
    i = 1;
    let newData = [];
    if (searchText) {
      newData = data.filter(function (item) {
        const itemData = item.name.toUpperCase();
        const textData = searchText.toUpperCase();
        return itemData.startsWith(textData);
      });
      this.setState({
        dataSource: [...newData]
      });
    } else {
      this.setState({ dataSource: this.props.dataSource });
    }
  }

  _renderItemListValues(item, index) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.listRowClickTouchStyle}
        onPress={() => this._setSelectedIndex(item.id, item.name)}
      >
        <View style={styles.listRowContainerStyle}>
          <Text style={styles.listTextViewStyle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _setSelectedIndex(id, name) {
    if (i == 0) {
      i = 0;
      this.props.selectedValue(0, name);

      this.setState({ selectedFlag: true });
      this.setState({ modalVisible: false });
    } else {
      i = 0;
      this.props.selectedValue(id, name);

      this.setState({ selectedFlag: true });
      this.setState({ modalVisible: false });
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.state.selectedFlag ? (
          <View>
            <TouchableOpacity
              disabled={this.props.disablePicker}
              onPress={() => this.setState({ modalVisible: true })}
              activeOpacity={0.7}
            >
              <View>
                {RNModalPicker._setSelectedValue(
                  this.props.selectedLabel,
                  this.props.pickerStyle,
                  this.props.selectLabelTextStyle,
                  this.props.dropDownImageStyle,
                  this.props.dropDownImage
                )}
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              disabled={this.props.disablePicker}
              style={styles.picker}
              onPress={() => this.setState({ modalVisible: true })}
              activeOpacity={0.7}
            >
              <View>
                {RNModalPicker._setDefaultValue(
                  this.props.placeHolderLabel,
                  this.props.pickerStyle,
                  this.props.placeHolderTextStyle,
                  this.props.dropDownImageStyle,
                  this.props.dropDownImage
                )}
              </View>
            </TouchableOpacity>
          </View>
        )}

        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          animationType={this.props.changeAnimation}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <View style={styles.container}>
            <View style={styles.listDataContainerStyle}>
              <View style={styles.pickerTitleContainerStyle}>
                {this.props.showPickerTitle ? (
                  <Text style={styles.pickerTitleTextStyle}>
                    {" "}
                    {this.props.pickerTitle}
                  </Text>
                ) : null}

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => this.setState({ modalVisible: false })}
                >
                  <Image
                    resizeMode="contain"
                    style={styles.crossImageStyle}
                    source={require("../../../res/ic_cancel_grey.png")}
                  />
                </TouchableOpacity>
              </View>
              {this.props.showSearchBar ? (
                <View style={styles.searchBarContainerStyle}>
                  {/* <Image
                          resizeMode="contain"
                          style={styles.iconGPSStyle}
                          source={Images.ic_search}
                        /> */}

                  <TextInput
                    onChangeText={text =>
                      this._searchFilterFunction(
                        text,
                        this.props.dummyDataSource
                      )
                    }
                    placeholder={"Search"}
                    style={styles.textInputStyle}
                    placeholderTextColor={"#909090"}
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    returnKeyType={"done"}
                    blurOnSubmit={true}
                  />
                </View>
              ) : null}

              <FlatList
                style={styles.flatListStyle}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                extraData={this.state}
                overScrollMode="never"
                keyboardShouldPersistTaps="always"
                numColumns={1}
                data={this.state.dataSource}
                renderItem={({ item, index }) =>
                  this._renderItemListValues(item, index)
                }
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
RNModalPicker.defaultProps = {
  defaultValue: false,
  showSearchBar: false,
  showPickerTitle: false,
  disablePicker: false,
  changeAnimation: "slide",
  dropDownImage: require("../../../res/ic_drop_down.png"),
  placeHolderLabel: "Please select value from picker",
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  selectLabelTextStyle: {
    color: "#000",
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 10,
    textAlign: "left",
    width: "99%",
    flexDirection: "row"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },
  pickerStyle: {
    marginLeft: 18,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    shadowRadius: 1,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderColor: "#303030",
    shadowColor: "#303030",
    borderRadius: 5,
    elevation: 1,
    flexDirection: "row"
  }
};
RNModalPicker.propTypes = {
  placeHolderLabel: PropTypes.any,
  selectedLabel: PropTypes.any,
  pickerTitle: PropTypes.any,
  dataSource: PropTypes.any,
  dummyDataSource: PropTypes.any,
  dropDownImage: PropTypes.number,
  defaultSelected: PropTypes.any,
  defaultValue: PropTypes.bool,
  showSearchBar: PropTypes.bool,
  showPickerTitle: PropTypes.bool,
  disablePicker: PropTypes.bool,
  changeAnimation: PropTypes.string,
  dropDownImageStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]),

  selectLabelTextStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]),
  placeHolderTextStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]),
  textStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]),
  pickerStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ])
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  pickerTitleContainerStyle: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignSelf: "flex-end"
  },
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowRadius: 1,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderColor: "#303030",
    shadowColor: "#303030",
    borderRadius: 5,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10
  },

  flatListStyle: {
    maxHeight: "85%",
    minHeight: "35%"
  },
  iconGPSStyle: {
    alignItems: "center",
    alignSelf: "center",
    height: 20,
    width: 20,
    margin: 5,
    transform: [
      {
        scaleX: I18nManager.isRTL ? -1 : 1
      }
    ]
  },

  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center"
  },
  listRowContainerStyle: {
    width: "100%",
    justifyContent: "center"
  },
  textInputStyle: {
    color: "black",
    paddingLeft: 15,
    marginTop: Platform.OS == "ios" ? 10 : 0,
    marginBottom: Platform.OS == "ios" ? 10 : 0,
    alignSelf: "center",
    flex: 1,
    textAlign: I18nManager.isRTL ? "right" : "left"
  },
  crossImageStyle: {
    width: 40,
    height: 40,
    marginTop: -4,

    marginRight: -7,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    alignSelf: "flex-end"
  },

  listDataContainerStyle: {
    alignSelf: "center",
    width: "90%",
    borderRadius: 10,
    maxHeight: "80%",
    backgroundColor: "white"
  },

  listTextViewStyle: {
    color: "#000",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "left"
  },
  listRowClickTouchStyle: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1
  },

  pickerTitleTextStyle: {
    fontSize: 18,
    flex: 1,
    paddingBottom: 10,
    marginLeft: 40,
    color: "#000",
    textAlign: "center"
  }
});

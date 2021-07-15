/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
// import libraries
import React, {useRef, useState} from 'react';
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
} from 'react-native';
import FloatingLabel from './TextInput';

// create a component
const RNModalPicker = (props) => {
  const {
    listTextStyle,
    data,
    labelText,
    selectedValue,
    disablePicker,
    selectedText,
    pickerStyle,
    selectedTextStyle,
    dropDownIconStyle,
    dropDownIcon,
    placeHolderText,
    placeHolderTextColor,
    changeAnimation,
    showPickerTitle,
    showSearchBar,
    searchBarStyle,
    pickerTitle,
    searchBarPlaceHolder,
    itemSeparatorStyle,
  } = props;

  const [dataSource, setData] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = useRef(null);

  const setSelectedValue = (
    labelText,
    placeHolderText,
    placeHolderTextColor,
    defaultText,
    pickerStyle,
    selectedTextStyle,
    dropDownIconStyle,
    dropDownIcon,
  ) => {
    return (
      <TouchableOpacity
        disabled={disablePicker}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}>
        <View>
          <FloatingLabel
            container={pickerStyle}
            ref={inputRef}
            editable={false}
            style={[styles.selectedTextStyle, selectedTextStyle]}
            dropDownIconStyle={[styles.dropDownIconStyle, dropDownIconStyle]}
            dropDownIcon={dropDownIcon}
            labelText={labelText}
            placeholder={placeHolderText}
            placeholderTextColor={placeHolderTextColor}
            value={defaultText}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const searchFilter = (searchText, item) => {
    let filteredArray = [];
    if (searchText) {
      filteredArray = item.filter(function (value) {
        const itemData = value.name.toUpperCase();
        const textData = searchText.toUpperCase();
        return itemData.includes(textData);
      });
      setData([...filteredArray]);
    } else {
      setData([...data]);
    }
  };
  const listItemSeparator = (style) => {
    return <View style={style} />;
  };
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.listItemTouchStyle}
        onPress={() => setSelectedIndex(index, item)}>
        <View style={styles.listItemStyle}>
          <Text style={[styles.listTextStyle, listTextStyle]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const setSelectedIndex = (index, item) => {
    selectedValue(index, item);
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      {setSelectedValue(
        labelText,
        placeHolderText,
        placeHolderTextColor,
        selectedText,
        pickerStyle,
        selectedTextStyle,
        dropDownIconStyle,
        dropDownIcon,
      )}

      <Modal
        visible={modalVisible}
        transparent={true}
        onShow={() => setData(dataSource)}
        animationType={changeAnimation}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.container}>
          <View style={styles.listContainerStyle}>
            <View style={styles.pickerTitleStyle}>
              {showPickerTitle ? (
                <Text style={styles.pickerTitleTextStyle}> {pickerTitle}</Text>
              ) : null}

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setModalVisible(false)}>
                <Image
                  resizeMode="contain"
                  style={styles.crossImageStyle}
                  source={require('./res/ic_cancel_grey.png')}
                />
              </TouchableOpacity>
            </View>
            {showSearchBar ? (
              <View style={[styles.searchBarStyle, searchBarStyle]}>
                <TextInput
                  onChangeText={(text) => searchFilter(text, data)}
                  placeholder={searchBarPlaceHolder}
                  style={styles.textInputStyle}
                  underlineColorAndroid="transparent"
                  keyboardType="default"
                  returnKeyType={'done'}
                  blurOnSubmit={true}
                />
              </View>
            ) : null}

            <FlatList
              style={styles.flatListStyle}
              keyExtractor={(item) => item.name}
              showsVerticalScrollIndicator={false}
              // extraData={this.state}
              overScrollMode="never"
              ItemSeparatorComponent={() =>
                listItemSeparator(itemSeparatorStyle)
              }
              keyboardShouldPersistTaps="always"
              numColumns={1}
              data={dataSource}
              renderItem={({item, index}) => renderItem(item, index)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

// define your styles
RNModalPicker.defaultProps = {
  defaultValue: false,
  showSearchBar: false,
  showPickerTitle: false,
  disablePicker: false,
  changeAnimation: 'slide',
  dropDownIcon: require('./res/ic_drop_down.png'),
  //  placeHolderText: 'Please select value from picker',
  searchBarPlaceHolder: 'Search',
};
const styles = StyleSheet.create({
  mainContainer: {
    margin: 15,
  },
  listTextStyle: {
    color: '#000',
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: 'left',
  },
  pickerTitleStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  searchBarStyle: {
    marginBottom: 10,
    flexDirection: 'row',
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: 'rgba(255,255,255,1)',
    shadowColor: '#d3d3d3',
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 10,
  },

  flatListStyle: {
    maxHeight: '85%',
  },

  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
  },
  listItemStyle: {
    width: '100%',
    justifyContent: 'center',
  },
  textInputStyle: {
    color: 'black',
    paddingLeft: 15,
    marginTop: Platform.OS === 'ios' ? 10 : 0,
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
    alignSelf: 'center',
    flex: 1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  crossImageStyle: {
    width: 40,
    height: 40,
    marginTop: -4,

    marginRight: -7,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
  },
  selectedTextStyle: {
    height: 50,
    borderColor: 'gray',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: '100%',
    color: 'red',
    fontSize: 20,
    paddingLeft: 10,
    marginTop: -2,
  },
  listContainerStyle: {
    alignSelf: 'center',
    width: '90%',
    borderRadius: 10,
    maxHeight: '80%',
    backgroundColor: 'white',
  },

  listItemTouchStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  dropDownIconStyle: {
    width: 20,
    height: 20,
    left: -40,
    // marginTop: 20,
  },
  pickerTitleTextStyle: {
    fontSize: 18,
    flex: 1,
    paddingBottom: 10,
    marginLeft: 40,
    color: '#000',
    textAlign: 'center',
  },
});
export default RNModalPicker;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerDialog from "../../component/RNModalPicker/RNModalPicker";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 1,
          name: "Afghanistan"
        },
        {
          id: 2,
          name: "Bahrain"
        },
        {
          id: 3,
          name: "Canada"
        },
        {
          id: 4,
          name: "Denmark"
        },
        {
          id: 5,
          name: "Egypt"
        },
        {
          id: 6,
          name: "France"
        },
        {
            id: 7,
            name: "Greece"
          },
          {
            id: 8,
            name: "Hong Kong"
          },
          {
            id: 9,
            name: "India"
          },
          {
            id: 10,
            name: "Japan"
          },
          {
            id: 11,
            name: "Kenya"
          },
          {
            id: 12,
            name: "Liberia"
          },
          {
            id: 13,
            name: "Malaysia"
          },
          {
            id: 14,
            name: "Nepal"
          },
          {
            id: 15,
            name: "Oman"
          },
          {
            id: 16,
            name: "Poland"
          },
          {
            id: 17,
            name: "Qatar"
          },
        
          {
            id: 18,
            name: "Reunion"
          },
          {
            id: 19,
            name: "Saint Helena"
          },
          {
            id: 20,
            name: "United States"
          },
          {
            id: 21,
            name: "Virgin Islands"
          },
          {
            id: 22,
            name: "Zimbabwe"
          },
      ],
      placeHolderText: "Please Select Country",
      selectedText: "",
      selectedFlag: false,
      defaultValue: true,
      select: "",
    };
  }
  _selectedValue(index, item) {
    this.setState({ selectedText: item.name });
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={{marginBottom:50,fontSize:25,fontWeight:'bold'}}>{"React Native Picker With Search"}</Text>
        <RNPickerDialog
          dataSource={this.state.dataSource}
          dummyDataSource={this.state.dataSource}
          defaultValue={false}
          pickerTitle={"Sort by"}
          showSearchBar={true}
          showPickerTitle={true}
          pickerStyle={Styles.pickerStyle}
          pickerItemTextStyle={Styles.listTextViewStyle}
          selectedLabel={this.state.selectedText}
          placeHolderLabel={this.state.placeHolderText}
          searchBarPlaceHolder={"Search....."}
          searchBarPlaceHolderColor={"#9d9d9d"}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          searchBarContainerStyle={Styles.searchBarContainerStyle}
      
          dropDownImage={require("../../../res/ic_drop_down.png")}
          selectedValue={(index, item) => this._selectedValue(index, item)}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
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
  listTextViewStyle: {
    color: "#000",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "left"
  },
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowRadius: 1,
    shadowOpacity: 1.0,
    borderWidth:1,
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
    marginRight:10,
    marginBottom:2,
    shadowRadius: 1,
    borderWidth:1,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderColor: "#303030",
    shadowColor: "#303030",
    borderRadius: 5,
    elevation: 1,
    flexDirection: "row",
  }
});

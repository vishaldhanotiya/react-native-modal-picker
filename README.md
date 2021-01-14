<p align="center">
  <h1 align="center">React Native Modal Picker</h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-firebase"><img src="https://img.shields.io/badge/npm-v0.2.4-blue?style=flat-square" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/react-native-firebase"><img src="https://img.shields.io/badge/downloads-100%2Fweek-brightgreen?style=flat-square" alt="NPM downloads"></a>
  <a href="/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat-square" alt="License"></a>
</p>

<p align="center">
  <h2 align="center">This is a cross-platform picker with search bar for react native support both platform IOs and android</h2>
</p>

<p align="left">
  
<img  width="280" height="400" src="https://firebasestorage.googleapis.com/v0/b/vishaldhanotiya-1168.appspot.com/o/picker-with-search-bar.gif?alt=media&token=848b110f-a004-4f10-bd46-7a612ff4cac7">
  
<img  width="280" height="400" src="https://firebasestorage.googleapis.com/v0/b/vishaldhanotiya-1168.appspot.com/o/picker-without-search.gif?alt=media&token=f0cebd71-8bd0-4027-87e7-0ade4fff5071">
  
</p>


## Features

1. Easy to use 
2. Cross platform compatibility android and ios both
3. According to use hide and show search bar and title
4. Dynamically change dropdown image
5. Customize font size, font color and style 
6. Change animation(Slide, fade, none)

## Installation

#### Step 1 Install

> **npm i rn-modal-picker**

#### Step 2 Link

> **react-native link rn-modal-picker**

## Usage

```
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPicker from "rn-modal-picker";

export default class App extends Component {
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
        }
      ],
      placeHolderText: "Please Select Country",
      selectedText: ""
    };
  }
  _selectedValue(index, item) {
    this.setState({ selectedText: item.name });
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={{ marginBottom: 50, fontSize: 25, fontWeight: "bold" }}>
          {"React Native Picker With Search"}
        </Text>
        <RNPicker
          dataSource={this.state.dataSource}
          dummyDataSource={this.state.dataSource}
          defaultValue={false}
          pickerTitle={"Country Picker"}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search....."}
          showPickerTitle={true}
          searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={Styles.pickerStyle}
          itemSeparatorStyle={Styles.itemSeparatorStyle}
          pickerItemTextStyle={Styles.listTextViewStyle}
          selectedLabel={this.state.selectedText}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          dropDownImage={require("./res/ic_drop_down.png")}
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
  itemSeparatorStyle:{
    height: 1,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#D3D3D3"
  },
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
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
  listTextViewStyle: {
    color: "#000",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "left"
  },
  pickerStyle: {
    marginLeft: 18,
    elevation:3,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:1,
    shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
  }
});
```



## Properties


|   Prop                   |  Default  |    Type    |                 Description                           | Required/Optional  |
|--------------------------|-----------|------------|-------------------------------------------------------|--------------------| 
|  dataSource              |  []       |   array    |  Array of objects with a unique id and name           |   Required         |
|  dummyDataSource         |  []       |   array    |  Search data by name required for data filteration    |   Required         |
|  defaultValue            |  false    |   bool     |  Use to show predefined value in to picker            |   Optional         |
|  pickerTitle             |  -        |   string   |  Use to show title on picker                          |   Optional         |
|  showSearchBar           |  false    |   bool     |  Show and hide search bar                             |   Optional         |
|  showPickerTitle         |  false    |   bool     |  Show and hide picker title                           |   Optional         |
|  selectedLabel           |  -        |   string   |  Set selected value otherwise its blank               |   Optional         |
|  placeHolderText         |  -        |   string   |  Use to Show place holder hint text                   |   Required         |
|  pickerStyle             |  -        |   object   |  Customize picker style                               |   Required         | 
|  pickerItemTextStyle     |  -        |   object   |  Customize picker item text style                     |   Optional         | 
|  placeHolderTextStyle    |  -        |   object   |  Customize placeholder text style                     |   Optional         |
|  itemSeparatorStyle      |  -        |   object   |  Style for Horizontal Line between item               |   Optional         |
|  selectedLabelTextStyle  |  -        |   object   |  Customize selected label text style                  |   Optional         |
|  searchBarContainerStyle |  -        |   object   |  Customize Search bar Container style                 |   Optional         |     
|  dropDownImageStyle      |  -        |   object   |  Customize drop down style                            |   Optional         |
|  dropDownImage           |  -        |   png/jpg  |  Add custom drop down image                           |   Optional         |
|  selectedValue           |  -        |   function |  callback function received value from list selection |   Required         | 
|  changeAnimation         |  -        |   string [slide,none,fade] | Change Modal Animation                |   Optional         |
|  disablePicker           |  -        |   bool     |  Disable picker if you show default value and no need to change| Optional  |








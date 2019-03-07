# rn-modal-picker


## This is a cross-platform picker with search bar for react native support both platform IOs and android





<p align="left">
  
<img  width="280" height="400" src="https://firebasestorage.googleapis.com/v0/b/vishaldhanotiya-1168.appspot.com/o/with_search_and_title.gif?alt=media&token=d5348067-6384-4f7b-88fb-07e5fe8b8729">
  
<img  width="280" height="400" src="https://firebasestorage.googleapis.com/v0/b/vishaldhanotiya-1168.appspot.com/o/without_search_and_title.gif?alt=media&token=741b1ba3-36cd-4628-84c8-29ca2dde6c78">
  
</p>


## Features

1. Easy to use 
2. Cross platform compatibility android and ios both
3. According to use hide and show search bar and title
4. Dynamically change dropdown image
5. Customize font size, font color and style 

## Installation

#### Step 1 Install

> **npm i rn-modal-picker**

#### Step 2 Link

> **react-native link rn-modal-picker**

## Usage

```import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPic from  'rn-modal-picker'

export default class App extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 1,
          name: "India"
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
      ],
      placeHolderText: "Please Select Country",
      selectedText: "",
    };
  }
  _selectedValue(index, name) {
    this.setState({ selectedText: name });
  }

  render() {
    return (
      <View style={Styles.container}>
        <RNPic
          dataSource={this.state.dataSource}
          dummyDataSource={this.state.dataSource}
          defaultValue={false}
          pickerTitle={"Sort by"}
          showSearchBar={true}
          showPickerTitle={true}
          pickerStyle={Styles.pickerStyle}
          selectedLabel={this.state.selectedText}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          dropDownImage={require("./res/ic_drop_down.png")}
          selectedValue={(index, name) => this._selectedValue(index, name)}
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
|  placeHolderTextStyle    |  -        |   object   |  Customize placeholder text style                     |   Optional         |
|  selectedLabelTextStyle  |  -        |   object   |  Customize selected label text style                  |   Optional         |
|  dropDownImageStyle      |  -        |   object   |  Customize drop down style                            |   Optional         |
|  dropDownImage           |  -        |   png/jpg  |  Add custom drop down image                           |   Optional         |
|  selectedValue           |  -        |   function |  callback function received value from list selection |   Required         | 









<p align="center">
  <h1 align="center">React Native Modal Picker</h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-firebase"><img src="https://img.shields.io/badge/npm-v0.2.4-blue?style=flat-square" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/react-native-firebase"><img src="https://img.shields.io/badge/downloads-100%2Fweek-brightgreen?style=flat-square" alt="NPM downloads"></a>
  <a href="/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat-square" alt="License"></a>
</p>  

<p align="center">
  <h2 align="center">This is a cross-platform picker with search bar for react native which supports iOS, Android and Web</h2>
</p>

<p align="left">
  <img  width="250" height="400" src="https://github.com/vishaldhanotiya/react-native-modal-picker/assets/34983293/58b8f0c4-4958-4a71-8cf4-c9834b7aaec2">
  
  <img  width="400" height="300" src="https://github.com/vishaldhanotiya/react-native-modal-picker/assets/34983293/92233391-c825-4773-a878-3fbeab17079d">
  
</p>

## Features

1. Easy to use.
2. Cross-platform compatibility Android, iOS and Web.
3. Hide and show search bar.
4. Dynamically change dropdown and search image.
5. Customize font size, font color and picker style.
6. Change animation(Slide, fade, none)

## Installation

#### Step 1 Install

> **npm i rn-modal-picker**

## Usage

```jsx
import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ModalPicker from "rn-modal-picker";

const dataSource = [
  {
    id: 1,
    name: "Afghanistan",
  },
  {
    id: 2,
    name: "Bahrain",
  },
  {
    id: 3,
    name: "Canada",
  },
  {
    id: 4,
    name: "Denmark",
  },
  {
    id: 5,
    name: "Egypt",
  },
  {
    id: 6,
    name: "France",
  },
  {
    id: 7,
    name: "Greece",
  },
  {
    id: 8,
    name: "Hong Kong",
  },
  {
    id: 9,
    name: "India",
  },
  {
    id: 10,
    name: "Japan",
  },
  {
    id: 11,
    name: "Kenya",
  },
  {
    id: 12,
    name: "Liberia",
  },
  {
    id: 13,
    name: "Malaysia",
  },
  {
    id: 14,
    name: "Nepal",
  },
  {
    id: 15,
    name: "Oman",
  },
  {
    id: 16,
    name: "Poland",
  },
  {
    id: 17,
    name: "Qatar",
  },

  {
    id: 18,
    name: "Reunion",
  },
  {
    id: 19,
    name: "Saint Helena",
  },
  {
    id: 20,
    name: "United States",
  },
  {
    id: 21,
    name: "Virgin Islands",
  },
  {
    id: 22,
    name: "Zimbabwe",
  },
];
const App = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>React Native Modal Picker</Text>

      <ModalPicker
        value={value}
        data={dataSource}
        animationType={"slide"}
        pickerContainerStyle={styles.pickerStyle}
        dropDownIcon={require("./res/ic_drop_down.png")}
        selectedTextStyle={styles.selectedTextStyle}
        listTextStyle={styles.listTextStyle}
        placeHolderText={"Please select country"}
        searchBarPlaceHolder={"Search......"}
        searchBarPlaceHolderColor={"grey"}
        placeHolderTextColor={"black"}
        searchBarStyle={styles.searchBarStyle}
        searchClearIcon={require("./res/ic_close.png")}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  titleText: {
    color: "#000",
    fontSize: 25,
    marginBottom: 25,
    fontWeight: "bold",
  },
  pickerStyle: {
    height: 50,
    width: "100%",
    marginVertical: 10,
    borderColor: "#303030",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1.5,
    fontSize: 16,
    color: "#000",
  },
  selectedTextStyle: {
    paddingLeft: 5,
    color: "#000",
    textAlign: "right",
  },
  listTextStyle: {
    color: "#000",
    textAlign: "right",
  },

  searchBarStyle: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    height: 45,
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: Platform.OS === "ios" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,1)",
    borderRadius: 10,
    elevation: 5,
  },
});

```

## Properties

| Prop                      | Default | Type                     | Description                                                    | Required/Optional |
| ------------------------- | ------- | ------------------------ | -------------------------------------------------------------- | ----------------- |
| data                      | []      | array                    | Array of objects with a unique id and name                     | Required          |
| hideSearchBar             | false   | bool                     | Show and hide search bar                                       | Optional          |
| value                     | -       | string                   | Set selected value otherwise its blank $ use for default value | Optional          |
| placeHolderText           | -       | string                   | Use to Show place holder hint text                             | Required          |
| pickerContainerStyle      | -       | object                   | Customize picker style                                         | Required          |
| listTextStyle             | -       | object                   | Customize list item text style                                 | Optional          |
| placeHolderTextColor      | -       | object                   | Customize placeholder text color                               | Optional          |
| itemSeparatorStyle        | -       | object                   | Style for Horizontal Line between item                         | Optional          |
| selectedTextStyle         | -       | object                   | Customize selected text style                                  | Optional          |
| searchBarStyle            | -       | object                   | Customize Search bar Container style                           | Optional          |
| onChange                  | -       | function                 | callback function received value from list selection           | Required          |
| animationType             | -       | string [slide,none,fade] | Change Modal Animation                                         | Optional          |
| disable                   | -       | bool                     | Disable picker if you show default value and no need to change | Optional          |
| searchBarPlaceHolder      | -       | string                   | Search bar place holder text                                   | Optional          |
| searchBarPlaceHolderColor | -       | color code               | Add color code                                                 | Optional          |
| dropDownIconStyle         | -       | object                   | Change drop down icon style color                              | Optional          |
| searchClearIcon           | -       | png/jpg                  | Change search bar text clear icon style                        | Optional          |
| searchIcon                | -       | png/jpg                  | Change search bar icon style color                             | Optional          |
| dropDownIcon              | -       | png/jpg                  | Change picker drop down icon                                   | Optional          |
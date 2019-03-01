# rn-modal-picker

This is a cross-platform picker with search bar for react native support both platform IOs and android



![alt text](https://github.com/vishaldhanotiya/react-native-modal-picker/blob/master/mobizen_20190226_192153_2.gif)


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
|  placeHolderTextStyle    |  -        |   object   |  Customize placeholder text style                     |   Optional         |
|  selectedLabelTextStyle  |  -        |   object   |  Customize selected label text style                  |   Optional         |
|  dropDownImageStyle      |  -        |   object   |  Customize drop down style                            |   Optional         |
|  dropDownImage           |  -        |   png/jpg  |  Add custom drop down image                           |   Optional         |
|  selectedValue           |  -        |   function |  callback function received value from list selection |   Required         | 









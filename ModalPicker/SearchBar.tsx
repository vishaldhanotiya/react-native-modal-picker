import {
  View,
  StyleSheet,
  TextInput,
  Image,
  I18nManager,
  Platform,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";

interface SearchBarProps {
  searchBarStyle?: ViewStyle;
  searchByNameCode?: any;
  searchBarPlaceHolderColor?: string;
  searchBarPlaceHolder?: string;
  searchIcon?: ImageSourcePropType;
  searchClearIcon?: ImageSourcePropType;
}

const SearchBar = (props: SearchBarProps) => {
  const [text, setText] = useState("");
  const searchIcon = props.searchIcon
    ? props.searchIcon
    : require("../res/ic_search.png");
  const clearIcon = props.searchClearIcon
    ? props.searchClearIcon
    : require("../res/ic_close.png");
  return (
    <View style={[styles.searchBarStyle, props.searchBarStyle]}>
      <Image
        resizeMode="center"
        style={styles.imageStyle}
        source={searchIcon}
      />
      <TextInput
        keyboardType="default"
        returnKeyType={"done"}
        blurOnSubmit={true}
        style={styles.textInputStyle}
        onChangeText={props.searchByNameCode}
        onChange={(event) => {
          const { text } = event.nativeEvent;
          setText(text.trim());
        }}
        placeholderTextColor={props.searchBarPlaceHolderColor ?? "#A9A9A9"}
        placeholder={props.searchBarPlaceHolder}
      />

      {text && (
        <Image
          resizeMode="contain"
          style={styles.imageStyle}
          source={clearIcon}
        />
      )}
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center",
  },
  textInputStyle: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    outlineStyle: "none",
  },
  searchBarStyle: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: Platform.OS === "ios" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,1)",
    borderRadius: 10,
    elevation: 5,
  },
  imageStyle: {
    width: 20,
    height: 20,
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
});

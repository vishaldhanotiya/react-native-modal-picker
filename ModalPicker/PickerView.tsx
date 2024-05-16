import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from "react-native";

interface PickerViewProps {
  pickerContainerStyle?: ViewStyle;
  selectedTextStyle?: TextStyle;
  dropDownIconStyle?: ImageStyle;
  dropDownIcon?: any;
  searchBarPlaceHolder?: string;
  placeHolderTextColor?: string;
  placeHolderText?: string;

  disable?: boolean;
  selectedValue?: Function;
  openModal?: any;
  value?: string;
}

const PickerView = (props: PickerViewProps) => {
  const downIcon = props.dropDownIcon
    ? props.dropDownIcon
    : require("../res/ic_drop_down.png");
  return (
    <View>
      <Pressable disabled={props.disable} onPress={() => props.openModal(true)}>
        <View style={[styles.selectedView, props.pickerContainerStyle]}>
          {props.value ? (
            <Text style={[styles.selectedText, props.selectedTextStyle]}>
              {props?.value}
            </Text>
          ) : (
            <Text
              style={{
                ...props.selectedTextStyle,
                color: props.placeHolderTextColor,
              }}
            >
              {props?.placeHolderText}
            </Text>
          )}

          <Image
            resizeMode="contain"
            source={downIcon}
            style={[styles.dropDownImage, props.dropDownIconStyle]}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default PickerView;

const styles = StyleSheet.create({
  selectedText: {
    color: "#000",
    textAlign: "right",
  },
  selectedView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropDownImage: {
    width: 25,
    height: 15,
  },
});

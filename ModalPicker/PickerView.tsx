//import libraries
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
  dropDownImageStyle?: ImageStyle;
  dropDownImage?: any;
  searchBarPlaceHolder?: string;

  disable?: boolean;
  selectedValue?: Function;
  openModal?: any;
  value?: any;
}
// create a component
const PickerView = (props: PickerViewProps) => {
  const downIcon = props.dropDownImage
    ? { uri: props.dropDownImage }
    : require("../res/ic_drop_down.png");
  return (
    <View>
      <Pressable disabled={props.disable} onPress={() => props.openModal(true)}>
        <View style={[styles.selectedView, props.pickerContainerStyle]}>
          <Text style={[styles.selectedText, props.selectedTextStyle]}>
            {props.value}
          </Text>

          <Image
            source={downIcon}
            style={[styles.dropDownImage, props.dropDownImageStyle]}
          />
        </View>
      </Pressable>
    </View>
  );
};

//make this component available to the app
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
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
});

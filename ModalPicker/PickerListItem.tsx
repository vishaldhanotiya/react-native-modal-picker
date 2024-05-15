import React from "react";
import { View, Text, StyleSheet, Pressable, I18nManager } from "react-native";

const PickerListItem = (props) => {
  return (
    <View>
      <Pressable onPress={() => props.handleItemOnClick(props.item)}>
        <View style={styles.listItemView}>
          <Text style={[styles.itemText, props.listTextStyle]}>
            {props.item.name}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PickerListItem;

const styles = StyleSheet.create({
  listItemView: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    color: "#000",
    paddingHorizontal: 10,
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
});

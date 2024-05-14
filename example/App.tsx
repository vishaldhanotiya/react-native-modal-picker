import React, {useState} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';
// import ModalPicker from './ModalPicker/ModalPicker';
import ModalPicker from 'rn-modal-picker';

const dataSource = [
  {
    id: 1,
    name: 'Afghanistan',
  },
  {
    id: 2,
    name: 'Bahrain',
  },
  {
    id: 3,
    name: 'Canada',
  },
  {
    id: 4,
    name: 'Denmark',
  },
  {
    id: 5,
    name: 'Egypt',
  },
  {
    id: 6,
    name: 'France',
  },
  {
    id: 7,
    name: 'Greece',
  },
  {
    id: 8,
    name: 'Hong Kong',
  },
  {
    id: 9,
    name: 'India',
  },
  {
    id: 10,
    name: 'Japan',
  },
  {
    id: 11,
    name: 'Kenya',
  },
  {
    id: 12,
    name: 'Liberia',
  },
  {
    id: 13,
    name: 'Malaysia',
  },
  {
    id: 14,
    name: 'Nepal',
  },
  {
    id: 15,
    name: 'Oman',
  },
  {
    id: 16,
    name: 'Poland',
  },
  {
    id: 17,
    name: 'Qatar',
  },

  {
    id: 18,
    name: 'Reunion',
  },
  {
    id: 19,
    name: 'Saint Helena',
  },
  {
    id: 20,
    name: 'United States',
  },
  {
    id: 21,
    name: 'Virgin Islands',
  },
  {
    id: 22,
    name: 'Zimbabwe',
  },
];
const App = () => {
  const [value, setValue] = useState<string>('+91');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>React Native Modal Picker</Text>

      <ModalPicker
        data={dataSource}
        animationType={'slide'}
        pickerContainerStyle={styles.pickerStyle}
        dropDownImage={require('./res/ic_drop_down.png')}
        selectedTextStyle={styles.selectedTextStyle}
        listTextStyle={styles.listTextStyle}
        searchBarPlaceHolder={'Search......'}
        // placeholderTextColor={'#0f0'}
        // hideSearchBar
        searchBarStyle={styles.searchBarStyle}
        // searchImage={require('./res/ic_search.png')}
        value={value}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleText: {
    color: '#000',
    fontSize: 25,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  pickerStyle: {
    height: 50,
    width: '90%',
    marginVertical: 10,
    borderColor: '#303030',
    alignItems: 'center',

    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1.5,
    fontSize: 16,
    color: '#000',
  },
  selectedTextStyle: {
    paddingLeft: 5,
    color: '#000',
    textAlign: 'right',
  },
  listTextStyle: {
    color: '#000',
    textAlign: 'right',
  },

  searchBarStyle: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    height: 45,
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: 'rgba(255,255,255,1)',
    shadowColor: Platform.OS === 'ios' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,1)',
    borderRadius: 10,
    elevation: 5,
  },
});

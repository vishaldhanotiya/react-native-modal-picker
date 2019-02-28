import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerDialog from './src/component/RNPickerDialog/RNPickerDialog'
import HomeScreen from './src/container/HomeScreen/HomeScreen';

export default class App extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      currencyData:[{
        id:1,
        name:'India'
      },{
        id:1,
        name:'USA'
      },{
        id:1,
        name:'Japan'
      },{
        id:1,
        name:'UAE'
      },{
        id:1,
        name:'AFRICA'
      },{
        id:1,
        name:'KANYA'
      },],
      currencyType:'Please Select Country',
      selectedFlag: false,
      defaultValue:true,
      select:'',
      dataSource: this.props.dataSource,
    };
  }
  _selectedValue(index) {
  this.setState({select:index});
  }

  render() {
    return (
      <View style={Styles.container}>
  <HomeScreen/>
     
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectLabelTextStyle: {
    color: '#000',
    textAlign:'left',
    flexDirection: 'row',
    flex: 1,
},
  placeHolderTextStyle: {
    color:"#000",
    flexDirection: 'row',
    flex: 1,
    backgroundColor:'#00ff',
    textAlign:'left',
},
dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: 'center',
},
pickerStyle: {
    // alignSelf: 'center',
    flexDirection: 'row',
    marginLeft:32,
    marginTop:34
},
});

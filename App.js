import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/container/HomeScreen/HomeScreen';

export default class App extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
     
    };
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

});

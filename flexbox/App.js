/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends Component{
  render(){
    return (
      <View style = {styles.container}>
        <View style = {styles.half1}>
        <Text style = {styles.text}>
          This is a half
        </Text>
        </View>
        <View style = {styles.half2}>
        <View style = {[styles.half21,styles.half2x]}>
          <Text style = {styles.text}>
            This is a quater
          </Text>
        </View>
        <View style = {[styles.half22,styles.half2x]}>
          <Text style = {styles.text}>
            This is another quater
          </Text>
        </View>
        </View>
      </View>
      
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  half1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  half2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  half2x:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  half21: {
    backgroundColor: 'black',
  },
  half22: {
    backgroundColor: 'green',
  },
  text : {
    color : 'white',
    fontSize : 20,
    textAlign : 'center',
    margin : 10,
  }
});

//export default App;

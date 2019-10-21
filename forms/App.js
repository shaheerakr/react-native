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
  TextInput,
  Button
} from 'react-native';

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      username : "",
      password : ""
    }
  }

  handleChangeUsername = (newText) =>{
    this.setState({
      username : newText
    })
  }
  handleChangePassword = (newText) =>{
    this.setState({
      password : newText
    })
  }
  handleSubmit = () =>{
    console.log(this._username._lastNativeText)
    this.setState({
      username : "",
      password : ""
    })
    this._password.clear()
    this._username.clear()
  }
  
  render(){
    return (
      <View style = {styles.container}>
        <View>
          <Text> Username: </Text>
          <TextInput
            defaultValue = {this.state.username}
            onChangeText = {this.handleChangeUsername}
            ref = {input => this._username = input}
          />
        </View>
        <View>
          <Text> Password: </Text>
          <TextInput
            defaultValue = {this.state.password}
            onChangeText = {this.handleChangePassword}
            ref = {input => this._password = input}
          />
        </View>
        <Button
          onPress = {this.handleSubmit}
          title = "Sign in"
        />
      </View>
    );
 }
};

const styles = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent: 'center',
  },
  
});

//export default App;

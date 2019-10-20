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
    this.setState({
      username : "",
      password : ""
    })
    let textInput = this.refs["textInput"]
    textInput.clear()
  }
  
  render(){
    return (
      <View style = {styles.container}>
        <View>
          <Text> Username: </Text>
          <TextInput
            defaultValue = {this.state.username}
            onChangeText = {this.handleChangeUsername}
            ref = "textInput"
          />
        </View>
        <View>
          <Text> Password: </Text>
          <TextInput
            defaultValue = {this.state.password}
            onChangeText = {this.handleChangePassword}
            ref = "textInput"
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

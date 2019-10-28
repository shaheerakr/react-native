import React,{Component} from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Button 
  } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from './app/components/home/index'


const RootStack = createStackNavigator({
  home : Home,
})

export default createAppContainer(RootStack)
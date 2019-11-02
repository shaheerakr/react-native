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
import Dashboard from './app/components/Dashboard'


const RootStack = createStackNavigator({
  home : Home,
  dashboard : Dashboard, 
})

export default createAppContainer(RootStack)
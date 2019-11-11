import React,{Component} from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Button 
  } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import Login from './app/components/home/index'
import Dashboard from './app/components/Dashboard'


const RootStack = createStackNavigator({
  login : Login,
  dashboard : Dashboard, 
})

export default createAppContainer(RootStack)
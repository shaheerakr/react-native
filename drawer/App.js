import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import Home from '@components/Home'
import Dashboard from '@components/Dashboard'
import SideBar from '@components/SideBar' 

import React, { Component } from 'react'
import { Text, View } from 'react-native'

class App extends Component {
  render() {
    return (
      <AppStack />
    )
  }
}


const AppStack =createAppContainer(createDrawerNavigator({
  home : {screen : Home},
  dashboard : {screen : Dashboard}
}, {
  contentComponent : SideBar
}
))

export default App
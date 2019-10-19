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
  Image
} from 'react-native';


export default class App extends Component {  
  constructor(){
    super()
    this.state ={}
    this.state.customStyles = {
      color : 'red'
    }
    this.state.imageInfo = {
      uri : "https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p320x320/58462296_2431269236883056_6958992074980982784_n.jpg?_nc_cat=103&efg=eyJpIjoiYiJ9&_nc_oc=AQlXU_nBw-qaxw5YQ99IBNsaW1j2Z97jSg0-kXZ3CNOL8T6fKuGs5N4P8ZpT6GGCZZo&_nc_ht=scontent.fkhi17-1.fna&oh=25babea41f3895b3013985afa8db419c&oe=5E1881C7",
      name : "Shahster"
    }
    setInterval(()=> {
        (this.state.customStyles.color == 'red')?
        ( this.setState({
            customStyles :{
              color : 'green'
            }
          })
        ): (
          this.setState({
            customStyles :{
              color : 'red'
            }
          })
        )
        if(this.state.imageInfo.name ==='Shahster'){
          this.setState({
            imageInfo : {
              uri : "https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p320x320/52934111_2123313157722665_8028464478150459392_n.jpg?_nc_cat=111&efg=eyJpIjoiYiJ9&_nc_oc=AQmNuUUXABqheutNF2KSBDPlWGpcHmEoWayQEYVNTDfF_tWhHkb9R2Av_ssBMobtZ24&_nc_ht=scontent.fkhi17-1.fna&oh=aa6120f2d9a426250fcefc212dcae717&oe=5E24F88E",
              name : "Shakar Qandee"
            }
          })
        }
        else {
          this.setState({
            imageInfo : {
              uri : "https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p320x320/58462296_2431269236883056_6958992074980982784_n.jpg?_nc_cat=103&efg=eyJpIjoiYiJ9&_nc_oc=AQlXU_nBw-qaxw5YQ99IBNsaW1j2Z97jSg0-kXZ3CNOL8T6fKuGs5N4P8ZpT6GGCZZo&_nc_ht=scontent.fkhi17-1.fna&oh=25babea41f3895b3013985afa8db419c&oe=5E1881C7",
              name : "Shahster"
            }
          })
        }
    },2000) 
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome,this.state.customStyles]}>
          Hello, {this.state.imageInfo.name}!
        </Text>
        <Image source ={this.state.imageInfo} style = {styles.img} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  img :{
    //flex: 1,
    width: 300,
    height: 300,
  },
  welcome :{
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    color: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCF7',
  }
});

//export default App;

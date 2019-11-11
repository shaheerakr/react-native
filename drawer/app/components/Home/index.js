import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class home extends Component {
    render() {
        return (
            <View>
                <Image 
                    style ={{width : 300, height : 300 }}
                    source = {{uri : 'https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p320x320/58462296_2431269236883056_6958992074980982784_n.jpg?_nc_cat=103&efg=eyJpIjoiYiJ9&_nc_oc=AQlhxFDlLhf2SjoPAhvHZZRDVC1oKNvTqGhuyb1OxB75AnbvZEsSfHdlghPTKRKt8VQ&_nc_ht=scontent.fkhi17-1.fna&oh=2439b5acd01f30920600e2b1a44bb89a&oe=5E1881C7'}}
                    />
                <Text> home </Text>
            </View>
        )
    }
}

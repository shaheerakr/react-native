import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Dashboard extends Component {
    static navigationOptions = {
        header : null
    }
    render() {
        return (
            <View>
                <Text> Dashboard </Text>
            </View>
        )
    }
}

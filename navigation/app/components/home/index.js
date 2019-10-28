import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    Button 
} from 'react-native'
import styles from './styles'

class Home extends Component {
    render() {
        const {heading, input, parent} = styles
        return (
            <View style = {parent}>
                <Text style = {heading}> Login to application </Text>
                <TextInput style ={input} />
                <TextInput style = {input} secureTextEntry={true} />
                <Button title = 'login' />
            </View>
        )
    }
}

export default Home

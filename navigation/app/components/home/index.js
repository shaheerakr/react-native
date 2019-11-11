import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    Button 
} from 'react-native'
import styles from './styles'

class Login extends Component {
    static navigationOptions = {
        header : null
    }
    state = {
        username : '',
        password : ''
    }    
    checkLogin = () =>{
        const {username,password} = this.state
        //console.log(username,password)
        /*
        fetch('http://localhost:5000/hello')
        .then((response=> console.log(response)))
        fetch('http://localhost:5000/',JSON.stringify(username))
        .then((response)=>{
            console.log(response)
        })
        */
        if(username.toLowerCase() === "admin" && password ==="admin"){
            this.props.navigation.navigate('dashboard')
        }
        else{
            alert("Wrong username or passowrd")
        }
    }
    render() {
        const {heading, input, parent,text} = styles
        return (
            <View style = {parent}>
                <Text style = {heading}> Login to application </Text>
                <Text style ={text}>Username</Text>
                <TextInput style ={input} onChangeText={text =>this.setState({username: text})} />
                <Text style ={text}>Password</Text>
                <TextInput style = {input} secureTextEntry={true} onChangeText={text =>this.setState({password: text})} />
                <Button title = 'login' onPress ={ () => this.checkLogin() } />
            </View>
        )
    }
}

export default Login

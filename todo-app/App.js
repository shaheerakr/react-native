import React,{Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      todos : [
        {id: 0, todo: "get bread"},
        {id: 1, todo: "pray"},
      ]
    }
  }
  handleChangeTodo = (todo) =>{
    this.setState({
      todo: todo
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Add Todo: 
        </Text>
        <TextInput
          style={styles.textBox}
          onChangeText={text => this.setState({ text })}
          defaultValue={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  textBox:{
    height: 40,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1,
  },
  text:{
    fontSize: 15,
    margin: 10,
    color: "black",
  },
});

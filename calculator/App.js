import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
    } from 'react-native';

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      resultText : '',
      result : ''
    }
    this.oprends = ['del','/','*','-','+']
  }

  calculateResult = () =>{
    //console.log(this.state.resultText,eval(this.state.resultText))
    const result = eval(this.state.resultText)
    this.setState({
      resultText : '',
      result : result
    })
  }

  buttonPressed = (text) =>{
    if (text === '=')
      return this.calculateResult()
    if( this.state.resultText+text === '0')
      return
    this.setState({
      resultText : this.state.resultText+text
    })
    //console.log(text)
  }

  oprationPressed = (opration) =>{
    switch (opration) {
      case 'del':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        //console.log(text)
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if(this.oprends.indexOf(this.state.resultText.split('').pop()) > 0) 
          return
        if (this.state.resultText === '') 
          return
        this.setState({
          resultText : this.state.resultText + opration
        })
        break
      default:
        break;
    }
  }

  render(){
    let values = [[7,8,9],[4,5,6],[1,2,3],['.',0,'=']]
    let rows = []
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity 
                  style = {styles.btn} 
                  key = {values[i][j].toString()}
                  onPress = {() => this.buttonPressed(values[i][j])}
                  >
          <Text style = {styles.btnText} >{values[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style = {styles.row} key = {i}>{row}</View>)
    }
    let ops = []
    this.oprends.map((opr,index) =>{
      return(
        //console.log(count)
        ops.push(<TouchableOpacity 
                  style = {styles.btn} 
                  key = {index}
                  onPress = {() => this.oprationPressed(opr)}
                  >
          <Text style = {styles.btnText} >{opr}</Text>
        </TouchableOpacity>)
      )
    })
    return (
      <View style={styles.container}>
        <View style = {styles.result}>
          <Text style = {styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style = {styles.calculation}>
          <Text style = {styles.calculationText}>{this.state.result}</Text>
        </View>
        <View style = {styles.buttons}>
          <View style = {styles.numbers}>
            {rows}
          </View>
          <View style = {styles.oprations}>
            {ops}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems :'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems :'flex-end',
  },
  calculationText: {
    fontSize: 20,
    color: 'white',
    margin: 10,
  },
  resultText: {
    fontSize: 40,
    color: 'white',
    margin: 10,
  },
  buttons: {
    flexGrow: 6,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'orange',
  },
  oprations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  row: {
    flexDirection: 'row',
    flex : 1,
    borderWidth: 0.5,
    borderColor: 'purple',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex : 1,
    borderWidth: 0.5,
    borderColor: 'purple'
  },
  btnText: {
    fontSize: 30,
  }
});

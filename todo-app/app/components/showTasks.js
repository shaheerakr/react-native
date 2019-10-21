import React from 'react'

import {
    Text,
    View,
    StyleSheet,
} from 'react-native'

const ShowTasks = (todos) =>{
    const todoList = todos.length? (
        todos.map(todo =>{
            return(
                <Text></Text>            
            )
        })
    ) :(
        <Text>you have nothing todo</Text>
    )
    return(
        <View>
            {todoList}
        </View>
    )
}

export default ShowTasks
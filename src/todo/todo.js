import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default class Todo extends React.Component {

  ComponentWillMount() {
      console.log('ComponentWillMount');
  }
  constructor() {
      super();
      this.state = {
          todos: []
      }
  }
  render() {
    return (
      <View style={styleTodo.todoMain}>
        <TextInput
          style={styleTodo.textInput}
          placeholder="My Todo"
          onChangeText={
              this.state.todos.map((value, index) => {
                  return <Text> {value} </Text>
              })
          }
        />
        <Button
            onPress={addTodo.bind(this)}
            color="#333"
            title="Add"
        />
      </View>
    );
  }
}


todoApp = () => {
    console.log("On Press");
}
onChangeInput = (text) => {
    // console.log(text)
    let todo = this.state.todos
    todo.push(text)
    this.setState({
        value: text
    });
}

addTodo = () => {
    let todo = this.state.todos
}

const styleTodo = StyleSheet.create({
  todoMain: {
     flex: 1,
     alignItems: 'center',
  },
  textInput: {
     height: 40,
     paddingLeft: 3,
     width: '80%',
     alignItems: 'center',
     marginTop: 30,
     fontSize: 15,
     marginBottom: 10,
  },
  todoAdd: {
    width: 80,
  },
});

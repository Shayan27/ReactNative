import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity} from 'react-native';
import { capitalize } from '../../utils/helper';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class Todo extends React.Component {
  constructor() {
      super();
      this.state = {
          todos: [],
          value: '',
      }
  }
  
  componentDidMount() {
    Expo.Font.loadAsync({
        'FontAwesome': require('../../node_modules/react-native-fontawesome/fontawesome-webfont.ttf'),
    });
  }
  
  componentWillMount(){
      console.log('componentWillMount')
  }

  onChangeInput = (text) => {
    console.log(text)
    this.setState({
      value: text
    })
  }

    clearText(fieldName) {
        this.refs[fieldName].setNativeProps({text: ''});
    }
    
    addTodo = () => {
    let todo = this.state.todos;
    todo.push(this.state.value)
    this.setState({
        todos: todo
    })    
    this.clearText('textfield')
    }
    


  render() {
    return (
      <ScrollView style={styleTodo.todoMain} contentContainerStyle={styleTodo.todoContainer}>
        <TextInput
          style={styleTodo.textInput}
          placeholder="My Todo"
          ref="textfield"
          onChangeText={this.onChangeInput.bind(this)}
        />
        <TouchableOpacity style={styleTodo.addBtn} onPress={this.addTodo.bind(this)}>
            <Text style={styleTodo.addBtnText}>
              Add
            </Text>
          </TouchableOpacity>
        {
            this.state.todos.map((value, index, i) => {
                return <Text style={styleTodo.item} key={index}>
                {index + 1} -- {capitalize
                (value)}
                </Text>
            })
        }
      </ScrollView>
    );
  }
}



const styleTodo = StyleSheet.create({
  todoMain: {
    flex: 1,
  },
  todoContainer: {
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
  addBtn: {
    backgroundColor: '#333',
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  addBtnText: {
    fontSize: 14,
    color: '#fff',
  },
  item: {
      borderBottomWidth: 1,
      borderBottomColor: '#365899',
      paddingTop: 5,
      marginBottom: 5,
      paddingBottom: 1,
  },
});

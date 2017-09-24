import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/header/header';
import Todo from './src/todo/todo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Todos check />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

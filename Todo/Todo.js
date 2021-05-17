import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AddTask from './AddTask'
import ViewTasks from './ViewTasks'

export default class Todo extends React.Component {

  constructor(){
    super()

    this.state={
      tasks: []
    }
  }

  addTask=(task)=>{
    this.state.tasks.push(task)
    console.log(this.state.tasks);
    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.container}>
        <ViewTasks tasks={this.state.tasks}/>
        <AddTask func={this.addTask}/>
        <StatusBar hidden />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    color: 'white',
    justifyContent:"center",
    alignItems:'center'
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super()
        this.state = {
            text:""
        }
    }
    render() {
        return (
            <SafeAreaView>
                <TextInput style={styles.input} onChangeText={text => {
                    this.setState({text})
                    console.log(this.state.text);
                    }}/>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.func(this.state.text)} >
                    <Text>Add</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 200
    },
    button: {
        backgroundColor: "yellow",
        width: 50,
        
    }
});

import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default class Todo extends React.Component {

    constructor() {
        super()

        this.state = {
            email: "",
            password: "",
        }
    }

    login = () => {
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(result => alert(result.token ? "Log in successful!" : "Login Failed"))
            .catch(err => err)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={email => {
                    this.setState({ email })
                    console.log(this.state.email);
                }} />
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={password => {
                    this.setState({ password })
                    console.log(this.state.password);
                }} />
                <TouchableOpacity style={styles.button} onPress={this.login} >
                    <Text>Login</Text>
                </TouchableOpacity>
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
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        backgroundColor: "yellow",
        width: 50,

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 200
    },
});

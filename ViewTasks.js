import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super()
        this.state = {
            tasks: props.tasks,
            done: false

        }
    }

    pressed = (i) => {
        console.log(i.target);
    }

    render() {
        return (
            <View>
                {this.state.tasks.map((element, i) => <Text key={i} style={styles.text}>{element}
                        <TouchableOpacity style={styles.button} onPress={() => console.log(this.state.tasks[i])}>
                            <Text>Done</Text>
                        </TouchableOpacity>
                    </Text>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        borderRadius: 5
    },
    text: {

    }
});

import React, { Component } from 'React';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component{
    render() {
        return (
            <View>
                <Header headerText = "Authentication" />
                <Text>Hello, World!</Text>
            </View>
        );
    }
}

export default App;
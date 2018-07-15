import React, { Component } from 'React';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDYfBVxI_1Z_EPUNCMVdM6NuBtpO0KJxXU',
            authDomain: 'authentication-82759.firebaseapp.com',
            databaseURL: 'https://authentication-82759.firebaseio.com',
            projectId: 'authentication-82759',
            storageBucket: 'authentication-82759.appspot.com',
            messagingSenderId: '722491691381'
        });
    }
    render() {
        return (
            <View>
                <Header headerText = "Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount(){
        axios.get('http://localhost:3000/albums')
            .then(response => this.setState({ albums: response.data }));
    }
    render() {
        console.log(this.state);
        return(
            <View>
                <Text>Album List!!!!</Text>
            </View>
        );
    }
}

export default AlbumList;
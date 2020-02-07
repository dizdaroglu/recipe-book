import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Router from './routes'

export default class App extends Component {


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Router />
            </View>
        );
    }
}

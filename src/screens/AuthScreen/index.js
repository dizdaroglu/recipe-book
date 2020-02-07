import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';
import LoginPanel from './loginPanel';

export default class AuthScreen extends Component {
    state = {
        logoAnimation: false
    }

    showLogin = () => {
        this.setState({
            logoAnimation: true
        })
    }
    goNext = () => {
        this.props.navigation.navigate('App')
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#DA6C6A' }}>
                <View style={styles.container}>
                    <Logo
                        showLogin={this.showLogin}
                    />
                    <LoginPanel
                        show={this.state.logoAnimation}
                        goNext={this.goNext}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})
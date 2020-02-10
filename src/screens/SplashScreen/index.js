import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Logo from '../../assets/images/chef.png';

export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Auth')
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={Logo}
                    style={styles.logoStyle}
                    resizeMode={"contain"}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>Recipe Book</Text>
                </View>
                <ActivityIndicator
                    color="#C76161"
                    size={25}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DA6C6A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        width: 130,
        height: 130
    },
    titleContainer: {
        marginVertical: 20
    },
    titleStyle: {
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'Roboto-Black'
    }
})
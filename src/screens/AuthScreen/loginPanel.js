import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';
import LoginForm from './loginForm';

import logo from '../../assets/images/chef.png';

export default class LoginPanel extends Component {

    state = {
        backImage: new Animated.Value(0),
        inputForm: new Animated.Value(0),
        animFinished: false
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.show && !this.state.animFinished) {
            Animated.parallel([
                Animated.timing(this.state.backImage, {
                    toValue: 1,
                    duration: 1000
                }),
                Animated.timing(this.state.inputForm, {
                    toValue: 1,
                    duration: 1500
                })
            ]).start(
                this.setState({ animFinished: true })
            )
        }
    }
    render() {
        return (
            <View>
                <Animated.View style={{ opacity: this.state.backImage }}>
                    <Image
                        source={logo}
                        resizeMode={"contain"}
                        style={styles.imageStyles}
                    />
                </Animated.View>
                <Animated.View style={{
                    opacity: this.state.inputForm,
                    top: this.state.inputForm.interpolate({
                        inputRange: [0, 1],
                        outputRange: [100, 30]
                    })
                }}>
                    <LoginForm goNext={this.props.goNext} />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyles: {
        width: 270,
        height: 150
    }
})
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';

export default class Logo extends Component {
    state = {
        recipeAnim: new Animated.Value(0),
        bookAnim: new Animated.Value(0),

    }
    componentWillMount() {
        Animated.sequence([
            Animated.timing(this.state.recipeAnim, {
                toValue: 1,
                duration: 1000,
                easing: Easing.easeOutCubic
            }),
            Animated.timing(this.state.bookAnim, {
                toValue: 1,
                duration: 500,
                easing: Easing.easeOutCubic
            })
        ]).start(() => {
            this.props.showLogin()
        })
    }

    render() {
        return (
            <View>
                <View style={styles.logoStyles}>
                    <Animated.View style={{
                        opacity: this.state.recipeAnim,
                        top: this.state.recipeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 0]
                        })
                    }}>
                        <Text style={styles.recipe}>Recipe</Text>
                    </Animated.View>
                    <Animated.View style={{ opacity: this.state.bookAnim }}>
                        <Text style={styles.book}>Book</Text>
                    </Animated.View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoStyles: {
        marginTop: 50,
        flex: 1,
        flexDirection: 'row',
        maxHeight: 100
    },
    recipe: {
        fontSize: 40,
        fontFamily: 'RobotoCondensed-Regular',
        color: '#ffffff'
    },
    book: {
        fontSize: 40,
        fontFamily: 'RobotoCondensed-Regular',
        color: '#C76161'
    }
})
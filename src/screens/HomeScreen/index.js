import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HorizontalScroll from './horizontal_scrol_icon';

export default class HomeScreen extends Component {

    state = {
        categories: ['All', 'Salad', 'Soup', 'Desert', 'Chicken'],
        categorySelected: 'All',
        recipe: [],
        loading: true
    }
    updateCategoryHandler = (value) => {
        this.setState({
            loading: true,
            recipe: [],
            categorySelected: value
        })

    }
    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <HorizontalScroll
                        categories={this.state.categories}
                        categorySelected={this.state.categorySelected}
                        updateCategoryHandler={this.updateCategoryHandler}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    }
})
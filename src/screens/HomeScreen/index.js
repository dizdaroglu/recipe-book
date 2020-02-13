import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import HorizontalScroll from './horizontal_scrol_icon';

const data = [
    { key: "salad" },
    { key: "soup" },
    { key: "desert1" },
    { key: "desert2" },
    { key: "desert3" },
    { key: "desert4" },

]
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
    renderItem = ({ item, index }) => {

        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText}>{item.key}</Text>
                </View>
            </View>
        )
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
                    <View style={styles.recipeContainer}>
                        <FlatList
                            data={data}
                            renderItem={this.renderItem}
                            numColumns={2}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    recipeContainer: {
        flex: 1,
        padding: 20
    },
    itemContainer: {
        flex: 1,
        margin: 5
    },
    itemTextContainer: {
        borderWidth: 1,
        borderColor: '#C76361',
        padding: 25,
        alignItems: 'center',
        elevation: 1
    },
    itemText: {
        fontFamily: 'Roboto-Black',
        fontSize: 13,
        color: '#C76361'
    }
})
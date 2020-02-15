import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import HorizontalScroll from './horizontal_scrol_icon';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCook } from '../../store/actions/cook_actions'

const data = [
    { key: "salad" },
    { key: "soup" },
    { key: "desert1" },
    { key: "desert2" },
    { key: "desert3" },
    { key: "desert4" },

]
class HomeScreen extends Component {

    state = {
        categories: ['All', 'Salad', 'Soup', 'Desert', 'Chicken'],
        categorySelected: 'All',
        recipe: [],
        loading: true
    }
    updateCategoryHandler = (value) => {
        console.log("Value: ", value)
        this.setState({
            loading: true,
            recipe: [],
            categorySelected: value
        })
        this.props.getCook(value).then(() => {
            this.setState({
                loading: false,
                recipe: this.props.Cook.list
            })
        })
    }
    renderItem = ({ item, index }) => {

        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText}>{item.title}</Text>
                </View>
            </View>
        )
    }

    componentDidMount() {
        this.props.getCook("All").then(() => {

            this.setState({
                loading: false,
                recipe: this.props.Cook.list
            })
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
                    <View style={styles.recipeContainer}>
                        <FlatList
                            data={this.state.recipe}
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
const mapStateToProps = state => {
    return {
        Cook: state.Cook
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getCook }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
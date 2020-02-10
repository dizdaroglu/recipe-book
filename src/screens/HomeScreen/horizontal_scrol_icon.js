import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Icon1 from '../../assets/images/salad.png'
import Icon2 from '../../assets/images/soup.png'
import Icon3 from '../../assets/images/pie.png'
import Icon4 from '../../assets/images/chicken.png'

const categoriesIcons = (item) => {
    let name = '';

    switch (item) {
        case 'All':
            name = Icon1
            break;
        case 'Salad':
            name = Icon1
            break;
        case 'Soup':
            name = Icon2
            break;
        case 'Desert':
            name = Icon3
            break;
        case 'Chicken':
            name = Icon4
            break;
        default:
            name = '';
    }

    return name
}

export default class HorizontalScroll extends Component {

    generateIcon = (categories) => (
        categories ?
            categories.map(item => {
                let url = categoriesIcons(item);
                return (
                    <View style={{ marginRight: 15 }} key={item}>
                        <TouchableOpacity
                            onPress={() => this.props.updateCategoryHandler(item)}
                            style={[styles.itemIcon, { backgroundColor: this.props.categorySelected !== item ? '#c1c1c1' : '#DA6C6A' }]}
                        >
                            <Image
                                source={url}
                                style={{ width: 25, height: 25, marginRight: 10, marginLeft: 3 }}
                                resizeMode={"contain"}
                            />
                            <Text style={{ color: '#fff', marginRight: 5 }}> {item}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            )
            : null
    )

    render() {
        return (
            <ScrollView
                horizontal={true}
                decelerationRate={0}
                snapToInterval={200}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.scrollContainer}>
                    {this.generateIcon(this.props.categories)}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        width: '100%'
    },
    itemIcon: {
        borderRadius: 100,
        flexDirection: 'row',
        padding: 7,
        alignItems: 'center'
    }
})
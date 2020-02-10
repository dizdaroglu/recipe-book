import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Icon from '../../assets/images/chef2.png'

const AddIcon = (props) => (
    <Image
        source={Icon}
        style={[styles.iconStyle]}
        resizeMode={"contain"}
    />
);

const styles = StyleSheet.create({
    iconStyle: {
        width: 25,
        height: 25,
    }
})

export default AddIcon;

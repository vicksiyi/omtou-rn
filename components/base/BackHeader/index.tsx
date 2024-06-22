import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

type propsType = {}

const BackHeader = (props: propsType) => {
    const { } = props;
    const navigation = useNavigation();
    const backIcon = require("../../../Assets/Images/Icon/back.png");
    const backClick = () => {
        navigation.goBack();
    }
    return (
        <TouchableOpacity onPress={backClick} style={{ marginLeft: 24 }}>
            <Image
                source={backIcon}
                style={{
                    width: 35,
                    height: 35
                }}
            />
        </TouchableOpacity>
    );
};

export default BackHeader;
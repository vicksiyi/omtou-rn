import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

type propsType = {}

const BackHeader = (props: propsType) => {
    const { } = props;
    const navigation = useNavigation();
    const canGoBack = navigation.canGoBack();
    const backIcon = require("../../../Assets/Images/Icon/back.png");
    const backClick = () => {
        canGoBack && navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={backClick}>
                <Image
                    source={backIcon}
                    style={{
                        width: 35,
                        height: 35,
                        display: !true ? 'none' : 'flex'
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};

// 样式
const styles = StyleSheet.create({
    container: {
        height: 99,
        width: "100%",
        marginTop: 24,
        paddingHorizontal: 24,
        paddingVertical: 10
    }
});

export default BackHeader;
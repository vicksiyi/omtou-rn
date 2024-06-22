import React from 'react';
import { StyleSheet, View } from 'react-native';
import BackHeader from '../../../Components/Base/BackHeader';

type propsType = {}

const Login = (props: propsType) => {
    const { } = props;
    const backgroundStyle = {
        backgroundColor: "#FFFFFF",
        flex: 1
    };
    return (
        <View style={backgroundStyle}>
            <BackHeader></BackHeader>
            <View style={styles.container}>
            </View>
        </View>
    );
};

// 样式
const styles = StyleSheet.create({
    container: {}
});

export default Login;
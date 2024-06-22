import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

type propsType = {
    content: string,
    style?: TextStyle
}

const CustomH1 = (props: propsType) => {
    const { content, style = {} } = props;
    return (<Text style={[styles.text, style]}>{content}</Text>);
};

// 样式
const styles = StyleSheet.create({
    text: {
        fontSize: 36,
        fontFamily: 'PingFang SC',
        fontWeight: 600
    }
});

export default CustomH1;
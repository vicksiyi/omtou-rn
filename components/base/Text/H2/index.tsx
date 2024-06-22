import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { Style } from '../../../../Common/styles';

type propsType = {
    content: string,
    style?: TextStyle
}

const CustomH2 = (props: propsType) => {
    const { content, style = {} } = props;
    return (<Text style={[styles.text, style]}>{content}</Text>);
};

// 样式
const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontFamily: 'PingFang SC',
        fontWeight: 600,
        letterSpacing: -0.48,
        color: Style.BlackDark
    }
});

export default CustomH2;
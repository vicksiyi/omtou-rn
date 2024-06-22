import React from 'react';
import { Text, StyleSheet } from 'react-native';

type propsType = {
    content: string
}

const CustomSmall = (props: propsType) => {
    const { content } = props;
    return (<Text style={styles.text}>{content}</Text>);
};

// 样式
const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        fontFamily: 'PingFang SC',
        fontWeight: 600
    }
});

export default CustomSmall;
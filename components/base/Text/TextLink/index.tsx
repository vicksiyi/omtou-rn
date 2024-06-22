import React from 'react';
import { Text, StyleSheet, TextStyle, GestureResponderEvent, Touchable } from 'react-native';
import { Style } from '../../../../Common/styles';
import { noFunc } from '../../../../Common/utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

type propsType = {
    content: string,
    style?: TextStyle,
    onClick?: () => void,
}

const TextLink = (props: propsType) => {
    const { content, style = {}, onClick = noFunc } = props;
    return (<TouchableOpacity
        onPress={onClick}
        activeOpacity={0.6}
    >
        <Text style={[styles.text, style]}>{content}</Text>
    </TouchableOpacity>);
};

// 样式
const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontFamily: 'PingFang SC',
        fontWeight: 600,
        letterSpacing: -0.48,
        color: "#A3A3A3",
        textDecorationLine: 'underline'
    }
});

export default TextLink;
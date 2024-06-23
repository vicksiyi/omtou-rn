import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

type propsType = {
    onBack?: () => void,
    style?: StyleProp<ViewStyle>,
    size?: number
}

const BackHeader = (props: propsType) => {
    const navigation = useNavigation();
    const backClick = () => {
        navigation.goBack();
    }
    const { onBack = backClick, style = {}, size = 35 } = props;
    const backIcon = require("../../../Assets/Images/Icon/back.png");
    return (
        <TouchableOpacity onPress={onBack} style={[
            { marginLeft: 24 },
            style
        ]}>
            <Image
                source={backIcon}
                style={{
                    width: size,
                    height: size
                }}
            />
        </TouchableOpacity>
    );
};

export default BackHeader;
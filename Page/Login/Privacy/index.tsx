import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackHeader from '../../../Components/Base/BackHeader';
import { Style } from '../../../Common/styles';

type propsType = {}

const Privacy = (props: propsType) => {
    const { } = props;
    const backgroundStyle = {
        backgroundColor: Style.WhiteLight,
        flex: 1
    };
    return (
        <View style={backgroundStyle}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: 24
                }}>隱私權政策內容</Text>
            </View>
        </View>
    );
};

// 样式
const styles = StyleSheet.create({});

export default Privacy;
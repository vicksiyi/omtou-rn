import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import H2 from '../../../Components/Base/Text/H2';
import Small from '../../../Components/Base/Text/Small';
import { Style } from '../../../Common/styles';

type propsType = {}

const TopBox = (props: propsType) => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { } = props;
    return (
        <View style={styles.container}>
            <View style={{ padding: 10, width: 327, height: 122 }}>
                <H2 content="账户注册成功！" style={{ textAlign: 'center' }}></H2>
                <H2 content="OMTOU会在这里为您提供" style={{ textAlign: 'center' }}></H2>
                <H2 content="以城市声音为灵感的独特体验" style={{ textAlign: 'center' }}></H2>
            </View>
            <View style={{ width: 298, height: 60, padding: 10 }}>
                <Small content="为了更快的帮助您进入这场沉浸探索，我们想了解关于以下信息 :)" style={{
                    textAlign: 'center',
                    fontSize: 14,
                    color: Style.GrayMedium
                }}></Small>
            </View>
        </View>
    );
};

// 样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9
    }
});

export default TopBox;
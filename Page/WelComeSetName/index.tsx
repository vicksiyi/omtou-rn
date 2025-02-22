import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Style } from '../../Common/styles';
import H2 from '../../Components/Base/Text/H2';
import Small from '../../Components/Base/Text/Small';

function WelComeSetName(): React.JSX.Element {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [inputVal, setInputVal] = useState('');
    const [isError, setIsError] = useState(false);
    const backgroundStyle = {
        backgroundColor: Style.GrayLightMedium,
        flex: 1
    };
    return (
        <View style={backgroundStyle}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <View style={{
                        height: 54,
                        padding: 10
                    }}>
                        <H2 content="感谢您的回答"></H2>
                    </View>
                    <View style={{
                        height: 37,
                        padding: 10
                    }}>
                        <H2 content="接下来请设置一个专属昵称吧" style={{
                            fontSize: 12,
                            fontWeight: 500
                        }}></H2>
                    </View>
                </View>
                <View style={{ marginTop: 47, gap: 16 }}>
                    <TextInput
                        style={[
                            styles.input,
                            isError ? { borderColor: Style.RedLight } : {}
                        ]}
                        placeholder='你的名字'
                        onSubmitEditing={() => {
                            if (!inputVal) setIsError(true);
                            else {
                                setIsError(false);
                                navigation.navigate('WelComeSetAvatar');
                            }
                        }}
                        placeholderTextColor={Style.GrayMedium}
                        onChangeText={(val) => setInputVal(val)}
                    ></TextInput>
                    <Small content="这个用户名已经被使用过了，请换一个:)" style={{
                        textAlign: 'center',
                        color: Style.RedLight,
                        display: isError ? 'flex' : 'none'
                    }}></Small>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 86,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        height: 128,
        gap: 9
    },
    input: {
        width: 345,
        borderColor: Style.GrayLight,
        borderWidth: 1,
        height: 45,
        borderRadius: 15,
        paddingHorizontal: 24,
        paddingVertical: 10
    }
});

export default WelComeSetName;
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BackHeader from '../../../Components/Base/BackHeader';
import { Style } from '../../../Common/styles';
import H2 from '../../../Components/Base/Text/H2';
import Button, { BtnIcon } from '../../../Components/Base/Button';
import TextLink from '../../../Components/Base/Text/TextLink';
import { useNavigation } from '@react-navigation/native';

type propsType = {}

const Login = (props: propsType) => {
    const navigation = useNavigation();
    const { } = props;
    const backgroundStyle = {
        backgroundColor: Style.GrayLight,
        flex: 1
    };
    return (
        <View style={backgroundStyle}>
            <View style={styles.container}>
                <View style={{ gap: 40 }}>
                    <View style={styles.title}>
                        <H2 content="注册账户以继续使用"></H2>
                    </View>
                    <View style={styles.loginType}>
                        <Button title='本机号码注册' icon={BtnIcon.phone} iconPos='right'></Button>
                        <Button title='微信注册' icon={BtnIcon.weChat} iconPos='right'></Button>
                    </View>
                </View>
                <TextLink content='服務條款及隱私權政策' onClick={()=>{
                    navigation.navigate('Privacy');
                }}></TextLink>
            </View>
        </View>
    );
};

// 样式
const styles = StyleSheet.create({
    container: {
        marginTop: 139,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },
    title: {
        gap: 16,
        height: 97
    },
    loginType: {
        gap: 32
    }
});

export default Login;
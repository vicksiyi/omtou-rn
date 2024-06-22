import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image } from 'react-native';
import H2 from '../../../Components/Base/Text/H2';
import { Style } from '../../../Common/styles';
import Button from '../../../Components/Base/Button';
import TextLink from '../../../Components/Base/Text/TextLink';
import { isValidPhoneNumber } from '../../../Common/utils';

const PhoneNumberLogin = () => {
    const china = require("../../../Assets/Images/Icon/china.png");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCallingCode, setCountryCallingCode] = useState('+86');
    const [isValidPhone, setIsValidPhone] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <H2 content="请输入手机号登陆" style={{
                    textAlign: 'center'
                }}></H2>
                <View style={styles.inputContainer}>
                    <View style={styles.countryContainer}>
                        <Image style={{ width: 24, height: 18 }} source={china}></Image>
                        <Text style={styles.countryCodeText}>{countryCallingCode}</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value={phoneNumber}
                            keyboardType="numeric"
                            maxLength={11}
                            onChangeText={(val: string) => {
                                setPhoneNumber(val);
                                if (isValidPhoneNumber(val)) {
                                    setIsValidPhone(true);
                                } else {
                                    setIsValidPhone(false);
                                }
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={{
                marginTop: 24,
                gap: 32
            }}>
                <View style={{ height: 58 }}></View>
                <Button title='获取验证码' isDisabled={!isValidPhone} onClick={() => {
                    Alert.alert('手机号验证');
                }}></Button>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 16
            }}>
                <Text style={styles.privacyPolicy}>登入即表示同意</Text>
                <TextLink content='隐私权政策' style={styles.privacyPolicy} />
            </View>
            <TextLink content='遇到问题？' style={styles.helpText} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Style.GrayLight
    },
    topBox: {
        marginTop: 112,
        gap: 16
    },
    label: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 47,
        borderBottomColor: '#ccc',
        gap: 10
    },
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingVertical: 15,
        borderColor: '#8E8E93',
        gap: 10,
        borderRadius: 15,
        borderWidth: 1
    },
    countryCodeText: {
        fontSize: 12,
        fontWeight: 500,
        color: Style.GrayMedium
    },
    inputBox: {
        width: 176,
        paddingHorizontal: 22,
        paddingVertical: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#8E8E93',
    },
    input: {
        fontSize: 16,
        color: Style.GrayMedium
    },
    privacyPolicy: {
        textAlign: 'center',
        color: Style.GrayMedium,
        fontSize: 14,
        lineHeight: 23,
        height: 23,
        fontWeight: 600
    },
    helpText: {
        textAlign: 'center',
        marginTop: 8,
        color: Style.GrayMedium,
    },
});

export default PhoneNumberLogin;

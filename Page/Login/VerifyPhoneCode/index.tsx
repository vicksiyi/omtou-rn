import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, Keyboard } from 'react-native';
import H2 from '../../../Components/Base/Text/H2';
import { Style } from '../../../Common/styles';
import Button from '../../../Components/Base/Button';
import TextLink from '../../../Components/Base/Text/TextLink';
import Small from '../../../Components/Base/Text/Small';

const RE_SEND_TIME = 60;
const enum VerifyStatus {
    none = 'none',
    success = 'success',
    error = 'error'
}
const VerifyPhoneCode = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const [curFocus, setCurFocus] = useState(-1);
    const [reSendTime, setReSendTime] = useState(RE_SEND_TIME);
    const [isWait, setIsWait] = useState(true);
    const [verifyStatus, setVerifyStatus] = useState(VerifyStatus.none);
    const refs = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null)
    ]
    let isError: boolean = verifyStatus === VerifyStatus.error;
    useEffect(() => {
        isError = verifyStatus === VerifyStatus.error;
    }, [verifyStatus])

    const initTime = () => {
        setReSendTime(RE_SEND_TIME);
    }

    useEffect(() => {
        if (!isWait || reSendTime < 0) return;
        if (reSendTime === 0) {
            setIsWait(false);
        }
        const time = setTimeout(() => {
            console.log(reSendTime <= 0, 'reSendTime <= 0', reSendTime);
            setReSendTime(reSendTime - 1);
        }, 1000);
        return () => {
            clearInterval(time);
        }
    }, [isWait, reSendTime]);

    useEffect(() => {
        if (curFocus === -1) Keyboard.dismiss();
        else refs[curFocus]?.current?.focus();
    }, [curFocus])

    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <H2 content="请输入手机号登陆" style={{
                    textAlign: 'center'
                }}></H2>
                <View style={{
                    height: 73,
                    gap: 8
                }}>
                    {/* 输入框 */}
                    <View style={styles.verifyContainer}>
                        {code.map((item, index) => <View
                            key={index}
                            style={[
                                styles.inputContainer,
                                isError
                                    ? styles.inputError :
                                    verifyStatus === VerifyStatus.success
                                        ? styles.inputSuccess : {}
                            ]}
                        >
                            <TextInput
                                ref={refs[index]}
                                style={styles.input}
                                onFocus={() => {
                                    setCurFocus(index);
                                    const refContent = refs[index]?.current;
                                    refContent?.setNativeProps({
                                        selection: {
                                            start: 0,
                                            end: 1
                                        },
                                    });
                                }}
                                keyboardType="numeric"
                                maxLength={1}
                                selectTextOnFocus={true}
                                onSubmitEditing={() => {
                                    const codeStr = code.join('');
                                    if (codeStr === '0000') setVerifyStatus(VerifyStatus.error);
                                    else {
                                        setVerifyStatus(VerifyStatus.none);
                                        Alert.alert(`提交验证${codeStr}`);
                                    }
                                }}
                                onChangeText={(val: string) => {
                                    if (val.length == 1) {
                                        code[index] = val;
                                        setCode(code);
                                        if (index !== code.length - 1) {
                                            setCurFocus(index + 1);
                                        }
                                    } else if (val.length === 0) {
                                        code[index] = val;
                                        setCode(code);
                                        if (index !== 0) {
                                            setCurFocus(index - 1);
                                        } else {
                                            setCurFocus(-1);
                                        }
                                    }
                                }}
                            />
                        </View>)}
                    </View>
                    {/* tips */}
                    <Small content="验证码不正确，请再試一次 :)" style={{
                        textAlign: 'center',
                        color: Style.RedLight,
                        display: isError ? 'flex' : 'none'
                    }}></Small>
                </View>
            </View>
            <View style={{
                marginTop: 24,
                gap: 32
            }}>
                <View style={{ height: 58 }}></View>
                <Button title={`重新发送${isWait ? `(${reSendTime}s)` : ''}`} isDisabled={isWait} onClick={() => {
                    setIsWait(true);
                    initTime();
                }}></Button>
            </View>
            <View style={{ marginTop: 16 }}>
                <TextLink content='收不到验证码?' style={styles.helpText} onClick={() => {
                    Alert.alert('收不到验证码');
                }} />
            </View>
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
    verifyContainer: {
        flexDirection: 'row',
        gap: 11
    },
    inputContainer: {
        width: 41,
        height: 48,
        backgroundColor: Style.GrayLightMedium,
        borderRadius: 10,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontSize: 20,
        padding: 10,
        color: Style.BlackDark,
        margin: 0
    },
    inputError: {
        borderColor: Style.RedLight,
        borderWidth: 1,
        borderRadius: 10
    },
    inputSuccess: {
        // TODO
    },
    helpText: {
        textAlign: 'center',
        marginTop: 8,
        color: Style.GrayMedium,
    },
});

export default VerifyPhoneCode;

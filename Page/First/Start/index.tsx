import React, { useEffect, useState } from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Style } from '../../../Common/styles';
import Button, { BtnType } from '../../../Components/Base/Button';
import H1 from '../../../Components/Base/Text/H1';
import Small from '../../../Components/Base/Text/Small';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width: deviceWidth } = Dimensions.get('window');

function Start(): React.JSX.Element {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const backgroundStyle = {
        backgroundColor: Style.BlackDark,
        flex: 1
    };
    return (
        <View style={backgroundStyle}>
            <View style={styles.container}>
                <View style={styles.textBox}>
                    <Text style={styles.text}>
                        想象一下,如果你的耳朵就可以成为探索城市的指南针，你会发现怎样不同的世界？
                    </Text>
                </View>
            </View>
            <View style={styles.bottomBtn}>
                <Button title="开启探索" onClick={() => {
                    setModalVisible(true);
                }}></Button>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modelContainer}>
                    <View style={styles.modal}>
                        <View style={styles.modelContent}>
                            <H1 content="温馨提示" style={{
                                textAlign: 'center'
                            }}></H1>
                            <View style={{ width: 288 }}>
                                <Small content='感谢您选择使用我们的应用程序！我们重视您的隐私和个人信息保护，並承诺您的个人信息绝对不会被用于其他目的，也不会被分享给第三方。请点击下方的“同意”按钮继续使用我们的应用程序。'></Small>
                            </View>
                            <View style={styles.btnContainer}>
                                <Button title="同意" style={{
                                    width: 150
                                }} onClick={() => {
                                    navigation.navigate('Login');
                                    setModalVisible(false);
                                }} />
                                <Button title="不同意" style={{
                                    width: 150
                                }} type={BtnType.second} onClick={() => setModalVisible(!modalVisible)} />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBox: {
        width: 258,
        height: 84
    },
    text: {
        color: "#FFFFFF",
        fontFamily: "PingFang SC",
        fontSize: 20,
        fontWeight: 600
    },
    bottomBtn: {
        position: 'absolute',
        bottom: 80,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    modelContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    modal: {
        position: 'absolute',
        bottom: 0,
        width: deviceWidth,
        height: 353,
        backgroundColor: '#FFF',
        shadowColor: "rgba(0, 0, 0, 0.11)",
        shadowRadius: 15,
        borderRadius: 15,
        paddingTop: 60,
        paddingBottom: 26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modelContent: {
        height: 267,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 31
    },
    btnContainer: {
        height: 58,
        gap: 11,
        flexDirection: 'row'
    }
});

export default Start;
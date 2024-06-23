import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Alert, AppState, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Style } from '../../Common/styles';
import H2 from '../../Components/Base/Text/H2';
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import Button from '../../Components/Base/Button';

function WelComeSetAvatar(): React.JSX.Element {
    const defaultAvatar = require('../../Assets/Images/defaultAvatar.png');
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [avatar, setAvatar] = useState<Asset>(defaultAvatar);
    const backgroundStyle = {
        backgroundColor: Style.GrayLightMedium,
        flex: 1
    };

    const selectImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
            maxWidth: 1000,// 设置选择照片的大小，设置小的话会相应的进行压缩
            maxHeight: 1000,
            quality: 0.8
        }, res => {
            if (res.didCancel) {
                Alert.alert('用户取消');
                return false;
            }
            const image = res?.assets?.[0];
            setAvatar(image?.uri ?? defaultAvatar);
        }).catch(err => {
            Alert.alert('未知错误', err);
        });
    };
    return (
        <View style={backgroundStyle}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <View style={{
                        height: 54,
                        padding: 10
                    }}>
                        <H2 content="接下来请设置一个头像"></H2>
                    </View>
                </View>
                <View style={{ marginTop: 164, gap: 16 }}>
                    <TouchableOpacity style={styles.avatar} onPress={selectImage}>
                        <Image source={avatar} style={styles.avatar}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    bottom: 64
                }}>
                    <Button title="确定" onClick={()=>{
                        navigation.navigate('WelComeSetAvatar');
                    }}></Button>
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
        height: 54
    },
    avatar: {
        width: 255,
        height: 255,
        borderRadius: 255
    }
});

export default WelComeSetAvatar;
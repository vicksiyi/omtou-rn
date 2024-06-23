import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Style } from '../../Common/styles';
import H2 from '../../Components/Base/Text/H2';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../Components/Base/Button';

function CreateAccountDone(): React.JSX.Element {
    const defaultAvatar = require('../../Assets/Images/defaultAvatar.png');
    const weChatIcon = require('../../Assets/Images/Icon/wechat.png');
    const messageIcon = require('../../Assets/Images/Icon/message.png');
    const momentIcon = require('../../Assets/Images/Icon/moment.png');
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [inputVal, setInputVal] = useState('');
    const [isError, setIsError] = useState(false);
    const route = useRoute();
    const { avatar } = (route.params || {}) as any;
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
                        <H2 content="您已成功创建个人画像" style={{
                            textAlign: 'center'
                        }}></H2>
                    </View>
                    <View style={{
                        height: 37,
                        width: 278,
                        padding: 10,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}>
                        <H2 content="为了更好体验为您准备的特别旅程，我们希望您邀请朋友来一同探索" style={{
                            fontSize: 12,
                            fontWeight: 500,
                            textAlign: 'center',
                            flex: 1
                        }} numberOfLines={2}></H2>
                    </View>
                </View>
                <Image source={avatar ? { uri: avatar } : defaultAvatar} style={styles.avatar}></Image>
                <Text style={{
                    fontSize: 14,
                    fontWeight: 600
                }}>更多朋友的加入您的体验才会更精彩哦！</Text>
                <View style={styles.shareList}>
                    <TouchableOpacity>
                        <Image source={weChatIcon} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={momentIcon} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={messageIcon} style={styles.icon}></Image>
                    </TouchableOpacity>
                </View>
                <Button title="开始探索" onClick={() => {
                    navigation.navigate('Home');
                }}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 86,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 60
    },
    titleContainer: {
        height: 128,
        gap: 9
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 150
    },
    shareList: {
        flexDirection: 'row',
        gap: 44
    },
    icon: {
        height: 51,
        width: 51
    }
});

export default CreateAccountDone;
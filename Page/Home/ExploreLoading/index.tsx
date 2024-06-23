import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, Image, StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native';
import { Style } from '../../../Common/styles';
import { noFunc } from '../../../Common/utils';
import LinearGradient from 'react-native-linear-gradient';

type PropsType = {
    onComplete?: () => void
}
function ExploreLoading(props: PropsType): React.JSX.Element {
    const exploreImg = require("../../../Assets/Images/explore.png");
    const { onComplete = noFunc } = props;
    const { width, height } = Dimensions.get('window');
    const heightAnim = useRef(new Animated.Value(85)).current;
    const backgroundStyle: ViewStyle = {
        backgroundColor: Style.GrayLightMedium,
        flex: 1,
        alignItems: 'center'
    };
    useEffect(() => {
        Animated.timing(heightAnim, {
            toValue: 158,
            duration: 1300,
            useNativeDriver: false,
        }).start(() => {
            Animated.timing(heightAnim, {
                toValue: 214,
                duration: 1300,
                useNativeDriver: false,
            }).start(() => {
                Animated.timing(heightAnim, {
                    toValue: Math.max(width, height) * 2,
                    duration: 1300,
                    useNativeDriver: false,
                }).start(onComplete)
            })
        });
    }, [])
    return (
        <View style={backgroundStyle}>
            <View style={[
                styles.container,
                {
                    zIndex: 1
                }
            ]}>
                <Animated.View style={{
                    width: heightAnim,
                    height: heightAnim,
                    borderRadius: heightAnim,
                    overflow: 'hidden'
                }}>
                    <LinearGradient colors={["#8E8E93", "#ECECEC"]} style={{
                        flex: 1
                    }}>
                    </LinearGradient>
                </Animated.View>
            </View>
            <Image source={exploreImg} resizeMode='contain' style={{
                bottom: 64,
                width: 244,
                height: 34
            }}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default ExploreLoading;
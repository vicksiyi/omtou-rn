import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Style } from '../../Common/styles';
import TopBox from './TopBox';
import BottomBox from './BottomBox';

type propsType = {}
const WelCome = (props: propsType) => {
    const { } = props;
    const heightAnim = useRef(new Animated.Value(0)).current;
    const startAnimation = () => {
        Animated.timing(heightAnim, {
            toValue: 515,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
    useEffect(() => {
        const time = setTimeout(() => {
            startAnimation();
        }, 1000);
        return () => {
            clearTimeout(time);
        }
    }, [])
    const backgroundStyle = {
        backgroundColor: Style.GrayLightMedium,
        flex: 1
    };
    return (
        <View style={backgroundStyle}>
            <View style={styles.container}>
                <TopBox></TopBox>
                <Animated.View style={{
                    height: heightAnim
                }}>
                    <BottomBox></BottomBox>
                </Animated.View>
            </View>
        </View>
    );
};

// 样式
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WelCome;
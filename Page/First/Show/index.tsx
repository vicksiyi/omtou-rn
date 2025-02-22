import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
function Show(): React.JSX.Element {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const backgroundStyle = {
        backgroundColor: "#FFFFFF",
        flex: 1
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Start');
        }, 1000);
        return () => {
            clearTimeout(timer);
        }   
    }, [])
    return (
        <View style={backgroundStyle}>
            <View style={styles.container}>
                <Text style={styles.text}>OMTOU</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "#000000",
        fontSize: 62,
        letterSpacing: -1.86,
        fontFamily: 'Nasalization'
    }
});

export default Show;
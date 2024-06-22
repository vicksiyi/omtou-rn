import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function Show(): React.JSX.Element {
    const backgroundStyle = {
        backgroundColor: "#FFFFFF",
        flex: 1
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <View style={styles.container}>
                <Text style={styles.text}>OMTOU</Text>
            </View>
        </SafeAreaView>
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
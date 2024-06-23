import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ExploreLoading from './ExploreLoading';
import H1 from '../../Components/Base/Text/H1';
import { Style } from '../../Common/styles';

function Home(): React.JSX.Element {
    const [isLoading, setIsLoading] = useState(true);
    const backgroundStyle = {
        backgroundColor: Style.WhiteLight,
        flex: 1
    };
    return (
        <View style={backgroundStyle}>
            <View style={styles.container}>
                <H1 content='Home'></H1>
            </View>
            {/* loading */}
            {isLoading && <View style={{ 
                position: 'absolute', 
                width: "100%", 
                height: '100%',
                zIndex: 99
            }}>
                <ExploreLoading onComplete={() => {
                    setIsLoading(false);
                }} />
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;
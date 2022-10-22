import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function Header() {
    return (
        <View style={styles2.heading}>
            <Image source={require('/Users/jenny/Downloads/CS47/cs47-a2-starter-main/assets/Icons/menu_light.png')} style={styles2.images} />
            <Text style={styles2.baseText}>
                ensom
            </Text>
            <Image source={require('/Users/jenny/Downloads/CS47/cs47-a2-starter-main/assets/Icons/sun.png')} style={styles2.images} />
        </View>
    );
}


const styles2 = StyleSheet.create({
    heading: {
        marginBottom: 30,
        marginTop: 48,
        display: 'flex',
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 41 : 54,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: '15%',

    },
    baseText: {
        paddingLeft: 85,
        paddingRight: 85,
        fontFamily: 'SydneyBold',
        fontSize: 32,
        textAlign: 'center',
    },
    images: {
        padding: 20,
        height: 20,
        width: 20,

    },
});
export default Header; 
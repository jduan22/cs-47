import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function Footer() {
    return (
    <View style={styles4.container} >
        <View style = {styles4.horizontal} >
        <View style={styles4.vertical} >
            <Image source={require('/Users/jenny/Downloads/CS47/cs47-a2-starter-main/assets/Icons/discover_light.png')} style={styles4.image}/>
            <Text style={styles4.text}> Discover </Text>
        </View>
        <View style={styles4.vertical} >
            <Image source={require('/Users/jenny/Downloads/CS47/cs47-a2-starter-main/assets/Icons/heart_light.png')} style={styles4.image}/>
            <Text style={styles4.text}> Matches </Text>
        </View>
        <View style={styles4.vertical} >
            <Image source={require('/Users/jenny/Downloads/CS47/cs47-a2-starter-main/assets/Icons/messages_light.png')} style={styles4.image}/>
            <Text style={styles4.text}> DMs </Text>
        </View>

        </View>
    </View>
    );

}

const styles4 = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        position: 'absolute',
        height: '10%',
        width: '100%',
        bottom: 0,
    },
    horizontal: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    vertical: {
        marginTop: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    text: {
        fontFamily: 'Sydney',
        color: 'white',
        fontSize: 20,
    },
    image: {
        height: 35,
        width: 35,
        paddingBottom: '5%',
    }
})

export default Footer;
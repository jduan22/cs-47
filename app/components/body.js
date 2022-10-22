import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Themes } from '../../assets/Themes';

function Body() {
    return (
        <>
            <View>
                <ImageBackground source={require('/Users/jenny/Downloads/CS47/cs47-a2-starter-main/assets/Profiles/mtl.jpg')} style={styles3.mtl} imageStyle={{borderRadius: 16}} />
                <Text style={styles3.mtlText}>MTL</Text>
                <Text style={styles3.distanceText}>2 miles away</Text>
            </View>
            <View style={styles3.hotTake}>
                <Text style={styles3.hottestTakeText}>My hottest take</Text>
                <View style={styles3.images}>
                <Image source={require('/Users/jenny/Downloads/CS47/cs47-a2-starter-main/assets/Icons/player_light.png')} style={styles3.play} />
                <Image source={require('/Users/jenny/Downloads/CS47/cs47-a2-starter-main/assets/Icons/audio_waveform_light.png')} style={styles3.hotTakeImage} />
                </View>
            </View>
        </>
    );
}


const styles3 = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    mtl: {
        position: 'relative',
        justifyContent: 'flex-start',
        height: 380,
        width: 350,
        borderRadius: 10,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
       // marginBottom: 200,
        // 320
    },
    mtlText: {
        position: 'absolute',
        paddingLeft: 12,
        paddingTop: 8,
        color: 'white',
        fontFamily: 'Sydney',
        fontSize: 32,
        textAlign: 'left',
    },
    distanceText: {
        position: 'absolute',
        paddingLeft: 12,
        paddingTop: 350,
        color: 'white',
        fontFamily: 'Sydney',
        fontSize: 15,
        textAlign: 'left',
    },
    hottestTakeText: {
        marginLeft: '2%',
        position: 'relative',
        textAlign: 'left',
        padding: 10,
       // marginBottom: 200,
        position: 'absolute',
        color: 'black',
        fontSize: 26,
        fontFamily: 'Sydney',
        paddingTop: '12%',
    },
    hotTake: {
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
        backgroundColor: Themes.light.bgSecondary,
        borderRadius: 16,
        marginTop: '8%',
        paddingTop: '13%',
        paddingBottom: '5%',
        width: '80%',
    },
    images: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    hotTakeImage: {
        height: '80%',
        width: '80%',
      },
    play: {
width: 55,
height: 55,
    }

})
export default Body;
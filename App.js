import AppLoading from 'expo-app-loading';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from "./assets/Themes"
import Header from './app/components/header.js';
import Body from './app/components/body.js';
import Footer from './app/components/footer.js';

function App() {

  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  StatusBar.setBarStyle(Themes.light.statusBar);

  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg, // is there a way to do this using the variables in palette
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;

import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useFonts } from 'expo-font';
import GetStartedBtn from '../components/GetStartedBtn';

export default function Welcome({ navigation }) {
    const [fontsLoaded] = useFonts({
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    })

    if (!fontsLoaded)
        return null;

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require("../assets/background.png")} resizeMode='cover' style={styles.wrapper}>
                <Image source={require("../assets/cup.png")} ></Image>
                <View style={{ marginTop: 30, marginBottom: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: "Poppins-Regular", color: "#FFF", fontWeight: '400', fontSize: 32 }}>Welcome to</Text>
                    <Text style={{ fontFamily: "Poppins-Medium", color: "#E65738", fontWeight: '400', fontSize: 62 }}>Cavosh</Text>
                </View>
                <GetStartedBtn title="Get Started" onPress={() => navigation.navigate("SignInUp")} />
                <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Poppins-Regular"
    },
    wrapper: {
        flex: 1,
        backgroundColor: "#34536A",
        justifyContent: 'center',
        alignItems: 'center'

    },
    Text: {
        fontFamily: "Poppins-Regular"
    }
});

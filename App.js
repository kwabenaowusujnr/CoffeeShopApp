import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ResetPassword from './screens/ResetPassword';
import SignInUp from './screens/SignInUp';
import SignInEngine from './components/SignInEngine';
import Home from './screens/Home';
import Index from './screens/index';



const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='SignInUp'
          component={SignInUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='SignInEngine'
          component={SignInEngine}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Index'
          component={Index}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )





  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  if (!fontsLoaded)
    return null;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("./assets/background.png")} resizeMode='cover' style={styles.wrapper}>
        <Image source={require("./assets/cup.png")} ></Image>
        <View style={{ marginTop: 40, marginBottom: 40, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontFamily: "Poppins-Regular", color: "#FFF", fontWeight: '400', fontSize: 32 }}>Welcome to</Text>
          <Text style={{ fontFamily: "Poppins-Medium", color: "#E65738", fontWeight: '400', fontSize: 62 }}>Cavosh</Text>
        </View>

        <TouchableHighlight
          style={
            { backgroundColor: "#293441", alignItems: 'center', width: "50%", justifyContent: 'center', height: 40, borderRadius: 10 }}
          onPress={() => console.log('pressed')}
        >
          <Text style={{ fontFamily: "Poppins-Medium", color: "#fff", fontSize: 18 }}>Get Started</Text>
        </TouchableHighlight >
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

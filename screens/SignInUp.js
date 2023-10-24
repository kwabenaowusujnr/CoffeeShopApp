import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Zocial, FontAwesome5 } from "@expo/vector-icons"
import Toggle from "react-native-toggle-element";
import SignUpEngine from "../components/SignUpEngine";
import SignInEngine from "../components/SignInEngine";

const SignInUp = ({ navigation }) => {
    const [isPasaswordShow, setIsPasswordShow] = useState(true)
    const [isConfirmPasaswordShow, setIsConfirmPasswordShow] = useState(true)
    const [toggleValue, setToggleValue] = useState(false);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            <View style={{ flex: 1 }}>
                <View style={styles.wrapper}>
                    <ImageBackground source={require("../assets/headerbg.png")} resizeMode='cover' style={{ width: "100%", height: "100%", justifyContent: "center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, overflow: 'hidden' }}>

                        <Text style={{ fontFamily: "Poppins-Medium", color: "#FFF", fontWeight: '400', fontSize: 26, marginHorizontal: 20 }}>Let`s get you registered!</Text>

                    </ImageBackground>
                </View>

                <View style={{
                    width: "100%",
                    marginTop: -30,
                    alignItems: "center"
                }}>
                    <Toggle
                        value={toggleValue}
                        onPress={() => setToggleValue(!toggleValue)}
                        leftTitle="Sign In"
                        rightTitle="Register"
                        trackBar={{
                            width: 300,
                            activeBackgroundColor: "#EBEFF1",
                            inActiveBackgroundColor: "#EBEFF1"
                        }}
                        thumbButton={{
                            width: 150,
                            activeBackgroundColor: "#E65738",
                            activeColor: "#fff",
                        }}
                        animationDuration={100}
                    />
                </View>

                {(!toggleValue) ?
                    <SignInEngine
                        GotoResetPasswprd={() => navigation.navigate("ResetPassword")}
                        GotoSignUp={() => setToggleValue(!toggleValue)}
                        GoToIndex={() => navigation.navigate("Index")}
                    >

                    </SignInEngine>
                    :
                    <SignUpEngine
                        GotoSignUp={() => setToggleValue(!toggleValue)}
                    ></SignUpEngine>
                }
            </View>

        </SafeAreaView >
    );
};



const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        borderRadius: 60,
        height: "20%"

    },
    textFieldWrapper: {
        width: "100%",
        height: 56,
        backgroundColor: "#EBEFF1",
        borderWidth: 0,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
        marginVertical: 10
    },
    textField: {
        width: "100%",
        fontFamily: "Poppins-Regular",
        fontSize: 16
    },
    socialsWrapper: {
        width: "30%",
        height: 80,
        borderColor: "#E65738",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#FCE7E2",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5
    }
})

export default SignInUp;

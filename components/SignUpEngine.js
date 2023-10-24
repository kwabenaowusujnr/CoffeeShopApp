import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Pressable } from "react-native";
import { Ionicons, Zocial, FontAwesome5 } from "@expo/vector-icons"
import React, { useState } from "react";

const SignUpEngine = (props) => {
    const [isPasaswordShow, setIsPasswordShow] = useState(true)
    const [isConfirmPasaswordShow, setIsConfirmPasswordShow] = useState(true)

    return (
        <View style={{ marginBottom: 30, marginHorizontal: 20, marginVertical: 20 }}>
            <View style={styles.textFieldWrapper}>
                <TextInput
                    style={styles.textField}
                    placeholder="Full Name"
                />
            </View>
            <View style={styles.textFieldWrapper}>
                <TextInput
                    style={styles.textField}
                    placeholder="Email Address"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.textFieldWrapper}>
                <TextInput
                    style={styles.textField}
                    placeholder="Password"
                    secureTextEntry={isPasaswordShow}
                />
                <TouchableOpacity
                    style={{ position: "absolute", right: 12 }}
                    onPress={() => setIsPasswordShow(!isPasaswordShow)}
                >
                    {
                        isPasaswordShow ?
                            <Ionicons name="eye-off" size={24}></Ionicons>
                            :
                            <Ionicons name="eye" size={24}></Ionicons>
                    }

                </TouchableOpacity>
            </View>
            <View style={styles.textFieldWrapper}>
                <TextInput
                    style={styles.textField}
                    placeholder="Confirm Password"
                    secureTextEntry={isConfirmPasaswordShow} />
                <TouchableOpacity
                    style={{ position: "absolute", right: 12 }}
                    onPress={() => setIsConfirmPasswordShow(!isConfirmPasaswordShow)}>
                    {
                        isConfirmPasaswordShow ?
                            <Ionicons name="eye-off" size={24}></Ionicons>
                            :
                            <Ionicons name="eye" size={24}></Ionicons>
                    }
                </TouchableOpacity>

            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: "#293441",
                    alignItems: 'center',
                    width: "100%",
                    justifyContent: 'center',
                    height: 60,
                    borderRadius: 20,
                    marginVertical: 20

                }}
            >
                <Text style={{
                    fontFamily: "Poppins-Medium",
                    color: "#fff",
                    fontSize: 18
                }}>
                    Register
                </Text>
            </TouchableOpacity >

            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20
            }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#E65738' }} />
                <Text style={{
                    width: "40%",
                    textAlign: "center",
                    color: "#34536A",
                    fontFamily: "Poppins-Medium"
                }}>
                    Or register with
                </Text>
                <View style={{ flex: 1, height: 1, backgroundColor: '#E65738' }} />
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 2,
                width: "100%"
            }}>
                <TouchableOpacity style={styles.socialsWrapper}>
                    <Zocial name="facebook" size={42} color={"#395C96"}></Zocial>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialsWrapper}>
                    <FontAwesome5 name="google-plus-g" size={46} color={"#D26562"}></FontAwesome5>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialsWrapper}>
                    <FontAwesome5 name="apple" size={48}></FontAwesome5>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20
            }}>
                <Text style={{
                    textAlign: "center",
                    color: "#34536A",
                    fontFamily: "Poppins-Medium"
                }}>
                    Already have an account?
                </Text>
                <Pressable onPress={props.GotoSignUp}>
                    <Text style={{
                        textAlign: "center",
                        color: "#E65738",
                        fontFamily: "Poppins-Bold",
                        marginLeft: 10
                    }}>
                        Login Now
                    </Text></Pressable>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        borderRadius: 60,
        height: "20%",
        backgroundColor: "red"

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


export default SignUpEngine;

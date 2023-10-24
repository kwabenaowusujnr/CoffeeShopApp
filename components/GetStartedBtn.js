import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";

const GetStartedBtn = (props) => {
    return (
        <TouchableOpacity
            style={
                { backgroundColor: "#293441", alignItems: 'center', width: "50%", justifyContent: 'center', height: 50, borderRadius: 10 }}
            onPress={props.onPress}
        >
            <Text style={{ fontFamily: "Poppins-Medium", color: "#fff", fontSize: 18 }}>{props.title}</Text>
        </TouchableOpacity >
    );
};

export default GetStartedBtn;

import { View, Text } from "react-native";
import React from "react";
import LottieView from 'lottie-react-native';

const EmptyAni = () => {
    return (
        <View>
            <LottieView
                autoPlay={true}
                loop={true}
                style={{
                    width: 300,
                    height: 300,
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../assets/empty.json')}
            />
        </View>
    );
};

export default EmptyAni;

import React, { useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Firstpage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Automatically navigate to Signin page after 1 second
    const timer = setTimeout(() => {
      navigation.navigate("WelcomePage");
    }, 1000); // 1 second

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icons/jeclogo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: wp('40%'), // 40% of screen width
    height: wp('40%'), // 40% of screen width (to maintain aspect ratio)
    borderRadius: wp('20%'), // 20% of screen width (half of width/height for a circle)
  },
});

export default Firstpage;
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Signin = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/icons/jeclogo.png")}
        style={styles.logo}
      />

      {/* Sign In Text */}
      <Text style={styles.signInText}>Sign In</Text>

      {/* Username Input */}
      <Text style={styles.title}>USERNAME</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#AAA"
      />

      {/* Password Input */}
      <Text style={styles.title}>PASSWORD</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#AAA"
        secureTextEntry
      />

      {/* Forgot Password */}
      <Text style={styles.forgotPasswordText}>Forgot password?</Text>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Illustration */}
      <Image
        source={require("../assets/icons/Login-rafiki 2.png")}
        style={styles.illustration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12172B",
    alignItems: "center",
    justifyContent: "center",
    padding: wp('5%'), // 5% of screen width
    fontFamily: 'Poppins',
  },
  logo: {
    width: wp('25%'), // 25% of screen width
    height: wp('25%'), // 25% of screen width (to maintain aspect ratio)
    marginBottom: hp('3%'), // 3% of screen height
  },
  signInText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: wp('10%'), // 10% of screen width
    marginBottom: hp('3%'), // 3% of screen height
  },
  title: {
    color: '#FFF',
    alignSelf: 'flex-start',
    marginLeft: wp('5%'), // 5% of screen width
    marginBottom: hp('1%'), // 1% of screen height
    fontSize: wp('4%'), // 4% of screen width
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp('1%'), // 1% of screen width
    marginBottom: hp('2%'), // 2% of screen height
    color: "gray",
    width: wp('80%'), // 80% of screen width
    height: hp('5%'), // 5% of screen height
    paddingHorizontal: wp('3%'), // 3% of screen width
  },
  forgotPasswordText: {
    color: '#2869FA',
    marginBottom: hp('3%'), // 3% of screen height
    alignSelf: 'flex-start',
    marginLeft: wp('5%'), // 5% of screen width
    marginTop: hp('-1%'), // -1% of screen height
    fontSize: wp('3.5%'), // 3.5% of screen width
  },
  signInButton: {
    backgroundColor: "#007BFF",
    borderRadius: wp('2%'), // 2% of screen width
    alignItems: "center",
    paddingVertical: hp('1.5%'), // 1.5% of screen height
    paddingHorizontal: wp('20%'), // 20% of screen width
  },
  signInButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: wp('4.5%'), // 4.5% of screen width
  },
  illustration: {
    width: wp('80%'), // 80% of screen width
    height: hp('30%'), // 30% of screen height
    marginTop: hp('5%'), // 5% of screen height
  },
});

export default Signin;
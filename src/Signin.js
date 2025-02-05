import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

// Add the navigation prop to the component
const Signin = ({ navigation }) => {
  // Function to handle sign-in button press
  const handleSignIn = () => {
    // After successful sign-in, navigate to Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/icons/jeclogo.png")} // Replace with the correct path to your local logo file
        style={styles.logo}
      />

      {/* Sign In Text */}
      <Text style={styles.signInText}>Sign In</Text>

      {/* Username Input */}
      <Text  style={styles.title}>USERNAME</Text>
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
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Home')}>
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
    padding: 20,
    fontFamily:'Poppins',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  signInText: {
    fontSize: 50,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 20,
  },
  title:{
     color:'#FFF',
    alignSelf:'left',
    marginLeft:10,
    marginBottom:5,
  },
  input: {
    width: 300,
    maxHeight:35,
    backgroundColor:'#FFFFFF',
    borderRadius:2,
    marginBottom: 15,
    color: "gray",
    fontSize:12,
  },
  forgotPasswordText: {
    color: '#2869FA',
    marginBottom: 20,
    fontSize:9,
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    marginLeft:10,
    marginTop:-10,
  },
  signInButton: {
   
    backgroundColor: "#007BFF",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 60,
    alignItems: "center",
  },
  signInButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  illustration: {
    width: 300,
    height: 270,
    marginTop: 30,
  },
});

export default Signin;

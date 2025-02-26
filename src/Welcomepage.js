import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Import from library

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/icons/jeclogo.png')}
        style={styles.logo}
      />

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to AttendEase!</Text>
      <Text style={styles.subtitle}>Your friendly college attendance tracker</Text>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Selection')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Illustration */}
      <Image
        source={require('../assets/icons/HighSchool.png')}
        style={styles.illustration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
    fontFamily: 'Poppins',
  },
  logo: {
    width: wp(25), // Responsive width (25% of screen width)
    height: wp(25), // Responsive height (25% of screen width)
    marginTop: hp(5), // Responsive margin (5% of screen height)
  },
  title: {
    fontSize: wp(10), // Responsive font size (10% of screen width)
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: hp(2), // Add some margin to separate from the logo
  },
  subtitle: {
    fontSize: wp(5), // Responsive font size (5% of screen width)
    color: '#B0B8C1',
    textAlign: 'center',
    marginTop: hp(1), // Add some margin to separate from the title
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: hp(2), // Responsive padding (2% of screen height)
    paddingHorizontal: wp(20), // Responsive padding (20% of screen width)
    borderRadius: wp(2), // Responsive border radius (2% of screen width)
    marginTop: hp(5), // Add some margin to separate from the subtitle
  },
  buttonText: {
    fontSize: wp(4), // Responsive font size (4% of screen width)
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  illustration: {
    position: 'absolute', // Use absolute positioning
    bottom: 0, // Fix at the bottom
    width: '100%', // Full width of the screen
    height: hp(30), // Responsive height (30% of screen height)
  },
});

export default WelcomePage;
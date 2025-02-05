import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomePage = ({navigation}) => {
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
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Selection')}>
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
    justifyContent: 'space-around',
    paddingVertical: 20,
    fontFamily:'Poppins',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 40,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 21,
    color: '#B0B8C1',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 7,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    
  },
  illustration: {
    marginTop:-10,
    width: 370,
    height:400,
    
  },
});

export default WelcomePage;
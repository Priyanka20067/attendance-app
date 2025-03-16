import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';

const HomePage = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleGetStarted = () => {
    Alert.alert('Get Started', 'Let’s clean up the planet together!');
    // navigation.navigate('GetStarted'); // optional navigation
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.logo}>EcoTrack</Text>
        <View style={styles.navButtons}>
          <TouchableOpacity onPress={handleLogin} style={styles.navButton}>
            <Text style={styles.navButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignup} style={styles.navButton}>
            <Text style={styles.navButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Welcome to EcoTrack – Smarter Waste Management</Text>
        <Text style={styles.paragraph}>
          EcoTrack is an AI-powered waste management system designed to optimize waste collection, reduce pollution, and promote environmental sustainability.
        </Text>
        <Text style={styles.paragraph}>
          Whether you're a city, company, or individual, EcoTrack helps you monitor, manage, and reduce waste efficiently.
        </Text>
        <Text style={styles.subTitle}>♻️ Features:</Text>
        <Text style={styles.listItem}>• Real-time waste tracking and analytics</Text>
        <Text style={styles.listItem}>• AI-based waste sorting and recycling suggestions</Text>
        <Text style={styles.listItem}>• Automated pickup scheduling</Text>
        <Text style={styles.listItem}>• Community engagement and awareness</Text>
      </ScrollView>

      {/* Get Started Button */}
      <View style={styles.getStartedContainer}>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  navButtons: {
    flexDirection: 'row',
  },
  navButton: {
    marginLeft: 10,
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  navButtonText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
    color: '#555',
  },
  getStartedContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  getStartedButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

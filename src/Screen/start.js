import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert, Platform } from 'react-native';
import { MotiView, MotiText } from 'moti';



const Start = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('SignUp');
  };

  const handleGetStarted = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
     

      <MotiView
        style={styles.navbar}
        from={{ translateY: -100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: 'timing', duration: 600 }}
      >
        <Text style={styles.logo}>EcoTrack</Text>
        <View style={styles.navButtons}>
          <TouchableOpacity onPress={handleLogin} style={styles.navButton}>
            <Text style={styles.navButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignup} style={styles.navButton}>
            <Text style={styles.navButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </MotiView>

      {/* Content with fade-in */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <MotiView
          style={styles.contentBox}
          from={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 800, delay: 300 }}
        >
          <MotiText
            style={styles.title}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 400 }}
          >
            Welcome to EcoTrack – Smarter Waste Management
          </MotiText>
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
        </MotiView>
      </ScrollView>

      {/* Animated Get Started Button */}
      <MotiView
        style={styles.getStartedContainer}
        from={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{
          loop: true,
          type: 'timing',
          duration: 1200,
          easing: 'ease-in-out',
        }}
      >
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </MotiView>
    </SafeAreaView>
  );
};

export default Start;

// Your styles remain same, with shadows from earlier
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
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
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
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  navButtonText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  contentContainer: {
    padding: 20,
  },
  contentBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
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
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  getStartedButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Selection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Gray Bar */}
      <View style={styles.topBar}>
        <Image
          source={require('../assets/icons/jeclogo.png')}
          style={styles.logo}
        />
      </View>

      {/* Login Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.buttonText}>STUDENT LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Staff')}>
          <Text style={styles.buttonText}>STAFF LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hod')}>
          <Text style={styles.buttonText}>HOD LOGIN</Text>
        </TouchableOpacity>
      </View>

      {/* Navbar/Footer */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Hod')}>
          <Image source={require("../assets/icons/home.png")} style={styles.homeimage} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require("../assets/icons/profile.png")} style={styles.homeimage} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121826",
    alignItems: "center",
  },
  topBar: {
    backgroundColor: "#D3D3D3",
    width: wp('100%'), // 100% of screen width
    height: hp('10%'), // 10% of screen height
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: wp('15%'), // 15% of screen width
    height: wp('15%'), // 15% of screen width (to maintain aspect ratio)
  },
  buttonContainer: {
    marginTop: hp('20%'), // 20% of screen height
    width: wp('90%'), // 90% of screen width
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1861FF",
    width: wp('80%'), // 80% of screen width
    height: hp('8%'), // 8% of screen height
    marginVertical: hp('1.5%'), // 1.5% of screen height
    borderRadius: wp('2%'), // 2% of screen width
    justifyContent: 'center',
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: wp('4.5%'), // 4.5% of screen width
    fontWeight: "bold",
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: wp('100%'), // 100% of screen width
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: hp('1.5%'), // 1.5% of screen height
  },
  homeimage: {
    height: hp('6%'), // 6% of screen height
    width: wp('10%'), // 10% of screen width
  },
  navLabel: {
    fontSize: wp('3%'), // 3% of screen width
    marginLeft: wp('1%'), // 1% of screen width
  },
});

export default Selection;
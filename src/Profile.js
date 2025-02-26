import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.containerimage}>
        <Image
          source={require("../assets/icons/jeclogo.png")}
          style={styles.logo}
        />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.Row}>
          <Text style={styles.title}>PROFILE</Text>
          <Image
            source={require("../assets/icons/Profileimage.png")}
            style={styles.illustration}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Name: Nisha</Text>
          <Text style={styles.infoText}>Reg no: 110823040</Text>
          <Text style={styles.infoText}>DOB: 18-12-2005</Text>
          <Text style={styles.infoText}>Branch: BE</Text>
          <Text style={styles.infoText}>Dept: CSE</Text>
          <Text style={styles.infoText}>Semester: 03</Text>
          <Text style={styles.infoText}>Address: 19/20 Thiyagaraja St, Chennai-62</Text>
          <Text style={styles.infoText}>Contact no: 1234567890</Text>
          <Text style={styles.infoText}>Email: abc@email.com</Text>
        </View>
      </View>

      {/* Navbar/Footer */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require("../assets/icons/home.png")} style={styles.homeimage} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
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
    backgroundColor: "#12172B",
    padding: wp('2.5%'), // 2.5% of screen width
  },
  containerimage: {
    display: 'flex',
    backgroundColor: 'white',
    height: hp('10%'), // 10% of screen height
    justifyContent: 'flex-start',
    width: wp('100%'), // 100% of screen width
    paddingTop: hp('2%'), // 2% of screen height
    paddingLeft: wp('3%'), // 3% of screen width
  },
  logo: {
    width: wp('15%'), // 15% of screen width
    height: wp('15%'), // 15% of screen width (to maintain aspect ratio)
  },
  profileSection: {
    flex: 1,
    alignItems: "center",
  },
  Row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('90%'), // 90% of screen width
    marginTop: hp('3%'), // 3% of screen height
  },
  title: {
    fontSize: wp('10%'), // 10% of screen width
    color: "#FFF",
    fontWeight: "bold",
  },
  illustration: {
    width: wp('35%'), // 35% of screen width
    height: wp('35%'), // 35% of screen width (to maintain aspect ratio)
  },
  infoContainer: {
    width: wp('90%'), // 90% of screen width
    paddingHorizontal: wp('5%'), // 5% of screen width
    marginTop: hp('3%'), // 3% of screen height
  },
  infoText: {
    color: "#FFF",
    fontSize: wp('4%'), // 4% of screen width
    marginBottom: hp('1.5%'), // 1.5% of screen height
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: hp('1.5%'), // 1.5% of screen height
  },
  homeimage: {
    height: hp('6%'), // 6% of screen height
    width: wp('10%'), // 10% of screen width
  },
  navLabel: {
    fontSize: wp('3%'), // 3% of screen width
  },
});

export default Profile;
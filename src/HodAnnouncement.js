import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HodAnnouncement = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Logo and Notification Icon */}
      <View style={styles.headerimg}>
        <Image
          source={require("../assets/icons/jeclogo.png")}
          style={styles.logo}
        />
        <Image
          source={require("../assets/icons/notifications.png")}
          style={styles.logonot}
        />
      </View>

      {/* Header Title */}
      <View style={styles.headertitle}>
        <Text style={styles.headertext}>ANNOUNCEMENT</Text>
      </View>

      {/* Card Buttons */}
      <View style={styles.Card}>
        <TouchableOpacity style={styles.subbox} onPress={() => navigation.navigate('UpdateAnnouncement')}>
          <Image source={require("../assets/icons/breaking.png")} style={styles.Cardimage} />
          <Text style={styles.subboxText}>UPDATE ANNOUNCEMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subbox} onPress={() => navigation.navigate('Announcement')}>
          <Image source={require("../assets/icons/Eye.png")} style={styles.Cardimage} />
          <Text style={styles.subboxText}>VIEW ANNOUNCEMENT</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
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

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1321",
  },
  headerimg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: wp('3%'), // 3% of screen width
  },
  logo: {
    width: wp('15%'), // 15% of screen width
    height: wp('15%'), // 15% of screen width (to maintain aspect ratio)
    borderRadius: wp('15%') / 2, // Half of width/height for a circle
  },
  logonot: {
    width: wp('8%'), // 8% of screen width
    height: wp('8%'), // 8% of screen width
  },
  headertitle: {
    alignItems: 'center',
    marginTop: hp('10%'), // 10% of screen height
    marginBottom: hp('2%'), // 2% of screen height
  },
  headertext: {
    color: 'white',
    fontSize: wp('6%'), // 6% of screen width
    fontWeight: 'bold',
  },
  Card: {
    alignItems: 'center',
    marginTop: hp('5%'), // 5% of screen height
  },
  subbox: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: wp('5%'), // 5% of screen width
    borderRadius: wp('10%'), // 10% of screen width
    width: wp('80%'), // 80% of screen width
    marginVertical: hp('2%'), // 2% of screen height
  },
  Cardimage: {
    width: wp('10%'), // 10% of screen width
    height: hp('5%'), // 5% of screen height
    marginBottom: hp('1%'), // 1% of screen height
  },
  subboxText: {
    color: 'white',
    fontSize: wp('4%'), // 4% of screen width
    textAlign: 'center',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: wp('100%'), // 100% of screen width
    position: 'absolute',
    bottom: 0,
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

export default HodAnnouncement;
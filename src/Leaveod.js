import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Leaveod = ({ navigation }) => {
  const requests = [
    { id: 1, name: "Nisha", section: "CSE-B" },
    { id: 2, name: "Nisha", section: "CSE-B" },
    { id: 3, name: "Nisha", section: "CSE-B" },
  ];

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

      {/* Header Text */}
      <Text style={styles.header}>LEAVE/OD REQUEST</Text>

      {/* Leave Request List */}
      <ScrollView>
        {requests.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.requestText}>{item.id}</Text>
            <Text style={styles.requestText}>{item.name}</Text>
            <Text style={styles.requestText}>{item.section}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Approveleave')}>
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>

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
  header: {
    color: "white",
    fontSize: wp('5%'), // 5% of screen width
    fontWeight: "bold",
    margin: wp('5%'), // 5% of screen width
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    padding: wp('6%'), // 6% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    margin: wp('5%'), // 5% of screen width
  },
  requestText: {
    fontSize: wp('4%'), // 4% of screen width
    color: "black",
  },
  submitButton: {
    backgroundColor: "blue",
    padding: wp('3%'), // 3% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    alignItems: "center",
    margin: wp('12%'), // 12% of screen width
  },
  submitText: {
    color: "white",
    fontSize: wp('4%'), // 4% of screen width
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

export default Leaveod;
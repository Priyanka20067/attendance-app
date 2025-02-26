import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
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

      {/* Welcome Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Nisha,</Text>
        <Text style={styles.subtitle}>Your friendly college tracker</Text>
        <Text style={styles.description}>
          Say hello to stress-free tracking and organizing attendance. It's quick,
          easy, and fun. Whether you're a student or a professor, we've got you
          covered with smart tools and a delightful experience.
        </Text>
      </View>

      {/* Scrollable Button Container */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StdAttendance')}>
            <Image source={require("../assets/icons/calendar.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>ATTENDANCE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StdTimeTable')}>
            <Image source={require("../assets/icons/history.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>TIME TABLE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
            <Image source={require("../assets/icons/circle.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InternalMark')}>
            <Image source={require("../assets/icons/book.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>INTERNAL MARK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Leave')}>
            <Image source={require("../assets/icons/checkbook.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>LEAVE / OD LETTER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ComplaintView')}>
            <Image source={require("../assets/icons/Strike.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>COMPLAINT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Post')}>
            <Image source={require("../assets/icons/Mailbox.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>POST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Announcement')}>
            <Image source={require("../assets/icons/Commercial.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>ANNOUNCEMENT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Staff')}>
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
    backgroundColor: "#12172B",
    justifyContent: 'space-between',
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
    alignItems: 'center',
    marginBottom: hp('3%'), // 3% of screen height
    paddingHorizontal: wp('5%'), // 5% of screen width
  },
  welcomeText: {
    color: '#fff',
    fontSize: wp('10%'), // 10% of screen width
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: wp('6%'), // 6% of screen width
    marginTop: hp('1%'), // 1% of screen height
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    fontSize: wp('4%'), // 4% of screen width
    marginTop: hp('2%'), // 2% of screen height
    lineHeight: hp('3%'), // 3% of screen height
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: hp('15%'), // 15% of screen height
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: hp('2%'), // 2% of screen height
    paddingHorizontal: wp('5%'), // 5% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    width: wp('80%'), // 80% of screen width
    marginVertical: hp('1%'), // 1% of screen height
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imagepng: {
    width: wp('10%'), // 10% of screen width
    height: hp('3%'), // 3% of screen height
    marginRight: wp('2%'), // 2% of screen width
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4%'), // 4% of screen width
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: hp('15%'), // 15% of screen height
  },
  navbar: {
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
    marginLeft: wp('1%'), // 1% of screen width
  },
});

export default Home;
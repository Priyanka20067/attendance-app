import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
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
        <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Nisha,</Text>
        <Text style={styles.subtitle}>Your friendly college tracker</Text>
        <Text style={styles.description}>
          Say hello to stress-free tracking and organizing attendance. It's quick,
          easy, and fun. Whether you're a student or a professor, we've got you
          covered with smart tools and a delightful experience.
        </Text>
      </View>

      {/* Scrollable content */}
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
          <TouchableOpacity style={styles.button} onPress={() =>  navigation.navigate('Profile')}>
            <Image source={require("../assets/icons/circle.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('InternalMark')}>
            <Image source={require("../assets/icons/book.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>INTERNAL MARK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Leave')}>
            <Image source={require("../assets/icons/checkbook.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>LEAVE / OD LETTER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('ComplaintView')}>
            <Image source={require("../assets/icons/Strike.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>COMPLAINT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Post')}>
            <Image source={require("../assets/icons/Mailbox.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>POST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Announcement')}>
            <Image source={require("../assets/icons/Commercial.png")} style={styles.imagepng} />
            <Text style={styles.buttonText}>ANNOUNCEMENT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navbar/Footer */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: "#12172B",
    justifyContent: 'space-between', 
    fontFamily:'Poppins',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerimg:{
    display:'flex',
    flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   backgroundColor:'white',
   padding:10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    
  },
  logonot:{
    width:30,
    height:30,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 24,
    marginTop: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    lineHeight: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%',
    marginVertical: 10,
    alignItems: 'center',
  },
  imagepng: {
    width: 37,
    height: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: 100, 
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right:0,
  },
  homeimage: {
    height: 42,
    width: 40,
  },
  navLabel: {
    fontSize: 10,
    marginLeft: 5,
  },
});

export default Home;

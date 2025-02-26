import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const announcements = [
  {
    id: '1',
    date: 'July 20 2025',
    time: '03.03 pm',
    title: 'Semester Dates Announced',
    category: 'Academic',
    file: 'semester-result.pdf',
  },
  {
    id: '2',
    date: 'August 17 2025',
    time: '03.03 pm',
    title: 'Emergency Announced',
    category: 'Academic',
    file: 'semester-result.pdf',
  },
  {
    id: '3',
    date: 'Jan 25 2025',
    time: '03.03 pm',
    title: 'Culturals Announced',
    category: 'Academic',
    file: 'semester-result.pdf',
  },
];

const AnnouncementCard = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.date}>
      <MaterialIcons name="event" size={wp('4%')} color="black" /> {item.date} | ⏰ {item.time}
    </Text>
    <Text style={styles.title}>📢 {item.title}</Text>
    <Text style={styles.category}>📂 Category: {item.category}</Text>
    <TouchableOpacity>
      <Text style={styles.file}>📄 {item.file}</Text>
    </TouchableOpacity>
  </View>
);

function Announcement() {
  return (
    <View style={styles.container}>
      <View style={styles.headerimg}>
        <Image
          source={require("../assets/icons/jeclogo.png")}
          style={styles.logo}
        />
        <View style={styles.logonotrow}>
          <Image
            source={require("../assets/icons/manage_search.png")}
            style={styles.logonot}
          />
          <Image
            source={require("../assets/icons/page_info.png")}
            style={styles.logonot}
          />
          <Image
            source={require("../assets/icons/notifications1.png")}
            style={styles.logonot}
          />
        </View>
      </View>
      <Text style={styles.header}>ANNOUNCEMENT</Text>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AnnouncementCard item={item} />}
      />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10172a',
  },
  header: {
    fontSize: wp('5%'), // 5% of screen width
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: hp('1%'), // 1% of screen height
    marginTop: hp('3%'), // 3% of screen height
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
  logonotrow: {
    flexDirection: 'row',
    gap: wp('2%'), // 2% of screen width
  },
  logonot: {
    width: wp('8%'), // 8% of screen width
    height: wp('8%'), // 8% of screen width
  },
  card: {
    backgroundColor: 'white',
    padding: wp('4%'), // 4% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    margin: wp('5%'), // 5% of screen width
  },
  date: {
    fontWeight: 'bold',
    marginBottom: hp('0.5%'), // 0.5% of screen height
  },
  title: {
    fontSize: wp('4.5%'), // 4.5% of screen width
    fontWeight: 'bold',
  },
  category: {
    color: '#555',
  },
  file: {
    color: '#007bff',
    marginTop: hp('0.5%'), // 0.5% of screen height
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

export default Announcement;
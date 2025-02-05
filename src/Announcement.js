import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity ,Image ,} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

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
      <MaterialIcons name="event" size={16} color="black" /> {item.date} | ⏰ {item.time}
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
  container: { flex: 1, backgroundColor: '#10172a' },
  header: { fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 10 ,marginTop:30, },
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
  logonotrow:{
    flexDirection:'row',
    gap:10,
  },
  logonot:{
    width:30,
    height:30,
    
  },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 10, 
    margin:20,
  },
  date: { fontWeight: 'bold', marginBottom: 5 },
  title: { fontSize: 16, fontWeight: 'bold' },
  category: { color: '#555' },
  file: { color: '#007bff', marginTop: 5 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
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
export default Announcement;
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Profile = ({navigation}) => {
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

       <View style={styles.navbar}>
                               <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
                                 <Image source={require("../assets/icons/home.png")} style={styles.homeimage}/>
                                 <Text style={styles.navLabel}>Home</Text> 
                               </TouchableOpacity>
                               <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
                                 <Image source={require("../assets/icons/profile.png")} style={styles.homeimage}/>
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
    padding: 10,
  },
  containerimage:{
    display:'flex',
    backgroundColor:'white',
    height:70,
    justifyContent:'flex-start',
    width:359,
    top:-10,
    left:-10,
    
  },
  logo:{
    marginTop:10,
    marginLeft:10,
    width:60,
    height:60,
  },
  profileSection: {
    flex: 1,
    alignItems: "center",
  },
  Row:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'space-between',
    
  },
  title: {
    fontSize: 38,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop:30,
  },
  illustration: {
    width: 150,
    height: 150,
    marginLeft:20,
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  infoText: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 10,
  },
  navbar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'white',
    marginTop:247,
    width:355,
  left:0,
    bottom:0,
    right:-10,
    },
    homeimage:{
    height:42,
    width:40,
    },
    navLabel:{
      fontSize:10,
    },
});

export default Profile;
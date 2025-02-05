import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet,  Dimensions } from "react-native";



const HodAnnouncement = ({navigation}) => {
  

  return (
    <View style={styles.container}>
      {/* Logo */}
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
      
            <View style={styles.headertitle}>
                <Text style={styles.headertext}>ANNOUNCEMENT</Text>
            </View>
            <View style={styles.Card}>
            <TouchableOpacity style={styles.subbox} onPress={() => navigation.navigate('UpdateAnnouncement')}>
                <Image source={require("../assets/icons/breaking.png")} style={styles.Cardimage}/>
                <Text style={styles.subboxText}>UPDATE ANNOUNCEMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subbox} onPress={() => navigation.navigate('Announcement')}>
                <Image source={require("../assets/icons/Eye.png")} style={styles.Cardimage}/>
                <Text style={styles.subboxText}>View  ANNOUNCEMENT</Text>
            </TouchableOpacity>
            </View>
         
       
       <View style={styles.navbar}>
                          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Hod')}>
                            <Image source={require("../assets/icons/home.png")} style={styles.homeimage}/>
                            <Text style={styles.navLabel}>Home</Text> 
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
                            <Image source={require("../assets/icons/profile.png")} style={styles.homeimage}/>
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
  
  header: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
   
  },
  headertitle:{
alignItems:'center',
marginTop:80,
marginBottom: 10,
  },
 headertext:{
   color:'white',
   fontSize:24,
   
 },
 card:{
    display:'flex',
   
 },
 subbox:{
    
    backgroundColor:'blue',
   alignItems:'center',
   margin:40,
   padding:40,
   borderRadius:40,
 },
 Cardimage:{
    height:30,
    width:30,
  },
 subboxText:{
    display:'flex',
   fontSize:20,
   borderRadius:10,
   color:'white',
   textAlign:'center',
 },
  navbar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'white',
     width: Dimensions.get('window').width,
     bottom:-73,
    },
    homeimage:{
    height:42,
    width:40,
    },
    navLabel:{
      fontSize:10,
      marginLeft:5,
    },
});
export default HodAnnouncement;
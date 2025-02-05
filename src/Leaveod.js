import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";



const Leaveod = ({navigation}) => {
  const requests = [
    { id: 1, name: "Nisha", section: "CSE-B" },
    { id: 2, name: "Nisha", section: "CSE-B" },
    { id: 3, name: "Nisha", section: "CSE-B" },
  ];

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
    margin: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    padding: 25,
    borderRadius: 10,
    margin:20,
  },
  requestText: {
    fontSize: 16,
    color: "black",
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    margin:50,
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  profileText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  navbar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'white',
    width:390,
    left:-20,
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
export default Leaveod;
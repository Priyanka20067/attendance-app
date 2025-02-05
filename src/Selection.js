 import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Selection = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top Gray Bar */}
      <View style={styles.topBar}>
        <Image
         source={require('../assets/icons/jeclogo.png')}
          style={styles.logo}
        />
      </View>

      {/* Login Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Signin')}>
          <Text style={styles.buttonText}>STUDENT LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Signin')}>
          <Text style={styles.buttonText}>STAFF LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Signin')}>
          <Text style={styles.buttonText}>HOD LOGIN</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121826",
    alignItems: "center",
  },
  topBar: {
    backgroundColor: "#D3D3D3",
    width: "100%",
    height: 80,
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,

  },
  buttonContainer: {
    marginTop: 150,
    width: "90%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1861FF",
    width: "90%",
    height:'20%',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent:'center',
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  navbar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'white',
    width:390,
    left:0,
    bottom:0,
    marginTop:51,
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
export default Selection;

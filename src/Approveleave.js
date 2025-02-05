import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";


// Import Logo (Fix for Spaces in Filename)
const Logo = require("../assets/icons/jeclogo.png"); // Rename if necessary

// Custom Navigation Bar (ONLY for Logo)
const CustomNavBar = ({navigation}) => {
  return (
    <View style={styles.navBar}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};


const Approveleave= () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    regarding: "",
    content: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    alert("Leave/OD Request Submitted!");
  };

  return (
    <View style={styles.container}>
      {/* Custom NavBar */}
      <CustomNavBar />
      <View style={styles.form}>
        <Text style={styles.navTitle}>Leave Request</Text>
        <Text style={styles.label}>NAME / ROLL NO</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name/Roll No"
          placeholderTextColor="#666"
          value={formData.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />

        <Text style={styles.label}>DEPARTMENT</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Department"
          placeholderTextColor="#666"
          value={formData.department}
          onChangeText={(text) => handleInputChange("department", text)}
        />

        <Text style={styles.label}>REGARDING</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Regarding"
          placeholderTextColor="#666"
          value={formData.regarding}
          onChangeText={(text) => handleInputChange("regarding", text)}
        />

        <Text style={styles.label}>CONTENT</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter Content"
          placeholderTextColor="#666"
          multiline
          numberOfLines={5}
          value={formData.content}
          onChangeText={(text) => handleInputChange("content", text)}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>APPROVE</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.navbaritem}>
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
    backgroundColor: "#1A1E27",
    
   
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  logo: {
    width: 70,
    height: 70,
    marginLeft: 10,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  form: {
    marginTop: 20,
    marginLeft:20,
    marginRight:20,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#D3D3D3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    color: "#000",
    fontSize: 16,
  },
  textArea: {
    backgroundColor: "#D3D3D3",
    padding: 15,
    borderRadius: 10,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 20,
    color: "#000",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    justifyContent:'center',
    alignSelf:'center',
    alignItems: 'center',
    width:200,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  
  navbaritem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    
    bottom:-30,
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
export default Approveleave;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';

const AddPost = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  // Function to handle image selection
  const selectImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
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
      <Text style={styles.header}>UPDATE ANOUNCEMENT</Text>

      <Text style={styles.label}>TITLE :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>CONTENT :</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Type the content"
        placeholderTextColor="#999"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <Text style={styles.label}>UPLOAD :</Text>
      <TouchableOpacity style={styles.uploadBox} onPress={selectImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.uploadImage} />
        ) : (
          <Text style={styles.plusIcon}>+</Text>
        )}
      </TouchableOpacity>
      <View  style={styles.submitcenter}>
      <Button mode="contained" style={styles.submitButton} onPress={() => alert('Post Submitted!')}>
        SUBMIT
      </Button>
      </View>
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

export default AddPost;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D192F',
      
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginVertical:15,
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
    label: {
      fontSize: 16,
      color: 'white',
      marginBottom: 5,
      margin:20,
    
    },
    input: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      fontSize: 16,
      marginBottom: 15,
      margin:20,
    
    },
    textArea: {
      height: 100,
      textAlignVertical: 'top',
    },
    uploadBox: {
      backgroundColor: '#E0E0E0',
      height: 110,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      margin:20,
    
    },
    plusIcon: {
      fontSize: 30,
      color: '#666',
    },
    uploadImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
    },
    submitcenter:{
      justifyContent:'center',
      alignSelf:'center',
    },
    submitButton: {
      backgroundColor: '#1E88E5',
      paddingVertical: 5,
      width:200,
      alignItems:'center',
      borderRadius:5,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        bottom: -18,
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
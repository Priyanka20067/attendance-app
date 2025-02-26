import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Import from library

const AddPost = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

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
        <Image source={require("../assets/icons/jeclogo.png")} style={styles.logo} />
        <Image source={require("../assets/icons/notifications.png")} style={styles.logonot} />
      </View>
      <Text style={styles.header}>ADD POST</Text>

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

      <View style={styles.submitcenter}>
        <Button mode="contained" style={styles.submitButton} onPress={() => alert('Post Submitted!')}>
          SUBMIT
        </Button>
      </View>

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
    fontSize: wp(5.5), // Responsive font size (5.5% of screen width)
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: hp(2.5), // Responsive margin (2.5% of screen height)
  },
  headerimg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: wp(2.5), // Responsive padding (2.5% of screen width)
  },
  logo: {
    width: wp(15), // Responsive width (15% of screen width)
    height: wp(15), // Responsive height (15% of screen width)
    borderRadius: wp(7.5), // Responsive border radius (7.5% of screen width)
  },
  logonot: {
    width: wp(7.5), // Responsive width (7.5% of screen width)
    height: wp(7.5), // Responsive height (7.5% of screen width)
  },
  label: {
    fontSize: wp(4), // Responsive font size (4% of screen width)
    color: 'white',
    marginBottom: hp(1), // Responsive margin (1% of screen height)
    margin: wp(5), // Responsive margin (5% of screen width)
  },
  input: {
    backgroundColor: 'white',
    borderRadius: wp(2.5), // Responsive border radius (2.5% of screen width)
    padding: wp(2.5), // Responsive padding (2.5% of screen width)
    fontSize: wp(4), // Responsive font size (4% of screen width)
    marginBottom: hp(2), // Responsive margin (2% of screen height)
    margin: wp(5), // Responsive margin (5% of screen width)
  },
  textArea: {
    height: hp(15), // Responsive height (15% of screen height)
    textAlignVertical: 'top',
  },
  uploadBox: {
    backgroundColor: '#E0E0E0',
    height: hp(15), // Responsive height (15% of screen height)
    borderRadius: wp(2.5), // Responsive border radius (2.5% of screen width)
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2.5), // Responsive margin (2.5% of screen height)
    margin: wp(5), // Responsive margin (5% of screen width)
  },
  plusIcon: {
    fontSize: wp(7.5), // Responsive font size (7.5% of screen width)
    color: '#666',
  },
  uploadImage: {
    width: '100%',
    height: '100%',
    borderRadius: wp(2.5), // Responsive border radius (2.5% of screen width)
  },
  submitcenter: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: hp(1), // Responsive padding (1% of screen height)
    width: wp(50), // Responsive width (50% of screen width)
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    bottom: hp(-3.5), // Responsive position (3.5% of screen height)
    left: 0,
    right: 0,
  },
  homeimage: {
    height: hp(5), // Responsive height (5% of screen height)
    width: wp(10), // Responsive width (10% of screen width)
  },
  navLabel: {
    fontSize: wp(2.5), // Responsive font size (2.5% of screen width)
    marginLeft: wp(1.25), // Responsive margin (1.25% of screen width)
  },
});
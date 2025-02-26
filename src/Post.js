import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Post = ({ navigation }) => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      image: require("../assets/icons/Mountain.png"),
      likes: 1,
      comments: 0,
      liked: false,
    },
    {
      id: "2",
      image: require("../assets/icons/Mountain.png"),
      likes: 0,
      comments: 2,
      liked: false,
    },
  ]);

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } : post));
  };

  const handleComment = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, comments: post.comments + 1 } : post));
  };

  return (
    <View style={styles.container}>
      {/* TOP NAVBAR */}
      <View style={styles.topNavbar}>
        <Image source={require("../assets/icons/jeclogo.png")} style={styles.logo} />
      </View>

      {/* PROFILE CARD */}
      <View style={styles.profileCard}>
        <Image source={require('../assets/icons/download.png')} style={styles.profile} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>A.DIANA</Text>
          <Text style={styles.letter}>B.E. COMPUTER SCIENCE AND ENGINEERING</Text>
          <Text style={styles.letter}>JAYA ENGINEERING COLLEGE</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('')}>
              <Text style={styles.buttonText}>Edit</Text>
              <Ionicons name="pencil" size={wp('3.5%')} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButtonpost} onPress={() => navigation.navigate('AddPost')}>
              <Text style={styles.buttonText}>Add Post</Text>
              <Ionicons name="add-circle" size={wp('3.5%')} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* POSTS SECTION */}
      <Text style={styles.post}>MY POST :</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Image source={item.image} style={styles.postImage} />
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postdescription}>
              A clean layout with a title, author details, content, images, and related posts
            </Text>
            <View style={styles.actionRow}>
              <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.iconButton}>
                <Ionicons name="heart" size={wp('5%')} color={item.liked ? "red" : "white"} />
                <Text style={styles.iconText}>{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleComment(item.id)} style={styles.iconButton}>
                <Ionicons name="chatbubble-outline" size={wp('5%')} color="white" />
                <Text style={styles.iconText}>{item.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="share-outline" size={wp('5%')} color="white" />
                <Text style={styles.iconText}> share </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="ellipsis-horizontal" size={wp('5%')} color="white" />
                <Text style={styles.iconText}> </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1B2A",
    paddingBottom: hp('7%'), // 7% of screen height
  },
  topNavbar: {
    backgroundColor: "white",
    height: hp('8%'), // 8% of screen height
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp('4%'), // 4% of screen width
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  logo: {
    width: wp('12%'), // 12% of screen width
    height: wp('12%'), // 12% of screen width (to maintain aspect ratio)
    resizeMode: "contain",
  },
  profileCard: {
    backgroundColor: "white",
    padding: wp('4%'), // 4% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp('1.5%'), // 1.5% of screen height
    marginHorizontal: wp('3%'), // 3% of screen width
  },
  profile: {
    height: wp('25%'), // 25% of screen width
    width: wp('25%'), // 25% of screen width (to maintain aspect ratio)
  },
  profileInfo: {
    flex: 1,
    color: "black",
    marginLeft: wp('3%'), // 3% of screen width
  },
  name: {
    color: "black",
    fontSize: wp('5%'), // 5% of screen width
    fontWeight: "bold",
  },
  letter: {
    color: "black",
    fontSize: wp('3%'), // 3% of screen width
    fontWeight: "semibold",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    marginTop: hp('1.5%'), // 1.5% of screen height
    marginBottom:hp('5%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: hp('1.5%'), // 1.5% of screen height
  },
  actionButton: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "blue",
    color: 'white',
    width: wp('20%'), // 20% of screen width
    padding: wp('1.5%'), // 1.5% of screen width
    borderRadius: wp('5%'), // 5% of screen width
    marginHorizontal: wp('1%'), // 1% of screen width
  },
  actionButtonpost: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "blue",
    color: 'white',
    width: wp('25%'), // 25% of screen width
    padding: wp('1.5%'), // 1.5% of screen width
    borderRadius: wp('5%'), // 5% of screen width
    marginHorizontal: wp('1%'), // 1% of screen width
  },
  buttonText: {
    color: "white",
    fontSize: wp('3.5%'), // 3.5% of screen width
    paddingRight: wp('2%'), // 2% of screen width
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  post: {
    color: "white",
    marginLeft: wp('5%'), // 5% of screen width
    fontSize: wp('5%'), // 5% of screen width
    fontWeight: "bold",
    marginTop: hp('2%'), // 2% of screen height
  },
  postImage: {
    height: hp('25%'), // 25% of screen height
    width: '100%',
    marginTop: hp('2%'), // 2% of screen height
  },
  postdescription: {
    color: "white",
    marginLeft: wp('7%'), // 7% of screen width
    fontSize: wp('3.5%'), // 3.5% of screen width
    fontWeight: "semibold",
    marginTop: hp('1%'), // 1% of screen height
  },
  iconText: {
    color: "white",
    marginLeft: wp('1%'), // 1% of screen width
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

export default Post;
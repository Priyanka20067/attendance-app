import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

const Post = ({navigation}) => {
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
        <Image source={require('../assets/icons/download.png')} style={styles.profile}/>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>A.DIANA</Text>
          <Text style={styles.letter}>B.E. COMPUTER SCIENCE AND ENGINEERING</Text>
          <Text style={styles.letter}>JAYA ENGINEERING COLLEGE</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={()=>navigation.navigate('')}>
              <Text style={styles.buttonText}>Edit</Text>
              <Ionicons name="pencil" size={14} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButtonpost} onPress={()=>navigation.navigate('AddPost')}>
              <Text style={styles.buttonText}>Add Post</Text>
              <Ionicons name="add-circle" size={14} color="white" />
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
                <Ionicons name="heart" size={20} color={item.liked ? "red" : "white"} />
                <Text style={styles.iconText}>{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleComment(item.id)} style={styles.iconButton}>
                <Ionicons name="chatbubble-outline" size={20} color="white" />
                <Text style={styles.iconText}>{item.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="share-outline" size={20} color="white" /> 
                <Text style={styles.iconText}> share </Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="ellipsis-horizontal" size={20} color="white" /> 
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
    paddingBottom: 60,
  },
  topNavbar: {
    backgroundColor: "white",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  profileCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  profile:{
    height:100,
    width:100,
  },
  profileInfo: {
    flex: 1,
    color: "black",
  },
  name: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  letter: {
    color: "black",
    fontSize: 10,
    fontWeight: "semibold",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent:'space-evenly',
    marginTop: 10,
  },
  buttonContainer:{
    flexDirection:'row',
  },
  actionButton: {
    flexDirection: "row",
    justifyContent:'center',
    alignItems: "center",
    backgroundColor: "blue",
    color:'white',
    width:70,
    padding: 5,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  actionButtonpost:{
    flexDirection: "row",
    justifyContent:'center',
    alignItems: "center",
    backgroundColor: "blue",
    color:'white',
    width:100,
    padding: 5,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    paddingRight:10,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  post: {
    color: "white",
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  postImage:{
    height:190,
    width:'100%'
  },
  postdescription: {
    color: "white",
    marginLeft: 30,
    fontSize: 14,
    fontWeight: "semibold",
  },
  iconText: {
    color: "white",
    marginLeft: 5,
  },
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

export default Post;
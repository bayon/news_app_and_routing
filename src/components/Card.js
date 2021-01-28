import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
//import { Ionicons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as newsAction from "../../redux/actions/newsAction";

const Card = (props) => {
  console.log("PROPS IN CARD:", props); //blank until made part of the navigation
  //eg. the calling jsx needs attribute navigation={props.navigation} ...

  const dispatch = useDispatch();
  //some() returns true or false
  const isFav = useSelector((state) =>
    state.news.favorites.some((article) => article.url === props.url)
  );
  const defaultImage =
    "https://avatars.githubusercontent.com/u/4679115?s=460&v=4";
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('NewsDetails',{
          articleUrl: props.url,
        });
      }}
    >
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: props.image ? props.image : defaultImage }}
            style={styles.image}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {props.title && props.title.length > 24
              ? props.title.slice(0, 24) + "..."
              : props.title}
          </Text>
          <MaterialIcons
            name={isFav ? "favorite" : "favorite-border"}
            size={24}
            color="black"
            onPress={() => {
              dispatch(newsAction.toggleFavorites(props.url));
            }}
          />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            {props.description && props.description.length > 100
              ? props.description.slice(0, 100) + "..."
              : props.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    overflow: "hidden",
  },
  titleWrapper: {
    height: "15%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "#ffffff",
    height: 300,
    margin: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    /*fontFamily: 'Ubuntu-Bold',*/
      fontSize: 20
  },
  description: {
    //fontFamily: 'Ubuntu',
    fontSize: 15,
    marginTop: 15,
  },
});

export default Card;

/*
 //local: use require() on web use {uri:'link'}
            //source={require("../../assets/icon.png")} 
            source={{uri:'data:image/jpeg;base64,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'}}

            */

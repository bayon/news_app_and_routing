import React from "react";
import { StyleSheet, View, Text,ImageBackground, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { useSelector,useDispatch } from "react-redux";
import * as newsAction from "../../redux/actions/newsAction";


const NewsDetailsScreen = props => {

    const dispatch = useDispatch();
  const { articleUrl } = props.route.params;
  const article = useSelector( state => state.news.articles.articles.find((article) => article.url === articleUrl));
  const isFav = useSelector((state) =>
    state.news.favorites.some((article) => article.url === article.url)
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <View>
        <ImageBackground style={styles.image}  source={{ uri: article.urlToImage }}>
        <View style={styles.titleContainer}>
            <Text style={styles.author}>{article.author}</Text>
            <MaterialIcons
            name={isFav ? "favorite" : "favorite-border"}
            size={24}
            color="black"
            onPress={() => {
              dispatch(newsAction.toggleFavorites(article.url));
            }}
          />
          </View>
         
        </ImageBackground>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{article.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    //fontFamily: "Ubuntu-Bold",
    fontSize: 24,
    fontWeight: 'bold'
  },
  titleContainer: {
     backgroundColor:'rgba(0,0,0,0.5)',
     flexDirection:'row',
     justifyContent: 'space-between',
     paddingVertical:5,
     paddingHorizontal: 10
  },
  image: {
    height: 200,
    width: "100%",
    justifyContent: "flex-end",
  },
  author: {
    fontSize: 22,
    color: "white",
  },
  description: {
    margin: 10,
  },
  descriptionText: {
    fontSize: 18,
  },
});

export default NewsDetailsScreen;


/*
 <ImageBackground
          style={styles.image}
          source={{ uri: article.urlToImage }}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.author}>{article.author}</Text>
            <MaterialIcons/>
          </View>
        </ImageBackground>
        */
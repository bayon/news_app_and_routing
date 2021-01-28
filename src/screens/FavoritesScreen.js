import React from 'react';
import { StyleSheet,  FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import Card from "../components/Card";



const FavoritesScreen = props => {

const favorites = useSelector(state => state.news.favorites);

    return (
        <FlatList 
        data={favorites}
        keyExtractor={item => item.url}
        renderItem={({item})=> (
          <Card 
            navigation={props.navigation}
            title={item.title}
            description={item.description}
            image={item.urlToImage}
            url={item.url}
          />
        )}
       />
    )
  

}
const styles = StyleSheet.create({

})


export default FavoritesScreen;
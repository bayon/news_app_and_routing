import React,{useEffect} from "react";
import { StyleSheet,FlatList} from "react-native";
import Card from "../components/Card";
import {useSelector, useDispatch} from 'react-redux';
import * as newsAction from '../../redux/actions/newsAction';

//IMPORTANT: navigation sends special info via props
//REDUX: import hooks to access state and dispatch actions. import needed actions too.

const NewsListScreen = (props) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsAction.fetchArticles())
  },[dispatch])
//prevent multiple calls by setting dispatch as a dependency.

const articles = useSelector(state => state.news.articles)
console.log('API _articles:',articles)
  return (
      
       <FlatList 
        data={articles.articles}
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

  );
};
const styles = StyleSheet.create({});

export default NewsListScreen;

/*
NAVIGATION PROPS: Object {
  "navigation": Object {
    "addListener": [Function addListener],
    "canGoBack": [Function canGoBack],
    "dangerouslyGetParent": [Function dangerouslyGetParent],
    "dangerouslyGetState": [Function anonymous],
    "dispatch": [Function dispatch],
    "goBack": [Function anonymous],
    "isFocused": [Function isFocused],
    "navigate": [Function anonymous],
    "pop": [Function anonymous],
    "popToTop": [Function anonymous],
    "push": [Function anonymous],
    "removeListener": [Function removeListener],
    "replace": [Function anonymous],
    "reset": [Function anonymous],
    "setOptions": [Function setOptions],
    "setParams": [Function anonymous],
  },
  "route": Object {
    "key": "NewsList-4aQgnouhAPYpvHIJRWLLZ",
    "name": "NewsList",
    "params": undefined,
  },
}
*/

/*
Error: Actions may not have an undefined "type" property. Have you misspelled a constant?

This error is located at:
    in NewsListScreen (at SceneView.tsx:122)
*/

/*
 <Card navigation={props.navigation} ></Card>
       //replace with FlatList 

       */
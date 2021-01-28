import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

//import { AppLoading } from 'expo';
// import AppLoading from 'expo-app-loading'
import AppNavigator from "./src/navigation/AppNavigator";

//import * as Font from 'expo-font';
// const loadFonts = () => {
//   return Font.loadAsync({
//     'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
//     'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf')

//   })
// }

export default function App(props) {
  //const [fontLoaded, setFontLoaded] = useState(false)
  /*
FONT LOADING PROBLEM: 
AppLoading threw an unexpected error when loading:
Error: AppLoading onError prop is required if startAsync is provided
  if(!fontLoaded){
    return(
      <AppLoading 
      startAsync={loadFonts}
      onFinish={ () => setFontLoaded(true)} />
    )
  
  }  
*/
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

/*

google fonts 
expo fons
need async load ....

expo install expo-app-loading

*/

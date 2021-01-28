import React from 'react';
import {StyleSheet, Text, View, Platform } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>News App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === "android" ? 'white' : 'silver' ,
        padding:15,
        borderBottomColor:'#ffffff',
        borderBottomWidth:1,
        
    },
    title:{
        marginTop: 40,
        textAlign: 'center', 
        fontSize: 20, 
        color: Platform.OS === "android" ? 'silver' : 'white' ,
    }
})


export default Header;
import React from 'react';
import {View, Text, StyleSheet, ProgressViewIOSComponent, TouchableOpacity} from 'react-native';

const Task = (props) =>{
    return(
        <View style={styles.item}>
        <View style={styles.leftitem}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>

        </View>
        <View style={styles.circular}>
        
      </View>
        </View>
    )
}


const styles = StyleSheet.create({
    item:{
        width:'100rem',
        height:30,
        backgroundColor:'#FFF',
        paddingHorizontal:30,
        borderRadius:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:15,
    },
    leftitem:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:20,
        height:20,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    text:{
        maxWidth:'80%',
    },
    circular:{
        width:12,
        height:12,
        backgroundColor:"#55BCF6",
        borderwidth:2,
        borderRadius:5,
    }
});
export default Task;
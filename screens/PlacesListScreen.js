import React from "react";
import { View, Text, StyleSheet, Platform,Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { HeaderButtons,Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = props =>{
    const places = useSelector(state => state.places.places)
    if(places.length===0){
        return (              
        <Image source={{uri: 'https://speedmonks.in/assets/speedmonk/images/no-product-found.jpg'}}
       style={{width: 400, height: 400, marginTop:160, marginLeft:12}} />      
        )
    }
    const renderItem = (itemData) => (
       
        <PlaceItem title={itemData.item.title}
         image={itemData.item.imageUri}
          address={null} 
          onSelect={()=>{
            props.navigation.navigate('PlaceDetail',{
                placeTitle:itemData.item.title,
                placeId:itemData.item.id
            })
        }}/>
      );
    return (
        
        <FlatList
        data={places}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
       
    )
};
PlacesListScreen.navigationOptions=navData=>{
    return {
        headerTitle:'all places',
        headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="add place" 
            iconName={Platform.OS === "android" ? 'md-add' : 'ios-add'}
            onPress={()=>{
                navData.navigation.navigate('NewPlace')
            }}
            />
        </HeaderButtons>
    }  
}
const styles = StyleSheet.create({})
export default PlacesListScreen;
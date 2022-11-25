import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import * as placesActions from '../store/places-action'
import ImgPicker from "../components/ImgPicker";
const NewPlaceScreen = props => {
    const [titleValue, settiTleValue] = useState()
    const [selectedImage, setSelectedImage] = useState();
    // const [place, setPlace] = useState()
    const dispatch = useDispatch()
    const onChangeTextHandler = (text) => {
        settiTleValue(text)
    }
    const savaPlaceHandler = () => {
        if(titleValue===undefined){
          alert('Please enter your title')
        }else{
            dispatch(placesActions.addPlace(titleValue,selectedImage));
            props.navigation.goBack()
        }
        
        // setPlace(titleValue)
        // settiTleValue('')
    }
    const imageTakenHandler = (imageFromImagePicker) =>{
        setSelectedImage(imageFromImagePicker)
    }
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.title}>
                    Title {titleValue}
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextHandler}
                    value={titleValue}
                />
                <ImgPicker onTakenImage={imageTakenHandler}/>
                <Button title="SAVE Place" onPress={savaPlaceHandler} />
            </View>
        </ScrollView>
    )
}
NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
}
const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    title: {
        fontSize: 25,
        marginBottom: 15
    },
    input: {
        borderBottomWidth: 2,
        marginBottom: 20,
        borderBottomColor: "#ccc",
        paddingVertical: 5,
        paddingHorizontal: 2,
    },

})
export default NewPlaceScreen;
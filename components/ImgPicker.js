import React, { useState } from 'react'
import { View,Text, StyleSheet, Image, Button } from 'react-native'
import { MyColor } from '../assets/colors'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
export const ImgPicker = (props) => {
    const [clickImage, setClickImage] = useState()
    const verifyPermission = async () =>{
        const result =await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if(result.status!=='granted'){
            Alert.alert(
                "Insufficient permission",
                "need to grant camera permission for use this app",
                [
                  {
                    text: "OK",
                  },
                  
                ]
              );
              return false;
        }
        return true;
    }
    const takeImageHandler = async () =>{
      const hasPermission = await verifyPermission()
        if(!hasPermission){
            return;
        }
       const image = await ImagePicker.launchCameraAsync(
        {
            allowsEditing: true,
            aspect: [12, 9],
            quality: 0.5,
        }
        
       );
       setClickImage(image.uri)
    //    console.log(image)
    props.onTakenImage(image.uri)
    }

  return (
   <View style={styles.imagePicker}>
    <View style={styles.imagePreview}>
       {!clickImage ? (<Text>No image is choosen.</Text>) :
        (<Image style={styles.image} source={{uri:clickImage}}/>)}
    </View>
    <Button 
    title='Take Image'
    color={MyColor.button}
    onPress={takeImageHandler}
    style={{marginBottom:10}}
    />
   </View>
  )
}
const styles= StyleSheet.create({
imagePicker:{
alignItems:'center',
margin:10
},
imagePreview:{
    width:'100%',
    height:200,
    marginBottom:10,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#ccc',
    borderWidth:1
},
image:{
    width:'100%',
    height:'100%'
}
})
export default ImgPicker;

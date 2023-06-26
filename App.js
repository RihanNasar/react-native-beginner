import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

const PlaceHolderImage = require('./assets/images/background-image.png')

export default function App() {
  const [selectedImage,setSelectedImage] = useState(null)
  const [showOptions,setShowOptions] = useState(false)
  const onReset = () => {
    setShowOptions(false)
  }
  const onAddSticker = () => {
    // 
  }
  const saveImage = () => {
    // 
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    if(!result.canceled) {
      setSelectedImage(result.assets[0].url)
      setShowOptions(true)
    } else {
      console.log("you did not select any image")
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceHolderImage} selectedImage={selectedImage}/>
      </View>
      {showOptions ? 
       (
        <>
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        </>
       ) : 
        (
          <View style={styles.footerContainer}>
          <Button theme="primary"label="Choose a photo" onPress={pickImage} />
          <Button theme="secondary"label="Use this photo" onPress={() => setShowOptions(true)} />
          </View>
        )
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a39193',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer : {
    flex: 1,
    paddingTop: 70,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerContainer : {
    flex : 1/3,
    alignItems : 'center',

  }
  
});

import React, {Component} from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import ImagePicker from 'react-native-image-picker'

export function showImagePicker(handle){
      const options = {
        title: '选择图片',
        cancelButtonTitle: '取消',
        takePhotoButtonTitle: '拍照',
        chooseFromLibraryButtonTitle: '图片库',
        cameraType: 'back',
        mediaType: 'photo',
        videoQuality: 'high',
        durationLimit: 10,
        maxWidth: 600,
        maxHeight: 600,
        aspectX: 2,
        aspectY: 1,
        quality: 0.8,
        angle: 0,
        allowsEditing: false,
        noData: false,
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
         source = { uri: response.uri };
        handle(source);
      }
      });

  }

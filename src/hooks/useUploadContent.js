import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { Alert } from "react-native";

export const useUploadContent = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result;
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
    });

    const source = { uri: result.uri };
    setImage(source);
  };

  const uploadImage = () => {
    setUploading(true);
    const storageRef = ref(storage, "image");
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        Alert.alert("file Uploaded!!");
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
    setUploading(false);
  };

  return {
    image,
    uploading,
    pickImage,
    uploadImage,
  };
};

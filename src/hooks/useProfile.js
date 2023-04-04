import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const useProfile = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSignup = () => {
    if (email !== "" && password !== "") {
      console.log(auth);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => navigation.navigate("Chat"))
        .catch((err) => Alert.alert("Login error", err.message));
    } else {
      Alert.alert("Enter a valid input");
    }
  };
  return {
    email,
    password,
    setEmail,
    setPassword,
    onHandleSignup,
  };
};

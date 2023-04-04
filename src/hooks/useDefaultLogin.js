import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const useDefaultLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigation.navigate("Chat"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    onHandleLogin,
  };
};

import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Feather";

const Footer = ({ AppState, navigation }) => {
  const { chosenIndieID, followerCount } = AppState;

  return (
    <View style={styles.footer}>
      <Icon
        name={"home"}
        size={27}
        color="#141414"
        onPress={() => navigation.navigate("Home")}
      />
      <Text>
        {chosenIndieID} - {followerCount >= 0 ? followerCount : 0}
      </Text>

      <Icon
        name={"user"}
        size={27}
        color="#141414"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
  },
});

export default Footer;

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  registerFollowMasterID,
  getFollowMaster,
  registerIndieID,
} from "native-notify";
import Footer from "../../Footer/Footer";

const Login = ({ AppState, navigation }) => {
  const {
    indieIDs,
    chosenIndieID,
    setChosenIndieID,
    setFollowers,
    setFollowerCount,
    setfollowing,
  } = AppState;

  const getFollowMasterInfo = async () => {
    let followMasterData = await getFollowMaster(
      `${chosenIndieID}`,
      7088,
      "gbtP6FgtvyPGBOswvWTgNJ"
    );

    setFollowers(followMasterData.follower_indie_ids);
    setfollowing(followMasterData.following_indie_ids);
    setFollowerCount(followMasterData.follower_count);
  };

  const handleLogin = async (index) => {
    registerIndieID(`${indieIDs[index]}`, 7088, "gbtP6FgtvyPGBOswvWTgNJ");
    let regFolMasID = await registerFollowMasterID(
      `${indieIDs[index]}`,
      7088,
      "gbtP6FgtvyPGBOswvWTgNJ"
    );

    setChosenIndieID(indieIDs[index]);
  };
  // useEffect(() => {
  //   if (chosenIndieID) {
  //     getFollowMasterInfo();
  //   }
  // }, [chosenIndieID]);

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <TouchableOpacity
          style={
            chosenIndieID === indieIDs[0] ? styles.chosenButton : styles.button
          }
          onPress={() => handleLogin(0)}
        >
          <Text>User 1 Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            chosenIndieID === indieIDs[1] ? styles.chosenButton : styles.button
          }
          onPress={() => handleLogin(1)}
        >
          <Text>User 2 Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            chosenIndieID === indieIDs[2] ? styles.chosenButton : styles.button
          }
          onPress={() => handleLogin(2)}
        >
          <Text>User 3 Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            chosenIndieID === indieIDs[3] ? styles.chosenButton : styles.button
          }
          onPress={() => handleLogin(3)}
        >
          <Text>User 4 Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            chosenIndieID === indieIDs[4] ? styles.chosenButton : styles.button
          }
          onPress={() => handleLogin(4)}
        >
          <Text>User 5 Login</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} AppState={AppState} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  body: {
    flex: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    padding: 20,
    borderWidth: 1,
    margin: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 0.75,
    borderColor: "#d8d8d8",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  chosenButton: {
    width: "80%",
    padding: 20,
    borderWidth: 1,
    margin: 20,
    alignItems: "center",
    backgroundColor: "#3675d1",
    borderRadius: 8,
    borderWidth: 0.75,
    borderColor: "#d8d8d8",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default Login;

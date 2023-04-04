import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React, { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  registerFollowerID,
  postFollowingID,
  unfollowMasterID,
  updateFollowersList,
  getFollowMaster,
} from "native-notify";
import axios from "axios";
import Footer from "../../Footer/Footer";

const Home = ({ AppState, navigation }) => {
  const {
    indieIDs,
    chosenIndieID,
    setFollowers,
    setFollowerCount,
    following,
    setfollowing,
  } = AppState;

  useIsFocused();

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

  const handleFollow = async (index) => {
    let regFolID = await registerFollowerID(
      indieIDs[index],
      chosenIndieID,
      7088,
      "gbtP6FgtvyPGBOswvWTgNJ"
    );

    let postFolID = await postFollowingID(
      `${chosenIndieID}`,
      `${indieIDs[index]}`,
      7088,
      "gbtP6FgtvyPGBOswvWTgNJ"
    );

    getFollowMasterInfo();
  };

  const handleUnFollow = async (index) => {
    let upFolList = await updateFollowersList(
      `${chosenIndieID}`,
      `${indieIDs[index]}`,
      7088,
      "gbtP6FgtvyPGBOswvWTgNJ"
    );

    getFollowMasterInfo();
  };

  const handlePushNotification = () => {
    let username = chosenIndieID;

    const options = {
      masterSubID: `${chosenIndieID}`,
      appId: 7088,
      appToken: "gbtP6FgtvyPGBOswvWTgNJ",
      title: `${username} just uploaded a content`,
      message: "Check it out",
      pushData: { screenName: "screen name" },
    };

    axios.post(`https://app.nativenotify.com/api/follow/notification`, options);
  };

  useEffect(() => {
    handlePushNotification();
  }, [handleFollow]);

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <View style={styles.chat}>
          <Button
            style={{ borderRadius: 50 }}
            title={"Go to Chat"}
            onPress={() => navigation.navigate("Chat")}
          />
        </View>

        <TouchableOpacity
          style={
            following
              ? following.includes(indieIDs[0])
                ? styles.chosenButton
                : styles.button
              : styles.button
          }
          onPress={() =>
            following
              ? following.includes(indieIDs[0])
                ? handleUnFollow(0)
                : handleFollow(0)
              : handleFollow(0)
          }
        >
          <Text>
            {following
              ? following.includes(indieIDs[0])
                ? "Unfollow user 1"
                : "Follow user 1"
              : "Follow user 1"}
          </Text>
        </TouchableOpacity>
        {/**Second Button */}
        <TouchableOpacity
          style={
            following
              ? following.includes(indieIDs[1])
                ? styles.chosenButton
                : styles.button
              : styles.button
          }
          onPress={() =>
            following
              ? following.includes(indieIDs[1])
                ? handleUnFollow(1)
                : handleFollow(1)
              : handleFollow(1)
          }
        >
          <Text>
            {following
              ? following.includes(indieIDs[1])
                ? "Unfollow user 2"
                : "Follow user 2"
              : "Follow user 2"}
          </Text>
        </TouchableOpacity>

        {/**Third Button */}
        <TouchableOpacity
          style={
            following
              ? following.includes(indieIDs[2])
                ? styles.chosenButton
                : styles.button
              : styles.button
          }
          onPress={() =>
            following
              ? following.includes(indieIDs[2])
                ? handleUnFollow(2)
                : handleFollow(2)
              : handleFollow(2)
          }
        >
          <Text>
            {following
              ? following.includes(indieIDs[2])
                ? "Unfollow user 3"
                : "Follow user 3"
              : "Follow user 3"}
          </Text>
        </TouchableOpacity>

        {/**Fourth Button */}
        <TouchableOpacity
          style={
            following
              ? following.includes(indieIDs[3])
                ? styles.chosenButton
                : styles.button
              : styles.button
          }
          onPress={() =>
            following
              ? following.includes(indieIDs[3])
                ? handleUnFollow(3)
                : handleFollow(3)
              : handleFollow(3)
          }
        >
          <Text>
            {following
              ? following.includes(indieIDs[3])
                ? "Unfollow user 4"
                : "Follow user 4"
              : "Follow user 4"}
          </Text>
        </TouchableOpacity>

        {/**Fifth Button */}
        <TouchableOpacity
          style={
            following
              ? following.includes(indieIDs[4])
                ? styles.chosenButton
                : styles.button
              : styles.button
          }
          onPress={() =>
            following
              ? following.includes(indieIDs[4])
                ? handleUnFollow(4)
                : handleFollow(4)
              : handleFollow(4)
          }
        >
          <Text>
            {following
              ? following.includes(indieIDs[4])
                ? "Unfollow user 5"
                : "Follow user 5"
              : "Follow user 5"}
          </Text>
        </TouchableOpacity>

        <View style={styles.sendButton}>
          <Button
            color="orange"
            title={"Upload Image"}
            onPress={() => {
              navigation.navigate("UploadContent");
            }}
          />
        </View>
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
  sendButton: {
    width: "100%",
    marginTop: 0,
  },
  chat: {
    width: "30%",
    backgroundColor: "red",
  },
});
export default Home;

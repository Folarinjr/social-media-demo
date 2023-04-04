import React, { useState } from "react";
import AppNavigation from "../AppNavigation/AppNavigation";

const AppState = () => {
  const indieIDs = ["user-1", "user-2", "user-3", "user-4", "user-5"];
  const [chosenIndieID, setChosenIndieID] = useState("");
  const [followers, setFollowers] = useState([]);
  const [followerCount, setFollowerCount] = useState(0);
  const [following, setfollowing] = useState([]);

  const AppState = {
    indieIDs,
    chosenIndieID,
    setChosenIndieID,
    followers,
    setFollowers,
    followerCount,
    setFollowerCount,
    following,
    setfollowing,
  };
  return <AppNavigation AppState={AppState} />;
};

export default AppState;

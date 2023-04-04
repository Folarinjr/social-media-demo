import registerNNPushToken from "native-notify";
import AppState from "./src/AppState/AppState";

export default function App() {
  registerNNPushToken(7088, "gbtP6FgtvyPGBOswvWTgNJ");
  return <AppState />;
}

import { Navigation } from "react-native-navigation";

import FeedsScreen from "./FeedsScreen";
import ExploreScreen from "./ExploreScreen";

export const registerScreens = () => {
  Navigation.registerComponent("client.FeedsScreen", () => FeedsScreen);
  Navigation.registerComponent("client.ExploreScreen", () => ExploreScreen);
};

import { Navigation } from "react-native-navigation";

import FeedsScreen from "./FeedsScreen";
import ExploreScreen from "./ExploreScreen";
import CollectionScreen from "./CollectionScreen";
import WithProvider from "../components/WithProvider";

export const registerScreens = () => {
  Navigation.registerComponent("client.FeedsScreen", () => WithProvider(FeedsScreen));
  Navigation.registerComponent("client.ExploreScreen", () => WithProvider(ExploreScreen));
  Navigation.registerComponent("client.CollectionScreen", () =>
    WithProvider(CollectionScreen)
  );
};

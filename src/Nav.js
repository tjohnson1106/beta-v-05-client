import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";
import { iconsMap } from "./utils/themes";
import appInitialized from "./utils/appInitialized";

registerScreens();

export function startLogin() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "client.LoginScreen",
      navigatorStyles: {
        navaBarHidden: true
      }
    }
  });
}

export function startMainApp() {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "Feeds",
        screen: "client.FeedsScreen",
        title: "Saga",
        icon: iconsMap.home
      },
      {
        label: "Collections",
        screen: "client.CollectionScreen",
        title: "Saga",
        icon: iconsMap.dashboard
      },
      {
        label: "Explore",
        screen: "client.ExploreScreen",
        title: "Saga",
        icon: iconsMap.search1
      }
    ]
  });
}

export function init() {
  appInitialized();
}

import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";
import { iconsLoaded, iconsMap } from "./utils/themes";

registerScreens();

export default class Nav {
  constructor() {
    iconsLoaded.then(() => this._initApp());
  }

  _initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Feeds",
          screen: "client.FeedsScreen",
          title: "Saga",
          icon: iconsMap.home
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
}

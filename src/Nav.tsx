import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";

registerScreens();

export default class Nav {
  constructor() {
    this._initApp();
  }

  _initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Feeds",
          screen: "client.FeedsScreen",
          title: "Saga"
        },
        {
          label: "Explore",
          screen: "client.ExploreScreen",
          title: "Saga"
        }
      ]
    });
  }
}

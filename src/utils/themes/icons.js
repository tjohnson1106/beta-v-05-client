import * as React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Platform, PixelRatio } from "react-native";

const navIconSize =
  __DEV__ === false && Platform.OS === "android"
    ? PixelRatio.getPixelSizeForLayoutSize(25)
    : 25;

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = {
  home: [navIconSize, AntDesign],
  dashboard: [navIconSize, AntDesign],
  search1: [navIconSize, AntDesign]
};

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][1];
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ""),
        icons[iconName][0]
      );
    })
  ).then(sources => {
    Object.keys(icons).forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

    resolve(true);
  });
});

export { iconsMap, iconsLoaded };

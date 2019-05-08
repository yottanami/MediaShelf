// @flow

import variable from "./../variables/platform";

export default (variables /*: * */ = variable) => {
  const textTheme = {
    paddingBottom: 20,
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: "#bbb",
    ".note": {
      color: "#a7a7a7",
      fontSize: variables.noteFontSize
    }
  };

  return textTheme;
};

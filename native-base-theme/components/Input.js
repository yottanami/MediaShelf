// @flow

import variable from './../variables/platform';

export default (variables /*: * */ = variable) => {
  const inputTheme = {
    '.multiline': {
      height: null,
    },
    backgroundColor: '#0e2d3f',
    width: '80%',
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20,
    flex: 1,
    fontSize: variables.inputFontSize
  };

  return inputTheme;
};

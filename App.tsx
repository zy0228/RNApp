/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import SignedInStack from './screen/signedInStack';
import SignedOutStack from './screen/signedOutStack';

function App(): React.JSX.Element {

  const isSigned = true;

  return (
    isSigned ? <SignedInStack /> : <SignedOutStack />
  );
}

export default App;

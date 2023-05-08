
import React from 'react';
import {
  ScrollView
} from 'react-native';
import HomeMainScreen from './src/Screens/HomeMainScreen';

function App(): JSX.Element {

  return (
    <ScrollView style={{backgroundColor : "#F5F6FA"}}>
      <HomeMainScreen/>
    </ScrollView>
  );
}




export default App;

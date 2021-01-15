import React, {useEffect, useState} from 'react';
import {Button, Image,  View} from 'react-native';
import Images from '../Theme/Images';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyles';
import auth from '@react-native-firebase/auth';

const SplashScreen = (props) => {
  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log(confirmation);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      {/* <Image
        source={Images.splashScreen}
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}
      /> */}
      <View style={{marginTop: 100}}>
        <Button
          title="Click"
          onPress={() => signInWithPhoneNumber('+84968312091')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

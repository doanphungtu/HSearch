import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Images from '../Theme/Images';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyles';

const SplashScreen = (props) => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={Images.splashScreen}
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}
      /> */}
    </View>
  );
};

export default SplashScreen;

import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View, Animated} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Images from '../Theme/Images';
import AnimatedHeader from './AnimatedHeader';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyles';

const SplashScreen = (props) => {
  const offset = useRef(new Animated.Value(0)).current;
  const DATA = Array.from({length: 30});
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <AnimatedHeader animatedValue={offset} />
        <ScrollView
          style={{flex: 1, backgroundColor: 'white'}}
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 200,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: offset}}}],
            {useNativeDriver: false},
          )}>
          {DATA.map((item, index) => (
            <View
              key={String(index)}
              style={{
                height: 50,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              <Text style={{color: 'white', fontSize: 32}}>{index}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SplashScreen;

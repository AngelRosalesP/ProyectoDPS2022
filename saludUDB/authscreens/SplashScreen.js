import React, {useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 5000);
  }, []);

  const onAnimationFinish = () => {
    setAnimationLoaded(true);
  };

  useEffect(() => {
    if (authLoaded && animationLoaded) {
      props.navigation.replace('Registro');
    }
  }, [authLoaded, animationLoaded, props.navigation]);

  return (
    <View style={styles.root}>
      <LottieView
        ref={animation => {
          ref.current = animation;
        }}
        style={styles.lottieView}
        source={require('../assets/water-splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    width: '100%',
  },
});

export default SplashScreen;
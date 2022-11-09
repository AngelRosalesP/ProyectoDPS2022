import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Video } from 'expo-av';

const DietScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const video2 = React.useRef(null);
  const video3 = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [status2, setStatus2] = React.useState({});
  const [status3, setStatus3] = React.useState({});

  return (
    <View style={styles.container} >
      <Video
        ref={video}
        style={styles.video}
        source={{uri: 'https://www.youtube.com/watch?v=9CwOuKK9dZc'}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video : {
    flex:1,
    alignSelf: 'stretch',
  },
  button : {
    margin : 10,
  },
});

export default DietScreen;
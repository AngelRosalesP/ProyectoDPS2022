import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Video } from 'expo-av';
import YoutubeIframe from 'react-native-youtube-iframe';

const DietScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container} >
      <YoutubeIframe
        height={300}
        play={true}
        videoId={'u2RsHdU8bTw'}
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
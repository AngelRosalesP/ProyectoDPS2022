import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

const DietScreen = ({ navigation }) => {
  return (
    <View>
    <Text
      style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
      }}
      > Receta #1 </Text>
      <YoutubeIframe
        height={300}
        play={false}
        videoId={'G00PHRApp4g'}
      />
      <Text
      style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
      }}
      > Receta #2 </Text>
      <YoutubeIframe
        height={300}
        play={false}
        videoId={'xAqD8ZrE9s0'}
      />
    </View>
  );
}
export default DietScreen;
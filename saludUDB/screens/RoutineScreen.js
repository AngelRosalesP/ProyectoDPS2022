import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

const RoutineScreen = ({ navigation }) => {
  return (
    <View>
    <Text
      style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
      }}
      > Rutina #1 </Text>
      <YoutubeIframe
        height={300}
        play={false}
        videoId={'fPCvtwZ-f_w'}
      />
      <Text
      style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
      }}
      > Rutina #2 </Text>
      <YoutubeIframe
        height={300}
        play={false}
        videoId={'E1zsTKBQmSs'}
      />
    </View>
  );
}

export default RoutineScreen;
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
function Details({fetchdata}) {
  return (
    <View>
      <Text>{fetchdata?.name}</Text>
    </View>
  );
}

export default Details;

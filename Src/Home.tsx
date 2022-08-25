/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import axios from 'axios';

interface Props {
  fetchData: any;
  setFetchData: any;
  navigation: any;
}

const Home: React.FC<Props> = props => {
  const api = {
    key: 'c8922c69c948f2e2b4bf08587bb7e7f0',
  };
  const [input, setInput] = useState<string>('');
  function handleclick() {
    setInput('');
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
      )
      .then(res => {
        props.setFetchData(res.data);
        props.navigation.push('Info');
        console.log(props.fetchData);
      })
      .catch(() => {
        alert('Enter Valid City name');
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputtext}>
        <TextInput
          placeholder="Enter city"
          placeholderTextColor={'black'}
          value={input}
          onChangeText={val => setInput(val)}
          onSubmitEditing={handleclick}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={handleclick}>
          <Text
            style={{
              color: 'black',
              marginTop: 13,
              fontSize: 15,
            }}>
            Get Info
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    width: 100,
    backgroundColor: '#ADD8E6',
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  inputtext: {
    backgroundColor: '#ADD8E6',
    marginTop: 150,
    color: 'white',
    borderRadius: 20,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
});

export default Home;

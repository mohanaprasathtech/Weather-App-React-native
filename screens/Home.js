import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function Home({navigation, setFetchdata, fetchdata}) {
  const api = {
    key: 'c8922c69c948f2e2b4bf08587bb7e7f0',
  };

  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  function handleclick() {
    alert(input);
    setInput('');
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
      )
      .then(res => {
        //console.log(res.data);
        //setData(res.data);
        setFetchdata(res.data);
        navigation.navigate('Details');
      })
      .catch(err => console.log(err.message));
  }
  console.log(fetchdata);
  //console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.inputtext}>
        <TextInput
          placeholder="Enter city"
          placeholderTextColor={'black'}
          value={input}
          onChangeText={val => setInput(val)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={handleclick}>
          <Text
            style={{
              color: 'black',
              marginTop: 3,
            }}>
            Get
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  btn: {
    width: 100,
    backgroundColor: 'white',
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  inputtext: {
    backgroundColor: 'white',
    marginTop: 150,
    borderRadius: 20,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
});
export default Home;

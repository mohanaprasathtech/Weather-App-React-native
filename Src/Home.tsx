import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';

interface Props {
  fetchData: any;
  setFetchData: any;
  navigation: any;
}
export async function handlefetch(final_link: string) {
  try {
    var res: any = await axios.get(final_link);

    return res.data;
  } catch (error) {
    Alert.alert('Enter Valid Capital name');
  }
}

const Demo: React.FC<Props> = props => {
  const [input, setInput] = useState<string>('');
  async function handleclick() {
    setInput('');
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=c8922c69c948f2e2b4bf08587bb7e7f0`;
    var finaldata: any = await handlefetch(url, props.navigation);
    props.setFetchData(finaldata);
    props.navigation.push('Info');
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://icon-library.com/images/mostly-cloudy-icon/mostly-cloudy-icon-4.jpg',
        }}
        style={styles.logo}
      />
      <View style={styles.inputtext}>
        <TextInput
          placeholder="Enter Captial name"
          placeholderTextColor={'black'}
          value={input}
          onChangeText={val => setInput(val)}
          onSubmitEditing={handleclick}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={handleclick}>
          <Text style={styles.btntext}>Get Info</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.logotext}>All Weather Infomartion</Text>
      <Text style={[styles.logotext, {marginTop: 2}]}>of Location</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logotext: {
    color: 'black',
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 80,
  },
  logo: {
    height: 250,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
  },
  container: {
    backgroundColor: '#13456d',
    flex: 1,
    height: '100%',
  },
  btn: {
    width: 100,
    backgroundColor: '#cabaa9',
    marginTop: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 45,
    borderRadius: 18,
    alignItems: 'center',
    textAlign: 'center',
  },
  btntext: {
    color: 'black',
    marginTop: 13,
    fontSize: 15,
  },
  inputtext: {
    backgroundColor: '#cabaa9',
    color: 'white',
    borderRadius: 20,
    marginTop: 40,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
});

export default Demo;

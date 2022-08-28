/* eslint-disable react-native/no-inline-styles */
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
  setpopulation: any;
  population?: any;
}
export async function handlefetch(final_link: string) {
  try {
    var res: any = await axios.get(final_link);
    return res.data;
  } catch (error) {
    Alert.alert('Enter Valid Country name');
  }
}
export async function populationdata(pop_in: string) {
  try {
    const options = {
      method: 'GET',
      url: 'https://world-population.p.rapidapi.com/population/',
      params: {country_name: pop_in},
      headers: {
        'X-RapidAPI-Key': '83d04fab03msh5c699c2712e90b6p1de749jsn7fc71a8788f4',
        'X-RapidAPI-Host': 'world-population.p.rapidapi.com',
      },
    };
    const popressult = await axios.request(options);
    return popressult.data;
  } catch (error) {
    Alert.alert('Enter Valid Country name');
  }
}

const Home: React.FC<Props> = props => {
  const [input, setInput] = useState<string>('');

  async function handleclick() {
    var url = `http://api.weatherapi.com/v1/current.json?key=56994fdf59504862bd3185519222608&q=${input}&aqi=yes`;
    var popinput = input[0].toUpperCase() + input.substring(1);
    var finaldata: any = await handlefetch(url);
    var population: any = await populationdata(popinput);
    props.setpopulation(population);
    props.setFetchData(finaldata);
    if (finaldata) {
      props.navigation.push('Country');
      setInput('');
    } else {
      props.navigation.push('Home');
    }
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
          placeholder="Enter Country name"
          placeholderTextColor={'black'}
          value={input}
          onChangeText={val => setInput(val)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={handleclick}
          disabled={input.length > 0 ? false : true}>
          <Text style={styles.btntext}>Submit</Text>
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

export default Home;

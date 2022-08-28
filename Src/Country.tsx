/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

interface Props {
  fetchData: any;
  navigation: any;
  population: any;
}
const Country: React.FC<Props> = props => {
  function handleclick() {
    props.navigation.push('Info');
  }
  return (
    <View>
      <Image
        source={{
          uri: `https://countryflagsapi.com/png/${props.fetchData?.location?.country}`,
        }}
        style={styles.img}
      />
      <View style={styles.row1}>
        <View>
          <Text style={{fontSize: 20}}>Captial</Text>
          <Text style={styles.detailtext}>
            {props.fetchData?.location?.name}
          </Text>
        </View>
        <View style={{marginLeft: 30}}>
          <Text style={{fontSize: 20}}>Population</Text>
          <Text style={styles.detailtext}>
            {props.population?.body?.population}
          </Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View>
          <Text style={{fontSize: 20}}>Latitude</Text>
          <Text style={styles.detailtext}>
            {props.fetchData?.location?.lat}
          </Text>
        </View>
        <View style={{marginLeft: 30}}>
          <Text style={{fontSize: 20}}>Longitude</Text>
          <Text style={styles.detailtext}>
            {props.fetchData?.location?.lon}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleclick}>
        <Text style={styles.btntext}>Capital weather</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  detailtext: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  img: {
    height: 250,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
    marginTop: 20,
  },
  row1: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-around',
    marginLeft: -18,
  },
  row2: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    marginLeft: -22,
  },
  btn: {
    width: 180,
    padding: 5,
    paddingBottom: 5,
    backgroundColor: '#cabaa9',
    marginTop: 38,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 45,
    borderRadius: 18,
    alignItems: 'center',
    textAlign: 'center',
  },
  btntext: {
    color: 'black',
    marginTop: 6,
    fontSize: 15,
  },
});
export default Country;

import React from 'react';
import {View} from 'react-native';
import Climate from '../Components/Climate';

interface Props {
  fetchData: any;
  navigation: any;
}
const Details: React.FC<Props> = props => {
  return (
    <View>
      {props.fetchData ? <Climate fetchData={props.fetchData} /> : <View />}
    </View>
  );
};
export default Details;

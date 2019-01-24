import React from 'react';
import {
  Button,
  View, 
  Text
} from 'react-native';
import { WebBrowser } from 'expo';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title:'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View >
         <Button
        title="Profil samochodu"
        onPress={() => navigate('Profile', {})}
      />
      <Button
        title="Naprawy"
        onPress={() => navigate('Repair', {name: 'car'})}
      />
      </View>
    );
  }
}
export default HomeScreen;

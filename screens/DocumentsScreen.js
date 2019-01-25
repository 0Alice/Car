import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View,Button,Text} from 'react-native';

class DocumentsScreen extends Component {
    static navigationOptions = {
        title:'Dokumenty',
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
          <View >
        
             
            </View>
        );
    }
}



const mapStateToProps = (storeState) =>({
    //carList:storeState.carList
  });
  
const mapDispatchToProps = (dispatch)=>({
  //add:(carId)=>dispatch(addCar), //Nie wiem czy tu dobrze wpisałam parametr carID
  //remove:(carId)=>dispatch(removeCar),
  });
export default connect(mapStateToProps,mapDispatchToProps)(DocumentsScreen);
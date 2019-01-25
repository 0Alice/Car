import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text,TextInput, View } from 'react-native';

class ProfileScreen extends Component {
  constructor(){
    super();
    this.state={
      distance:undefined
    }
  }
  onDistanceChange=(dis)=>{
    console.log(dis)
    this.setState({
      distance:dis
    })
  }
  render() {
    //console.log(this.props.navigation.state.params)
    return (
      <View>
      {/*  <Text>{this.props.navigation.state.params.name}</Text>*/}
       <TextInput
          style={{height: 40,fontSize:20}}
          placeholder="Wprowadź przebieg"
          value={this.distance}
          onChangeText={(text) =>this.onDistanceChange(text)}
        />
        <Text
        style={{fontSize:20}}>
          Mechanik : 222-333-444</Text>
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
export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);
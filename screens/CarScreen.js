import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  View, 
  Text
} from 'react-native';

//this.props.navigation.state.params.Id


class CarScreen extends React.Component {
  static navigationOptions = {
    title:'Dane samochodu',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View >
        <Text
        style={{ height: 40, fontSize: 20 }}        >
        {"Nazwa samochodu : " +this.props.name}
        </Text>

        <Text
        style={{ height: 40, fontSize: 20 }}        >
        {"Przebieg : " +this.props.distance}
        </Text>

        <Button
        title="Ważne numery"
        onPress={() => navigate('Numbers', {id:this.props.carId})}
      />

        <Button
        title="Koszty"
        onPress={() => navigate('Costs', {id:this.props.carId})}
      />

      <Button
        title="Naprawy"
        onPress={() => navigate('Repair', {id:this.props.carId})}
      />

      <Button
        title="Dokumenty"
        onPress={() => navigate('Documents', {id:this.props.carId})}
      />


      </View>
    );
  }
}

const mapStateToProps = (storeState,ownProps) =>{
  const id=ownProps.navigation.state.params.id;
  const car=storeState.reducerY.carList.filter((car)=>{return car.carId===id})[0];
  return {
    ...car
  ///name:car.name,
  //distance:car.distance,
  //carList:storeState.carList
}
}

const mapDispatchToProps = (dispatch)=>({
//add:(carId)=>dispatch(addCar), //Nie wiem czy tu dobrze wpisałam parametr carID
//remove:(carId)=>dispatch(removeCar),
});
export default connect(mapStateToProps,mapDispatchToProps)(CarScreen);



//export default CarScreen;

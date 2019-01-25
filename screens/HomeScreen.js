import React from 'react';
import {View,Button,ScrollView} from "react-native";
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';


class HomeScreen extends React.Component{
    static navigationOptions = {
        title:'Twoje samochody',
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
          <View >
            <ScrollView>
                {this.props.carList.map((car)=>
                    <Button
                    key={car.carId}
                    title= {car.name}
                    onPress={()=>navigate('Car',{id:car.carId})}
                    />
                )}

            </ScrollView>
            <Button
            title="Dodaj kolejny samochód"
            style={{position:'absolute',bottom:0}}
            onPress={() => navigate('AddCar', {})} 
            />
            {/*
            <Button
            title="Remove car"
            style={{position:'absolute',bottom:0}}
            //TODO onPress={() => this.props.remove(jakiesID????)}
            />
            */}
          </View>
        );
      }


}
const mapStateToProps = (storeState) =>({
        carList:storeState.reducerY.carList
});

const mapDispatchToProps = (dispatch)=>({ 
    remove:(carId)=>dispatch(removeCar(carId)),
});
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);


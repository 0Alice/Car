import React from 'react';
import { connect } from 'react-redux';
import {
    Button,
    View,
    Text, TextInput
} from 'react-native';
import { addCar } from '../redux/actions'

//this.props.navigation.state.params.Id


class AddCarScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            distance:'',
        }
    }
    static navigationOptions = {
        title: 'Dodaj nowy samochód',
    };
    handleSave = () => {
        this.props.addCar(this.state.name,this.state.distance)
        this.props.navigation.navigate('Home', {})
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View >
                <TextInput
                    style={{height: 40,fontSize:20}}
                    placeholder="Nazwa samochodu"
                    value={this.state.name}
                    onChangeText={(text) => this.setState({ name: text })}
                />
                <TextInput
                    keyboardType='numeric'
                    style={{height: 40,fontSize:20}}
                    placeholder="Przebieg"
                    value={this.state.distance}
                    onChangeText={(text) => this.setState({ distance: text })}
                />
                <Button
                    title="Dodaj"
                    onPress={this.handleSave}
                    style={{position:'absolute',bottom:0,height: 40,fontSize:20} }
                />
            </View>
        );
    }
}

const mapStateToProps = (storeState, ownProps) => ({
    // carId:storeState.carList.filter((car)=>{return car.carId===this.props.navigation.state.params.Id})[0],
});

const mapDispatchToProps = (dispatch) => ({
    addCar: (name,distance) => dispatch(addCar(name,distance))
    //addParam:(carId,param)=>dispatch(addCarParam(carId,param)), //Nie wiem czy ten param moze byc generyczny
    //remove:(carId)=>dispatch(removeCar),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddCarScreen);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View,Button,Text} from 'react-native';
import { addNumber } from '../redux/actions'

class NumbersScreen extends Component {
    static navigationOptions = {
        title:'Ważne numery',
      };
    constructor(props) {
        super(props);
        this.state = {
            newNumber: ''
        }
    }
    onTextInputChange = (text) => {
        this.setState({
            newNumber: text
        })
    }
    onAdd=()=>{
        this.props.addNumber(this.state.newNumber);
        this.setState({
            newNumber:""
        })
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, fontSize: 20 }}
                    placeholder="Wprowadź numer"
                    value={this.state.newNumber}
                    onChangeText={this.onTextInputChange}
                />
                <Button
                    title="Dodaj"
                    onPress={this.onAdd}
                />
                {this.props.numbersList.map((row)=>
                <Text 
                style={{ height: 40, fontSize: 20 }}
                key={row}>{row}</Text>
                )
                }
            </View>
        );
    }
}



const mapStateToProps = (storeState,ownProps) =>{
    const id=ownProps.navigation.state.params.id;
    const car=storeState.reducerY.carList.filter(car=>{return car.carId===id})[0];
    return{
        numbersList:car.numbersList,
    }
  };
  
const mapDispatchToProps = (dispatch,ownProps)=>({
    addNumber:(newNumber) => dispatch(addNumber(newNumber,ownProps.navigation.state.params.id)),
  });
export default connect(mapStateToProps,mapDispatchToProps)(NumbersScreen);
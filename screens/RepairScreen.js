import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View,Button,Text} from 'react-native';
import {addRepair} from '../redux/actions'

class RepairScreen extends Component {
    static navigationOptions = {
        title:'Naprawy',
      };
    constructor(props) {
        super(props);
        this.state = {
            newRepair: ''
        }
    }
    onTextInputChange = (text) => {
        this.setState({
            newRepair: text
        })
    }
    onAdd=()=>{
        this.props.addRepair(this.state.newRepair);
        this.setState({
            newRepair:''
        })
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, fontSize: 20 }}
                    placeholder="Wprowadź informacje o naprawie"
                    value={this.state.newRepair}
                    onChangeText={this.onTextInputChange}
                />
                <Button
                    title="Dodaj"
                    onPress={this.onAdd}
                />
                {this.props.repairsList.map((row)=>
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
        repairsList:car.repairsList,
    }
};
  
const mapDispatchToProps = (dispatch,ownProps)=>({
    addRepair:(newRepair)=>dispatch(addRepair(newRepair,ownProps.navigation.state.params.id))
  });
export default connect(mapStateToProps,mapDispatchToProps)(RepairScreen);
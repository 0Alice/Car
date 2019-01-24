import React, { Component } from 'react';
import { TextInput, View,Button,Text} from 'react-native';

export default class RepairScreen extends Component {
    constructor() {
        super();
        this.state = {
            repairs: [],
            newRepair: undefined
        }
    }
    onTextInputChange = (text) => {
        this.setState({
            newRepair: text
        })
    }
    onAdd=()=>{
        this.setState({
            repairs:[...this.state.repairs,this.state.newRepair],
            newRepair:undefined
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
                {this.state.repairs.map((row)=>
                <Text key={row}>{row}</Text>
                )
                }
            </View>
        );
    }
}
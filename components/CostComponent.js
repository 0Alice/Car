import React from 'react';
import { TextInput, Button, View } from 'react-native';

export class CostComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            cost: ''
        }
    }
    onTextInputChange1 = (text) => {
        this.setState({
            name: text
        })
    }
    onTextInputChange2 = (text) => {
        this.setState({
            cost: text
        })
    }
    handlerOnAdd = () => {
        this.props.onAdd(this.state.name, this.state.cost)
        this.setState({
            name: '',
            cost: ""
        })
    }
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <TextInput
                        style={{ height: 40, fontSize: 20 }}
                        placeholder="Nazwa"
                        value={this.state.name}
                        onChangeText={this.onTextInputChange1}
                    />
                    <TextInput
                        keyboardType='numeric'
                        style={{ height: 40, fontSize: 20 }}
                        placeholder="Koszt "
                        value={this.state.cost}
                        onChangeText={this.onTextInputChange2}
                    />
                </View>
                <Button
                    title="Dodaj"
                    onPress={this.handlerOnAdd}
                />
            </View>
        )
    }
}

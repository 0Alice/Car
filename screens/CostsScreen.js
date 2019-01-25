import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View, Button, Text } from 'react-native';
import { CostComponent } from '../components/CostComponent'
import { addCost } from '../redux/actions'

class CostsScreen extends Component {
  static navigationOptions = {
    title: 'Koszty',
  };
  constructor(props) {
    super(props);
    this.state = {
      newCost: '',
      newName: '',
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ height: 40, fontSize: 20 }}>

          {'Łączny koszt: ' + (this.props.cost | 0)}
        </Text>
        <CostComponent
          onAdd={this.props.addCost}
        />
        {this.props.costsList ?
          this.props.costsList.map((row) =>
            <Text
              style={{ height: 40, fontSize: 20 }}
              key={row}>{row.name + ': ' + row.cost}</Text>
          )
          : null
        }
      </View>
    );
  }
}



const mapStateToProps = (storeState, ownProps) => {
  const id = ownProps.navigation.state.params.id;
  const car = storeState.reducerY.carList.filter(car => { return car.carId === id })[0];
  return {
    costsList: car.costsList,
    cost: car.mainCost,
  }
};

const mapDispatchToProps = (dispatch,ownProps) => ({
  addCost: (newName, newCost) => dispatch(addCost(newName, newCost, ownProps.navigation.state.params.id))
});
export default connect(mapStateToProps, mapDispatchToProps)(CostsScreen);
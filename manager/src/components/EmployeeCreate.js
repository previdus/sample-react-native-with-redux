import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {Card, CardSection, Input} from './common';
import {connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component{

render(){
  return(
      <Card>
        <CardSection>
          <Input  label="Name" value={this.props.name} onChangeText={text => this.props.employeeUpdate({prop:'name', value:text})} placeholder="Enter name of employee..."/>
        </CardSection>
        <CardSection>
          <Input  label="Phone Number" value={this.props.phone}
          onChangeText={text => this.props.employeeUpdate({prop:'phone', value:text})} placeholder="555-555-5555"/>
        </CardSection>
        <CardSection style={{flexDirection:'row'}}>
          <Text style={{flex:2}}> Shift </Text>
          <Picker
          style={{flex:1}}
          selectedValue={this.props.shift}
          onValueChange={value => this.props.employeeUpdate({prop:'shift', value})}
          >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </Card>

  );
}
}

const styles = {
  pickerTextStyle:{
    fontSize:18,
    paddingLeft:20
  }
};

const mapStateToProps = ({employeeForm}) =>{
  const {name, phone, shift} = employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);

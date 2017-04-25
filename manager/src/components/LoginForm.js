import React, {Component} from 'react';
import {Text} from 'react-native';
import { Card, CardSection, Input, Spinner, Button, Header } from './common';
import {connect } from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component{

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderButton(){
    if(this.props.loginInProgress){
      return <Spinner size="large"/>;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render(){
    return (
      <Card>
      <CardSection>
      <Input
      label="Email"
      placeholder="abcd@gmail.com"
      onChangeText={this.onEmailChange.bind(this)}
      value={this.props.email}
      >
      </Input>
      </CardSection>
      <CardSection>
      <Input
      secureTextEntry
      label="Password"
      placeholder=""
      onChangeText={this.onPasswordChange.bind(this)}
      value={this.props.password}
      >
      </Input>
      </CardSection>
      <Text style={styles.errorTextStyle}>
        {this.props.error}
      </Text>
      <CardSection>
      {this.renderButton()}
      </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({auth}) =>{
  const {email, password, error, loginInProgress} = auth;
  return { email,password,error, loginInProgress };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);

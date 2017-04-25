import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import {Actions} from 'react-native-router-flux';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{ paddingTop:65 }}>
    <Scene key="auth">
      <Scene key="login"  component={LoginForm} title="Please Login" />
      </Scene>
        <Scene key="main" initial  >
      <Scene
      key="employeeList"
      component={EmployeeList}
      rightTitle="Add"
      onRight={() => Actions.addNewEmployee()}
      title="List of all employees"/>
      <Scene key="addNewEmployee" component={EmployeeCreate} title="Add a new employee"/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

import React, {Component} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';

const myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    Login with Facebook
  </Icon.Button>
);

const regulers = (<FontAwesome5.Button name={'comments'} />);
const solids = (<FontAwesome5.Button name={'comments'} solid />);

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is home</Text>
        {regulers}
        {solids}
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
      </View>
    );
  }
}

class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Lots of features here',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is OtherScreen</Text>
        {myButton}
      </View>
    );
  }
}

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Yikes',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is SignInScreen</Text>
        <Icon name="level-up-alt" size={30} color="#900" />
        <Text>Yikes</Text>
        <FontAwesome5 name={'level-up-alt'} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = StackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = StackNavigator({ SignIn: SignInScreen });

export default SwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
);

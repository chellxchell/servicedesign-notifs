import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as globalStyles from '../globalStyles';

class Welcome extends React.Component {

  render = () => {
    return (
      <View style={localStyles.container}>
        <Text style={globalStyles.fonts.header1}>Welcome to Nudge</Text>
        <TouchableOpacity style={globalStyles.buttons.buttonLight}>
          <Text style={globalStyles.buttons.buttonLightText} onPress={() => this.props.changeScreen('question')}>Get started with better habits</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import * as globalStyles from '../globalStyles';

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      checked1: true,
      checked: false 
    }
  }

  // rendering
  render = () => {
    let checkboxes = [];
    let questions = ['Spend less time on social media', 'Don’t use phone at night', 'Spend less time on YouTube', 'Don’t use phone in the morning', 'Spend less time screen overall', 'Use phone for productivity', 'Use phone for reading', 'Spend more time tweeting', 'Spend less time texting', 'Spend more time calling people', 'Text less people']
    for (var i = 0; i < questions.length; i++) {
      checkboxes.push(
        <CheckBox containerStyle={globalStyles.checkbox.container} title={questions[i]} checked={this.state.checked} onPress={() => this.setState({ checked: !this.state.checked })} />

      )
    }
      return (
        <View style={localStyles.container}>
          <Text style={globalStyles.fonts.header2}>What is your name?</Text>
          <TextInput style={globalStyles.input.input} placeholder='name'></TextInput>
          <Text style={globalStyles.fonts.header2}>What are your goals?</Text>
          <View style={localStyles.checkboxContainer}>
            {checkboxes}
          </View>
          <View style={globalStyles.nav.container}>
            <TouchableOpacity onPress={() => this.props.changeScreen('result')}><Text style={globalStyles.nav.font}>back</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.changeScreen('notifs')}><Text style={globalStyles.nav.font}>next</Text></TouchableOpacity>
          </View>
        </View>
      );
    }
}

export default Goals;
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    alignItems: 'flex-start'
  }
});
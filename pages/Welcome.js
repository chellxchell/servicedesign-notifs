import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as globalStyles from '../globalStyles';
import Question from '../pages/question'

class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {page: this.props.page}
      }

    render = () => {
        if (this.state.page == 'welcome'){
            return (
                <View style={localStyles.container}>
                <Text style={globalStyles.fonts.header1}>Welcome to Nudge</Text>
                <TouchableOpacity style={globalStyles.buttons.buttonLight}>
                  <Text style={globalStyles.buttons.buttonLightText} onPress={() => this.setState({page: 'question'})}>Get started with better habits</Text>
                </TouchableOpacity>
              </View>
            );
        }

        else if (this.state.page == 'question'){
            return (
                <Question page={this.state.page} />
            );
        }

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
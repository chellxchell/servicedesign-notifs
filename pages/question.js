import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as globalStyles from '../globalStyles';

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            return (
                <View style={localStyles.container}>
                    <Text style={globalStyles.fonts.header1}>Be Honest...</Text>
                    <Text style={globalStyles.fonts.header2}>What would help you the most?</Text>
                    <TouchableOpacity style={globalStyles.buttons.buttonDark}>
                        <Text style={globalStyles.buttons.buttonDarkText} onPress={() => this.props.changeScreen('result') || this.props.changeAnimal('tiger')}>Tough Love</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.buttons.buttonDark}>
                        <Text style={globalStyles.buttons.buttonDarkText} onPress={() => this.props.changeScreen('result') || this.props.changeAnimal('bear')}>Guided Meditation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.buttons.buttonDark}>
                        <Text style={globalStyles.buttons.buttonDarkText} onPress={() => this.props.changeScreen('result') || this.props.changeAnimal('elephant')}>Words of Encouragement</Text>
                    </TouchableOpacity>
                    <View style={globalStyles.nav.container}>
                        <TouchableOpacity onPress={() => this.props.changeScreen('welcome')}><Text style={globalStyles.nav.font}>back</Text></TouchableOpacity>
                    </View>
                </View>
            );
    }
}

export default Question;

const localStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: globalStyles.colors.lightGray,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
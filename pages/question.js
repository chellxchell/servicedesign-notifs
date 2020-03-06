import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as globalStyles from '../globalStyles';
import Result from './result';
import Welcome from './Welcome';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            animal: ''
        }
    }

    render() {
        if (this.state.page == 'question'){
            return (
                <View style={localStyles.container}>
                    <Text style={globalStyles.fonts.header1}>Be Honest...</Text>
                    <Text style={globalStyles.fonts.header2}>What would help you the most?</Text>
                    <TouchableOpacity style={globalStyles.buttons.buttonDark}>
                        <Text style={globalStyles.buttons.buttonDarkText} onPress={() => this.setState({page: 'result',animal: 'tiger'})}>Tough Love</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.buttons.buttonDark}>
                        <Text style={globalStyles.buttons.buttonDarkText} onPress={() => this.setState({page: 'result',animal: 'bear'})}>Guided Meditation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.buttons.buttonDark}>
                        <Text style={globalStyles.buttons.buttonDarkText} onPress={() => this.setState({page: 'result',animal: 'elephant'})}>Words of Encouragement</Text>
                    </TouchableOpacity>
                    <View style={globalStyles.nav.container}>
                        <TouchableOpacity onPress={() => this.setState({ page: 'welcome' })}><Text style={globalStyles.nav.font}>back</Text></TouchableOpacity>
                    </View>
                </View>
            );
        }

        else if (this.state.page == 'result'){
            return(
                <Result page={this.state.page} animal={this.state.animal}/>
            );
        }
        else if (this.state.page == 'welcome'){
            return(
                <Welcome page={this.state.page} animal={this.state.animal}/>
            );
        }
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
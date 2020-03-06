import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as globalStyles from '../globalStyles';
import Question from './question';
import Goals from './goals';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            dropdown: false,
            animal: this.props.animal
        }
    }

    changeToTiger = () => {
        this.setState({
            animal: 'tiger'
        })
    }

    changeToBear = () => {
        this.setState({
            animal: 'bear',
        })
    }
    changeToElephant = () => {
        this.setState({
            animal: 'elephant'
        })
    }

    render() {
        let image;
        if (this.state.animal == 'tiger') {
            image = <Image style={localStyles.image} source={require('../images/tiger.png')} />
        }
        if (this.state.animal == 'bear') {
            image = <Image style={localStyles.image} source={require('../images/bear.png')} />
        }
        if (this.state.animal == 'elephant') {
            image = <Image style={localStyles.image} source={require('../images/elephant.png')} />
        }
        var animals = ['tiger', 'bear', 'elephant']
        let menuItems = [];
        for (var i = 0; i < animals.length; i++) {
            const func = (animals[i] == 'tiger') ? this.changeToTiger : (animals[i] == 'bear') ? this.changeToBear : this.changeToElephant;
            menuItems.push(
                <TouchableOpacity style={globalStyles.dropdown.item} onPress={func}>
                    <Text style={globalStyles.dropdown.text}>{animals[i]}</Text>
                </TouchableOpacity>
            )
        }

        if (this.state.page == 'result') {
            return (
                <View style={localStyles.container}>
                    <Text style={globalStyles.fonts.header1}>You Got...</Text>
                    {image}
                    <Text style={globalStyles.fonts.header1black}>{this.props.animal}</Text>
                    <View style={localStyles.dropdownContainer}>
                        <TouchableOpacity style={globalStyles.dropdown.container} onPress={() => this.setState({dropdown: !this.state.dropdown})}>
                            <Text style={globalStyles.dropdown.text}>change persona</Text>
                        </TouchableOpacity>
                        <Text style={localStyles.arrow}>&#9662;</Text>
                    </View>
                    {this.state.dropdown ? menuItems : <Text></Text>}
                    <View style={globalStyles.nav.container}>
                        <TouchableOpacity onPress={() => this.setState({page: 'question'})}><Text style={globalStyles.nav.font}>back</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({page: 'goals'})}><Text style={globalStyles.nav.font}>next</Text></TouchableOpacity>
                    </View>
                </View>
            );
        }

        else if (this.state.page == 'question') {
            return (
                <Question page={this.state.page} />
            );
        }

        else if (this.state.page == 'goals') {
            return (
                <Goals page={this.state.page} animal={this.state.animal}/>
            );
        }
    }
}

export default Result;

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 245,
        height: 230,
        marginTop: 20,
        marginBottom: 20
    },
    arrow: {
        fontSize: 50,
        marginLeft: -30,
        marginBottom: 8,
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
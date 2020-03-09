import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as globalStyles from '../globalStyles';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            dropdown: false,
            animal: this.props.getAnimal()
        }
    }

    render() {
        let nameMap = new Map();
        nameMap.set('tiger','Angry Abe');
        nameMap.set('bear', 'Zen Zay');
        nameMap.set('elephant', 'Excited Eva');

        // render image of persona/animal
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

        // dropdown for changing persona/animal
        var animals = ['tiger', 'bear', 'elephant']
        let menuItems = [];
        for (var i = 0; i < animals.length; i++) {
            const func = (animals[i] == 'tiger') ? () => this.setState({animal: 'tiger'}) || this.props.changeAnimal('tiger') : (animals[i] == 'bear') ? () => this.setState({animal: 'bear'}) || this.props.changeAnimal('bear') : () => this.setState({animal: 'elephant'}) || this.props.changeAnimal('elephant');
            menuItems.push(
                <TouchableOpacity style={globalStyles.dropdown.item} onPress={func}>
                    <Text style={globalStyles.dropdown.text}>{nameMap.get(animals[i])}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={localStyles.container}>
                <Text style={globalStyles.fonts.header1}>You Got...</Text>
                {image}
        <Text style={globalStyles.fonts.header1black}>{nameMap.get(this.state.animal)}</Text>
                <View style={localStyles.dropdownContainer}>
                    <TouchableOpacity style={globalStyles.dropdown.container} onPress={() => this.setState({ dropdown: !this.state.dropdown })}>
                        <Text style={globalStyles.dropdown.text}>change persona</Text>
                    </TouchableOpacity>
                    <Text style={localStyles.arrow}>&#9662;</Text>
                </View>
                {this.state.dropdown ? menuItems : <Text></Text>}
                <View style={globalStyles.nav.container}>
                    <TouchableOpacity onPress={() => this.props.changeScreen('question')}><Text style={globalStyles.nav.font}>back</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.changeScreen('goals')}><Text style={globalStyles.nav.font}>next</Text></TouchableOpacity>
                </View>
            </View>
        );
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
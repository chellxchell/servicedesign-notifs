import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as globalStyles from '../globalStyles';

class Notifs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            alerts: false,
            banners: false
        }
    }


    render = () => {
            return (
                <View style={localStyles.container}>
                    <Text style={globalStyles.fonts.header2}>How would you like to be notified?</Text>
                    <View style={localStyles.imageContainer}>
                        <TouchableOpacity style={this.state.alerts ? localStyles.green : localStyles.regular} onPress={() => this.setState({ alerts: !this.state.alerts })}>
                            <Image style={localStyles.image} source={require('../images/notifs/alert.png')} />
                            <Text style={globalStyles.input.text}>Alert</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.banners ? localStyles.green : localStyles.regular} onPress={() => this.setState({ banners: !this.state.banners })}>
                            <Image style={localStyles.image} source={require('../images/notifs/banner.png')} />
                            <Text style={globalStyles.input.text}>Banners</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.nav.container}>
                        <TouchableOpacity onPress={() => this.props.changeScreen('goals')}><Text style={globalStyles.nav.font}>back</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.changeScreen('exit')}><Text style={globalStyles.nav.font}>next</Text></TouchableOpacity>
                    </View>
                </View >
            );
        }
}

export default Notifs;
const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
    },
    image: {
        height: 251,
        width: 141,
        marginLeft: 5,
        marginRight: 5
    },
    green: {
        backgroundColor: globalStyles.colors.green,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center'
    },
    regular: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center'
    }

});
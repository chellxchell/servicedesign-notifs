import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as globalStyles from '../globalStyles';

class Exit extends React.Component {

    render = () => {
        let msgMap = new Map();
        msgMap.set('bear','Let’s reflect, learn, and improve together. I’ll keep in touch with you with notifications throughout the day.');
        msgMap.set('tiger', 'Alright [NAME], I hope you’re ready to get better. Keep an eye out for notifications, I’ll talk to you soon.');
        msgMap.set('elephant', 'This is gonna be great! I can’t wait to help you out, keep an eye out for notifications from me, [NAME]');
        return (
            <View style={localStyles.container}>
                <Text style={globalStyles.fonts.header2}>{msgMap.get(this.props.getAnimal())}</Text>
                <View style={globalStyles.nav.container}>
                <TouchableOpacity onPress={() => this.props.changeScreen('notifs')}><Text style={globalStyles.nav.font}>back</Text></TouchableOpacity>
            </View>
            </View>
    );
    }
}

export default Exit;
const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
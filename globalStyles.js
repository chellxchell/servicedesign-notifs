import { StyleSheet, Text, View } from 'react-native';

var colors = {
    lightGray: "#EBEBEB",
    gray: "#d1d1d1",
    primaryColor: "#00A1DE",
    secondaryColor: "#2428B9",
    green: "#6BB433"
}

const fonts = StyleSheet.create({
    header1: {
        color: colors.primaryColor,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
        //   fontFamily: 'Poppins'
    },
    header1black: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
        // fontFamily: 'Poppins'
    },
    header2: {
        fontSize: 24,
        fontWeight: 'bold',
        width: 300,
        textAlign: 'center',
        marginTop: 15
    },
});

const buttons = StyleSheet.create({
    buttonLight: {
        backgroundColor: colors.primaryColor,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 25,
        paddingBottom: 25,
        marginTop: 25
    },
    buttonLightText: {
        color: 'white',
        fontSize: 20
    },
    buttonDark: {
        backgroundColor: colors.secondaryColor,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
        paddingTop: 30,
        width: 300,
        marginTop: 15,
        marginBottom: 15
    },
    buttonDarkText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
});

const dropdown = StyleSheet.create({
    container: {
        backgroundColor: '#B7B7B7',
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    item: {
        backgroundColor: colors.gray,
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const nav = StyleSheet.create({
    container:{
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    font: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10
    }
});

const input = StyleSheet.create({
    input:{
        backgroundColor: colors.gray,
        width: 300,
        height: 45,
        paddingLeft: 15
    },
    font: {
        fontSize: 18
    }
});

const checkbox = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingVertical: 2
    }
});

export { colors, fonts, buttons, dropdown, nav, input, checkbox}
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    filmItem: {
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 15
    },
    image: {
        width: 110,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        // marginTop: 5,
        textAlign: 'center',
        color: 'white'
    },
    modal: {
        margin: 25,
    },
    close: {
        fontSize: 30,
        textAlign: 'right'
    },
    modalImg: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        display: 'flex',
        alignSelf: 'center',
    },
    overview: {
        fontSize: 18,
        marginTop: 25,
        padding: 30,
    }
})

export default styles
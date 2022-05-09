import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button: {
        // marginTop:30,
        // marginLeft:50,
        // marginRight:50,
        // borderWidth:2,
        // borderRadius:20,
        // borderColor:'#F31801',
        // overflow:"hidden",
        // marginBottom:10,
    },
    text: {
        // fontSize: 16,
        // lineHeight: 21,
        // fontWeight: 'bold',
        // letterSpacing: 0.25,
        // color: 'white',
    },
    block: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input:{
        width: '80%',
        // padding: 10,
        // borderStyle: 'solid',
        // borderBottomWidth: 2,
        // borderBottomColor: '#3949ab',
        // color: 'white',
        padding: 15,
        margin: 15,
        backgroundColor: "#ccc",
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderRadius: 8
    }
})

export default styles
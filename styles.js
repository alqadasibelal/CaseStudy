import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
     flex: 1,
     flexDirection: "column",  
     paddingTop: 23
    },
    ren:{
     fontSize: 30, 
     color: '#000'
    },
    HeaderTitle: {
     fontFamily: 'BalsamiqSans-Bold',
     paddingBottom: 40,
     paddingTop: 22,
     fontSize: 23,
     textAlign: 'center',
     letterSpacing: 2,
     color: 'rgb(58, 0, 59)',
    },
 
    title:{
     paddingTop: 5,
     fontSize: 18,
     fontFamily: 'Rubik-Regular',
     textAlign: 'center',
     marginLeft: 13,
     textTransform: 'uppercase',
    },
 
    input: {
     margin: 8,
     borderColor: '#d9d9d9',
     borderWidth: 1,
     shadowColor: "#d9d9d9",
     shadowOpacity: 0.8,
     shadowRadius: 8,
     shadowOffset: {height: 1,width: 1},
     borderRadius: 8,
     fontFamily: 'Rubik-Regular',
     textAlign: 'left',
     flexDirection: "row", 
     alignSelf: 'center',
     padding: 10, 
     width: '90%',
     marginBottom: 13,
     
    },
    submitButton: {
     backgroundColor: '#18191A',
     shadowColor: '#9c4040',
     borderColor: '#9c4040',
     padding: 13,
     margin: 15,
     shadowOpacity: 0.8,
     shadowRadius: 8,
     shadowOffset: {height: 1, width: 1},
     borderRadius: 8,
     marginTop: 20,
    },
 
    submitButtonText:{
       color: 'white',
       textAlign: 'center',
       fontFamily: 'Rubik-Regular',
       textTransform: 'uppercase',
    },
    result: {
     textAlign: 'center',
     fontFamily: 'Rubik-Regular',
     textTransform: 'uppercase',
     paddingTop: 15,
    }
 })


 export {styles};
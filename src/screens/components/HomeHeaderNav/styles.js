import { StyleSheet} from 'react-native'
import {Color} from "../../../globals/GlobalStyles"

export const styles = StyleSheet.create({
container:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    padding:10,
    alignItems:'center',
    backgroundColor:Color.grey,
    elevation:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
},
innercontainer:{
    flexDirection:'row',
    alignItems:'center'
},
headerIcons:{
    color:Color.red
},
headerText:{
    fontSize:24,
    color:Color.red
}

})

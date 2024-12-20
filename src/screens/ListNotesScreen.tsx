import { FlatList, StatusBar, StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import React, {useContext } from 'react'
import { NoteContent } from '../context/Notecontext'
import Icon from "react-native-vector-icons/FontAwesome"


const ListNotesScreen = ({navigation}) => {

       const {state,dispatch} = useContext(NoteContent)

  return (
    <View style={{flex: 1,backgroundColor:"#D3B5E5"}}>

       <StatusBar barStyle={'dark-content'} backgroundColor="lightblue"/>

       <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate("home")} >
                 <View style={styles.button}>
                     <Icon name="plus" size={35} color="white"/>
                 </View>
            </TouchableOpacity>
       </View>
        
      <FlatList style={{}}
            data={state}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
         (<TouchableOpacity onPress={()=>navigation.navigate("fullData",{id:item.id})}>     
                <View style={styles.list}>
                
                  <View>
                      <Text style={styles.font}>{item.title}</Text>
                  </View>
                
                  <View style={{width:27}}>
                  <TouchableOpacity onPress={()=>dispatch({type:"delete",payload:item.id})}>
                        <Icon name="trash" size={27} color="blue"/>
                  </TouchableOpacity>
                  </View>

                </View>

         </TouchableOpacity>
      ))}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems:"flex-start",
    justifyContent:"center",
    marginLeft:20,
    marginVertical:18
  },
  button:{
    backgroundColor: 'rgba(78, 116, 289, 1)',
    width:65,
    height:44,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
  },
  list:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginHorizontal:16,
    marginBottom:10,
    elevation:4,
    padding:11,
    borderBlockColor:"white",
    backgroundColor:"#A4E5E0",
    borderRadius:10
  },
  font:{
    fontSize:18,
    fontWeight:500,
    paddingHorizontal:5
  }
})


export default ListNotesScreen
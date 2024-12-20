import { Text, TouchableOpacity, View,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { NoteContent } from '../context/Notecontext'
import Icon from "react-native-vector-icons/FontAwesome"

const ShowNotes = ({ route, navigation }) => {

        const { id } = route.params;
        const { state } = useContext(NoteContent);

         const finaldata = state.find((data) => data.id === id);

     if (!finaldata) {
             return (
          <View >
           <Text>Note not found or has been deleted.</Text>
         </View>
    )};

   return (
     <View style={{flex: 1,backgroundColor:"#D3B5E5"}}>
       <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate("edit", { id })}>
            <View style={styles.button}>
              <Icon name="pencil" size={25} color="white" />
            </View>
      </TouchableOpacity>

      <View style={styles.wrapper}>
      <Text style={styles.font}><Text style={{fontSize:22,fontWeight:500}}>Title:</Text> {finaldata.title}</Text>
      <Text style={styles.font}><Text style={{fontSize:22,fontWeight:500}}>Content:</Text> {finaldata.content}</Text>
      </View>

    </View>
  );
};


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
    marginBottom:15
  },
  wrapper:{
    marginLeft:15,
    gap:15,

  },
  font:{
    fontSize:20,
    color:"black"
  }

})

export default ShowNotes
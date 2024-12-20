import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NoteContent } from '../context/Notecontext'

const EditNotes = ({ navigation, route }) => {
   const [titleFocused, setTitleFocused] = useState(false)
    const [contentFocused, setContentFocused] = useState(false)
  const { state, dispatch } = useContext(NoteContent);
  const { id } = route.params;
  const record = state.find((data) => data.id === id);

  if (!record) {
      return (
        <View>
          <Text>Note not found. Cannot edit.</Text>
        </View>
      );
  }

  const [title, setTitle] = useState(record.title);
  const [content, setContent] = useState(record.content);

  return (
    <View style={{flex: 1,backgroundColor:"#D3B5E5"}}>
     
     <View style={[styles.container,{marginTop:50}]}>
        <Text style={styles.font}>Please update Title</Text>
        <TextInput
            style={[styles.input,titleFocused &&{borderColor:"white"}]}
            value={title}
            onChangeText={(text) => setTitle(text)}
            onFocus={()=>setTitleFocused(true)}
           onBlur={()=>setTitleFocused(false)}
          />
     </View>

     <View style={styles.container}>
        <Text style={styles.font}>Please update Content</Text>
        <TextInput
            style={[styles.input, contentFocused && {borderColor:"white"}]}
            value={content}
            onChangeText={(text) => setContent(text)}
            onFocus={()=>setContentFocused(true)}
           onBlur={()=>setContentFocused(false)}
          />
     </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
            dispatch({
              type: "update",
              payload: { id, title, content },
           });
           navigation.navigate("notes");
        }}>
             <Text style={{ fontSize:26,fontWeight:500,color:"white"}}>save</Text>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginVertical:15
  },
  input:{
    borderColor:"#c7d2fe",
    borderWidth:2,
    marginHorizontal:18,
    borderRadius:10,
    fontSize:17
  },
  font:{
    fontSize:20,
    fontWeight:500,
    marginLeft:18,
    marginBottom:3
  },
  button:{
    backgroundColor:"blue",
    color:"white",
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    marginHorizontal:90,
    height:38,
    borderRadius:10,
    marginTop:30
  }
})


export default EditNotes
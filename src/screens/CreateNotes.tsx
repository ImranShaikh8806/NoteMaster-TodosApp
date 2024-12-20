import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NoteContent } from '../context/Notecontext'


const CreateNotes = ({navigation}) => {
  const [title,setTitle] = useState("")
  const[content,setcontent] = useState("")
  const {dispatch} = useContext(NoteContent)
  const [titleFocused, setTitleFocused] = useState(false)
  const [contentFocused, setContentFocused] = useState(false)

  return (
    <View style={{flex: 1,backgroundColor:"#D3B5E5"}}>

       <View style={[styles.container,{marginTop:40}]}>
       <Text style={styles.font}>Please enter heading</Text>
        <TextInput style={[styles.input,titleFocused &&{borderColor:"white"}]}
           value={title} 
           onChangeText={(text)=>setTitle(text)}
           onFocus={()=>setTitleFocused(true)}
           onBlur={()=>setTitleFocused(false)}/>
       </View>

        <View style={styles.container}>
        <Text style={styles.font}>Please enter Content</Text>
       <TextInput style={[styles.input, contentFocused && {borderColor:"white"}]}
          value={content} 
          onChangeText={(text)=>setcontent(text)}
          onFocus={()=>setContentFocused(true)}
          onBlur={()=>setContentFocused(false)}/>
          
        </View>

       <TouchableOpacity style={styles.button}
             onPress={()=>{dispatch({type:"add",payload:{title,content}})
             navigation.goBack()
            }}>
          <Text style={{fontSize:24,fontWeight:500,color:"white"}}>save</Text>
       </TouchableOpacity>

    </View>
  )}


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


export default CreateNotes
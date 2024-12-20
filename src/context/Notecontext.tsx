import React, { createContext, useReducer, useEffect } from "react";
import { reducer as other,initialState } from "../reduer/NoteReduer";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NoteContent = createContext();

const NoteContentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(other, initialState);

  
  useEffect(() => {
    const loadNotesFromStorage = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem("notes");
        const parsedNotes = storedNotes ? JSON.parse(storedNotes) : [];
        dispatch({ type: 'initialize', payload: parsedNotes });
      } catch (error) {
        console.error("Failed to load notes from AsyncStorage:", error);
      }
    };
    loadNotesFromStorage();
  }, []);

  useEffect(() => {
    const saveNotesToStorage = async (notes) => {
      try {
        await AsyncStorage.setItem("notes", JSON.stringify(notes));
      } catch (error) {
        console.error("Failed to save notes to AsyncStorage:", error);
      }
    };
      saveNotesToStorage(state); 
  }, [state]); 
  

  return (
    <NoteContent.Provider value={{ state, dispatch }}>
      {children}
    </NoteContent.Provider>
  );
};

export { NoteContentProvider };

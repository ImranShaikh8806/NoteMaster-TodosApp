import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListNotesScreen from './screens/ListNotesScreen'
import CreateNotes from './screens/CreateNotes';
import { NoteContentProvider } from './context/Notecontext';
import EditNotes from './screens/EditNotes';
import ShowNotes from './screens/ShowNotes';


const Stack = createNativeStackNavigator();

const App = () => {
  
  return (  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='notes' 
          component={ListNotesScreen} 
          options={{
            headerTitleAlign:"center",
            title:"All Notes...",
            headerStyle: {
              backgroundColor: '#A4E5E0', 
            },
          }}
          />

          <Stack.Screen
          name='home'
          component={CreateNotes}
          options={{
            title:"Create Note",
            headerTitleAlign:"center",
            headerStyle: {
              backgroundColor: '#A4E5E0', 
            },
          }}
          />

          <Stack.Screen 
          name='fullData'
          component={ShowNotes}
          options={{
            title:"Your note...",
            headerTitleAlign:"center",
            headerStyle: {
              backgroundColor: '#A4E5E0', 
            },
          }}
          />
            
          <Stack.Screen
          name='edit'
          component={EditNotes}
          options={{
            title:"Edit Note",
            headerTitleAlign:"center",
            headerStyle: {
              backgroundColor: '#A4E5E0', 
            },
          }}
          />  
         
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  return(
    <NoteContentProvider >
    <App />
    </NoteContentProvider>
  )
}

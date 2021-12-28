import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task";
import TextForm from './components/TextForm';




export default function App() {
  return (
    <View>
    
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>TaskDo</Text>
      </View>
      <View style={styles.items}>
      <Task text={'Task-1 is to Create a Todo List'}/>
      <Task text={'Task-2 is Allow to Create, Add, Delete the task.'}/>
      </View>
      <TextForm/>
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop:80,
    // textAlign:'center',
    paddingHorizontal:20,
  },
  sectionTitle:{
    color: '5E5E5E',
    fontSize:25,
    fontWeight:'bold',
  },
  items:{
   marginTop:30,
    
  },
});

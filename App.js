import React, {useState, useEffect} from 'react';
import { Image, TextInput, Text, SafeAreaView, ScrollView, View, StyleSheet, ActivityIndicator, Button
  , RefreshControl } from 'react-native';
  import Constants from 'expo-constants';

export default function App() {

  const[loading, setLoading] = useState(false);
  const[job, setJob] = useState();
  const[param, setParam] = useState();

  const loadJob = async() => {



      const res = await fetch(`http://jobswipe.tk/?query=SELECT * FROM 'Job' WHERE JobID = 69`);



      if(param){

        res = await fetch(`http://jobswipe.tk/?query=SELECT * FROM Job WHERE ${param}`);

      }

    

  const data = await res.json();
  setJob(data);
  setLoading(false);

}
  
  useEffect(() =>{

    loadJob();

  },[]);

  //if (!job) return;

  return (
    <SafeAreaView>
      <ScrollView>
        <Button 
        title = "search for jobID = 1"
        onPress={()=>{

          setParam("JobID = 1");

        }}
        />
        <Button 
        title = "search for jobID = 2"
        onPress={()=>{

          setParam("JobID = 2");

        }}
        />
        <Text style>{job.Name} - {job.Description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pic:{

    height: 500,
    width: 500

  }
});

import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, SafeAreaView, ScrollView, View, StyleSheet, ActivityIndicator
  , RefreshControl } from 'react-native';
  import Constants from 'expo-constants';

export default function App() {

  const[loading, setLoading] = useState(false);
  const[job, setJob] = useState();

  const loadJob = async() => {

    const res = await fetch('http://jobswipe.tk', {

      method: 'POST',
      headers:{

        Accept: 'application/json',
        'Content-Type': 'application/json'
      

      },

      body: JSON.stringify({

        query: 'SELECT * FROM `Job` WHERE `JobID` = 1 '

      })


      }
    
    
  );

  const data = await res.json();
  setJob(data);
  setLoading(false);

}
  
  useEffect(() =>{

    loadJob();

  },[]);

  if (!job) return (

    <View>
      <Text style={styles.paragraph}>No job?</Text>
    </View>

  )
  return (
    <SafeAreaView>
      <ScrollView
      refreshControl={<RefreshControl refreshing={loading} onRefresh={loadJob}/>}>
        <Text style = {styles.paragraph}>{job.name} - {job.description}</Text>
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

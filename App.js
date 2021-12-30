import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, SafeAreaView, ScrollView, View, StyleSheet, ActivityIndicator
  , RefreshControl } from 'react-native';
  import Constants from 'expo-constants';

export default function App() {

  const[loading, setLoading] = useState(false);
  const[job, setJob] = useState();
  const[param, setParam] = useState();

  const loadJob = async() => {

    const res = await fetch('http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE `JobID` = 1');

  const data = await res.json();
  setJob(data);
  setLoading(false);

}
  
  useEffect(() =>{

    loadJob();

  },[]);

  if (!job) return (

    <View style = {styles.container}>
      <Text style={styles.paragraph}>No job?</Text>
    </View>

  )
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={loadJob}/>}>
        <Text>{job.Name} - {job.Description}</Text>
      </ScrollView>
    </SafeAreaView>
    </View>
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
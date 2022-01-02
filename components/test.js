import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, SafeAreaView, ScrollView, View, StyleSheet, ActivityIndicator, Button
  , RefreshControl } from 'react-native';
  import Constants from 'expo-constants';


export default function test({ navigation }) {

  const[loading, setLoading] = useState(false);
  const[job, setJob] = useState();
  const[param, setParam] = useState();

  const loadJob = async() => {


    if(!param || !job){

      const res = await fetch('http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE `JobID` = 69');

      const data = await res.json();
      setJob(data);
      setLoading(false);

    }
    else{

      const res = await fetch('http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE ' + param);

      const data = await res.json();
      setJob(data);
      setLoading(false);


    }



}
  
  useEffect(() =>{

    loadJob();

  },[]);

  if (!job) return (

    <View style = {styles.container}>
      <Text style={styles.paragraph}>No Results</Text>
    </View>

  )
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={loadJob}/>}>
        <Text>{job.Name} - {job.Description}</Text>
        <Button 
        title = "search for jobID = 1"
        onPress={()=>{

          setParam("`JobID` = 1");
          loadJob();

        }}
        />
        <Button 
        title = "search for jobID = 2"
        onPress={()=>{

          setParam("`JobID` = 2");
          loadJob();

        }}
        />
        <Button 
        title = "search for Employer = crossroads"
        onPress={()=>{  //TODO: this returns multiple json objects
                        //make it so that it returns one / can handle multiple

          setParam("`Employer` = `Crossroads`");
          loadJob();

        }}
        />
      </ScrollView>
      <Button
      title = "Set job preferences"
      onPress={()=> navigation.navigate("preferences")}>
      </Button>
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
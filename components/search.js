import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, SafeAreaView, ScrollView, View, StyleSheet, ActivityIndicator, Button
  , RefreshControl } from 'react-native';
  import Constants from 'expo-constants';

  //TODO: this will be where the "tinder" cards are

export default function search({ navigation }) {

  const[loading, setLoading] = useState(false);
  const[job, setJob] = useState();
  const[titleContains, setTitleContains] = useState();
  const[jobtype, setJobType] = useState();

  const loadJob = async() => {


    if(
        //(
        !titleContains && !jobtype) 
    //|| !job)
    {

      const res = await fetch('http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE `JobID` = 69');

      const data = await res.json();
      setJob(data);
      setLoading(false);

    }
    else if(!titleContains){

      const res = await fetch('http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE `Type` = `' + jobtype + '`');

      const data = await res.json();
      setJob(data);
      setLoading(false);


    }
    else if(!jobtype){

        const res = await fetch('http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE `Name` LIKE `%' + titleContains + '%`');

        const data = await res.json();
        setJob(data);
        setLoading(false);    

    }
    else{

        const res = await fetch('http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE `Name` LIKE `%' + titleContains + '%` AND `Type` = `' + jobtype + '`');

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
      <Button
      title = "Back"
      onPress={()=> navigation.navigate("preferences")}>
      </Button>
    </View>

  )
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={loadJob}/>}>
        <Text>{job.Name} - {job.Description}</Text>
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
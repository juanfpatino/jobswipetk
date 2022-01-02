import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, SafeAreaView, ScrollView, View, StyleSheet, ActivityIndicator, Button
  , RefreshControl } from 'react-native';
  import Constants from 'expo-constants';

  //TODO: this will be where the "tinder" cards are

export default function search({ route, navigation}) {

  const[loading, setLoading] = useState(false);
  const[job, setJob] = useState();
  const{JOBTYPE} = route.params;
  const{TITLECONTAINS} = route.params;
  var jobtypeStripped = "'" + JSON.stringify(JOBTYPE).replace(/["]+/g, '') + "'";
  var titleContainsStripped = JSON.stringify(TITLECONTAINS).replace(/["]+/g, '');

  const loadJob = async() => {


    var query;


    if((jobtypeStripped == "''" || jobtypeStripped=="'any'") && titleContainsStripped  == "") {

        query = 'http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE `JobID` = 69';
    }
    else if(titleContainsStripped == ""){

        query = 'http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE `Type` = ' + jobtypeStripped;

    }
    else if(jobtypeStripped == "''" || jobtypeStripped=="'any'"){

        query = 'http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE `Name` LIKE' + "'%" + titleContainsStripped + "%'";

    }
    else{

        query = 'http://jobswipe.tk/?query=SELECT * FROM `Job` WHERE `Name` LIKE ' + "'%" + titleContainsStripped + "%'" + ' AND `Type` = ' + jobtypeStripped;

    }

    console.log(query);
    const res = await fetch(query);
    const data = await res.json();
    setJob(data);
    setLoading(false); 
     
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
      <Text>{JSON.stringify(JOBTYPE).replace(/["]+/g, '')} - {JSON.stringify(TITLECONTAINS).replace(/["]+/g, '')}</Text>

    </View>

  )
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={loadJob}/>}>
        <Text>{job.Name} - {job.Description}</Text>
        <Text>{JSON.stringify(JOBTYPE)} - {JSON.stringify(TITLECONTAINS)}</Text>
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
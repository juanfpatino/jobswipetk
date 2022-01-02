import React, {useState, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, SafeAreaView, ScrollView, View, StyleSheet, ActivityIndicator, Button
  , RefreshControl } from 'react-native';
import Constants from 'expo-constants';
import DropDownPicker from 'react-native-dropdown-picker';

export default function preferences({ navigation }) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [jobtype, setJobType] = useState([
      {label: 'Part-Time', value: 'part'},
      {label: 'Full-Time', value: 'full'},
      {label: 'Intern/Co-op', value: 'intern'}
    ]);


    const[titleContains, setTitleContains] = useState("");
    const input = useRef();


  return (
    <View style={styles.container}>
    <SafeAreaView>
    <DropDownPicker
      style={{
        backgroundColor: "salmon"
      }}
      textStyle={{
        fontSize: 15
      }}
      disabledStyle={{
        opacity: 0.5
      }}
      open={open}
      value={value}
      items={jobtype}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setJobType}
      onSelectItem={(jobtype) => {
        console.log(jobtype);
      }}
    />
        <TextInput
        ref={input}
        style = {styles.txtInput}
        value={titleContains}
        onChangeText={setTitleContains}
        autoCapitalize='none'
        placeholder='What job? (i.e. title)'    
    />
    
    <Button
    title="set"
    onPress={()=>{

        input.current.blur();
        setTitleContains("");
        navigation.navigate("search");
    }}
    />
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  txtInput:{

   // flex: 1,
    borderWidth: 2,
    fontSize: 15,
    margin: 5,
    borderRadius: 5,
    padding: 15

  }
});
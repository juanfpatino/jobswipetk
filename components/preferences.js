import React, {useState, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, SafeAreaView, ScrollView, View, StyleSheet, ActivityIndicator, Button
  , RefreshControl } from 'react-native';
import Constants from 'expo-constants';
import DropDownPicker from 'react-native-dropdown-picker';

export default function preferences({ navigation }) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [item, setItem] = useState([
      {label: 'Part-Time', value: 'Part-Time'},
      {label: 'Full-Time', value: 'Full-Time'},
      {label: 'Intern/Co-op', value: 'intern'}//not in database yet
    ]);

    const[jobtype, setJobType] = useState();
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
      items={item}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItem}
      onSelectItem={(value) => {
        console.log(value.value);
        setJobType(value.value);

      }}
    />
        <TextInput
        ref={input}
        style = {styles.txtInput}
        value={titleContains}
        onChangeText={setTitleContains}
        autoCapitalize='sentences'
        placeholder='What job? (i.e. title)'    
    />
    
    <Button
    title="set"
    onPress={()=>{
        input.current.blur();
        setTitleContains("");
        navigation.navigate("search", 
        {JOBTYPE: jobtype, TITLECONTAINS: titleContains});
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
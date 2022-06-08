import React, {useState,useEffect} from 'react';
import {FlatList, View, Text, StyleSheet, SafeAreaView, TouchableOpacity,Platform,PermissionsAndroid} from 'react-native';
import Contact from './ContactItem';
import Contacts from 'react-native-contacts';

const App = () => {

  const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   Contacts.getAll().then(contacts => {
  //     setContacts(contacts);
  //   });
  // }, []);

  const callContact = async () => {

    // PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    //   {
    //     'title': 'Contacts',
    //     'message': 'This app would like to view your contacts.',
    //     'buttonPositive': 'Please accept bare mortal'
    //   }
    // )

    if (Platform.OS === 'android') {

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Allow permission to access contacts',
          message: 'This app would like to view your contacts.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission Granted
        
    Contacts.getAll().then(contacts => {
      setContacts(contacts);
    });
      } else {
        // Permission Denied
        alert('Contact Permission Denied');
      }
    } else {
      
    Contacts.getAll().then(contacts => {
      setContacts(contacts);
    });
    }

  }  
  
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  
  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };
  return (
    <>
    
      <TouchableOpacity style={styles.btn} onPress={()=>callContact()}>
        <Text>Get Contacts</Text>
      </TouchableOpacity> 
        <FlatList
          data={contacts}
          // extraData={()=>callContact()}
          extraData={contacts}
          contentContainerStyle={{
            // flex:1,
            // justifyContent:'center',
            // width:'100%',
            // height:'100%',
          }}
          // extraData={contacts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
    
    </>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor:'pink',

  },
  btn:{
    backgroundColor:'pink',
    marginTop:70,
    paddingVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20
  }
});

export default App;
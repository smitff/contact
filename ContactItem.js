import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ContactItem = ({contact}) => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      padding: 5,
      borderBottomWidth: 0.5,
      borderBottomColor: '#d9d9d9',
    }}>
      <View>
        <View style={{
             width: 55,
             height: 55,
             borderRadius: 30,
             overflow: 'hidden',
             backgroundColor: '#d9d9d9',
             alignItems: 'center',
             justifyContent: 'center',         
        }}>
          <Text style={{
            fontSize: 20,

          }}>{contact?.givenName[0]}</Text>
        </View>
      </View>
      <View style={{
          flex: 1,
          justifyContent: 'center',
          paddingLeft: 5,
      }}>
        <Text style={{
          fontSize: 16,

        }}>
          {contact?.givenName} {contact?.middleName && contact.middleName + ' '}
          {contact?.familyName}
        </Text>
        <Text style={{
          color: '#888',

        }}>
          {contact?.phoneNumbers[0]?.number}
        </Text>
      </View>
    </View>
  );
};
export default ContactItem;
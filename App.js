import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import customData from './file.json';

const App = () => {
  const users = customData.users;
  //? customData.users : [];
  console.log(users);

  return (
    <View style={styles.container}>
      {users.map(user => {
        return (
          <Text style={styles.text}>
            {user.name}, {user.age},{user.gender}
          </Text>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // marginTop: 50,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'lightgrey',
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 50,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
export default App;

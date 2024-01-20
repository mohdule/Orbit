// CountrySelectionScreen.js

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useTheme } from 'core';

const CountrySelectionScreen = ({navigation}) => {
  const theme= useTheme();
  console.log("theme =>", theme)

  const handleCountrySelection = country => {
    console.log(`Selected Country: ${country}`);
    // Navigate to the Login screen or perform other actions based on the selected country
    if (country === 'UAE') {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Country</Text>

      <View style={styles.row}>
        {/* Country button with flag - United Arab Emirates */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCountrySelection('UAE')}>
          <Image
            source={require('../../assets/icons/flags/uae.png')}
            style={styles.flag}
          />
        </TouchableOpacity>

        {/* Add buttons for other countries */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCountrySelection('EGY')}>
          <Image
            source={require('../../assets/icons/flags/egy.png')}
            style={styles.flag}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCountrySelection('IND')}>
          <Image
            source={require('../../assets/icons/flags/ind.png')}
            style={styles.flag}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCountrySelection('JPN')}>
          <Image
            source={require('../../assets/icons/flags/jpn.png')}
            style={styles.flag}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
  button: {
    width: '48%', // Set the width to occupy 48% of the screen width
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
  },
  flag: {
    width: '80%', // Adjust the width of the flag to occupy 80% of the button
    height: '50%', // Adjust the height of the flag to occupy 50% of the button
    resizeMode: 'contain',
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default CountrySelectionScreen;

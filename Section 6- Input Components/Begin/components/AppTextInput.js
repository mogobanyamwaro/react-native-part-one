import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import styles from '../../End/app/config/styles';
import styles from '../../End/app/config/styles';

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput styles={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheetList.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRaduis: 25,
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;

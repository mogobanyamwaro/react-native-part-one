import React from 'react';
import { StyleSheet, Touchable } from 'react-native';

import colors from '../../End/app/config/colors';

function AppButton({ title, onpress, color = 'primary' }) {
  return (
    <TouchableOpacity
      style={[style.button, { backgroundColor: colors[color] }]}
      onpress={onpress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;

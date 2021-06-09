import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import styles from '../../End/app/config/styles';

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <view styles={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText styles={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles} />}
          </View>
        </view>
      </TouchableHighlight>
    </Swipeable>
  );
}

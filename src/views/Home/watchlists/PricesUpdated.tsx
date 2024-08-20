import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GS from '../../../theme/Styles';

const PricesUpdated = () => {
  return (
    <View style={styles.bottomView}>
      <Text style={[GS.ff,GS.tc, GS.fs12,GS.col_707070,GS.fw700]}>Prices updated at: 17:35:17</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...GS.bg_191919,
    padding: 2,
  },
});

export default PricesUpdated;

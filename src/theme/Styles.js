import {StyleSheet} from 'react-native';
import Fonts from './Fonts';
import Colors from './Colors';

// Global Styles
const GS = StyleSheet.create({

  ...Fonts.size,
  ...Fonts.weight,
  ...Colors.textColor,
  ...Colors.backgroundColor,
  ...Fonts.family,

  // Text Alignment

  tc: {
    textAlign: 'center',
  },
  tl: {
    textAlign: 'left',
  },
  tr: {
    textAlign: 'right',
  },

 // Common styles

  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

});



export default GS;

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Fonts = {
  size: {
    fs8: {
      fontSize: RFValue(8, height),
    },
    fs9: {
      fontSize: RFValue(9, height),
    },
    fs10: {
      fontSize: RFValue(10, height),
    },
    fs11: {
      fontSize: RFValue(11, height),
    },
    fs12: {
      fontSize: RFValue(12, height),
    },
    fs13: {
      fontSize: RFValue(13, height),
    },
    fs14: {
      fontSize: RFValue(14, height),
    },
    fs15: {
      fontSize: RFValue(15, height),
    },
    fs16: {
      fontSize: RFValue(16, height),
    },
    fs18: {
      fontSize: RFValue(18, height),
    },
    fs20: {
      fontSize: RFValue(20, height),
    },
    fs22: {
      fontSize: RFValue(22, height),
    },
    fs24: {
      fontSize: RFValue(24, height),
    },
    fs26: {
      fontSize: RFValue(26, height),
    },
    fs28: {
      fontSize: RFValue(28, height),
    },
    fs30: {
      fontSize: RFValue(30, height),
    },
    fs32: {
      fontSize: RFValue(32, height),
    },
  },

  weight: {
    fw100: {
      fontWeight: '100',
    },
    fw200: {
      fontWeight: '200',
    },
    fw300: {
      fontWeight: '300',
    },
    fw400: {
      fontWeight: '400',
    },
    fw500: {
      fontWeight: '500',
    },
    fw600: {
      fontWeight: '600',
    },
    fw700: {
      fontWeight: '700',
    },
    fw800: {
      fontWeight: '800',
    },
    fw900: {
      fontWeight: '900',
    },
  },
family:{
    ff:{
    fontFamily:'Poppins-Regular',
  }}
};

export default Fonts;

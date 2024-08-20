import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { Stack } from 'react-native-spacing-system';
import GS from '../../theme/Styles';
import Colors from '../../theme/Colors';

interface TryAgainProps {
  onTryAgain: () => Promise<void>;
}

const TryAgain: React.FC<TryAgainProps> = ({ onTryAgain }) => {
  const [isTryAgainVisible, setTryAgainVisible] = useState<boolean>(true);

  const handleTryAgain = async () => {
    await onTryAgain(); 
    setTryAgainVisible(false); 
  };

  return (
    <View>
      <Modal
        isVisible={isTryAgainVisible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        backdropOpacity={0.4}
      >
        <View style={CS.modalContent}>
          <Text style={[GS.ff, CS.title]}>Error!</Text>
          <Stack size={12} />
          <Text style={[GS.ff, CS.content]}>Something went wrong! Please try again.</Text>
          <Stack size={20} />
          <View style={CS.btnContainer}>
            <TouchableOpacity style={CS.btn} onPress={handleTryAgain}>
              <Text style={[GS.ff, CS.btnText]}>Reload</Text>
            </TouchableOpacity>
          </View>
          <Stack size={5} />
        </View>
      </Modal>
    </View>
  );
};

const CS = StyleSheet.create({
  modalContent: {
    ...GS.bg_light,
    padding: 16,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    ...GS.fw700,
    ...GS.error,
    ...GS.fs16,
  },
  content: {
    ...GS.dark,
    ...GS.fs14,
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
  },
  btnContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: Colors.h007AFF,
    ...GS.light,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.h007AFF,
  },
  btnText: {
    ...GS.light,
    ...GS.fw700,
    ...GS.fs14,
  },
});

export default TryAgain;

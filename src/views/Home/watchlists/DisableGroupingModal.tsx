import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  LayoutChangeEvent,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {Stack} from 'react-native-spacing-system';
import GS from '../../../theme/Styles';
import Colors from '../../../theme/Colors';

const DisableGroupingModal = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity
        style={CS.iconContainer}
        onPress={toggleModal}
        activeOpacity={1}>
        <Image
          source={require('../../../../assets/images/disable_grouping.jpeg')}
          style={CS.disableGrouping}
        />
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        backdropOpacity={0.4}
        // onBackdropPress={toggleModal}
      >
        <View style={CS.modalContent}>
          <Text style={[GS.ff,CS.title]}>Disable Grouping?</Text>
          <Stack size={12} />
          <Text style={[GS.ff,CS.content]}>
            This will remove the grouping of Cash, Near & Far month contracts &
            rearrange as per selected sorting method.
          </Text>
          <Stack size={25} />
          <Text style={[GS.ff,CS.content]}>Are you sure you want to disable it?</Text>
          <Stack size={20} />
          <View style={CS.btnContainer}>
            <TouchableOpacity style={CS.cancelBtn} onPress={toggleModal}>
              <Text style={[GS.ff,CS.cancelBtnText]}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={CS.disableBtn} onPress={toggleModal}>
              <Text style={[GS.ff,CS.disableBtnText]}>DISABLE</Text>
            </TouchableOpacity>
          </View>
          <Stack size={5} />
        </View>
      </Modal>
    </View>
  );
};

const CS = StyleSheet.create({
  iconContainer: {
    ...GS.bg_1e1e1e,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disableGrouping: {
    height: 20,
    width: 20,
  },
  modalContent: {
    ...GS.bg_light,
    padding: 16,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    ...GS.fw700,
    ...GS.dark,
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
  cancelBtn: {
    ...GS.light,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginEnd: 10,
  },
  cancelBtnText: {
    color: Colors.secondary,
    ...GS.fw700,
    ...GS.fs14,
  },
  disableBtn: {
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
  disableBtnText: {
    ...GS.light,
    ...GS.fw700,
    ...GS.fs14,
  },
});

export default DisableGroupingModal;

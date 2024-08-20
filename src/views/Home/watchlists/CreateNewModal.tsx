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

const CreateNewModal = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={[GS.ff,CS.createNew]}>Create New +</Text>
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
          <Text style={[GS.ff,CS.title]}>Create New Watchlist</Text>
          <Stack size={25} />
          <TextInput style={[GS.ff,CS.input]} placeholder="Name the Watchlist" />
          <Stack size={70} />
          <View style={CS.btnContainer}>
            <TouchableOpacity style={CS.cancelBtn} onPress={toggleModal}>
              <Text style={[GS.ff,CS.cancelBtnText]}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={CS.createBtn} onPress={toggleModal}>
              <Text style={[GS.ff,CS.createBtnText]}>CREATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const CS = StyleSheet.create({
  createNew: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    ...GS.fs12,
    ...GS.col_007AFF,
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
  btnContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  cancelBtn: {
    ...GS.light,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
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
  createBtn: {
    backgroundColor: Colors.h007AFF,
    ...GS.light,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.h007AFF,
  },
  createBtnText: {
    ...GS.light,
    ...GS.fw700,
    ...GS.fs14,
  },

  input: {
    borderWidth: 1,
    borderTopColor: Colors.light,
    borderRightColor: Colors.light,
    borderLeftColor: Colors.light,
    borderBottomColor: Colors.secondary,
  },
});

export default CreateNewModal;

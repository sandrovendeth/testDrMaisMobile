
import React from 'react';
import { Modal as RNModal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import {
    Overlay, 
    Content, 
    CloseButton, 
    CloseButtonText,
    TextModal,
    View
} from './styles';
import { Button } from '../Button';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: any
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
    const navigation = useNavigation<any>();
    
    function handleConfirm() {
      navigation.navigate('Filme');
    }

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Overlay>
        <Content>

            <TextModal>Atenção! {'\n'}
                   Confirma a exclusão deste filme?
            </TextModal>
            <View>
                <Button 
                    title='Confirmar' 
                    type='salvar'
                    onPress={handleConfirm}
                 
                />
                <Button 
                    title='Cancelar' 
                    type='cancelar'
                    onPress={onClose}
                
                />
            </View>
          
        </Content>
      </Overlay>
    </RNModal>
  );
};

export default Modal;


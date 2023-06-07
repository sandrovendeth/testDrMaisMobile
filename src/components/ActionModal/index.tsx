
import React, { useState } from 'react';
import { Modal as RNModal} from 'react-native';


import {
    Overlay, 
    Content, 
    TextModal,
    View
} from './styles';
import { Button } from '../Button';


interface ModalProps {
  visible: boolean;
  onClose: () => void;
  handleConfirm: () => void;
  children?: any
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, handleConfirm }) => { //passa a  função de deletar por props do componente pai (handleConfirm)
 
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


import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
// import Modal from 'react-native-modal'


// interface FiltersModalProps {
//     isVisible: boolean;
//     closeModal: () => void;
// }

// const FiltersOverlayModal: React.FC <FiltersModalProps>= ({isVisible, closeModal}) => {
const FiltersOverlayModal: React.FC = () => {
  return (
    <View>
        <Text>This is a Modal</Text>
    </View>
    // <Modal isVisible={isVisible}>
    //     <View style={styles.container}>
    //         <View style={styles.modalBackground}>
    //             <Text>This is a Modal</Text>
    //             <TouchableOpacity onPress={() => {closeModal}}>
    //                 <Text>Close Modal</Text>
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    // </Modal>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    modalBackground: {
        backgroundColor: 'white',
        padding: 20,
    }
});

export default FiltersOverlayModal
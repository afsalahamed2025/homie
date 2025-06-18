import { StyleSheet, Text, Modal, TouchableOpacity, View } from 'react-native'
import React from 'react'

 


const StylishPopup = ({visible , message , onClose}) => {
  return (
    <Modal
    
          visible={visible}
      transparent={true}
      animationType='fade'
      onRequestClose={onClose}
    >

       <View style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          backgroundColor: '#fff',
          padding: 25,
          borderRadius: 15,
          alignItems: 'center',
          elevation: 10,
          shadowColor: "#000",
          shadowOpacity: 0.3,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 5 }
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#333',
            textAlign: 'center',
            marginBottom: 20
          }}>
            {message}
          </Text>
          <TouchableOpacity
            onPress={onClose}
            style={{
              backgroundColor: '#0073ff',
              paddingVertical: 12,
              paddingHorizontal: 40,
              borderRadius: 30,
              elevation: 5
            }}
          >
            <Text style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 16,
              textAlign: 'center'
            }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default StylishPopup

const styles = StyleSheet.create({})
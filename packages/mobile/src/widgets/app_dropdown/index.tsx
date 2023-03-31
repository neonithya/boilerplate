import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import styles from './styles'

const CustomDropdown = ({ items, onSelect, placeholder, title }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const handleSelectItem = item => {
    setSelectedItem(item)
    onSelect(item)
    setModalVisible(false)
  }

  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <TouchableOpacity
        style={{ paddingVertical: 10, borderWidth: 0.6, borderColor: 'gray', borderRadius:5 }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.titleStyle}>{selectedItem ? selectedItem.label : placeholder}</Text>
      </TouchableOpacity>
      {/* <Modal transparent  onRequestClose={()=>{setModalVisible(false)}} visible={modalVisible} animationType="slide"> */}
      {modalVisible && (
        <View style={{ width: '100%', paddingVertical: 10, backgroundColor:'white', elevation: 1, borderRadius:5 }}>
          {items.map(item => (
            <TouchableOpacity key={item.value} onPress={() => handleSelectItem(item)}>
              <Text style={styles.textStyle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* </Modal> */}
    </View>
  )
}



export default CustomDropdown
import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import styles from './styles'


export type AppRadioButtonProps = {
    title?: boolean
    selectedOption: number
    onSelect?: (e:number) => void
    options?: []
  }

const CustomRadioButton = ({ options, selectedOption, onSelect, title }: AppRadioButtonProps) => {
  return (
    <View>
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <View style={styles.container}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.radioButton} onPress={() => onSelect(index)}>
            <View style={[styles.radioButtonIcon, selectedOption === index && styles.radioButtonIconSelected]}>
              <View
                style={[styles.radioButtonIcon1, selectedOption === index && styles.radioButtonIconSelected2]}
              ></View>
            </View>
            <Text style={styles.radioButtonLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}



export default CustomRadioButton
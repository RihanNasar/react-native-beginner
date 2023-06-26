import { StyleSheet, Text, View ,Pressable} from 'react-native'
import  MaterialIcons  from '@expo/vector-icons'
import React from 'react'

const IconButton = ({label,onPress,icon}) => {
  return (
    <Pressable style={styles.iconButton} >
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    iconButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconButtonLabel: {
      color: '#fff',
      marginTop: 12,
    },
  });
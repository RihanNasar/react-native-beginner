import { View, Pressable,Text,StyleSheet } from "react-native"

import FontAwesome from '@expo/vector-icons/FontAwesome'

const Button = ({label,theme,onPress}) => {
    if (theme === "primary") {
        return (
          <View
          style={[styles.buttonContainer, { borderWidth: 4, borderRadius: 18 }]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#000" }]}
              onPress={() => alert('You pressed a button.')}
            >
              <FontAwesome
                name="picture-o"
                size={18}
                color="#fff"
                style={styles.buttonIcon}
              />
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>
        );
      }
    
      return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
          </View>
      );
    }


const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
      },
      button: {
        
        
        
        borderRadius: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      buttonIcon: {
        paddingRight: 8,
      },
      buttonLabel: {
        color: '#fff',
        
        
        fontSize: 16,
        fontWeight: 'bold'
      },
})
export default Button

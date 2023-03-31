import { StyleSheet } from 'react-native'
import Colors from '../../utils/color'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal:10
      },
      radioButton: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      radioButtonIcon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#aaa',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      radioButtonIcon1: {
        width: 12,
        height: 12,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#aaa'
      },
      radioButtonIconSelected: {
        borderColor: 'green',
      },
      radioButtonIconSelected2: {
        backgroundColor: 'green',
        borderColor: 'green',
        width: 12,
        height: 12
      },
      radioButtonLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginRight:10
      },
      titleStyle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'gray'
      }
})
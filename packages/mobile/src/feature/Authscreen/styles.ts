import { Dimensions, StyleSheet } from 'react-native'
import Colors from '../../utils/color'

export default StyleSheet.create({
  mainView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: Colors.ternaryColor,
    
  },
  secView: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 45,
    // height: '75%'
  },
  uberText: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    marginTop: '15%',
    fontFamily: 'Poppins-Regular'
  },
  uberText1: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'
  },
  uberText2: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Poppins-Regular',
    textAlign:'left'
  },
  getText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
    marginTop: '2%',
    fontFamily: 'Poppins-Regular'
  },
  thirdView: {
    paddingBottom: 40,
    paddingHorizontal:10,
    marginTop:15
  },
  carStyle: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    right: -100
  },
  inputView: {
    alignItems: 'center',
    width: '100%',
    marginTop:10,
    paddingHorizontal:10
  },
  itemStyle:{
    padding:5,
    borderBottomWidth:0.5,
    borderBottomColor:'white'
  }
})

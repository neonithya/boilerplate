import { View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import Images from '../../assets/images'
import i18n from 'localisation'
import style from './styles'
import { AppButton } from '../../widgets/app_button/app_button'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userUpdateDataRequest } from 'presentation'
import { AppInput } from '../../widgets/app_input/app_input'
import RoutePaths from '../../navigation/router_path'
import { useNavigation } from '@react-navigation/native'

const DetailsSreen = () => {
  const [lodingState, setLodingState] = useState(false)
  const [title, setTitle] = useState<string>('Hello')
  const [body, setBody] = useState<string>('Welcome Nithya')
  const [userId, setUserId] = useState<string>('10')
  const navigation = useNavigation<any>()
  const updatereducer: any = useSelector((state: any) => state?.userUpdate)
  const dispatch = useDispatch()

  useEffect(() => {
    if (updatereducer?.status == 1) setLodingState(true)
    else setLodingState(false)
  }, [updatereducer])

  useEffect(() => {
    if (updatereducer?.status == 3) navigation.navigate(RoutePaths.auth)
  }, [updatereducer])

  const saveData = () => {
    const data = {
      title: title,
      body: body,
      userId: Number(userId)
    }
    if (title == '' || body == '' || userId == '') {
      alert(i18n.t('noInput'))
    } else {
      dispatch(userUpdateDataRequest(data))
    }
  }
  return (
    <View style={style.mainView}>
      <View style={style.secView}>
        <Text style={style.uberText}>{`${i18n.t('uber')}`}</Text>
        <Text style={style.getText}>{i18n.t('createUser')}</Text>
      </View>
      <View style={style.inputView}>
        <AppInput placeholderText={'title'} value={title} setData={e => setTitle(e)} />
        <AppInput placeholderText={'body'} value={body} setData={e => setBody(e)} />
        <AppInput placeholderText={'userId'} value={userId} setData={e => setUserId(e)} />
      </View>
      <View style={style.thirdView}>
        <AppButton value={'create'} loadingState={lodingState} saveData={() => saveData()} />
      </View>
    </View>
  )
}

export default DetailsSreen

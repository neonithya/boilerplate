import { View, Image, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import Images from '../../assets/images'
import i18n from 'localisation'
import style from './styles'
import { AppButton } from '../../widgets/app_button/app_button'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userGetDataRequest } from 'presentation'
import { AppInput } from '../../widgets/app_input/app_input'
import RoutePaths from '../../navigation/router_path'
import { useNavigation } from '@react-navigation/native'

const AuthScreen = () => {
  const [selectedData, setSelectedData] = useState<any>({})

  const navigation = useNavigation<any>()
  const updateData: any = useSelector((state: any) => state?.userUpdate?.data?.payload)
  const dispatch = useDispatch()
  const dataupdating: any = useSelector((state: any) => state?.usergetData?.data?.payload)

  useEffect(() => {
    setTimeout(() => {
    //   dispatch(userGetDataRequest({ userid: Number('19') }))
    }, 5000)
  }, [])

  console.log('deeepp------------------', updateData)
  type ItemProps = { item: any }

  const Item = ({ item }: ItemProps) => (
    <View style={style.itemStyle}>
      <Text style={style.uberText2}>{` User id  :  ${item?.id}`}</Text>
      <Text style={style.uberText2}>{item?.title}</Text>
    </View>
  )

  const saveData = () => {}
  return (
    <View style={style.mainView}>
      <View style={style.secView}>
        <Text style={style.getText}>{i18n.t('userCreated')}</Text>
        <Text style={style.uberText1}>{` ID : ${updateData?.id}`}</Text>
        <Text style={style.uberText1}>{` USER ID : ${updateData?.userId}`}</Text>
        <Text style={style.uberText1}>{` TITLE : ${updateData?.title}`}</Text>
        <Text style={style.uberText1}>{` DESCRIPTION : ${updateData?.body}`}</Text>
      </View>

      <FlatList
        style={style.thirdView}
        data={dataupdating}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  )
}

export default AuthScreen

import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({name,lastname}) => {
    return(
        <view>
            <text>Your First Name is {name}! and Last name is {lastname}</text>
        </view>
    )
  }

const CustomText = () => {
  return (
    <View>
      <MyCustomTextWith name="Natrin" lastname="Thongvichit"/>
      <MyCustomTextWith name="Niraphat" lastname="Petchyothin"/>
    </View>
  )
}

export default CustomText
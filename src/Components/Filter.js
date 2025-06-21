import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Filter = () => {
    const age =  [18,25,23,21]
    const result = age.filter(checkAdults);

    function checkAdults(age){
        return age>=18
    }
    console.log(result)
  return (
    <View>
      <Text>Filter</Text>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({})
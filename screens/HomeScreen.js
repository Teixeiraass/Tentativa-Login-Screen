import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
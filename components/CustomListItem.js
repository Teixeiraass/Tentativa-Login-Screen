import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { ListItem, Avatar } from '@rneui/base';

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          url: "https://cencup.com/wp-content/upload/2019/07/avatar-placeholder.png",
        }}
      />
    </ListItem>
  )
}

export default CustomListItem;

const styles = StyleSheet.create({})
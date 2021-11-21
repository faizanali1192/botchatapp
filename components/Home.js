import React from 'react'
import { View, Text } from 'react-native'

export  function Home({navigation}) {
const users=[

    {id:1,name:"Faizan"},
    {id:2,name:"Hassan"}
]
    return (
        <View>
           {users.map((user)=>{
             return  <Text key={user.id} onPress={()=>navigation.navigate('Chat',{id:user.id,name:user.name})} >{user.name}</Text>
           })}
        </View>
    )
}

import React from 'react'
import { View, Text } from 'react-native'

export  function Home({navigation}) {
const users=[

    {id:1,name:"Faizan"},
    {id:2,name:"Hassan"}
]
    return (
        <View style={{borderBottom:"1px solid purple"}}>
           {users.map((user)=>{
             return  <Text key={user.id} style={{fontSize:15, paddingLeft:10, borderTop:"1px solid purple", paddingTop:10, paddingBottom:10}} onPress={()=>navigation.navigate('Chat',{id:user.id,name:user.name})} >{user.name}</Text>
           })}
        </View>
    )
}

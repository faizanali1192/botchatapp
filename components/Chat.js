import React,{useState,useEffect} from 'react'
import { View, Text,TextInput,Button ,StyleSheet } from 'react-native'

export  function Chat({route,navigation}) {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])



const{id}=route.params;
    const{name}=route.params; 

    const botMessage=["i am Bot"]

    const sendMessage=(e)=>{
        e.preventDefault();
        setMessages([...messages,message,botMessage[0]])

    }

    // const sendBotMessage=()=>{
    //     setMessage([...messages,"i am a bot"])
    // }

    console.log(message)
    return (
        <View>
           <Text 
         
           onPress={()=>navigation.navigate('Chat')}>{name} </Text>
           {messages.map((m)=>{
               return <Text   style={[m=="i am Bot"?  styles.botMessage : styles.userMessage]} >{m}</Text>
           })}
           <TextInput
           style={{ 
    	   height: 40, 
            borderColor: 'gray', 
            borderWidth: 1,
            placeholderTextColor: 'gray',
    }}
      onChangeText={message => setMessage(message)}
      value={message}
	  placeholder="Enter Your Message..."
    />
    <Button 
title="click me"
onPress={(e) => {sendMessage(e)}}
/>
        </View>
    )
}


const styles = StyleSheet.create({
    userMessage:{
        border:"2px solid green",

    },
    botMessage:{
        border:"2px solid red",

    },
    container: {
      marginTop: 50,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });
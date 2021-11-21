import React,{useState,useEffect} from 'react'
import { View, Text,TextInput,Button ,StyleSheet, ScrollView } from 'react-native'

export  function Chat({route,navigation}) {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])



const{id}=route.params; 
    const{name}=route.params; 

    const botMessage=["i am Bot"]

    const sendMessage=(e)=>{
        e.preventDefault();
        setMessages([...messages,message,botMessage[0]])
        setMessage("");
    }



    console.log(message)
    return (
        <View style={{backgroundColor:"lightgrey", flex:1, paddingLeft:10, paddingRight:10, }} >
         <ScrollView>
           <Text 
         
           onPress={()=>navigation.navigate('Chat')}>{name} </Text>
           {messages.map((m,index)=>{
               return <Text key={index}  style={[m=="i am Bot"?  styles.botmessage : styles.usermessage]} >{m}</Text>
           })}
</ScrollView>


           <View style={{display:"flex", flexDirection:"row" ,justifyContent:"center" ,marginTop:"auto", display:"inlineBlock"}}>
           <TextInput
           style={{ 
    	   height: 40, 
            borderColor: 'gray', 
            borderWidth: 1,
            placeholderTextColor: 'gray',
        //    marginTop:"auto",
           width:"100%",
           padding:5,
           
    }}
      onChangeText={message => setMessage(message)}
      value={message}
	  placeholder="Enter Your Message..."
    />
    <Button 
    style={{
        height: 40, 
         borderColor: 'gray', 
         borderWidth: 1,
         placeholderTextColor: 'gray',

           
 }}
title="Send"
onPress={(e) => {sendMessage(e)}}
/>
</View>
        </View>
    )
}


const styles = StyleSheet.create({

    usermessage:{
       color:"green",
        marginLeft:"auto",
        fontSize:20

    },
    botmessage:{
       color:"orange",
       fontSize:20
       
    },
  
  });
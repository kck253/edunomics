import React, { useState } from 'react';
import{View,TextInput,Image,Text,TouchableOpacity} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { ScrollView } from 'react-native-gesture-handler';
import { InputAutoSuggest } from 'react-native-autocomplete-search';

export default function HomeScreen() {
    const [text,setSearch]=useState('');
  const [messages, setMessages] = useState([
    {
      _id: '0',
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
    },
    {
      _id: '1',
      text: 'Hello!',
      createdAt: new Date().getTime(),
      user: {
        _id: '2',
        name: 'Test User'
      }
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }
const data=
    [
        {id:'1', name:'Hello'},
        {id:'2', name: 'I am Fine'},
        {id:'3', name: 'How are you?'},
        ]

console.log(data)
  return (
    <View style={{flex: 1,backgroundColor:"white"}}>
    
                    <InputAutoSuggest
  style={{height:50}}
  staticData={data}
  itemTextStyle={{fontSize:20,textAlign:"center"}}
  inputStyle={{fontSize:15}}
  flatListStyle={{marginBottom:10}}
/>
                    
             
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: '1' }}
      
    />
     
    </View>
  );
}
/*import React,{Component,useState, useCallback, useEffect} from 'react'
import {View,Text,Image,TextInput} from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'

export default class HomeScreen extends Component{
    constructor(props){
        super(props)
    
    this.state={
        text:'',
        messages:[]
    }
}
   
    
    
    render(){
        

        return(
            <View>
                <View style={{ borderColor: 'black',
        marginLeft:28,width:"80%",fontSize:20,borderRadius:30,flexDirection:"row",backgroundColor:'white',margin:10,alignItems:"center",elevation:5}}>
                    <Image source={require('./images/search1.webp')}style={{marginLeft:20,width:20,height:20}}/>
                    <TextInput 
                    underlineColorAndroid="transparent"
                    placeholderTextColor="gold"
                    placeholder="  Search Here"
                    maxLength={10}
                    style={{width:"80%"}}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    />
                    </View>
                    <GiftedChat
     messages={this.state.messages}
      
      user={{
        _id: 1,
      }}
    />
       
            </View>

        )
    }
}*/
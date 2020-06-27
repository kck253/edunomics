import React,{Component} from 'react'
import {StyleSheet,Text,View, TextInput,TouchableOpacity, ScrollView,ImageBackground, Dimensions,Image,Alert} from 'react-native';

export default class SignUp extends Component{
  
  onalert=()=>{
    Alert.alert(
      'Alert',
      "User Registered Succesfully",
      [
        {
          text: 'Ok',
          onPress: () => this.props.navigation.replace('Login'),
        },
      ],
      { cancelable: true }
    );
  }
    render(){
      return(
      <ScrollView>
      <View>
      <ImageBackground source={require('./images/background.png')} style={{width:"100%",height:Dimensions.get('window').height}}>
      <Text style={{fontWeight:"bold",fontSize:30,marginLeft:30,alignSelf:"center",textShadowRadius:10,textShadowColor:"floralwhite"}}>Edunomics</Text>
      
      
          <Text style={{fontWeight:"bold",fontSize:30,marginLeft:30,marginTop:40,textShadowRadius:10,textShadowColor:"floralwhite"}}>Signup</Text>
        
          <Text style={{fontWeight:"bold",fontSize:20,marginLeft:30,marginTop:30,textShadowRadius:10,textShadowColor:"floralwhite"}}>Name</Text>
          <TextInput style={{width:"80%",marginLeft:30}}
          underlineColorAndroid="black"
          placeholder="My Name"
          
          />
          <Text style={{fontWeight:"bold",fontSize:20,marginLeft:30,marginTop:30,textShadowRadius:10,textShadowColor:"floralwhite"}}>Email</Text>
  
          <TextInput style={{width:"80%",marginLeft:30}}
          underlineColorAndroid="black"
          placeholder="mymail111@gmail.com"
          
          />
          
  
           <Text style={{fontWeight:"bold",fontSize:20,marginLeft:30,marginTop:30,textShadowRadius:10,textShadowColor:"floralwhite"}}>Password</Text>
           <View style={{flexDirection:"row",borderBottomColor:"black",borderBottomWidth:1,width:"80%",marginLeft:30}}>
          <TextInput style={{width:"80%"}}
  
          placeholder="**************"
          secureTextEntry
          />
          <Image source={require('./images/eye.png')} style={{alignSelf:"auto",margin:20}}/>
          </View>
          <TouchableOpacity style={Styles.button} onPress={this.onalert}>
              <Text style={{color:"gold"}}>Signup</Text>
          </TouchableOpacity>
          </ImageBackground>
      </View>    
  
      </ScrollView>
      );
    };
  }
    const Styles=StyleSheet.create({
  
      button: {
          alignItems: 'center',
          backgroundColor: 'white',
          color: 'gold',
          padding: 10,
          marginTop: 20,
          marginLeft: 35,
          marginRight: 35,
          marginBottom:20,
          borderRadius:10
        },
      })
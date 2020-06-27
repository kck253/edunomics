import React,{Component} from 'react'
import {StyleSheet,Text,View, TextInput,TouchableOpacity, ScrollView,ImageBackground,Image, Dimensions} from 'react-native';

export default class Login extends Component{
     
    render(){
        return(
          <ScrollView>
      
          <View>
          <ImageBackground source={require('./images/men.jpg')} style={{width:"100%",height:Dimensions.get('window').height}}>
      
          <Text style={{fontWeight:"bold",fontSize:30,marginLeft:30,alignSelf:"center",textShadowRadius:10,textShadowColor:"floralwhite"}}>Edunomics</Text>
          <View style={{justifyContent:"center"}}>
          
              <Text style={{fontWeight:"bold",fontSize:30,marginLeft:30,marginTop:40,textShadowRadius:10,textShadowColor:"floralwhite"}}>Login</Text>
            
              <Text style={{fontWeight:"bold",fontSize:20,marginLeft:30,marginTop:30,textShadowRadius:10,textShadowColor:"floralwhite"}}>Email</Text>
              <TextInput style={{width:"80%",marginLeft:30}}
              underlineColorAndroid="black"
              placeholder="Mymail111@gmail.com"
              
              />
              <Text style={{fontWeight:"bold",fontSize:20,marginLeft:30,marginTop:30,textShadowRadius:10,textShadowColor:"floralwhite"}}>Password</Text>
              <View style={{flexDirection:"row",borderBottomColor:"black",borderBottomWidth:1,width:"80%",marginLeft:30}}>
              <TextInput style={{width:"80%"}}
      
              placeholder="**************"
              secureTextEntry/>
              <Image source={require('./images/eye.png')} style={{alignSelf:"auto",margin:20}}/>
              </View>
              <TouchableOpacity style={Styles.button} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                  <Text style={{color:"gold"}}>Login</Text>
              </TouchableOpacity>
              <Text style={{textAlign:"center",color:"white"}}>Don't have an account?<Text style={{fontWeight:"bold"}} onPress={() => this.props.navigation.navigate("SignUp")}>Sign Up</Text></Text>
              </View>
              </ImageBackground >
              
          </View>   
          
          </ScrollView>
          );
        }
        };
        const Styles=StyleSheet.create({
      
          button: {
              alignItems: 'center',
              backgroundColor: 'white',
              color: 'gold',
              padding: 10,
              marginTop:40,
              marginLeft: 35,
              marginRight: 35,
              marginBottom:20,
              borderRadius:10
            },
          })
        
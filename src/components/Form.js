import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  NativeModules
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { NavigationActions, withNavigation } from "react-navigation";


export default class Logo extends Component<{}> {

  // foo()
  // {
  //   Actions.signup()
  //   // console.log("sssssssssssssssssssssssssssssssss")
  //   // alert("Flag1")

  // }

  // componentWillUnmount() {
  //   const {animations} = this.state;
  //   animations.map((i, index) => {
  //     this[`animation${index}`].reset();
  //   })
  // }

  // const resetAction = NavigationActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({routeName: "Drawer"})]
  // });
  navigateAction = NavigationActions.navigate({routeName: "Drawer"});




  // if (Platform.OS === "android") {
  //     authFunction = () => {
  //       this.props.navigation.dispatch(resetAction);
  //     };
  //   } else if (Platform.OS === "ios") {
  //     authFunction = async () => {
  //       let result = await NativeModules.ExponentFingerprint.authenticateAsync(
  //         "Please verify your identity"
  //       );
  //       if (result.success) {
  //         //this.setState({ success: true });
  //         this.props.navigation.dispatch(resetAction);
  //         // this.props.navigation.navigate('Landing');
  //         // alert('Success!');
  //       } else {
  //         //this.setState({ success: false });
  //         this.props.navigation.dispatch(resetAction);
  //         // alert('Cancel!');
  //       }
  //     };
  //   }



	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(50,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "rgba(50,0,0,0)"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,255,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "rgba(0,100,50,0.5)"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.dispatch(navigateAction)}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'rgba(0,0,200,0.8)',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'rgba(0,0,0,0.5)',
    textAlign:'center'
  }
  
});
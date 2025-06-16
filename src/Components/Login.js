import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,

  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import backgroundimage from '../assets/image/backimag.jpg';
import {encode as btoa} from 'base-64';

import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import app_image from '../assets/image/top_logo.jpg';
import StylishPopup from './StylishPopup';
import nano_logo from '../assets/image/bottomright_logo.png'
export default function Login({navigation}) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupTitle, setPopupTitle] = useState('');

  const showPopup = (message) => {
    setPopupMessage(message);
    setPopupVisible(true);
  };

  useEffect(() => {
    Saved_Data();
  }, []);

  const Saved_Data = async () => {
    try {
      const username = await AsyncStorage.getItem('username');
      const password = await AsyncStorage.getItem('password');
      console.log('Saved Username Async:', username);
      console.log('Saved  Password Async:', password);
      if (username && password) {
        navigation.navigate('Home'); //replace use  pandarthu kku  (back pogathu login page kku)
      } else {
        setusername('');
        setpassword('');
        console.log('Stays here itself');
      }
    } catch (error) {
      console.log('Error reading Aysnc:', error);
    }
  };
  const handlePress = async () => {
    if (!username.trim()) {
      showPopup('Validation Error', 'Username field is required ');
      return;
    } else if (!password.trim()) {
      showPopup('Validation Error', 'Password field is required');
      return;
    } else {
      await Login_function();
    }
  };

  const Login_function = async () => {
    try {
      const url = 'http://13.127.67.252:5040/FPU20S3/';

      const params = {
        data: {
          p1: btoa(username),
          p2: btoa(password),
          p3: '',
          p4: '1',
          p5: 'Reach',
          p6: 'login',
        },
      };

      console.log(' URL:', url);
      console.log('Params:', JSON.stringify(params));

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const result = await response.json();

      console.log(' Response:', result);

      const statusCode = result?.Output?.status?.code;

      if (statusCode === '200') {
       showPopup('Success', 'Login Successfully ');
          setPopupTitle('Success');
  setPopupMessage('Login Successfully');
  setPopupVisible(true);

        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);

        navigation.navigate('Home');
        console.log(' Login successful. Navigating to Home...');
      } else {
        const errormsg = result?.Output?.status?.message || 'Login Failed';
        Alert.alert('Login Error', errormsg);
        console.log(' Login Error:', errormsg);
      }
    } catch (error) {
      Alert.alert('Network Error', error.message || 'Something went wrong');
      console.log(' Catch Error:', error);
    }
  };
  return (

    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#007aff',
          width: '100%',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <ImageBackground
          style={{width: '100%', height: 260}}
          source={backgroundimage}
          resizeMode="cover">
          <Text
            style={{
              marginTop: 20,
              fontWeight: '800',
              fontSize: 20,
              color: '#ffffff',
              paddingHorizontal: 16,
            }}>
            Welcome!!!
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 15,
              color: '#ffffff',
              paddingHorizontal: 16,
            }}>
            The Reach app is a step towards reducing paper work and an
            initiative towards go green
          </Text>

          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingHorizontal: 16,
              marginTop: 5,
            }}>
            <Icon name="greater-than" size={17} color="#ffffff" />
            <View style={{width: 10}} />
            <Text style={{textAlign: 'center', color: '#ffffff'}}>Smart</Text>
            <View style={{width: 5}} />
            <Icon name="greater-than" size={17} color="#ffffff" />
            <View style={{width: 10}} />
            <Text style={{textAlign: 'center', color: '#ffffff'}}>Service</Text>
            <View style={{width: 5}} />
            <Icon name="greater-than" size={17} color="#ffffff" />
            <View style={{width: 10}} />
            <Text
              style={{
                textAlign: 'center',
                color: '#ffffff',
                fontWeight: '500',
              }}>
              Go Smart
            </Text>
            <View style={{width: 5}} />
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          borderTopRightRadius: 70,
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignSelf: 'center',
            paddingHorizontal: 15,
            borderBottomWidth: 2,
            borderBottomColor: '#e4e2e2',
          }}>
          <Text style={{color: '#706d6d', fontWeight: '500'}}>
            Log in to your Registered account with Smart FM
          </Text>
        </View>

        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            marginTop: 20,
            color: '#000000',
            // flex: 1,
          }}>
          <TextInput onChangeText={setusername}
            placeholder="User Name"
            placeholderTextColor="#cac8c8"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#cac8c8',
              fontSize: 15,
              color: '#000000',
            }}
          />

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: '#cac8c8',
              alignItems: 'center',
              paddingVertical: 4,
            }}>
            <TextInput onChangeText={setpassword}  secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#cac8c8"
              style={{fontSize: 15, color: '#000000'}}
            />
            <TouchableOpacity>
              <FontAwesome name="eye" size={27} color="#cac8c8" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handlePress}
            style={{
              backgroundColor: '#007aff',
              borderRadius: 10,
              paddingVertical: 10,
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text 
              style={{
                color: '#ffffff',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize:15,
               fontFamily: 'sans-serif-bold'

              }}>
              Login
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              textAlign: 'right',
              fontWeight: '700',
              color: '#007aff',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}>
            Forget Password?
          </Text>

          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Image style={{width: '100%', height: 100}} source={app_image} />
          </View>
        
            <TouchableOpacity style={{width:"70%" , height:50, marginTop: 15, backgroundColor:'#007aff', borderRadius:10, alignItems:'center',alignSelf:'center', justifyContent:'center',  }} >

          <Text style={{color:'#ffffff',fontWeight:'500', textAlign:'center' ,fontSize:15}}> Select Language</Text>
            </TouchableOpacity>
     
        </View>

       <View
    style={{
      width: '90%',

      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
        
    }}>
    <Text style={{color: '#007aff',fontWeight:'400',fontSize:12}}>Version 1.22</Text>
    <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={nano_logo} />
  </View>
      </View>
            <StylishPopup
        visible={popupVisible}
          title={popupTitle}
        message={popupMessage}
        
        onClose={() => setPopupVisible(false)}
      />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',

    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#61A0ED',
  },
});

/* sharuk */
/* 123456 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image
  //   Animated,
  // Dimensions,
  // Modal
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useState,useRef } from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';


import progressImage from '../assets/image/rounded.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import home_images from '../assets/image/building_15218830.png'
import Login from './Login';


    
export default function Home({navigation}) {


  // const [visible, setVisible] = useState(false);
  // const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current;

  // const openMenu = () => {
  //   setVisible(true);
  //   Animated.timing(slideAnim, {
  //     toValue: 0,
  //     duration: 300,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // const closeMenu = () => {
  //   Animated.timing(slideAnim, {
  //     toValue: -Dimensions.get('window').width,
  //     duration: 300,
  //     useNativeDriver: false,
  //   }).start(() => setVisible(false));
  // };



 const logout = () => {
    Alert.alert(
      'Logout',
      'You Want Logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
          await AsyncStorage.removeItem('username');
          await AsyncStorage.removeItem('password');
              navigation.navigate("Login");
            } catch (error) {
              console.log('Logout error:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };


   
    return (
    <ScrollView style={styles.container}>
     <View
  style={{
    width: '100%',
    height: 120,
    backgroundColor: '#0073ff',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  }}
>
  {/* Left: Menu Icon + Greeting */}
  <View
    style={{
      width:'30%',
      justifyContent:'center',
      alignSelf:'center',
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <TouchableOpacity onPress={logout} >

    <FontAwesome name="bars" size={28} color="#fff" />
    </TouchableOpacity>
    <View style={{ padding:8, justifyContent:'flex-start',alignItems:'center',alignSelf:'center' }}>
      <Text style={{ color: '#fff', fontSize: 14 }}>Hello,</Text>
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
     Afsal
      </Text>
    </View>
  </View>

  {/* Right: Translate and Bell */}
  <View
    style={{
      width:'30%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-evenly',
      alignSelf:'center',
    }}
  >
    <TouchableOpacity style={{ justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
      <MaterialIcons name="translate" size={28} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity style={{ justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
      <MaterialIcons name="notifications" size={28} color="#fff" />
    </TouchableOpacity>
  </View>
</View>

      <View style={styles.statusContainer}>
        <StatusBox label="Open" count="64" color="#ff0000" />
        <View
          style={{
            width: 1,
            height: 70,
            backgroundColor: 'black',
            fontSize: '16',
            fontWeight: '900',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
        <StatusBox label="Close" count="0" color="green" />
        <View
          style={{
            width: 1,
            height: 70,
            backgroundColor: 'black',
            fontSize: '16',
            fontWeight: '900',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
        <StatusBox label="StandBy" count="181" color="#ffbf00" />
      </View>

      <View
        style={{
          width: '94%',
          height: 100,
          backgroundColor: '#0073ff',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          borderRadius: 20,
          padding: 10,
        }}>
        <View
          style={{
            width: '60%',
            justifyContent: 'flex-start',
            alignSelf: 'center',
            alignItems: 'flex-start',
          }}>
          <Text style={styles.date}> Today May 26 2025</Text>
          <Text style={styles.progressText}> Your Work</Text>
          <Text style={styles.progressText}> Progress</Text>
        </View>

        <View
          style={{
            width: '40%',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Image style={{width: '53%', height: 82}} source={progressImage} />
        </View>
      </View>

      <View
        style={{
          width: '94%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          alignItems: 'center',
          height: 40,
        }}>
        {/* Left side - Mohssule */}
        <View style={{width: '50%'}}>
          <Text
            style={[
              styles.sectionTitle,
              {textAlign: 'left', color: '#0073ff'},
            ]}>
            Modules
          </Text>
        </View>

        {/* Right side - Refresh Icon + View More + Down Icon */}
        <View
          style={{
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          {/* 🔄 Refresh icon - left */}
          <FontAwesome
            name="sync"
            size={18}
            color="#0073ff"
            style={{marginRight: 8}}
          />

          {/* 🟦 View More - center */}
          <Text
            style={[
              styles.sectionTitle,
              {textAlign: 'center', color: '#0073ff'},
            ]}>
            View More
          </Text>

          <Feather name="corner-right-down" size={18} color="#0073ff" />
        </View>
      </View>

      <View style={styles.moduleContainer}>
        <ModuleBox
          navigation={navigation}
          label="Workorder"
          count="0/245"
          image={require('../assets/image/paper-bag.png')}
        />
        <ModuleBox
        navigation={navigation}
          label="Facility Auding Maintenance"
          count="0/0"
          image={require('../assets/image/research.png')}
        />
        <ModuleBox navigation={navigation}
          label="House Keeping Maintenance"
          count="0/28"
          image={require('../assets/image/housekeeping.png')}
        />
        <ModuleBox
          label="Service Based Maintenance "
          count="0/8"
          image={require('../assets/image/settings.png')}
        />
      </View>

      <Text style={styles.sectionTitle}>Tools</Text>
      <View style={styles.moduleContainer}>
        <ToolBox
          label="Scan To Get Asst Details"
          image={require('../assets/image/qr.png')}
        />
        <ToolBox
          label="My Activity Side"
          image={require('../assets/image/statistics.png')}
        />
        <ToolBox
          label="My Activity Side"
          image={require('../assets/image/statistics.png')}
        />
      </View>
      {/* <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={openMenu} style={{ margin: 20 }}>
        <Text style={{ fontSize: 20 }}>☰ Open Menu</Text>
      </TouchableOpacity>
        <Modal transparent visible={visible} animationType="none">
        <TouchableOpacity style={styles.overlay} onPress={closeMenu} activeOpacity={1} />
        <Animated.View style={[styles.menu, { left: slideAnim }]}>
              <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
                  <View style={{ alignItems: 'center', marginTop: 30 }}>
            <View style={styles.avatar} />
            <Text style={styles.name}>SHARUK</Text>
          </View>
              {['Home', 'Workorders', 'Facility Auditing Maintenance', 'Inspection', 'Incident', 'Reset Password'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.version}>Version 1.22</Text>
        </Animated.View>
      </Modal>
       </View> */}

       <View style={{width:"100%",  height:60,alignSelf:'center',alignItems:'center',}}>
       
       <View style={{width:'80%', flexDirection:'row',height:50,alignItems:'center',alignSelf:'center',justifyContent:'space-between'}} >
<Icon name="file-medical" size={25} color="#807d7d"  />

<Image style={{width:50,height:48,color:'gray'}} source={home_images}></Image>
    <Icon name="dot-circle" size={25} color="#079b02" solid />


       </View>

       </View>
    </ScrollView>
  );
}

const StatusBox = ({label, count, color}) => (
  <View style={[styles.statusBox, {borderColor: color}]}>
    <Text style={{color}}>{count}</Text>
    <Text>{label}</Text>
  </View>
);

// MODULES //
const ModuleBox = ({label, count, navigation, image}) => (
  <TouchableOpacity
  onPress={() => {
    if (label === 'Workorder') {
      console.log('Yes, this is Workorder — go to Break screen');
      navigation.navigate('Break');
    } else if (label === 'Facility Auding Maintenance'){
      console.log('Not Workorder — go to Bottom screen');
      navigation.navigate('BottomSheet');
    }
    else if (label === 'House Keeping Maintenance') {
        console.log('House Keeping Page');
     navigation.navigate("BottomSheetcopy");
    } 
    else {
      console.log('No match');
    }
  }}
    style={[
      styles.moduleBox,
      {height: 90, alignSelf: 'center', justifyContent: 'center'},
    ]}>
    <View
      style={{
        height: 45,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Text
        style={{
          color: '#000000',
          fontSize: 14,
          textAlign: 'center',
          fontWeight: '500',
        }}>
        {label}
      </Text>
    </View>
    <View
      style={{
        height: 50,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          height: 50,
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 17,
            fontWeight: '400',
            color: '#364636',
          }}>
          {count}
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: '50%',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        {image && (
          <Image
            source={image}
            style={{width: 30, height: 30, resizeMode: 'contain'}}
          />
        )}
      </View>
    </View>
  </TouchableOpacity>
  
);

const ToolBox = ({label, image}) => (
  <View
    style={[
      styles.moduleBox,
      {
        height: 100,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
    ]}>
    <View
      style={{
        width: '20%',
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',

        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {image && (
        <Image
          source={image}
          style={{width: 30, height: 30, resizeMode: 'contain'}}
        />
      )}
    </View>

    <View
      style={{
        width: '80%',
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',

        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{color: '#000000', fontSize: 16, textAlign: 'center'}}>
        {label}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#0073ff',
    // padding: 25,
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    alignSelf:'center',
  },
  greeting: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    alignSelf:'center',
    
    color: '#fff',
    fontSize: 18,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginTop: -20,
    padding: 10,

    borderRadius: 50,
    marginHorizontal: 10,
  },

  statusBox: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
  },
  // progressBox: {
  //   backgroundColor: '#0073ff',

  //   width:'95%',
  //   flexDirection:'row',

  //   justifyContent:'space-around',
  //   alignSelf:'center',

  //   padding: 7,
  //   borderRadius: 20,
  //   height:100,
  // },
  date: {
    color: '#fff',
  },
  progressText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  // sectionTitle: {
  //   width: '94%',
  //   // padding:5,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   // margin: 10,
  //   fontWeight: 'bold',
  //   fontSize: 16,
  // },

  moduleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  moduleBox: {
    borderColor: '#3cdf39',
    backgroundColor: '#fff',
    width: '45%',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
    marginTop: 20,
  },
  count: {
    color: 'green',
    fontWeight: '900',
  },
    overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000088',
  },
  menu: {
    position: 'absolute',
    width: '80%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  menuItem: {
    marginTop: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 16,
  },
  version: {
    marginTop: 30,
    textAlign: 'center',
    color: 'gray',
  },
});
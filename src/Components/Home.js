import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
  SafeAreaView,
  StatusBar
  //   Animated,
  // Dimensions,
  // Modal
} from 'react-native';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState, useRef} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';

import progressImage from '../assets/image/rounded.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import home_images from '../assets/image/building_15218830.png';
import {responsiveWidth,responsiveHeight,Commonheight} from './Responsive';
import slidebars from '../assets/image/SideDrawer.png';

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
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('username');
              await AsyncStorage.removeItem('password');
              navigation.navigate('Login');
            } catch (error) {
              console.log('Logout error:', error);
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} >
      <StatusBar  barStyle="light-content" backgroundColor="#007aff"  />
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
          paddingBottom:65,
            width: responsiveWidth(100), 
            height: responsiveHeight(15),
            backgroundColor: '#007aff',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'center',
          
              paddingHorizontal:18,
          }}>
          <View
            style={{
              width: '30%',
              justifyContent: 'center',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
           
            }}>
            <TouchableOpacity onPress={logout} >
              <Image style={{width: 40, height: 40,}} source={slidebars}></Image>
            </TouchableOpacity>
            <View
              style={{
                
                // justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 14, right:9,}}>Hello,</Text>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
                SHARUK
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '30%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <MaterialIcons name="translate" size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <MaterialIcons name="notifications" size={35} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statusContainer}>
          <StatusBox label="Open" count="1" color="#b70505" />
          <View
            style={{
              width: 1,
              height: 70,
              backgroundColor: '#d9d5d5',
              fontSize: '16',
              fontWeight: '900',
              justifyContent: 'center',
              // color:'red',
              alignSelf: 'center',
            }}
          />
          <StatusBox label="Close" count="0" color="#3CC029" />
          <View
            style={{
              width: 1,
              height: 70,
              backgroundColor: '#d9d5d5',
              fontSize: '16',
              fontWeight: '900',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <StatusBox label="StandBy" count="0" color="#E1E137" />
        </View>

        <View
          style={{
            width: responsiveWidth(95),
                paddingHorizontal: 15,
            height: responsiveHeight(14),
            backgroundColor: '#007aff',
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 20,
            padding: 10,
            marginTop: 20,
          }}>
            
          <View
            style={{
              width: '60%',
        
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'flex-start',
            }}>
            <Text style={styles.date}> Today May 26 2025</Text>
            <View style={{height: 10}} />
            <Text style={styles.progressText}> Your Work</Text>
            <Text style={styles.progressText}> Progress</Text>
          </View>

          {/* <View
          style={{
            width: '40%',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}> */}
          <Image style={{width: 100, height: 100}} source={progressImage} />
          {/* </View> */}
        </View>

      

        <View style={styles.moduleContainer}>
            <View
          style={{
            width: responsiveWidth(94),
             paddingHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignItems: 'center',
            height: 50,
          }}>
          {/* Left side - Mohssule */}
          <View style={{width: '50%'}}>
            <Text
              style={[
                styles.sectionTitle,
                {textAlign: 'left', color:'black',  fontWeight: '600', fontSize: 14,},
              ]}>
              Modules
            </Text>
          </View>

          {/* Right side - Refresh Icon + View More + Down Icon */}
          <View
            style={{
              // width: '50%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            {/* 🔄 Refresh icon - left */}
            <FontAwesome
              name="sync"
              size={18}
              color="#007aff"
              style={{marginRight: 8}}
            />

            {/* 🟦 View More - center */}
            <Text
              style={[
                styles.sectionTitle,
                {textAlign: 'center', color: '#007aff'},
              ]}>
              View More
            </Text>

            <Feather name="corner-right-down" size={18} color="#007aff" />
          </View>
        </View>
          <ModuleBox
            navigation={navigation}
            label="Workorder"
            count="0/1"
            image={require('../assets/image/paper-bag.png')}
          />
          
          <ModuleBox
            navigation={navigation}
            label="Facility Auding Maintenance"
            count="0/0"
            image={require('../assets/image/research.png')}
          />
          <ModuleBox
            navigation={navigation}
            label="House Keeping Maintenance"
            count="0/0"
            image={require('../assets/image/housekeeping.png')}
          />
          <ModuleBox
            label="Service Based Maintenance "
            count="0/8"
            image={require('../assets/image/settings.png')}
          />
        </View>

   
        <View style={styles.moduleContainer}>
               <View
          style={{
            width: responsiveWidth(94),
       paddingHorizontal: 5,
            height: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'flex-start',
          }}>
          <Text style={{fontWeight: '600', fontSize: 14, color: '#000000'}}>
            {' '}
            Tools
          </Text>
        </View>
          <ToolBox
            label={"Scan To\nGet Asst Details"}
            image={require('../assets/image/qr.png')}
          />
          <ToolBox
            label="Locate New WorkOrder"
            image={require('../assets/image/map.png')}
          />
          <ToolBox
            label="My Activity"
            image={require('../assets/image/chart.png')}
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
      </ScrollView>

 
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 60,
            alignItems: 'center',
            alignSelf: 'center',
          backgroundColor:'white',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={()=>{navigation.navigate("BottomSheet")}} style={{ width:responsiveWidth(40), justifyContent:'center',alignItems:'center',alignSelf:'center'}} >
            <Icon name="file-medical" size={20} color="#807d7d" />
            <Text  style={{textAlign: 'center',color:'#000000',fontSize:12,}}>Complaints</Text>
          </TouchableOpacity>
          <View style={{width:responsiveWidth(20), alignItems: 'center'}}>
            <Image
              style={{width: 60, height: 60, color: 'gray'}}
              source={home_images}></Image>
          </View>
          <View style={{width:responsiveWidth(40), alignItems: 'center'}}>
            <Icon name="dot-circle" size={20} color="#079b02"  />
            <Text style={{textAlign: 'center',color:'#000000',fontSize:12}}>Switch Mode [Online]</Text>
          </View>
        </View>
     
    </View>
    </SafeAreaView>
  );
}

const StatusBox = ({label, count, color}) => (
  <View style={[styles.statusBox, {borderColor: color}]}>
    <Text style={{color,fontWeight:'600',textAlign:'center',fontWeight:'500',fontSize:16}}>{count}</Text>
    <Text style={{color:'black',fontSize:12,textAlign:'center',top:10}}>{label}</Text>
  </View>
);
// MODULES //
const ModuleBox = ({label, count, navigation, image}) => {
  const [leftCount,rightCount]=count.split('/')
 return(
  <TouchableOpacity
    onPress={() => {
      if (label === 'Workorder') {
        console.log('Yes, this is Workorder — go to Work screen');
        navigation.navigate('Workorder');
      }  else if (label === 'House Keeping Maintenance') {
        console.log('House Keeping Page');
        navigation.navigate('BottomSheetcopy');
      } else {
        console.log('No match');
      }
    }}
    style={[
      styles.moduleBox,
      {height: responsiveHeight(11), alignSelf: 'center', justifyContent: 'center'},
    ]}>
    <View
      style={{
        height: 50,
        width: '70%',
      paddingHorizontal:10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'flex-start',
      }}>
      <Text
        style={{
          color: '#000000',
          fontSize: 12,
          // textAlign: 'center',
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
          flexDirection:'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          bottom:10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: '400',
            color: '#00ff00',
          }}>
          {leftCount}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: '400',
            color: '#7c7f7c',
          }}>
          /
        </Text>
          <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: '400',
            color: '#0044ff',
          }}>
          {rightCount}
        </Text>
      </View>
      <View
        style={{
           height: 40,
          
          width: '40%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
           bottom: Commonheight(14)
        }}>
        {image && <Image source={image} style={{width: 40, height: 40}} />}
      </View>
    </View>
    
  </TouchableOpacity>
 )
};

const ToolBox = ({label, image}) => (
  <View
    style={[
      styles.moduleBox,
      {
        height: responsiveHeight(11),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
    ]}>
    <View
      style={{
        // width: '25%',
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',

        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {image && (
        <Image
          source={image}
          style={{width: 45, height: 45, resizeMode: 'contain'}}
        />
      )}
    </View>

    <View
      style={{
        width: '65%',
      
        height: 100,
        alignSelf: 'center',
        // justifyContent: 'center',

        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{color: '#000000', fontSize: 12, textAlign: 'left'}}>
        {label }
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({

    safeArea: {
    flex: 1,
    width: responsiveWidth(100),
    backgroundColor: '#ffffff',
  },
  container: {
     flex: 1,
    width: responsiveWidth(100),
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems:'center',
    alignSelf:'center',
    backgroundColor: '#f8f8f8',
    // height:responsiveHeight(20),
  },
 
  header: {
    backgroundColor: '#007aff',
    // padding: 25,
    height: responsiveHeight(15),
    width: responsiveWidth(100),
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },


  //   fontWeight: 'bold',
  //   fontSize: 18,
  // },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    marginTop: -55,
    alignItems: 'center',
    alignSelf: 'center',
  //  paddingTop:15,
    height: responsiveHeight(11), 
    width: responsiveWidth(91),
  color:'#000000',
    zIndex: 1,
    borderRadius: 50,
    marginHorizontal: 5,
  },

  statusBox: {
    justifyContent:'center',
    alignSelf:'center',
    alignItems: 'center',
   fontSize:17,
    paddingHorizontal:10,
    borderRadius: 8,
    
    color:'#000000',
  },

  //   backgroundColor: '#007aff',

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
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
  },


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
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,

  },

  moduleBox: {
    backgroundColor: '#fff',
    width: '45%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    marginTop: 10,
  },
 

 


});

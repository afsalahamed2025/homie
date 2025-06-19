import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {responsiveWidth, responsiveHeight} from './Responsive';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { useState } from 'react';



const Analysis = () => {

  
const [selectedbottom,setselectedbottom] = useState("Today")

console.log('Selected:',selectedbottom)
  return (
    <SafeAreaView style={{flex: 1, width: responsiveWidth(100)}}>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#007aff',
          flexDirection: 'row',
          alignItems: 'center',
         justifyContent:"center"
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Workorder');
          }}
          style={{
            width: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Icon name="angle-left" size={20} color="#ffffff" />
        </TouchableOpacity>
        <View
          style={{
            width: '95%',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontWeight: '600',
              fontSize: 18,

              textAlign: 'center',
            }}>
            Analysis Workorders
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: '95%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            // justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '23%',
              height: '58%',
              backgroundColor: '#007aff',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 5,
            }}>
            <Text style={{textAlign: 'center', fontSize: 12, color: '#ffffff'}}>
              Open(0)
            </Text>
          </View>
          <View style={{width:"3%"}} />
          <View
            style={{
              width: '23%',
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderWidth:1,
              borderColor:'#cac6c6',
            }}>
            <Text>Completed(23)</Text>
          </View>
                  <View style={{width:"3%"}} />
          <View
            style={{
              width: '23%',
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
                   
              alignSelf: 'center',
                       borderWidth:1,
                       borderColor:'#cac6c6',
            }}>
            <Text>Stand By(45)</Text>
          </View>
                  <View style={{width:"3%"}} />
          <View
            style={{
              width: '23%',
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
                            borderWidth:1,
                            borderColor:'#cac6c6',
              alignSelf: 'center',
            }}>
            <Text>All(84)</Text>
          </View>
                  <View style={{width:"5%"}} />
        </View>

        <View
          style={{

            width: '100%',
            height: 60,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
            <View style={{height:50,width:"100%",flexDirection:'row',alignItems:'center',alignSelf:"center",justifyContent:'center',borderWidth:1}} >
              <TouchableOpacity style={{width:'50%',alignItems:'center',alignSelf:"center",justifyContent:'center', borderRightWidth:1 ,height:50,borderBottomWidth:selectedbottom==='Today'? 1 : 0, borderBottomColor:selectedbottom === 'Today' ? 'blue':'transparent'  }}  onPress={()=> setselectedbottom('Today')} >
          <Text style={{color: 'black'}}>Today</Text> 
              </TouchableOpacity>
             <TouchableOpacity style={{width:'50%',alignItems:'center',alignSelf:"center",justifyContent:'center', height:50,borderBottomWidth: selectedbottom ==='Pending' ? 1 : 0, borderBottomColor:selectedbottom === 'Pending' ? 'blue':"transparent"}} onPress={()=>setselectedbottom('Pending')} > 

                    <Text>Pending</Text>
                    </TouchableOpacity>
            </View>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default Analysis;

const styles = StyleSheet.create({});

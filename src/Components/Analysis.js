import { View, Text,SafeAreaView,TouchableOpacity } from 'react-native'
import {responsiveWidth,} from './Responsive';
import Icon from 'react-native-vector-icons/FontAwesome5';

import React from 'react'



const Analysis = ({navigation}) => {
  return (
  <SafeAreaView style={{ flex: 1,
    width: responsiveWidth(100),}}>
        <View
                  style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: '#007aff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between', 
                    paddingHorizontal: 15,
                
                  }}
                >
                  <TouchableOpacity  onPress={()=>{navigation.navigate("Workorder")}} style={{ width:'5%' ,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                    <Icon name="angle-left" size={20} color="#ffffff" />
                  </TouchableOpacity>
                  <View style={{ width:'95%',justifyContent:'center',alignSelf:'center',alignItems:'center'}}>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontWeight: '600',
                      fontSize: 18,
                    
                      textAlign: 'center',
                    }}
                  >
                  Analysis Workorders
                  </Text>
                  </View>
                
                
                
                
      </View>
    <View  style={{width:'100%',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
      <View style={{width:'95%', height:50, flexDirection:'row',  alignItems:'center',alignSelf:'center',justifyContent:'center'}}>
       <View>
        <Text >Open (0)</Text>
       </View>
          <View>
        <Text>Completed (23)</Text>
       </View>
          <View>
        <Text>Stand By (45)</Text>
       </View>
          <View>
        <Text>All (84)</Text>
       </View>
      </View>
    </View>

</SafeAreaView>
 )
}

 

export default Analysis
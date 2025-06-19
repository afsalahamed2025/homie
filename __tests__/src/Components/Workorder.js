import { View, Text ,StyleSheet,Image,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
 import preventive from '../assets/image/Frame.png'
  import breaks from '../assets/image/HomeRepair.png'
import {responsiveWidth,} from './Responsive';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Workorder = ({navigation}) => {

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
          <TouchableOpacity  onPress={()=>{navigation.navigate("Home")}} style={{ width:'5%' ,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
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
           Workorders (OPEN)
          </Text>
          </View>
        
        
        
        
             </View>
    <View style={{width:'100%',  alignItems:'center',alignSelf:'center',justifyContent:'center',}}>
      <View style={{width:'90%', height:50, flexDirection:'row', alignItems:'center',alignSelf:'center',justifyContent:'center'}}>
     <View style={{width:'30%',  alignItems:'center',justifyContent:'center',alignSelf:'center' }}>
      <Text style={{color: '#656363',fontSize:14}}>Type</Text>
    </View>
      <View style={{width:"20%",   alignItems:'center',justifyContent:'center',alignSelf:'center' }}>
      <Text style={{color: '#656363',fontSize:14}}>Current</Text>
    </View>
         <View style={{width:"20%", alignItems:'center',justifyContent:'center',alignSelf:'center'  }}>
      <Text style={{color: '#656363',fontSize:14}}>Past</Text>
    </View>
         <View style={{width:"20%",  alignItems:'center',justifyContent:'center',alignSelf:'center' }}>
      <Text style={{color: '#656363',fontSize:14}}>Future</Text>
    </View>
      </View>


  <View style={{width:'95%',backgroundColor:'#ffffff', flexDirection:'row', alignItems:'center',alignSelf:'center',justifyContent:'center',height:90,borderRadius:9}} >
    <View style={{width:'30%',  flexDirection:'column', alignItems:'center',alignSelf:'center',}}>
     <Image style={{width:30,height:30,alignSelf:'flex-start'}} source={preventive} />
     <Text style={{color:'#656363',right:4,}}>Preventive Maintenance</Text>
    </View>
    <View style={{width:'19%',height:40,backgroundColor:'#90eb90',alignItems:'center',alignSelf:'center',justifyContent:'center',borderRadius:7}}>
        <Text style={{color: '#0de10d',fontSize:12}}>0
        </Text>
        </View>
        <View style={{width:5}} /> 
      <View style={{width:'19%',height:40,backgroundColor:'#f79e9e',alignItems:'center',alignSelf:'center',justifyContent:'center',borderRadius:7}}>
        <Text style={{color:'#fc5050',fontSize:12}}>0
        </Text>
        </View>
        <View style={{width:5}} /> 
      <View style={{width:'19%',height:40,backgroundColor:'#a1d1fe',alignItems:'center',alignSelf:'center',justifyContent:'center',borderRadius:7}}>
        <Text style={{color:'#3478ff',fontSize:12}}>0
        </Text>
        </View>
        <View style={{width:5}} /> 
  </View>


 <View style={{width:'90%', height:50, flexDirection:'row', alignItems:'center',alignSelf:'center',justifyContent:'center'}}>
     <View style={{width:'30%', alignItems:'center',justifyContent:'center',alignSelf:'center' }}>
      <Text style={{color: '#656363',fontSize:14}}>Type</Text>
    </View>
      <View style={{width:"30%",   alignItems:'center',justifyContent:'center',alignSelf:'center' }}>
      <Text style={{color: '#656363',fontSize:14}}>Analysis</Text>
    </View>
     
         <View style={{width:"30%",  alignItems:'center',justifyContent:'center',alignSelf:'center' }}>
      <Text style={{color: '#656363',fontSize:14}}>Execution</Text>
    </View>
      </View>


<View style={{
  width: '95%',
  height: 90,
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  borderRadius: 9,
}}>


  <View style={{
    width: '40%',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf:'center',
    justifyContent:'center'
  }}>
    <Image source={breaks} style={{ width: 30, height: 30, alignSelf:'flex-start'}} />
    <Text style={{ color: '#656363', fontSize: 13, right:20 }}>
      Preventive{"\n"}Maintenance
    </Text>
  </View>



  
  <TouchableOpacity  onPress={()=>{navigation.navigate("Analysis")}} style={{
    width: '22%',
    height: 40,
    backgroundColor: '#90eb90',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  }}>
    <Text style={{ color: '#0de10d', fontSize: 12 }}>0</Text>
  </TouchableOpacity>


  <View style={{ width: 10 }} />

 
  <View style={{
    width: '22%',
    height: 40,
    backgroundColor: '#a1d1fe',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  }}>
    <Text style={{ color: '#3478ff', fontSize: 12 }}>0</Text>
  </View>

</View>

    

  
  
    </View>
    </SafeAreaView>
  )
}

export default Workorder

const styles = StyleSheet.create({

})
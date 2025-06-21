import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import { responsiveWidth, responsiveHeight } from './Responsive';
import Icon from 'react-native-vector-icons/FontAwesome5';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import backroud from '../assets/image/NoData.gif';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';



const Analysis = ({ navigation }) => {
    // const Display_Datas = [
    //   {Title:"Contract Name", Value:item.ContractName}
    // ]
  const rendererItem = ({item,index }) => (
    <>
      <View
      key={index}
      style={{
        width: '96%',
        marginTop: 6,
        borderWidth: 1,
        borderRadius: 6,
        elevation: 2,
        backgroundColor: '#ffffff',
        borderColor: '#dddddd',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '96%',
          backgroundColor: '#ffffff',
          alignItems: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#ffffff',
            alignSelf: 'center',
            justifyContent: 'center',
            // paddingTop: 5,
          }}>
          <Text style={{ color: '#000000', fontWeight: '500' }} >
           W.O No :  {item.ComplaintIDPK}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '20%',
          backgroundColor: '#ff0000',
          height: 25,
          top: -9,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          alignItems: 'center',
          alignSelf: 'flex-end',
          justifyContent: 'center',
        }}>
        <Text
          style={{ color: '#ffffff', fontWeight: '400', fontSize: 12 }}>
         {item.WOStatus}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: '100%',
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#ffffff',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 25,

              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Ionicons name="newspaper" size={14} color="#0073ff" />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Contract Name
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>
              : {item.ContractName ?? 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Ionicons
              name="newspaper-sharp"
              size={14}
              color="#0073ff"
            />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Contract Code
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>
              :{item.ContractName || 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <EvilIcons name="location" size={14} color="#0073ff" />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Location Name
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>
              : {item.LocationName || 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="building-o"
              size={14}
              color="#0073ff"
            />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Building
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>
              : {item.BuildingName || 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="map"
              size={14}
              color="#0073ff"
            />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Spot Code
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>
              :{item.SpotCode || 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="map-outline" size={14} color="#0073ff" />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Spot Name
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>
              : {item.SpotName || 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="arrow-expand-horizontal"
              size={14}
              color="#0073ff"
            />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Division
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>
              :{item.Division || 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Icon name="user-friends" size={14} color="#0073ff" />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Assigned By
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>
              :{item.AssignedBy || 'null'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />

        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#ffffff',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 25,

              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <MaterialCommunityIcons
              name="account-clock"
              size={16}
              color="#0073ff"
            />
          </View>

          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              AttendBy
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>
              : {item.AttendBy || 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Feather name="clock" size={14} color="#0073ff" />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Priority
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#ff0000',
              }}>
              :{item.Priority || 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Icon name="shopping-bag" size={14} color="#0073ff" />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Workorder Type
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>
              :{item.WorkorderType || 'N/A'}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              name="timer-outline"
              size={14}
              color="#0073ff"
            />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Preferred Time Form
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>:</Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Ionicons
              name="timer-outline"
              size={14}
              color="#0073ff"
            />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Preferred Time To
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: '#595a5b',
              }}>
              :{item.PreferredTimeTo || ''}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />

        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <MaterialCommunityIcons
              name="pencil-box-outline"
              size={14}
              color="#186acf"
            />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Standby Remarks
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: '#595a5b',
              }}>
              :{item.StandbyRemarks || ''}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
        <View
          style={{
            width: '100%',
            height: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '10%',
              height: 28,

              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Ionicons
              name="timer-outline"
              size={14}
              color="#0073ff"
            />
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Standby Date & Time
            </Text>
          </View>
          <View
            style={{
              width: '41%',
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: '#595a5b',
              }}>
              :{item.StandbyDateTime || ''}
            </Text>
          </View>
        </View>
        <View style={{ height: 8 }} />
      </TouchableOpacity>
    </View>
    </>
  )


  const [selectedbottom, setselectedbottom] = useState('Today');
  /*  nu oru array state irukku. API-lendhu vandha complaint data ellam inga store aagum. */
  const [ALLData, setALLData] = useState([]);
  const [OPENData, setOPENData] = useState([]);
  const [StandbyData, setStandbyData] = useState([]);
  const [CompletedData, setCompletedData] = useState([]);

  console.log('Selected:', selectedbottom);


  useEffect(() => {
    getAnalysisData();
  }, [selectedbottom])

  const getAnalysisData = async () => {
    try {
      const Url = "http://13.127.67.252:5040/ReachAnaProcess/";
      const Params = {
        data: {
          p1: null,
          p2: "1104",
          p3: "1",
          p4: null,
          p5: null,
          p6: null,
          p7: null,
          p8: null,
          p9: null,
          p10: null,
          PageIndex_int: 1,
          PageSize_int: 10,
          Type_varchar: "ANALYSISDETAILSALL",
          UserGroupKey: "2112",
          UserAccessKey: "124"
        }
      };
      console.log({ Url, Params });
      const response = await fetch(Url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Params)
      });
      console.log({ Url, Params, response });
      const res = await response.json();
      console.log('API Response:', res);
      const Status = res?.Output?.status ?? ''
      const Data = res?.Output?.data ?? []
      console.log({ Status, Data })
      if (Status.code == '200') {
        if (Data.length > 0) {
          setALLData(Data)
          const Open_workorders = Data.filter((i) => i.CCMStageID == 5) ?? []
          setOPENData(Open_workorders)
          const Standby_workorders = Data.filter((i) => i.CCMStageID == 30) ?? []
          setStandbyData(Standby_workorders)
          const Closed_workorders = Data.filter((i) => i.CCMStageID == 29) ?? []
          setCompletedData(Closed_workorders)
        } else {
          setALLData([])
        }
      } else {
        setALLData([])
      }
    } catch (error) {
      console.log('Api Error:', error);
    }
  }
  const [selectedBack, setselectedBack] = useState('OPEN');
  return (

    <>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#007aff',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Workorder');
          }}
          style={{
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Icon name="angle-left" size={20} color="#ffffff" />
        </TouchableOpacity>
        <View
          style={{
            width: '60%',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontWeight: '500',
              fontSize: 18,

              textAlign: 'center',
            }}>
            Analysis Workorders
          </Text>
        </View>
        <View
          style={{
            width: '10%',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome
            style={{ fontWeight: 'bold', fontSize: 20 }}
            name="search"
            color="#ffffff"
            size={25}
          />
        </View>
        <View
          style={{
            width: '10%',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Entypo name="dots-three-vertical" size={20} color="#ffffff" />
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
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            style={{
              width: '23%',
              height: 25,
              borderRadius: 4,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderWidth: selectedBack === 'OPEN' ? 0 : 1.2,
              borderColor: '#dedbdb',
              backgroundColor:
                selectedBack === 'OPEN' ? '#007aff' : '#ffffff',
            }}
            onPress={() => setselectedBack('OPEN')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
             
                color: selectedBack === 'OPEN' ? '#ffffff' : '#000000',
                
              }}>
              OPEN  ({OPENData.length})
            </Text>
          </TouchableOpacity>
          <View style={{ width: '2%' }} />
          <TouchableOpacity
            style={{
              width: '24%',
              height: 25,

              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 4,
              borderWidth: selectedBack === 'CLOSE' ? 0 : 1.2,
              borderColor: '#dedbdb',
              backgroundColor:
                selectedBack === 'CLOSE' ? '#007aff' : '#ffffff',
            }}
            onPress={() => setselectedBack('CLOSE')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: selectedBack === 'CLOSE' ? '#ffffff' : '#000000',
              }}>
              Completed ({CompletedData.length})
            </Text>
          </TouchableOpacity>
          <View style={{ width: '3%' }} />
          <TouchableOpacity
            style={{
              width: '23%',
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderColor: '#dedbdb',
              alignSelf: 'center',
              borderWidth: selectedBack === 'STANDBY' ? 0 : 1.1,

              backgroundColor:
                selectedBack === 'STANDBY' ? '#007aff' : '#ffffff',
            }}
            onPress={() => setselectedBack('STANDBY')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: selectedBack === 'STANDBY' ? '#ffffff' : '#000000',
              }}>
              Stand By ({StandbyData.length})
            </Text>
          </TouchableOpacity>
          <View style={{ width: '3%' }} />
          <TouchableOpacity
            style={{
              width: '23%',
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#cac6c6',
              borderWidth: selectedBack === 'ALL' ? 0 : 1.1,
              alignSelf: 'center',
              backgroundColor:
                selectedBack === 'ALL' ? '#007aff' : '#ffffff',
            }}
            onPress={() => setselectedBack('ALL')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: selectedBack === 'ALL' ? '#fffffff' : '#000000',
              }}>
              All ({ALLData.length})
            </Text>
          </TouchableOpacity>
          <View style={{ width: '3%' }} />
        </View>

        <View
          style={{
            width: '100%',
            height: 60,

            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#cfcece',
              borderBottomWidth: 2,
            }}>
            <TouchableOpacity
              style={{
                width: '50%',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderRightColor: '#d7d4d4',
                height: 50,
                borderBottomWidth: selectedbottom === 'Today' ? 2 : 0,
                borderBottomColor:
                  selectedbottom === 'Today' ? '#007aff' : 'transparent',
              }}
              onPress={() => setselectedbottom('Today')}>
              <Text style={{ color: 'black', fontWeight: '400' }}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '50%',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                height: 50,
                borderBottomWidth: selectedbottom === 'Pending' ? 2 : 0,
                borderBottomColor:
                  selectedbottom === 'Pending' ? '#0048ff' : 'transparent',
              }}
              onPress={() => {
                {
                  setselectedbottom('Pending');
                }
              }}>
              <Text style={{ color: 'black', fontWeight: '400' }}>Pending</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* TODAY COMPLIANT  */}
        {/* "Selectedbottom enna irukku? Adhu Today na, andha content display pannum. Illa display pannathu." */}
        {selectedbottom == 'Today' ? (

          <View>

          </View>
        ) : (          
        <View style={{ width: '100%',height:600,backgroundColor:"white",marginBottom:6 }}>
            <View
              style={{
                width: '32%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#003cff',
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                Pending Workorders
              </Text>
            </View>
            {/*-======================= DATAS-------============= */}
              <FlatList
                data={selectedBack == 'OPEN' ? OPENData : selectedBack == 'ALL' ? ALLData :selectedBack == 'STANDBY' ? StandbyData : CompletedData}
                renderItem={rendererItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
          </View>)
        }
      </View>
    </>

  );
};

export default Analysis;

const styles = StyleSheet.create({});

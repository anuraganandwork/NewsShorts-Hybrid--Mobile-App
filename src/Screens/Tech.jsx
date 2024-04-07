import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FetchNewHome from '../api/Apiresult';
import Card from '../Components/Card';
import FetchNewHealth from '../api/ForHealth';
import FetchNewtech from '../api/Fortech';
import FlipCard from 'react-native-flip-card';
import Backcard from '../Components/Backcard';

const Tech = () => {
  const [newsdataH, setnewsdataH] = useState([]);

  const handleVoice = tosay => {
    Tts.speak(tosay);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchNewtech();
      setnewsdataH(data);
    };
    fetchData();
  }, []);

  return (
    <View>
      {/* <Button
        title="On"
        onPress={() => {
          FetchNew();
        }}
      /> */}
      {/* <ScrollView>
        {newsdataH.map(datas => (
          <Card data={datas} />
        ))}
      </ScrollView> */}
      {/* <TouchableHighlight
        style={{padding: 20}}
        onPress={() => handleVoice('HEllo Hello Hello')}>
        <Text>Hello</Text>
      </TouchableHighlight> */}

      <FlatList
        data={newsdataH}
        //item hmne random diya hai
        renderItem={({item}) => (
          <FlipCard flipHorizontal={true} flipVertical={false}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <Card data={item} />
            </View>
            <View>
              <Backcard data={item} />
            </View>
          </FlipCard>
        )}
        keyExtractor={({item}) => item?.title || Math.random().toString()}
      />
    </View>
  );
};

export default Tech;

const styles = StyleSheet.create({});

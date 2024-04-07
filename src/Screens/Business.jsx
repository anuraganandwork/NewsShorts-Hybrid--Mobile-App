import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FetchNewHome from '../api/Apiresult';
import Card from '../Components/Card';
import FetchNewHealth from '../api/ForHealth';
import FetchNewBusiness from '../api/ForBusiness';
import FlipCard from 'react-native-flip-card';
import Backcard from '../Components/Backcard';
const Tech = () => {
  const [newsdataH, setnewsdataH] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchNewBusiness();
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

import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import FetchNewHome from '../api/Apiresult';
import Card, {NewsCardItem} from '../Components/Card';
import FlipCard from 'react-native-flip-card';
import Backcard from '../Components/Backcard';

const Home = () => {
  const [newsdata, setnewsdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchNewHome();
      setnewsdata(data);
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
      {/* <FlipCard>
        <View> */}
      <ScrollView>
        <View style={{padding: 15}}></View>
        <FlatList
          data={newsdata}
          //item hmne random diya hai
          //horizontal
          //pagingEnabled
          keyExtractor={({item}) => item?.title || Math.random().toString()}
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
        />
        {/* </View>
        <View>
          <Text>Helloss</Text>
        </View>
      </FlipCard> */}

        {/* <ScrollView>
        {newsdata.map(datas => (
          <Card data={datas} />
        ))}
      </ScrollView> */}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

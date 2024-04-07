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
import FlipCard from 'react-native-flip-card';
import Backcard from '../Components/Backcard';

// interface healthScreenProps {}
// interface show {}
// interface NewsData {
//   id: number;
//   title: string | null;
//   urlToImage: string | null;
//   publishedAt: string;
//   // Other properties as needed
// }
const Health = () => {
  const [newsdataH, setnewsdataH] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchNewHealth();
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
      <ScrollView>
        <View style={{padding: 15}}></View>
        <FlatList
          data={newsdataH}
          //item hmne random diya hai
          renderItem={({item}) => (
            <FlipCard flipHorizontal={true} flipVertical={false}>
              <View>
                <Card data={item} />
              </View>
              <View>
                <Backcard data={item} />
              </View>
            </FlipCard>
          )}
          keyExtractor={({item}) => item?.title || Math.random().toString()}
        />
      </ScrollView>
    </View>
  );
};

export default Health;

const styles = StyleSheet.create({});

import {
  Button,
  FlatList,
  Keyboard,
  LogBox,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import FlipCard from 'react-native-flip-card';
import Backcard from '../Components/Backcard';

const Search = () => {
  const [searched, setSearched] = useState('');
  const [NewsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchedNews = async searchedTopic => {
    const response = await axios({
      method: 'GET',
      url: `https://newsapi.org/v2/everything?q=${searchedTopic}&apiKey=c4d0e1a6021549cc927dfdd126384be5
      `,
    });
    //console.log(response.data);
    return response.data.articles;
  };

  const setData = async searchTopic => {
    const result = await fetchSearchedNews(searchTopic);
    console.log('from stData', result[0]);
    //setNewsData([]);
    setNewsData(result);
    console.log('Newsdata is ', NewsData);
    if (result.length > 1) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    console.log(`NewsDta ${NewsData}`);
    setNewsData([]);
    return () => {
      console.log(`NewsDtaaaa ${NewsData[0]}`);
      //setNewsData([]);
      // setNewsData('');
    };
    //setSearched('');
  }, []);

  const _renderItem = ({item}) => {
    return (
      <FlipCard flipHorizontal={true} flipVertical={false}>
        <View>
          <Card data={item} />
        </View>
        <View>
          <Backcard data={item} />
        </View>
      </FlipCard>
    );
  };
  return (
    <View>
      <View style={{}}>
        <TextInput
          style={styles.input}
          placeholder={'Search topic'}
          onChangeText={setSearched}
          value={searched}
          multiline={false}
          onSubmitEditing={() => {
            setIsLoading(true);
            Keyboard.dismiss;
            console.log(searched);
            //fetchSearchedNews(searched);
            setData(searched);
            console.log(`Hello ${NewsData[0]}`);

            setSearched('');
          }}
          // onEndEditing={fetchSearchedNews}
        />
      </View>
      {/* <Button
        title="ClickHere"
        onPress={() => {
          setIsLoading(true);

          console.log(searched);
          //fetchSearchedNews(searched);
          setData(searched);
          console.log(`Hello ${NewsData[0]}`);

          setSearched('');
        }}
      /> */}
      {NewsData.length > 0 ? (
        <FlatList data={NewsData} renderItem={_renderItem} />
      ) : (
        <View></View>
      )}

      {isLoading ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 8,
    margin: 10,
    marginTop: 25,
    padding: 10,
  },
});

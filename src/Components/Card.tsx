import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
export interface NewsCardItem {
  title: string;
  publishedAt: string;
  description: string;
  urlToImage: string;
  content: string;
}
export interface cardComponent {
  data: NewsCardItem;
}

const Card: React.FC<cardComponent> = props => {
  //again opening the data from network
  const {title, urlToImage, publishedAt, content} = props.data;
  if (!(title && urlToImage && publishedAt && content)) {
    return null;
  }
  return (
    <View style={styles.cardStyle}>
      <View style={styles.imageAndText}>
        <Image style={styles.imageStyle} source={{uri: urlToImage}} />
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            paddingTop: 15,
            paddingHorizontal: 10,
          }}>
          {content}
        </Text>

        <View style={styles.dateANDTime}>
          <Text style={{paddingStart: 10, paddingTop: 10}}>
            {publishedAt.substring(11, 16)}
          </Text>
          <Text style={{paddingStart: 10, paddingTop: 10}}>
            {publishedAt.substring(0, 10)}
          </Text>
        </View>
        <View style={styles.saveIcon}>
          <Image
            source={require('../../assets/save-instagram.png')}
            style={{height: 25, width: 25}}
          />
        </View>
      </View>
      <View style={{paddingTop: 20}}></View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardStyle: {
    // elevation: 5,
    width: '100%',
    //flex: 1,
    height: 550,
    paddingHorizontal: 10,
    borderColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'center',
  },
  imageAndText: {
    width: '100%',
    flex: 1,
    height: '100%',
    elevation: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 15,
    shadowOpacity: 0.3,
    backgroundColor: '#C4F0B9',
    borderColor: 'black',
  },
  dateANDTime: {
    flexDirection: 'row',
  },

  saveIcon: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});

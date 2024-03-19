import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import datas from './data';

export default class Bai3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [150, 50],
      extrapolate: 'clamp',
    });

    const headerOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const headerScale = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });
    const headerScale1 = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 1],
      extrapolate: 'clamp',
    });
    const translateYFlatList = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -120], // Điều chỉnh giá trị translate Y tùy theo khoảng cách mong muốn
      extrapolate: 'clamp',
    });

    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList); // Bọc FlatList vào Animated

    return (
      <SafeAreaView style={styles.container}>
        <View style={{backgroundColor: ''}}>
          <View
            style={[
              styles.header,
              {
                opacity: 1,
                transform: [{scale: 1}],
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
              },
            ]}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=50&id=L6IISLLpaYim&format=png',
              }}
              style={{height: 40, width: 40, tintColor: 'white'}}
            />
            <Text style={[styles.headerText, {color: 'white'}]}>netfix</Text>
          </View>
          {/* Phần 2 */}
          <Animated.View
            style={[
              styles.header,
              {
                opacity: headerOpacity,
                transform: [{scale: headerScale}],
                height: 'auto',
              },
            ]}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=40&id=23454&format=png',
              }}
              style={{height: 70, width: 70}}
            />
            <Text
              style={[
                styles.headerText,
                {color: 'white', width: 300, fontSize: 25},
              ]}>
              Mornin' Mark! Ready for a quiz?
            </Text>
          </Animated.View>
          {/* Phần 3 */}
          <Animated.View
            style={[
              styles.header,
              {
                height: 50,
                opacity: headerScale1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 15,
                transform: [
                  {scale: 1},
                  {
                    translateY: headerHeight.interpolate({
                      inputRange: [50, 150],
                      outputRange: [-135, 0],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.headerButton,
                      index === 0 ? {backgroundColor: '#d1e0e0'} : null,
                    ]}>
                    <Text style={styles.headerButtonText}>{item.text}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </Animated.View>
        </View>
        {/* Phần 1 */}
        <View>
          <AnimatedFlatList // Sử dụng AnimatedFlatList thay vì FlatList
            style={{
              transform: [{translateY: translateYFlatList}],
              marginTop: 20,
            }}
            data={datas}
            renderItem={({item, index}) => (
              <View
                style={[
                  styles.item,
                  {
                    marginBottom: index === datas.length - 1 ? 100 : 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    shadowColor: '#808000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  },
                ]}>
                <Image
                  source={{uri: item.url}}
                  style={{height: '100%', width: 200}}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '500',
                    marginStart: 10,
                  }}>
                  {item.name}
                </Text>
                <Image
                  source={{
                    uri: 'https://img.icons8.com/?size=50&id=143&format=png',
                  }}
                  style={{
                    height: 30,
                    width: 30,
                    position: 'absolute',
                    top: 20,
                    end: 20,
                  }}
                />
                <Image
                  source={{
                    uri: 'https://img.icons8.com/?size=50&id=9671&format=png',
                  }}
                  style={{
                    height: 30,
                    width: 30,
                    position: 'absolute',
                    top: 60,
                    end: 20,
                  }}
                />
              </View>
            )}
            scrollEventThrottle={5}
            keyExtractor={item => item.id.toString()}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
              {useNativeDriver: true},
            )}
            ListHeaderComponent={<Text style={styles.listHeader}>Đồ ăn </Text>}
          />
        </View>
        <Button_menu />
      </SafeAreaView>
    );
  }
}
const Button_menu = () => {
  return (
    <View
      style={{
        height: 65,
        position: 'absolute',
        backgroundColor: 'rgb(255, 243, 225)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        bottom: 0,
      }}>
      <TouchableOpacity>
        <Image
          source={{uri: 'https://img.icons8.com/?size=50&id=73&format=png'}}
          style={{height: 50, width: 50}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={{uri: 'https://img.icons8.com/?size=50&id=11581&format=png'}}
          style={{height: 50, width: 50}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={{uri: 'https://img.icons8.com/?size=50&id=9671&format=png'}}
          style={{height: 50, width: 50}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={{uri: 'https://img.icons8.com/?size=50&id=37084&format=png'}}
          style={{height: 50, width: 50}}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'lightblue',
    height: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    height: 200,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 10,
  },
  headerButton: {
    marginHorizontal: 5,
    backgroundColor: '#ccc',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    paddingHorizontal: 5,
  },
});

const data = [
  {id: 1, text: 'Đồ ăn '},
  {id: 2, text: 'Hoa quả '},
  {id: 3, text: 'Đồ dùng'},
  {id: 4, text: 'Đồ điện tử'},
  {id: 5, text: 'Đồ điện tử'},
  {id: 6, text: 'Đồ điện tử'},
  {id: 7, text: 'Đồ điện tử'},
];

import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';

const Bai1 = () => {
  const position = useRef(new Animated.ValueXY()).current;
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (isMoving) {
      startAnimation();
    }
  }, [isMoving]);

  const startAnimation = () => {
    const randomY = Math.floor((Math.random() * windowHeight) / 2);
    const randomX = Math.floor((Math.random() * windowWidth) / 2);
    Animated.timing(position, {
      toValue: {x: 0, y: randomY},
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      startAnimation();
    });
  };

  const handleMovePress = () => {
    setIsMoving(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleMovePress}>
        <Text style={{fontSize: 20}}>Move</Text>
      </TouchableOpacity>
      <Animated.View
        style={[styles.box, {transform: position.getTranslateTransform()}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#99FF66',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#99FFFF',
  },
  btn: {
    backgroundColor: '#2eb8b8',
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
});

export default Bai1;

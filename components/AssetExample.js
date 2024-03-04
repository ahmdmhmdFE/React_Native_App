import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/website.jpg')} />
      <Text style={styles.paragraph}>
        Ahmed
      </Text>
      <Text style={styles.txt}>
        Front End Developer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 130,
    width: 130,
  },
  txt: {
    textAlign: 'center',
    fontSize: 27,
    color: 'gray',
  }
});

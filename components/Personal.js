import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <Text style={styles.box1}>Age</Text>
      <Text style={styles.box1}>25</Text>
      </View>
      <View style={styles.box2}>
      <Text style={styles.box2}>Freelancer</Text>
      <Text style={styles.box2}>Available</Text>
      </View>
      <View style={styles.box3}>
      <Text style={styles.box3}>Adreess</Text>
      <Text style={styles.box3}>Alex</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 3
  },
  box1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    fontSize: 30,
    marginHorizontal: 80,
    paddingVertical: 10
  },
  box2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    fontSize: 30,
    marginHorizontal: 50,
    paddingVertical: 2
  },
  box3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    fontSize: 30,
    marginHorizontal: 70,
    paddingVertical: 2
  }
});

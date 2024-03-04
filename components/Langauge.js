import { Text, View, StyleSheet, Image,ProgressBarAndroid } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <Text style={styles.box1}>English</Text>
      <Text style={styles.box1}>80%</Text>
      </View>
      <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} style={styles.progressBar1} />
      <View style={styles.box2}>
      <Text style={styles.box2}>Spanish</Text>
      <Text style={styles.box2}>60%</Text>
      </View>
      <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} style={styles.progressBar2} />
      <View style={styles.box3}>
      <Text style={styles.box3}>Arbic</Text>
      <Text style={styles.box3}>90%</Text>
      </View>
      <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} style={styles.progressBar3} />
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
    marginHorizontal: 60,
    paddingVertical: 10
  },
  box2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    fontSize: 30,
    marginHorizontal: 55,
    paddingVertical: 2
  },
  box3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    fontSize: 30,
    marginHorizontal: 75,
    paddingVertical: 2
  },
  progressBar1: {
    width: '60%',
    backgroundColor: '#eee',
    color:'red',
    height: 20,
    marginLeft: -30
  },
  progressBar2: {
    width: '40%',
    backgroundColor: '#eee',
    color:'red',
    marginLeft: -100,
    height: 20
  },
  progressBar3: {
    width: '66%',
    backgroundColor: '#eee',
    color:'red',
    marginLeft: 0,
    height: 20
    }
});

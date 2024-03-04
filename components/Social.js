import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Social() {
  
   return (
    <View style={styles.container}>
      <FontAwesome name="facebook" size={30} color="#3b5998" />
      <FontAwesome name="twitter" size={30} color="#1da1f2" />
      <FontAwesome name="linkedin" size={30} color="#0077b5" />
      <FontAwesome name="instagram" size={30} color="#c13584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
    backgroundColor: '#fff',
    paddingHorizontal: 90 ,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
});
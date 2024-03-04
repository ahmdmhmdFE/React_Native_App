import { Text, SafeAreaView,View, StyleSheet,ScrollView } from 
'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AssetExample from './components/AssetExample';
import Social from './components/Social';
import Personal from './components/Personal';
import Skills from './components/Skills';
import Button from './components/Button';
import Movies from './components/MoviesList';
import MoviesDetails from './components/MoviesDetails';
import ToDoApp from './components/ToDoApp/ToDoApp'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <ScrollView>
    // <AssetExample></AssetExample>
    // <Social></Social>
    // <Personal></Personal>
    // <LanguageProgressBar></LanguageProgressBar>
    // <Skills></Skills>
    // <Button></Button>
    // </ScrollView>

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='My Name' component={AssetExample}/>
        <Drawer.Screen name='Social' component={Social}/>
        <Drawer.Screen name='Personal' component={Personal}/>
        <Drawer.Screen name='Skills' component={Skills}/>
        <Drawer.Screen name='Movies' component={Movies}/>
        <Drawer.Screen name='Details' component={MoviesDetails}/>
        <Drawer.Screen name='ToDoApp' component={ToDoApp}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


















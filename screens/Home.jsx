import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {IonIcon,Fontisto} from 'expo/vector-icons';
import styles from './Home.style';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <SafeAreaView>
     <View style={styles.appBarWrapper}>
<IonIcon
name='location_outline' size={24} />
<Text style={styles.location}>dhh hdhdhddhdhd </Text>
<view style={{ alignItems:'flex-end'}}>
  <View style={styles.cartCount}>
<Text style={styles.cartNumber}>888</Text>
<TouchableOpacity>
<Fontisto name="shopping-bag"  size={24} />  </TouchableOpacity>
  </View>

</view>
     </View>
     <ScrollView>
      <Welcome/>
     </ScrollView>
    </SafeAreaView>
  )
}
 
export default Home


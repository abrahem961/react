import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Home.style';
const Home = () => {
  return (
    <SafeAreaView>
     <View style={styles.appBarWrappern}>
<IonIcon
name='location_outline'size={24} />
<Text style={styles.location}>dhh hdhdhddhdhd </Text>
<view style={{ alignItems:'flex-end'}}>
  <View style={styles.cartCount}>

  </View>

</view>
     </View>
    </SafeAreaView>
  )
}

export default Home


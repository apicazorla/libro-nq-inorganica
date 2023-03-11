import React from 'react'
// @generated: @expo/next-adapter@2.1.5
import { StyleSheet,Text, Linking} from 'react-native'

import Page from '../components/page/Page'
import { H1 } from '../components/webElements'
import VideoPlayer from '../components/VideoPlayer'
import { config } from '../config/config'

import Video from 'react-native-video';



export default function StartPage () {
  return (
    <Page>
      <H1 style={styles.h1}>NOMENCLATURA de</H1>
      <H1 style={styles.h1}>Química Inorgánica</H1>
      <Text style={styles.text}>Editorial Madara, 2020. {config.appName}</Text>
      <Text style={styles.text}>{config.appTagline}</Text>
   <Video source={{uri: 'https://drive.google.com/file/d/1hyYRm-9Tl43HeKuBQJPRPYfqe5P-oert/view?usp=sharing'}} />   
	  <VideoPlayer
        videoUrl='https://fisicayquimica2.s3.eu-west-3.amazonaws.com/libro_nomenclatura.mp4'
      />
	  
	  
	  <Text style={styles.text}>Más información en</Text>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://nomenclaturaquimica.com/contact')}>
  nomenclaturaquimica
</Text>
    </Page>

  )
}



const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12
  }
  })

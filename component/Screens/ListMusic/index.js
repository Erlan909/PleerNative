import React, { useState, useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import heart from '../../img/heart.png'
import logo from '../../img/foto2.png'
import three from '../../img/media.png'
import vektor from '../../img/Vector.png'
import vektor2 from '../../img/vektor2.png'

import play from '../../img/Pleer.png'
import pause from '../../img/pause.png'
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/core';

export default function ListMusic() {
  const [sound, setSound] = useState(false);
  const [music, setMusic] = useState(false)
  const [data, setData] = useState([])
  const navigation = useNavigation()
  React.useEffect(() => {
    setData(musics)
  }, [musics])



  const playSound = async (id) => {
    musics.forEach(async (el) => {
      if (el.id == id) {
        el.played = true

        const { sound } = await Audio.Sound.createAsync(
          el.path
        );
        setMusic(sound && sound);

        await sound.playAsync();
        setSound(true)
      }
    })
    setData(musics)

    if (music != '') {
      await music?.pauseAsync()
    }
  }

  let musics = [
    {
      id: 1,
      name: 'Djadua',
      description: 'Jah Khalib',
      played: false,
      path: require('../../Musics/djadua.mp3')
    },
    {
      id: 2,
      name: 'Nicht',
      description: 'Henning May',
      played: false,
      path: require('../../Musics/nicht.mp3')
    },
    {
      id: 3,
      name: 'MATRANG',
      description: 'Meduza',
      played: false,
      path: require('../../Musics/qwerty.mp3')
    },
    {
      id: 4,
      name: 'Akjoltoi Kanatbek',
      description: 'Begimai',
      played: false,
      path: require('../../Musics/Begimai.mp3')
    },
    {
      id: 5,
      name: 'Henning May',
      description:'Hurra diese Welt geht unter',
      played:false,
      path: require('../../Musics/Welt.mp3')
    }

  ]

  const pauseMusic = async (id) => {
    setSound(false)
    musics.forEach(async (el) => {
      if (el.id == id) {
        el.played = false

      }
    })
    setData(musics)
    if (music != null) {
      await music?.pauseAsync()
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <View >
          <Text style={styles.name}>Lambada #420</Text>
        </View>

        <View style={styles.threeBlocks}>
          <View style={styles.iconsBlock}>
            <Image source={heart} style={styles.icon} />
            <Image source={vektor} style={styles.vektor} />
          </View>

          <View style={styles.logoBlock}>
            <Image source={logo} style={styles.logo} />
          </View>

          <View style={styles.iconsBlock}>
            <Image source={three} style={styles.icon} />
            <Image source={vektor2} style={styles.vektor2} />
          </View>
        </View>



        <View style={styles.content}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

            {data.map((el, i) => {

              return (
                <View
                  key={el.id}
                  style={i == music.lenght - 1 ? styles.last : styles.musics}
                >
                <TouchableOpacity onPress={()=>navigation.navigate('Pleer',{music:el.id})}>
                  <View >
                    <Text style={styles.option}>{el.name}</Text>
                    <Text style={styles.description}>{el.description}</Text>
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.play} onPress={() => {
                    el.played ? pauseMusic(el.id) : playSound(el.id)
                  }


                  }>
                    <Image source={el.played ? pause : play} style={el.played ? styles.pause : styles.playIcon} />
                  </TouchableOpacity>
                </View>
              )
            })}




          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24282C',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    color: '#73767A',
    fontSize: 14,
    marginTop: '7%',

  },
  threeBlocks: {

    marginTop: '9%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',

  },
  iconsBlock: {
    backgroundColor: '#292B31',
    borderColor: 'black',

    width: 60,
    height: 60,
    borderRadius: 100,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    position: 'relative',
    marginLeft:7

  },
  vektor: {
    position: 'absolute',
  },
  vektor2: {
    position: 'absolute'
  },
  logoBlock: {

    width: 138,
    height: 138,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    width: '70%',
    marginLeft: '0.5%',
    marginTop: '8%',
    marginBottom: '12%',
    height: 380,
  },
  scrollView: {
    width: '98%',
    padding: '5%',
    marginTop: '2%',
    marginLeft: '3%',
    backgroundColor: 'transparent',
    marginVertical: -20,

  },
  logo: {
    width: 300,
    height: 300,
    marginLeft: 15,
    resizeMode: 'contain',

  },
  icon: {
    marginLeft: 1,
    resizeMode: 'contain',
  },
  musics: {
    width: '96%',
    backgroundColor: 'green',
    height: 60,
    marginLeft: '1%',
    marginLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#1A1C1F',
    borderRadius: 20,
    marginBottom: '5%',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  play: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#292B31',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain'
  },

  option: {
    color: '#9b9b9d'
  },
  description: {
    color: '#4d4e51'
  },
  last: {
    width: '96%',
    backgroundColor: 'green',
    height: 60,
    marginLeft: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#1A1C1F',
    borderRadius: 20,
    marginBottom: '20%',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  pause: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  }
});
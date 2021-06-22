import React, { useState } from 'react'
// import {withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import Slider from '@material-ui/core/Slider';

import nazad from '../../img/nazad1.png'
import menu from '../../img/menu1.png'
import von from '../../img/von.png'
import pauses from '../../img/pauses1.png'
import slaider from '../../img/slaid1.png'
import slaider1 from '../../img/slaider2.png'
import pauses2 from '../../img/pauses2.png'

import { StyleSheet, View, Image, Text } from 'react-native'
import { color } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: 300 + theme.spacing(3) * 2,
//     },
//     margin: {
//       height: theme.spacing(3),
//     },
//   }),
// );

// interface Props {
//   children: React.ReactElement;
//   open: boolean;
//   value: number;
// }

  export default function Pleer({route}) {
  // const { children, open, value } = props;


  const [sound, setSound] = useState(false);
  const [music, setMusic] = useState(false)
  const [data, setData] = useState([])
  React.useEffect(() => {
     musics.map(el=>{
         if(el.id == route.params?.music){
             setData(el)
         }
     })
    // setData(musics)
  }, [route.params?.music])


  const navigation = useNavigation()

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
      description: 'Hening May',
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

  // const pauseMusic = async (id) => {
  //   setSound(false)
  //   musics.forEach(async (el) => {
  //     if (el.id == id) {
  //       el.played = false

  //     }
  //   })
  //   setData(musics)
  //   if (music != null) {
  //     await music?.pauseAsync()
  //   }
  // }
  // const PrettoSlider = withStyles({
  //   root: {
  //     color: '#52af77',
  //     height: 8,
  //   },
  //   thumb: {
  //     height: 24,
  //     width: 24,
  //     backgroundColor: '#fff',
  //     border: '2px solid currentColor',
  //     marginTop: -8,
  //     marginLeft: -12,
  //     '&:focus, &:hover, &$active': {
  //       boxShadow: 'inherit',
  //     },
  //   },
  //   active: {},
  //   valueLabel: {
  //     left: 'calc(-50% + 4px)',
  //   },
  //   track: {
  //     height: 8,
  //     borderRadius: 4,
  //   },
  //   rail: {
  //     height: 8,
  //     borderRadius: 4,
  //   },
  // })(Slider);

    return (
        <View style={styles.container}>
        <View>
            <View style={styles.header}>
            
                <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.nazad}>
                    <Image source={nazad} style={styles.menu}/>
                </TouchableOpacity>
                
                <View >
                    <Text style={styles.text}>PLAYING NOW</Text>
                </View>

                <View style={styles.nazad}>
                    <Image source={menu} style={styles.menu} />
                </View>
            </View>


            
                <Image source={von} style={styles.von} />
        
    
            {
            data && 
            <View style={styles.texte}>
                <Text style={styles.textem}>{data.name}</Text>
                <Text style={styles.textem1}>{data.description}</Text>
            </View>
        }

        {/* <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} /> */}


            <View style={styles.footer}>
                <TouchableOpacity style={styles.slaider} onPress={()=>navigation.navigate({name:['Djadua','Nicht','MATRANG','Akjoltoi Kanatbek','Henning May'], id: [1, 2, 3, 4, 5]})}>
                    <Image source={slaider} style={styles.slaid}/>
                </TouchableOpacity>
                <View style={styles.pauses}>
                    <Image source={pauses} style={styles.pauses1}/>
                    <Image source={pauses2} style={styles.pauses2}/>
                </View>
                <TouchableOpacity style={styles.slaider}>
                    <Image source={slaider1} style={styles.slaid}/>
              </TouchableOpacity>
            </View>
        </View>
</View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24282C',
        alignItems: 'center',
      },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 30,
        // alignItems: 'center',
        marginLeft: 52,
        position:'relative'
    },
    nazad: {
        width: 50,
        height: 50,
        backgroundColor: '#292B31',
        borderRadius: 50,
        position: 'relative',
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        marginLeft: 22,
        zIndex:9999
        
    },
    text: {
        fontSize: 14,
        lineHeight: 16.41,
        fontStyle: 'normal',
        color: '#74787C',
        marginTop: 9
    },
    menu: {
        position: 'absolute',
        marginTop: 18,
        marginLeft: 20,
        width: 10.5,
        height: 10,
    },
    von: {
        marginTop: -30,
    },
    textem:{
        fontSize:25,
        textAlign:'center',
        color:'#7A889F',
        lineHeight:42,
    },
    textem1:{
        fontSize:16,
        textAlign:'center',
        color:'#7A889F',
    },
    texte:{
        marginTop:-125,
    },
    footer:{
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        marginTop:60,
        width:'85%',
        marginLeft:90
    },
    slaider:{
            width: 60,
            height: 60,
            backgroundColor: '#292B31',
            borderRadius: 50,
            position: 'relative',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 0.5,
        },
        slaid:{
            position:'absolute',
            marginTop:20,
            marginLeft:15
        },
        pauses:{
          position:'relative'
        },
        pauses2:{
          position:'absolute',
          marginTop:44,
          marginLeft:47
        }
});
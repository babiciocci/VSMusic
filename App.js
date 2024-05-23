import React, { useEffect } from 'react';
import { useState } from 'react';
import { TextInput, Text, View, Button, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Paragraph, Title } from 'react-native-paper';
import {categories, musicItems, singerItems, albumItems, instruments} from "./components/index";
import {Audio} from 'expo-av';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


class Inicio extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.imageInicio} source={require("./assets/logo.png")} />

      <TouchableOpacity style={styles.buttonLogIn} onPress={()=>this.props.navigation.navigate("Login")}>
      <Text style={styles.textButtonInicio}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCadastrar} onPress={()=>this.props.navigation.navigate("Cadastrar")}>
      <Text style={styles.textButtonInicio}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      usuario: '',
      senha: ''
    }
  }

  render(){
    return(
    <View style={styles.container}>
      <Image style={styles.imageLogo} source={require("./assets/logo.png")} />

      <Text style={styles.textLogin}>{"Email ou nome de usuário:"}</Text>
      <TextInput style={styles.textInput} onChangeText={(texto)=>this.setState({usuario: texto})}></TextInput>

      <Text style={styles.textLogin}>{"Senha:"}</Text>
      <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(texto)=>this.setState({senha: texto})}></TextInput>

      <TouchableOpacity style={styles.button} onPress={()=>this.ler()}>
      <Text style={styles.textButton}>Log In</Text>
      </TouchableOpacity>
    </View>
    )
  }

  async ler(){
    try{
      let senha = await AsyncStorage.getItem(this.state.usuario);
      if(senha != null){
        if(senha == this.state.senha){
          this.props.navigation.navigate('Musicas')
        }else{
          alert("Senha Incorreta!");
        }
      }else{
        alert("Usuário não foi encontrado!");
      }
    }catch(erro){
      console.log(erro);
    }
  }
}

class Cadastro extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user: '',
      password: '',

    }
  }

  async gravar(){
    try{
      await AsyncStorage.setItem(this.state.user, this.state.password);
      alert("Salvo com sucesso!")
    }catch(erro){
      alert("Erro!")
    }
  }

  render(){
    return(
    <View style={styles.container}>
      <Image style={styles.imageLogo} source={require("./assets/logo.png")} />

      <Text style={styles.textLogin}>{"Email ou nome de usuário:"}</Text>
      <TextInput style={styles.textInput} onChangeText={(texto)=>this.setState({user: texto})}></TextInput>

      <Text style={styles.textLogin}>{"Senha:"}</Text>
      <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(texto)=>this.setState({password: texto})}></TextInput>

      <TouchableOpacity style={styles.button} onPress={()=>this.gravar()}>
      <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
    )
  }
}


class Nav2 extends React.Component {
  render() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Log In" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Musicas" options={{ headerShown: false }} component={Musicas}/>

          <Stack.Screen name="Perfil1" options={{ headerShown: false }} component={Perfil1}/>
          <Stack.Screen name="Perfil2" options={{ headerShown: false }} component={Perfil2}/>
          <Stack.Screen name="Perfil3" options={{ headerShown: false }} component={Perfil3}/>
          <Stack.Screen name="Perfil4" options={{ headerShown: false }} component={Perfil4}/>
          <Stack.Screen name="Perfil5" options={{ headerShown: false }} component={Perfil5}/>
          <Stack.Screen name="Perfil6" options={{ headerShown: false }} component={Perfil6}/>
          <Stack.Screen name="Perfil7" options={{ headerShown: false }} component={Perfil7}/>
          <Stack.Screen name="Perfil8" options={{ headerShown: false }} component={Perfil8}/>

          <Stack.Screen name="Musica1" options={{ headerShown: false }} component={Musica1}/>
          <Stack.Screen name="Musica2" options={{ headerShown: false }} component={Musica2}/>
          <Stack.Screen name="Musica3" options={{ headerShown: false }} component={Musica3}/>
          <Stack.Screen name="Musica4" options={{ headerShown: false }} component={Musica4}/>
          <Stack.Screen name="Musica5" options={{ headerShown: false }} component={Musica5}/>
          <Stack.Screen name="Musica6" options={{ headerShown: false }} component={Musica6}/>
          <Stack.Screen name="Musica7" options={{ headerShown: false }} component={Musica7}/>
          <Stack.Screen name="Musica8" options={{ headerShown: false }} component={Musica8}/>

          <Stack.Screen name="Album1" options={{ headerShown: false }} component={Album1}/>
          <Stack.Screen name="Album2" options={{ headerShown: false }} component={Album2}/>
          <Stack.Screen name="Album3" options={{ headerShown: false }} component={Album3}/>
          <Stack.Screen name="Album4" options={{ headerShown: false }} component={Album4}/>
          <Stack.Screen name="Album5" options={{ headerShown: false }} component={Album5}/>
       </Stack.Navigator>
    );
  }
}





class Musica1 extends React.Component {
  constructor(props){
    super(props);

    this.song1 = new Audio.Sound();
    this.song2 = new Audio.Sound();
    this.song3 = new Audio.Sound();
    this.song4 = new Audio.Sound();
    this.song5 = new Audio.Sound();
    this.song6 = new Audio.Sound();
    this.song7 = new Audio.Sound();
    this.song8 = new Audio.Sound();

    this.song1.loadAsync(require('./musics/music1/Music.mp3'));
    this.song2.loadAsync(require('./musics/music1/Loop.mp3'));
    this.song3.loadAsync(require('./musics/music1/Click.mp3'));
    this.song4.loadAsync(require('./musics/music1/Drums.mp3'));
    this.song5.loadAsync(require('./musics/music1/Piano.mp3'));
    this.song6.loadAsync(require('./musics/music1/Guitar.mp3'));
    this.song7.loadAsync(require('./musics/music1/Choir.mp3'));
    this.song8.loadAsync(require('./musics/music1/Bass.mp3'));
  }

  tocar(id){
    if(id == 1){
      this.song1.setPositionAsync(0);
      this.song1.playAsync();
      this.song1.setVolumeAsync(100);

      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 2){
      this.song2.setPositionAsync(0);
      this.song2.playAsync();
      this.song2.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 3){
      this.song3.setPositionAsync(0);
      this.song3.playAsync();
      this.song3.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 4){
      this.song4.setPositionAsync(0);
      this.song4.playAsync();
      this.song4.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 5){
      this.song5.setPositionAsync(0);
      this.song5.playAsync();
      this.song5.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 6){
      this.song6.setPositionAsync(0);
      this.song6.playAsync();
      this.song6.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 7){
      this.song7.setPositionAsync(0);
      this.song7.playAsync();
      this.song7.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 8){
      this.song8.setPositionAsync(0);
      this.song8.playAsync();
      this.song8.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
    }
  }
  
  voltar(){
    this.song1.stopAsync();
    this.song2.stopAsync();
    this.song3.stopAsync();
    this.song4.stopAsync();
    this.song5.stopAsync();
    this.song6.stopAsync();
    this.song7.stopAsync();
    this.song8.stopAsync();
  }

  render(){
    return (
    <View style={styles.containerApp}>
      <View style={styles.barMusic}>
        <TouchableOpacity style={styles.buttonBack} onPress={()=>{this.props.navigation.goBack(); this.voltar()}}>
          <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundInstruments}>
        <Image style={styles.imageMusic} source={require("./assets/musica1.png")} />
        <Text style={styles.textTitlesMusics}>Quem é Como Nosso Deus?</Text>
        <Text style={styles.textMusicInfo}>Nivea Soares</Text>
      </View>

      <View style={styles.backgroundInstruments}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        data={instruments} 
        keyExtrator={item=> item.id} 
        className='overflow-visible' 
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.buttonInstruments} onPress={()=>this.tocar(item.id)}>
              <Text style={styles.textButtonApp}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        />
      </View>

      <ScrollView>
        <Text style={styles.textTitles}>Letra:</Text>
        
        <Text style={styles.textLetraMusica}>Quem é semelhante ao Deus</Text>
        <Text style={styles.textLetraMusica}>Que cura os enfermos</Text>
        <Text style={styles.textLetraMusica}>Que ressuscita os mortos</Text>
        <Text style={styles.textLetraMusica}>Liberta os oprimidos</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é semelhante ao Rei</Text>
        <Text style={styles.textLetraMusica}>De olhos como o fogo</Text>
        <Text style={styles.textLetraMusica}>Cabelos como a neve</Text>
        <Text style={styles.textLetraMusica}>Seu rosto brilha mais que o Sol</Text>
        <Text style={styles.textLetraMusica}>Brilha mais que o Sol</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é semelhante ao Deus</Text>
        <Text style={styles.textLetraMusica}>Que cura os enfermos</Text>
        <Text style={styles.textLetraMusica}>Que ressuscita os mortos</Text>
        <Text style={styles.textLetraMusica}>Liberta os oprimidos</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é semelhante ao Rei</Text>
        <Text style={styles.textLetraMusica}>De olhos como o fogo</Text>
        <Text style={styles.textLetraMusica}>Cabelos como a neve</Text>
        <Text style={styles.textLetraMusica}>Seu rosto brilha mais que o Sol</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Sua glória a outro não dará</Text>
        <Text style={styles.textLetraMusica}>Jesus Cristo, filho, reinará</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Sua glória a outro não dará (Ele não dará)</Text>
        <Text style={styles.textLetraMusica}>Jesus Cristo, filho, reinará (Ele reinará)</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>E Ele reinará para sempre</Text>
        <Text style={styles.textLetraMusica}>Pra sempre e sempre Ele reinará</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>E Ele reinará para sempre</Text>
        <Text style={styles.textLetraMusica}>Pra sempre e sempre Ele reinará</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>E Ele reinará para sempre</Text>
        <Text style={styles.textLetraMusica}>Pra sempre e sempre Ele reinará</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>E Ele reinará para sempre</Text>
        <Text style={styles.textLetraMusica}>Pra sempre e sempre Ele reinará</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Sua glória a outro não dará</Text>
        <Text style={styles.textLetraMusica}>Jesus Cristo, filho, reinará</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Sua glória a outro não dará</Text>
        <Text style={styles.textLetraMusica}>Jesus Cristo, filho, reinará</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Quem é como o nosso Deus?</Text>
        <Text style={styles.textLetraMusica}>Poderoso nas batalhas</Text>
        <Text style={styles.textLetraMusica}>Poderoso pra salvar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>E Ele reinará para sempre</Text>
        <Text style={styles.textLetraMusica}>Pra sempre e sempre Ele reinará</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>E Ele reinará para sempre</Text>
        <Text style={styles.textLetraMusica}>Pra sempre e sempre Ele reinará</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>E Ele reinará para sempre</Text>
        <Text style={styles.textLetraMusica}>Pra sempre e sempre Ele reinará</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>E Ele reinará para sempre</Text>
        <Text style={styles.textLetraMusica}>Pra sempre e sempre Ele reinará</Text>

      </ScrollView>
    </View>
    );
  }
}



class Musica6 extends React.Component {
  constructor(props){
    super(props);

    this.song1 = new Audio.Sound();
    this.song2 = new Audio.Sound();
    this.song3 = new Audio.Sound();
    this.song4 = new Audio.Sound();
    this.song5 = new Audio.Sound();
    this.song6 = new Audio.Sound();
    this.song7 = new Audio.Sound();
    this.song8 = new Audio.Sound();

    this.song1.loadAsync(require('./musics/music6/Music.mp3'));
    this.song2.loadAsync(require('./musics/music6/VS.mp3'));
    this.song3.loadAsync(require('./musics/music6/Click.mp3'));
    this.song4.loadAsync(require('./musics/music6/Drums.mp3'));
    this.song5.loadAsync(require('./musics/music6/Piano.mp3'));
    this.song6.loadAsync(require('./musics/music6/Guitar.mp3'));
    this.song7.loadAsync(require('./musics/music6/Voice.mp3'));
    this.song8.loadAsync(require('./musics/music6/Bass.mp3'));
  }

  tocar(id){
    if(id == 1){
      this.song1.setPositionAsync(0);
      this.song1.playAsync();
      this.song1.setVolumeAsync(100);

      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 2){
      this.song2.setPositionAsync(0);
      this.song2.playAsync();
      this.song2.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 3){
      this.song3.setPositionAsync(0);
      this.song3.playAsync();
      this.song3.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 4){
      this.song4.setPositionAsync(0);
      this.song4.playAsync();
      this.song4.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 5){
      this.song5.setPositionAsync(0);
      this.song5.playAsync();
      this.song5.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 6){
      this.song6.setPositionAsync(0);
      this.song6.playAsync();
      this.song6.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 7){
      this.song7.setPositionAsync(0);
      this.song7.playAsync();
      this.song7.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 8){
      this.song8.setPositionAsync(0);
      this.song8.playAsync();
      this.song8.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
    }
  }
  
  voltar(){
    this.song1.stopAsync();
    this.song2.stopAsync();
    this.song3.stopAsync();
    this.song4.stopAsync();
    this.song5.stopAsync();
    this.song6.stopAsync();
    this.song7.stopAsync();
    this.song8.stopAsync();
  }

  render(){
    return (
    <View style={styles.containerApp}>
      <View style={styles.barMusic}>
        <TouchableOpacity style={styles.buttonBack} onPress={()=>{this.props.navigation.goBack(); this.voltar()}}>
          <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundInstruments}>
        <Image style={styles.imageMusic} source={require("./assets/musica6.png")} />
        <Text style={styles.textTitlesMusics}>Levanto um Aleluia</Text>
        <Text style={styles.textMusicInfo}>Julia Vitoria</Text>
      </View>

      <View style={styles.backgroundInstruments}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        data={instruments} 
        keyExtrator={item=> item.id} 
        className='overflow-visible' 
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.buttonInstruments} onPress={()=>this.tocar(item.id)}>
              <Text style={styles.textButtonApp}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        />
      </View>

      <ScrollView>
        <Text style={styles.textTitles}>Letra:</Text>
        
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Na presença do inimigo</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Mais alto que os ruídos</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Canções são armas para mim</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>O Céu vem guerrear por mim</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Na tempestade eu vou cantar</Text>
        <Text style={styles.textLetraMusica}>Alto e mais alto o meu louvor rugirá</Text>
        <Text style={styles.textLetraMusica}>Das cinzas a fé se levantará</Text>
        <Text style={styles.textLetraMusica}>A morte é vencida, o Rei vivo está</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Com tudo o que há em mim</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>E vejo a escuridão fugir</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Mesmo quando não posso entender</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>O medo não tem mais poder</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Na tempestade eu vou cantar</Text>
        <Text style={styles.textLetraMusica}>Alto e mais alto o meu louvor rugirá</Text>
        <Text style={styles.textLetraMusica}>Das cinzas a fé se levantará</Text>
        <Text style={styles.textLetraMusica}>A morte é vencida, o Rei vivo está</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Cante mais alto (cante mais alto)</Text>
        <Text style={styles.textLetraMusica}>Cante mais alto (cante mais alto)</Text>
        <Text style={styles.textLetraMusica}>Cante mais alto (cante mais alto)</Text>
        <Text style={styles.textLetraMusica}>Cante mais alto (cante mais alto)</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Cante mais alto</Text>
        <Text style={styles.textLetraMusica}>Na presença do inimigo</Text>
        <Text style={styles.textLetraMusica}>Cante mais alto</Text>
        <Text style={styles.textLetraMusica}>Mais alto que os ruídos</Text>
        <Text style={styles.textLetraMusica}>Cante mais alto</Text>
        <Text style={styles.textLetraMusica}>Canções são armas para mim</Text>
        <Text style={styles.textLetraMusica}>Cante mais alto</Text>
        <Text style={styles.textLetraMusica}>O Céu vem guerrear por mim</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Cante mais alto</Text>
        <Text style={styles.textLetraMusica}>Na presença do inimigo</Text>
        <Text style={styles.textLetraMusica}>Cante mais alto</Text>
        <Text style={styles.textLetraMusica}>Mais alto que os ruídos</Text>
        <Text style={styles.textLetraMusica}>Cante mais alto</Text>
        <Text style={styles.textLetraMusica}>Canções são armas para mim</Text>
        <Text style={styles.textLetraMusica}>Cante mais alto</Text>
        <Text style={styles.textLetraMusica}>O Céu vem guerrear por mim</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Cante mais alto</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Na tempestade eu vou cantar</Text>
        <Text style={styles.textLetraMusica}>Alto e mais alto o meu louvor rugirá</Text>
        <Text style={styles.textLetraMusica}>Das cinzas a fé se levantará</Text>
        <Text style={styles.textLetraMusica}>A morte é vencida, o Rei vivo está</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>E na tempestade, sim, eu vou cantar</Text>
        <Text style={styles.textLetraMusica}>Alto e mais alto o meu louvor rugirá</Text>
        <Text style={styles.textLetraMusica}>Das cinzas a fé se levantará</Text>
        <Text style={styles.textLetraMusica}>A morte é vencida, o Rei vivo está</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Na presença do inimigo</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Mais alto que os ruídos</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>Canções são armas para mim</Text>
        <Text style={styles.textLetraMusica}>Levanto um aleluia</Text>
        <Text style={styles.textLetraMusica}>O Céu vem guerrear por mim</Text>

      </ScrollView>
    </View>
    );
  }
}



class Musica7 extends React.Component {
  constructor(props){
    super(props);

    this.song1 = new Audio.Sound();
    this.song2 = new Audio.Sound();
    this.song3 = new Audio.Sound();
    this.song4 = new Audio.Sound();
    this.song5 = new Audio.Sound();
    this.song6 = new Audio.Sound();
    this.song7 = new Audio.Sound();
    this.song8 = new Audio.Sound();

    this.song1.loadAsync(require('./musics/music7/Music.mp3'));
    this.song2.loadAsync(require('./musics/music7/VS.mp3'));
    this.song3.loadAsync(require('./musics/music7/Click.mp3'));
    this.song4.loadAsync(require('./musics/music7/Drums.mp3'));
    this.song5.loadAsync(require('./musics/music7/Piano.mp3'));
    this.song6.loadAsync(require('./musics/music7/Guitar.mp3'));
    this.song7.loadAsync(require('./musics/music7/Voice.mp3'));
    this.song8.loadAsync(require('./musics/music7/Bass.mp3'));
  }

  tocar(id){
    if(id == 1){
      this.song1.setPositionAsync(0);
      this.song1.playAsync();
      this.song1.setVolumeAsync(100);

      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 2){
      this.song2.setPositionAsync(0);
      this.song2.playAsync();
      this.song2.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 3){
      this.song3.setPositionAsync(0);
      this.song3.playAsync();
      this.song3.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 4){
      this.song4.setPositionAsync(0);
      this.song4.playAsync();
      this.song4.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 5){
      this.song5.setPositionAsync(0);
      this.song5.playAsync();
      this.song5.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 6){
      this.song6.setPositionAsync(0);
      this.song6.playAsync();
      this.song6.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 7){
      this.song7.setPositionAsync(0);
      this.song7.playAsync();
      this.song7.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 8){
      this.song8.setPositionAsync(0);
      this.song8.playAsync();
      this.song8.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
    }
  }
  
  voltar(){
    this.song1.stopAsync();
    this.song2.stopAsync();
    this.song3.stopAsync();
    this.song4.stopAsync();
    this.song5.stopAsync();
    this.song6.stopAsync();
    this.song7.stopAsync();
    this.song8.stopAsync();
  }

  render(){
    return (
    <View style={styles.containerApp}>
      <View style={styles.barMusic}>
        <TouchableOpacity style={styles.buttonBack} onPress={()=>{this.props.navigation.goBack(); this.voltar()}}>
          <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundInstruments}>
        <Image style={styles.imageMusic} source={require("./assets/musica7.png")} />
        <Text style={styles.textTitlesMusics}>Palavras</Text>
        <Text style={styles.textMusicInfo}>Julia Vitoria</Text>
      </View>

      <View style={styles.backgroundInstruments}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        data={instruments} 
        keyExtrator={item=> item.id} 
        className='overflow-visible' 
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.buttonInstruments} onPress={()=>this.tocar(item.id)}>
              <Text style={styles.textButtonApp}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        />
      </View>

      <ScrollView>
        <Text style={styles.textTitles}>Letra:</Text>
        
        <Text style={styles.textLetraMusica}>Com gemidos que palavras não podem explicar</Text>
        <Text style={styles.textLetraMusica}>Ele leva ao Pai as minhas intercessões</Text>
        <Text style={styles.textLetraMusica}>Quando dobro os meus joelhos em meio às tribulações</Text>
        <Text style={styles.textLetraMusica}>Ele ouve o gemido do meu coração</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Ó Jesus, a Ti confesso, não dá pra viver</Text>
        <Text style={styles.textLetraMusica}>Sem sentir a Tua presença no meu ser</Text>
        <Text style={styles.textLetraMusica}>Sou eterno dependente, ser humano tão carente</Text>
        <Text style={styles.textLetraMusica}>Estou de novo aqui e quero Teu poder</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Ainda que pra Te servir, Jesus, eu tenha que chorar</Text>
        <Text style={styles.textLetraMusica}>Te servirei porque comigo estarás</Text>
        <Text style={styles.textLetraMusica}>Sofrer contigo é bem melhor do que errar</Text>
        <Text style={styles.textLetraMusica}>Perdoa-me porque às vezes não consigo nem falar</Text>
        <Text style={styles.textLetraMusica}>Logo as lágrimas meus olhos vêm molhar</Text>
        <Text style={styles.textLetraMusica}>Como um sinal que Tu estás neste lugar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Ó Jesus, a Ti confesso, não dá pra viver</Text>
        <Text style={styles.textLetraMusica}>Sem sentir a Tua presença no meu ser</Text>
        <Text style={styles.textLetraMusica}>Sou eterno dependente, ser humano tão carente</Text>
        <Text style={styles.textLetraMusica}>Estou de novo aqui e quero Teu poder</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Ainda que pra Te servir, Jesus, eu tenha que chorar</Text>
        <Text style={styles.textLetraMusica}>Te servirei porque comigo estarás</Text>
        <Text style={styles.textLetraMusica}>Sofrer contigo é bem melhor do que errar</Text>
        <Text style={styles.textLetraMusica}>Perdoa-me porque às vezes não consigo nem falar</Text>
        <Text style={styles.textLetraMusica}>E logo as lágrimas meus olhos vêm molhar</Text>
        <Text style={styles.textLetraMusica}>Como um sinal que Tu estás neste lugar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Tu estás neste lugar</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Ó Jesus, a Ti confesso, não dá pra viver</Text>
        <Text style={styles.textLetraMusica}>Sem sentir a Tua presença no meu ser</Text>
        <Text style={styles.textLetraMusica}>Sou eterno dependente, ser humano tão carente</Text>
        <Text style={styles.textLetraMusica}>Estou de novo aqui e quero Teu poder</Text>
        
      </ScrollView>
    </View>
    );
  }
}



class Musica8 extends React.Component {
  constructor(props){
    super(props);

    this.song1 = new Audio.Sound();
    this.song2 = new Audio.Sound();
    this.song3 = new Audio.Sound();
    this.song4 = new Audio.Sound();
    this.song5 = new Audio.Sound();
    this.song6 = new Audio.Sound();
    this.song7 = new Audio.Sound();
    this.song8 = new Audio.Sound();

    this.song1.loadAsync(require('./musics/music8/Music.mp3'));
    this.song2.loadAsync(require('./musics/music8/ChoirVS.mp3'));
    this.song3.loadAsync(require('./musics/music7/Click.mp3'));
    this.song4.loadAsync(require('./musics/music7/Drums.mp3'));
    this.song5.loadAsync(require('./musics/music7/Piano.mp3'));
    this.song6.loadAsync(require('./musics/music7/Guitar.mp3'));
    this.song7.loadAsync(require('./musics/music7/Voice.mp3'));
    this.song8.loadAsync(require('./musics/music7/Bass.mp3'));
  }

  tocar(id){
    if(id == 1){
      this.song1.setPositionAsync(0);
      this.song1.playAsync();
      this.song1.setVolumeAsync(100);

      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 2){
      this.song2.setPositionAsync(0);
      this.song2.playAsync();
      this.song2.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 3){
      this.song3.setPositionAsync(0);
      this.song3.playAsync();
      this.song3.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 4){
      this.song4.setPositionAsync(0);
      this.song4.playAsync();
      this.song4.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 5){
      this.song5.setPositionAsync(0);
      this.song5.playAsync();
      this.song5.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 6){
      this.song6.setPositionAsync(0);
      this.song6.playAsync();
      this.song6.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song7.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 7){
      this.song7.setPositionAsync(0);
      this.song7.playAsync();
      this.song7.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song8.stopAsync();
    }
    if(id == 8){
      this.song8.setPositionAsync(0);
      this.song8.playAsync();
      this.song8.setVolumeAsync(100);

      this.song1.stopAsync();
      this.song2.stopAsync();
      this.song3.stopAsync();
      this.song4.stopAsync();
      this.song5.stopAsync();
      this.song6.stopAsync();
      this.song7.stopAsync();
    }
  }
  
  voltar(){
    this.song1.stopAsync();
    this.song2.stopAsync();
    this.song3.stopAsync();
    this.song4.stopAsync();
    this.song5.stopAsync();
    this.song6.stopAsync();
    this.song7.stopAsync();
    this.song8.stopAsync();
  }

  render(){
    return (
    <View style={styles.containerApp}>
      <View style={styles.barMusic}>
        <TouchableOpacity style={styles.buttonBack} onPress={()=>{this.props.navigation.goBack(); this.voltar()}}>
          <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundInstruments}>
        <Image style={styles.imageMusic} source={require("./assets/musica8.png")} />
        <Text style={styles.textTitlesMusics}>Além do Rio Azul</Text>
        <Text style={styles.textMusicInfo}>Julia Vitoria</Text>
      </View>

      <View style={styles.backgroundInstruments}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        data={instruments} 
        keyExtrator={item=> item.id} 
        className='overflow-visible' 
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.buttonInstruments} onPress={()=>this.tocar(item.id)}>
              <Text style={styles.textButtonApp}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        />
      </View>

      <ScrollView>
        <Text style={styles.textTitles}>Letra:</Text>
        
        <Text style={styles.textLetraMusica}>Além do rio azul</Text>
        <Text style={styles.textLetraMusica}>As ruas são de ouro e de cristais</Text>
        <Text style={styles.textLetraMusica}>Ali tudo é vida, ali tudo é paz</Text>
        <Text style={styles.textLetraMusica}>Morte e choro, nunca mais</Text>
        <Text style={styles.textLetraMusica}>Tristeza e dor, nunca mais</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Verei o grande rio da vida</Text>
        <Text style={styles.textLetraMusica}>Claro como o cristal</Text>
        <Text style={styles.textLetraMusica}>Verei a face do meu mestre querido</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Não haverá mais noite ali</Text>
        <Text style={styles.textLetraMusica}>Não haverá nenhum clamor</Text>
        <Text style={styles.textLetraMusica}>Verei os olhos de Jesus</Text>
        <Text style={styles.textLetraMusica}>E tocarei Seu corpo enfim</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Não, não haverá mais noite ali</Text>
        <Text style={styles.textLetraMusica}>Não haverá nenhum clamor</Text>
        <Text style={styles.textLetraMusica}>Verei os olhos de Jesus</Text>
        <Text style={styles.textLetraMusica}>E tocarei Seu corpo enfim</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>As nações andarão em Sua luz</Text>
        <Text style={styles.textLetraMusica}>E as portas jamais se fecharão</Text>
        <Text style={styles.textLetraMusica}>A cidade é de ouro puro</Text>
        <Text style={styles.textLetraMusica}>De jaspe é seu muro</Text>
        <Text style={styles.textLetraMusica}>Além do rio azul</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Morte e choro, tristeza e dor</Text>
        <Text style={styles.textLetraMusica}>Nunca mais, nunca mais</Text>
        <Text style={styles.textLetraMusica}>Morte e choro, tristeza e dor</Text>
        <Text style={styles.textLetraMusica}>Nunca mais, nunca mais</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Morte e choro, tristeza e dor</Text>
        <Text style={styles.textLetraMusica}>Nunca mais, nunca mais</Text>
        <Text style={styles.textLetraMusica}>Morte e choro, tristeza e dor</Text>
        <Text style={styles.textLetraMusica}>Nunca mais, nunca mais</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Não haverá mais noite ali</Text>
        <Text style={styles.textLetraMusica}>Não haverá nenhum clamor</Text>
        <Text style={styles.textLetraMusica}>Verei os olhos de Jesus</Text>
        <Text style={styles.textLetraMusica}>E tocarei Seu corpo enfim</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Não haverá mais noite ali</Text>
        <Text style={styles.textLetraMusica}>Não haverá nenhum clamor</Text>
        <Text style={styles.textLetraMusica}>Verei os olhos de Jesus</Text>
        <Text style={styles.textLetraMusica}>E tocarei Seu corpo enfim</Text>
        
      </ScrollView>
    </View>
    );
  }
}



class Musica2 extends React.Component {
  constructor(props){
    super(props);

    this.song1 = new Audio.Sound();

    this.song1.loadAsync(require('./musics/music2/Music.mp3'));
  }

  tocar(id){
    if(id == 1){
      this.song1.setPositionAsync(0);
      this.song1.playAsync();
      this.song1.setVolumeAsync(100);
    }
    if(id == 2){
      this.song1.stopAsync();
    }
    if(id == 3){
      this.song1.stopAsync();
    }
    if(id == 4){
      this.song1.stopAsync();
    }
    if(id == 5){
      this.song1.stopAsync();
    }
    if(id == 6){
      this.song1.stopAsync();
    }
    if(id == 7){
      this.song1.stopAsync();
    }
    if(id == 8){
      this.song1.stopAsync();
    }
  }
  
  voltar(){
    this.song1.stopAsync();
  }

  render(){
    return (
    <View style={styles.containerApp}>
      <View style={styles.barMusic}>
        <TouchableOpacity style={styles.buttonBack} onPress={()=>{this.props.navigation.goBack(); this.voltar()}}>
          <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundInstruments}>
        <Image style={styles.imageMusic} source={require("./assets/musica2.png")} />
        <Text style={styles.textTitlesMusics}>Hosana</Text>
        <Text style={styles.textMusicInfo}>Nivea Soares</Text>
      </View>

      <View style={styles.backgroundInstruments}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        data={instruments} 
        keyExtrator={item=> item.id} 
        className='overflow-visible' 
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.buttonInstruments} onPress={()=>this.tocar(item.id)}>
              <Text style={styles.textButtonApp}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        />
      </View>

      <ScrollView>
        <Text style={styles.textTitles}>Letra:</Text>
        
        <Text style={styles.textLetraMusica}>Abram-se portas eternas</Text>
        <Text style={styles.textLetraMusica}>E preparem o caminho</Text>
        <Text style={styles.textLetraMusica}>Pra que entre o Rei da Glória</Text>
        <Text style={styles.textLetraMusica}>Pra que entre o Rei</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Abram-se portas eternas</Text>
        <Text style={styles.textLetraMusica}>E preparem o caminho</Text>
        <Text style={styles.textLetraMusica}>Pra que entre o Rei da Glória</Text>
        <Text style={styles.textLetraMusica}>Pra que entre o Rei</Text>
        <Text style={styles.textLetraMusica}>Pra que entre o Rei da Glória</Text>
        <Text style={styles.textLetraMusica}>Pra que entre o Rei</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Ele é maravilhoso, Ele é santo e glorioso</Text>
        <Text style={styles.textLetraMusica}>Ele é Deus Eterno, Príncipe da Paz</Text>
        <Text style={styles.textLetraMusica}>Ele é maravilhoso, Ele é santo e glorioso</Text>
        <Text style={styles.textLetraMusica}>Ele é Deus Eterno, Príncipe da Paz</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Hosana, Hosana</Text>
        <Text style={styles.textLetraMusica}>Louvamos o Rei, louvamos o Rei</Text>
        <Text style={styles.textLetraMusica}>Hosana, Hosana</Text>
        <Text style={styles.textLetraMusica}>Jesus é o Rei dos reis, hey</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Abram-se portas eternas</Text>
        <Text style={styles.textLetraMusica}>E preparem o caminho</Text>
        <Text style={styles.textLetraMusica}>Pra que entre o Rei da Glória</Text>
        <Text style={styles.textLetraMusica}>Pra que entre o Rei</Text>
        <Text style={styles.textLetraMusica}>Pra que entre o Rei da Glória</Text>
        <Text style={styles.textLetraMusica}>Pra que entre o Rei, uou</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Ele é maravilhoso, Ele é santo e glorioso</Text>
        <Text style={styles.textLetraMusica}>Ele é Deus Eterno, Príncipe da Paz</Text>
        <Text style={styles.textLetraMusica}>Ele é maravilhoso, Ele é santo e glorioso</Text>
        <Text style={styles.textLetraMusica}>Ele é Deus Eterno, Príncipe da Paz</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Hosana, Hosana</Text>
        <Text style={styles.textLetraMusica}>Louvamos o Rei, louvamos o Rei</Text>
        <Text style={styles.textLetraMusica}>Hosana, Hosana</Text>
        <Text style={styles.textLetraMusica}>(Jesus é o Rei dos reis) uou, Jesus</Text>
        <Text style={styles.textLetraMusica}>Hosana, Hosana</Text>
        <Text style={styles.textLetraMusica}>Louvamos o Rei, louvamos o Rei</Text>
        <Text style={styles.textLetraMusica}>Hosana, Hosana</Text>
        <Text style={styles.textLetraMusica}>Jesus é o Rei dos reis, uou</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Todo vale será exaltado</Text>
        <Text style={styles.textLetraMusica}>Todo monte será rebaixado</Text>
        <Text style={styles.textLetraMusica}>Os caminhos serão aplainados</Text>
        <Text style={styles.textLetraMusica}>Prepare o caminho do Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Todo vale será exaltado</Text>
        <Text style={styles.textLetraMusica}>Todo monte será rebaixado</Text>
        <Text style={styles.textLetraMusica}>Os caminhos serão aplainados</Text>
        <Text style={styles.textLetraMusica}>Prepare o caminho do Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Todo vale será exaltado</Text>
        <Text style={styles.textLetraMusica}>Todo monte será rebaixado</Text>
        <Text style={styles.textLetraMusica}>Os caminhos serão aplainados</Text>
        <Text style={styles.textLetraMusica}>Prepare o caminho do Senhor</Text>
        <Text style={styles.textLetraMusica}>Prepare o caminho do Senhor</Text>
        <Text style={styles.textLetraMusica}>Prepare o caminho do Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Hosana, Hosana</Text>
        <Text style={styles.textLetraMusica}>Louvamos o Rei, louvamos o Rei</Text>
        <Text style={styles.textLetraMusica}>Hosana, Hosana</Text>
        <Text style={styles.textLetraMusica}>(Jesus é o Rei dos reis) uou, Jesus</Text>
        <Text style={styles.textLetraMusica}>Hosana, Hosana</Text>
        <Text style={styles.textLetraMusica}>Louvamos o Rei, louvamos o Rei</Text>
        <Text style={styles.textLetraMusica}>Hosana, Hosana</Text>
        <Text style={styles.textLetraMusica}>Jesus é o Rei dos reis, uou</Text>

      </ScrollView>
    </View>
    );
  }
}



class Musica3 extends React.Component {
  constructor(props){
    super(props);

    this.song1 = new Audio.Sound();

    this.song1.loadAsync(require('./musics/music3/Music.mp3'));
  }

  tocar(id){
    if(id == 1){
      this.song1.setPositionAsync(0);
      this.song1.playAsync();
      this.song1.setVolumeAsync(100);
    }
    if(id == 2){
      this.song1.stopAsync();
    }
    if(id == 3){
      this.song1.stopAsync();
    }
    if(id == 4){
      this.song1.stopAsync();
    }
    if(id == 5){
      this.song1.stopAsync();
    }
    if(id == 6){
      this.song1.stopAsync();
    }
    if(id == 7){
      this.song1.stopAsync();
    }
    if(id == 8){
      this.song1.stopAsync();
    }
  }
  
  voltar(){
    this.song1.stopAsync();
  }

  render(){
    return (
    <View style={styles.containerApp}>
      <View style={styles.barMusic}>
        <TouchableOpacity style={styles.buttonBack} onPress={()=>{this.props.navigation.goBack(); this.voltar()}}>
          <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundInstruments}>
        <Image style={styles.imageMusic} source={require("./assets/musica3.png")} />
        <Text style={styles.textTitlesMusics}>Grande é o Senhor</Text>
        <Text style={styles.textMusicInfo}>Nivea Soares</Text>
      </View>

      <View style={styles.backgroundInstruments}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        data={instruments} 
        keyExtrator={item=> item.id} 
        className='overflow-visible' 
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.buttonInstruments} onPress={()=>this.tocar(item.id)}>
              <Text style={styles.textButtonApp}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        />
      </View>

      <ScrollView>
        <Text style={styles.textTitles}>Letra:</Text>

        <Text style={styles.textLetraMusica}>És a vida, és o amor</Text>
        <Text style={styles.textLetraMusica}>Que traz luz sobre as trevas</Text>
        <Text style={styles.textLetraMusica}>Esperança que restaura</Text>
        <Text style={styles.textLetraMusica}>Todo coração ferido</Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>És a vida, és o amor</Text>
        <Text style={styles.textLetraMusica}>Que traz luz sobre as trevas</Text>
        <Text style={styles.textLetraMusica}>Esperança que restaura</Text>
        <Text style={styles.textLetraMusica}>Todo coração ferido</Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor, derramamos louvor</Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor somente a Ti</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>És a vida, és o amor</Text>
        <Text style={styles.textLetraMusica}>Que traz luz sobre as trevas</Text>
        <Text style={styles.textLetraMusica}>Esperança que restaura</Text>
        <Text style={styles.textLetraMusica}>Todo coração ferido</Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor, derramamos louvor</Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor a Ti</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor, derramamos louvor</Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor somente a Ti</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Toda a Terra entoará</Text>
        <Text style={styles.textLetraMusica}>Meu ser, rendido cantará</Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Toda a Terra entoará</Text>
        <Text style={styles.textLetraMusica}>Meu ser, rendido cantará</Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Toda a Terra entoará</Text>
        <Text style={styles.textLetraMusica}>Meu ser, rendido cantará</Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Toda a Terra entoará</Text>
        <Text style={styles.textLetraMusica}>Meu ser, rendido cantará</Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor, derramamos louvor</Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor a Ti</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor, derramamos louvor</Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor somente a Ti</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text style={styles.textLetraMusica}>Grande é o Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor, derramamos louvor</Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor a Ti</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor, derramamos louvor</Text>
        <Text style={styles.textLetraMusica}>Com Teu fôlego dentro em nós</Text>
        <Text style={styles.textLetraMusica}>Derramamos louvor somente a Ti</Text>
        
      </ScrollView>
    </View>
    );
  }
}



class Musica4 extends React.Component {
  constructor(props){
    super(props);

    this.song1 = new Audio.Sound();

    this.song1.loadAsync(require('./musics/music4/Music.mp3'));
  }

  tocar(id){
    if(id == 1){
      this.song1.setPositionAsync(0);
      this.song1.playAsync();
      this.song1.setVolumeAsync(100);
    }
    if(id == 2){
      this.song1.stopAsync();
    }
    if(id == 3){
      this.song1.stopAsync();
    }
    if(id == 4){
      this.song1.stopAsync();
    }
    if(id == 5){
      this.song1.stopAsync();
    }
    if(id == 6){
      this.song1.stopAsync();
    }
    if(id == 7){
      this.song1.stopAsync();
    }
    if(id == 8){
      this.song1.stopAsync();
    }
  }
  
  voltar(){
    this.song1.stopAsync();
  }

  render(){
    return (
    <View style={styles.containerApp}>
      <View style={styles.barMusic}>
        <TouchableOpacity style={styles.buttonBack} onPress={()=>{this.props.navigation.goBack(); this.voltar()}}>
          <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundInstruments}>
        <Image style={styles.imageMusic} source={require("./assets/musica4.png")} />
        <Text style={styles.textTitlesMusics}>Bondade de Deus</Text>
        <Text style={styles.textMusicInfo}>Isaias Saad</Text>
      </View>

      <View style={styles.backgroundInstruments}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        data={instruments} 
        keyExtrator={item=> item.id} 
        className='overflow-visible' 
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.buttonInstruments} onPress={()=>this.tocar(item.id)}>
              <Text style={styles.textButtonApp}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        />
      </View>

      <ScrollView>
        <Text style={styles.textTitles}>Letra:</Text>

        <Text style={styles.textLetraMusica}>Te amo, Deus</Text>
        <Text style={styles.textLetraMusica}>Tua graça nunca falha</Text>
        <Text style={styles.textLetraMusica}>Todos os dias</Text>
        <Text style={styles.textLetraMusica}>Eu estou em Tuas mãos</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Desde quando me levanto</Text>
        <Text style={styles.textLetraMusica}>Até eu me deitar</Text>
        <Text style={styles.textLetraMusica}>Eu cantarei da bondade de Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>És fiel em todo tempo</Text>
        <Text style={styles.textLetraMusica}>Em todo tempo Tu és tão, tão bom</Text>
        <Text style={styles.textLetraMusica}>Com todo fôlego que tenho</Text>
        <Text style={styles.textLetraMusica}>Eu cantarei da bondade de Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Tua doce voz</Text>
        <Text style={styles.textLetraMusica}>Que me guia em meio ao fogo</Text>
        <Text style={styles.textLetraMusica}>Na escuridão</Text>
        <Text style={styles.textLetraMusica}>Tua presença me conforta</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Sei que és meu Pai</Text>
        <Text style={styles.textLetraMusica}>Que amigo és</Text>
        <Text style={styles.textLetraMusica}>Eu vivo na bondade de Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>És fiel em todo tempo</Text>
        <Text style={styles.textLetraMusica}>Em todo tempo Tu és tão, tão bom</Text>
        <Text style={styles.textLetraMusica}>Com todo fôlego que tenho</Text>
        <Text style={styles.textLetraMusica}>Eu cantarei da bondade de Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>És fiel em todo tempo</Text>
        <Text style={styles.textLetraMusica}>Em todo tempo Tu és tão, tão bom</Text>
        <Text style={styles.textLetraMusica}>Com todo fôlego que tenho</Text>
        <Text style={styles.textLetraMusica}>Eu cantarei da bondade de Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Tua bondade me seguirá</Text>
        <Text style={styles.textLetraMusica}>Me seguirá, Senhor</Text>
        <Text style={styles.textLetraMusica}>Tua bondade me seguirá</Text>
        <Text style={styles.textLetraMusica}>Me seguirá, Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Eu me rendo a Ti, Te dou o meu ser</Text>
        <Text style={styles.textLetraMusica}>Entrego tudo a Ti</Text>
        <Text style={styles.textLetraMusica}>Tua bondade me seguirá</Text>
        <Text style={styles.textLetraMusica}>Me seguirá, Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Tua bondade me seguirá</Text>
        <Text style={styles.textLetraMusica}>Me seguirá, Senhor</Text>
        <Text style={styles.textLetraMusica}>Tua bondade me seguirá</Text>
        <Text style={styles.textLetraMusica}>Me seguirá, Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Eu me rendo a Ti, Te dou o meu ser</Text>
        <Text style={styles.textLetraMusica}>Entrego tudo a Ti</Text>
        <Text style={styles.textLetraMusica}>Tua bondade me seguirá</Text>
        <Text style={styles.textLetraMusica}>Me seguirá, Senhor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>És fiel em todo tempo</Text>
        <Text style={styles.textLetraMusica}>Em todo tempo Tu és tão, tão bom</Text>
        <Text style={styles.textLetraMusica}>Com todo fôlego que tenho</Text>
        <Text style={styles.textLetraMusica}>Eu cantarei da bondade de Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>És fiel em todo tempo</Text>
        <Text style={styles.textLetraMusica}>Em todo tempo Tu és tão, tão bom</Text>
        <Text style={styles.textLetraMusica}>Com todo fôlego que tenho</Text>
        <Text style={styles.textLetraMusica}>Eu cantarei da bondade de Deus</Text>
        
      </ScrollView>
    </View>
    );
  }
}



class Musica5 extends React.Component {
  constructor(props){
    super(props);

    this.song1 = new Audio.Sound();

    this.song1.loadAsync(require('./musics/music5/Music.mp3'));
  }

  tocar(id){
    if(id == 1){
      this.song1.setPositionAsync(0);
      this.song1.playAsync();
      this.song1.setVolumeAsync(100);
    }
    if(id == 2){
      this.song1.stopAsync();
    }
    if(id == 3){
      this.song1.stopAsync();
    }
    if(id == 4){
      this.song1.stopAsync();
    }
    if(id == 5){
      this.song1.stopAsync();
    }
    if(id == 6){
      this.song1.stopAsync();
    }
    if(id == 7){
      this.song1.stopAsync();
    }
    if(id == 8){
      this.song1.stopAsync();
    }
  }
  
  voltar(){
    this.song1.stopAsync();
  }

  render(){
    return (
    <View style={styles.containerApp}>
      <View style={styles.barMusic}>
        <TouchableOpacity style={styles.buttonBack} onPress={()=>{this.props.navigation.goBack(); this.voltar()}}>
          <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundInstruments}>
        <Image style={styles.imageMusic} source={require("./assets/musica5.png")} />
        <Text style={styles.textTitlesMusics}>Ruja o Leão + Que se Abram os Céus</Text>
        <Text style={styles.textMusicInfo}>Isaias Saad, Nivea Soares</Text>
      </View>

      <View style={styles.backgroundInstruments}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        data={instruments} 
        keyExtrator={item=> item.id} 
        className='overflow-visible' 
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.buttonInstruments} onPress={()=>this.tocar(item.id)}>
              <Text style={styles.textButtonApp}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        />
      </View>

      <ScrollView>
        <Text style={styles.textTitles}>Letra:</Text>

        <Text style={styles.textLetraMusica}>Sobre o trono de justiça</Text>
        <Text style={styles.textLetraMusica}>Eternamente haverá um Rei</Text>
        <Text style={styles.textLetraMusica}>Ele voltará para governar</Text>
        <Text style={styles.textLetraMusica}>As nações em amor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que ruja o leão</Text>
        <Text style={styles.textLetraMusica}>E que a Terra estremeça</Text>
        <Text style={styles.textLetraMusica}>Diante da majestade de Jesus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que ruja o leão</Text>
        <Text style={styles.textLetraMusica}>E que a Terra estremeça</Text>
        <Text style={styles.textLetraMusica}>Diante da majestade de Jesus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Sobre o trono de justiça</Text>
        <Text style={styles.textLetraMusica}>Eternamente haverá um Rei</Text>
        <Text style={styles.textLetraMusica}>Ele voltará para governar</Text>
        <Text style={styles.textLetraMusica}>As nações em amor</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que ruja o leão</Text>
        <Text style={styles.textLetraMusica}>E que a Terra estremeça</Text>
        <Text style={styles.textLetraMusica}>Diante da majestade de Jesus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que ruja o leão</Text>
        <Text style={styles.textLetraMusica}>E que a Terra estremeça</Text>
        <Text style={styles.textLetraMusica}>Diante da majestade de Jesus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que ruja o leão</Text>
        <Text style={styles.textLetraMusica}>E que a Terra estremeça</Text>
        <Text style={styles.textLetraMusica}>Diante da majestade de Jesus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que ruja o leão</Text>
        <Text style={styles.textLetraMusica}>E que a Terra estremeça</Text>
        <Text style={styles.textLetraMusica}>Diante da majestade de Jesus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>O descendente de Davi</Text>
        <Text style={styles.textLetraMusica}>O homem mais notável</Text>
        <Text style={styles.textLetraMusica}>Ele ama a justiça, odeia iniquidade</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>O descendente de Davi</Text>
        <Text style={styles.textLetraMusica}>O homem mais notável</Text>
        <Text style={styles.textLetraMusica}>Ele ama a justiça, odeia iniquidade</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>O descendente de Davi</Text>
        <Text style={styles.textLetraMusica}>O homem mais notável</Text>
        <Text style={styles.textLetraMusica}>Ele ama a justiça, odeia iniquidade</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>O descendente de Davi</Text>
        <Text style={styles.textLetraMusica}>O homem mais notável</Text>
        <Text style={styles.textLetraMusica}>Ele ama a justiça, odeia iniquidade</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que ruja o leão</Text>
        <Text style={styles.textLetraMusica}>E que a Terra estremeça</Text>
        <Text style={styles.textLetraMusica}>Diante da majestade de Jesus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que ruja o leão</Text>
        <Text style={styles.textLetraMusica}>E que a Terra estremeça</Text>
        <Text style={styles.textLetraMusica}>Diante da majestade de Jesus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que se abram os céus</Text>
        <Text style={styles.textLetraMusica}>O Teu reino vem</Text>
        <Text style={styles.textLetraMusica}>Nossa fé está no nosso Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que se abram os céus</Text>
        <Text style={styles.textLetraMusica}>O Teu reino vem</Text>
        <Text style={styles.textLetraMusica}>Nossa fé está no nosso Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que se abram os céus</Text>
        <Text style={styles.textLetraMusica}>O Teu reino vem</Text>
        <Text style={styles.textLetraMusica}>Nossa fé está no nosso Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que se abram os céus</Text>
        <Text style={styles.textLetraMusica}>O Teu reino vem</Text>
        <Text style={styles.textLetraMusica}>Nossa fé está no nosso Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que os céus fechados se abram</Text>
        <Text style={styles.textLetraMusica}>Teu reino venha mover</Text>
        <Text style={styles.textLetraMusica}>A nossa fé e esperança</Text>
        <Text style={styles.textLetraMusica}>Estão em Deus, grande Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que os céus fechados se abram</Text>
        <Text style={styles.textLetraMusica}>Teu reino venha mover</Text>
        <Text style={styles.textLetraMusica}>A nossa fé e esperança</Text>
        <Text style={styles.textLetraMusica}>Estão em Deus, grande Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que os céus fechados se abram</Text>
        <Text style={styles.textLetraMusica}>Teu reino venha mover</Text>
        <Text style={styles.textLetraMusica}>A nossa fé e esperança</Text>
        <Text style={styles.textLetraMusica}>Estão em Deus, grande Deus</Text>
        <Text> </Text>
        <Text style={styles.textLetraMusica}>Que os céus fechados se abram</Text>
        <Text style={styles.textLetraMusica}>Teu reino venha mover</Text>
        <Text style={styles.textLetraMusica}>A nossa fé e esperança</Text>
        <Text style={styles.textLetraMusica}>Estão em Deus, grande Deus</Text>
        
      </ScrollView>
    </View>
    );
  }
}





class Perfil1 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/nivea.png")} />
          </View>

        <ScrollView>
          <Text style={styles.textPerfil}><Text style={styles.textPerfilBold}>Nívea Soares</Text> pode ser considerada um ícone da música gospel brasileira. Despontou para o cenário gospel como integrante do Ministério Diante do Trono , gravando com esse grupo vários CDs e DVDs como backing vocal e tambem como solista. Casada com o produtor musical Gustavo Soares, Nívea é conhecida no Brasil e exterior por participar de congressos, seminários e informações de louvor e adoração. Nívea é filha de uma família de quatro irmãos. Cresceu e foi criada num lar cristão e desde cedo sempre esteve presente com música evangélica, influenciada pela família. Aos 15 anos começou a trabalhar em estúdios para fazer jingles onde conheceu o cantor David Quinlan, que influenciou e revelou uma unção de Deus sobre ela para uma composição. Iniciou uma carreira solo em 2003 com o CD Reina Sobre Mim ultrapassando uma venda de 300 mil cópias. A partir de então, Nivea desenvolveu outros projetos e até hoje tem alcançado gerações através de suas canções.</Text>
        </ScrollView>  
      </View>
    );
  }
}



class Perfil2 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/isaias.png")} />
          </View>

        <ScrollView>
          <Text style={styles.textPerfil}><Text style={styles.textPerfilBold}>Isaias Saad</Text> é um jovem que entendeu o seu chamado, desde muito cedo. Quando tinha 16 anos, Deus falou com ele, qual era o seu objetivo: cantar para e sobre Ele e usar o seu dom para alcançar pessoas. Em março de 2018, gravou Ousado Amor e passou o seu ministerio se tornado mais conhecido em todo o País. Gravou uma versao de Ruja o Leao / Que Se Abram Os Céus (Ao Vivo) com Nívea Soares. Também gravou uma versão da música Bondade de Deus. Seu ultimo album foi Bondade e Fidelidade (Ao Vivo). Assista e seja grandemente abençoado(a)!</Text>
        </ScrollView>  
      </View>
    );
  }
}



class Perfil3 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/ju.png")} />
          </View>

        <ScrollView>
          <Text style={styles.textPerfil}><Text style={styles.textPerfilBold}>Julliany Souza</Text> é cantora e compositora crista. Desde muito nova, dedica-se ao chamado do Senhor. Iniciou seu ministério aos 14 anos na igreja, destacando-se em 2019 com a música A Casa É Sua. Com uma voz única, rapidamente tornou-se representante da música gospel nacional e internacional. Desde 2019, Julliany apresenta músicas como Eu Te Vejo Em Tudo, Era Eu, Sinto Fluir (Ao Vivo) ft. Marcelo Markes, Yeshua, Seu Amor Me Persegue, Eu So Quero Tua Presenca (feat. Leo Brandao) [Ao Vivo], Como Na Primeira Vez, Ele Cumprira, Yahweh Se Manifestara (Ao Vivo) ft. Marcos Freire, entre outros. A cantora segue seu proposito de levar o amor de Deus a todos os povos por meio de seus novos louvores. O album Lindo Momento marca o início desse novo tempo e está disponível em todas as plataformas digitais.</Text>
        </ScrollView>  
      </View>
    );
  }
}



class Perfil4 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/gabi.png")} />
          </View>

        <ScrollView>
          <Text style={styles.textPerfil}><Text style={styles.textPerfilBold}>Gabriela Rocha</Text> nasceu em Sao Paulo no ano de 1994. Aos 5 anos iniciou seu ministério na igreja que frequentava e aos 13, participou do programa Raul Gil, onde sua voz se propagou pela nação. A partir de então, a cantora se entusiasmou em se tornar voz de Deus, levando os louvores e ministrações a todos. Em 2012 Gabi lançou seu primeiro album Jesus, em 2014 Pra Onde Iremos?  e em 2016 #SML , EP Gabriela Rocha e Ate Transbordar (Ao Vivo) , seu primeiro CD/DVD ao vivo. Seu segundo EP, Céu, foi lançado em 2017 e tornou-se o repertório das igrejas brasileiras e internacionais com a música Lugar Secreto. Em 2019 ela lançou o EP Hosana (Ao Vivo) com canções como: A Ele a Gloria (Ao Vivo) e Diz . Em 2023, lançou seu album A Presença que conta com músicas como Me Atraiu (Ao Vivo) e És o Amor (Ao Vivo).</Text>
        </ScrollView>  
      </View>
    );
  }
}



class Perfil5 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/juvi.png")} />
          </View>

        <ScrollView>
          <Text style={styles.textPerfil}><Text style={styles.textPerfilBold}>Julia Victoria de Oliveira Carvalho</Text>, conhecida como <Text style={styles.textPerfilBold}>Julia Vitória</Text>, é uma das grandes representantes da nova geração de cantores gospel. Com apenas 21 anos de idade, ela se destaca por sua doce voz, composições inspiradoras e, claro, a releitura de clássicos da música cristã. Nascida em New Jersey, nos Estados Unidos, Julia é filha de brasileiros e começou a frequentar a igreja aos seis anos - período em que começou a participar do coral da escola e a cantar nos cultos, principalmente por incentivo do pai que sempre gostou de música. Já na adolescência, aos 15 anos, a cantora começou a postar covers em suas redes sociais e, rapidamente, viu os seus vídeos tomarem proporções inimagináveis. No ano seguinte, ela iniciou uma parceria com a gravadora Musile Records e, desde então, vem apresentando canções emocionantes, que somam cerca 800 milhões de streamings e atraem mais de 2,5 milhões de ouvintes mensais no Spotify. Mesmo tendo poucos anos de estrada, o repertório de Julia Vitória conta com diversos sucessos, entre eles, Tuas Águas, com Gabriela Rocha, Começo, Meio e Fim / Mais Perto Quero Estar (Ao Vivo), De Dentro Pra Fora, Além do Rio Azul (Ao Vivo) e Palavras, outro marco em sua carreira.</Text>
        </ScrollView>  
      </View>
    );
  }
}



class Perfil6 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/elevation.png")} />
          </View>

        <ScrollView>
          <Text style={styles.textPerfil}><Text style={styles.textPerfilBold}>Elevation Worship</Text> is the worship ministry of Elevation Church, a multi-site church based in Charlotte, N.C. led by Pastor Steven Furtick. They have released 15 albums that include four RIAA Platinum-certified songs: Jireh, O Come To The Altar, Graves Into Gardens, and Do It Again. The group also has seven RIAA Gold-certified singles including The Blessing, Here Again, and Wait On You, joined by their RIAA Gold-certified album Here As In Heaven. Additionally, Elevation Worship has achieved three No. 1 radio songs, Graves Into Gardens, RATTLE! and their most recent, Same God. The group currently has twelve songs on the CCLI Top 100 list. To date, they have 4.2B all-time streams, 2.45B YouTube views, 5M YouTube subscribers, and 5.35M monthly listeners on Spotify. Their GRAMMY-winning album, Old Church Basement, was released in 2021 to wide acclaim. Elevation Worship recently celebrated their latest GRAMMY nomination for their album, LION, for the Best Contemporary Christian Music Album category. They ve won six GMA Dove Awards, two Billboard Music Awards, and have received nominations for both the American Music Awards and BET Awards. The ministry of Elevation Worship is passionate about producing songs for the local church that connect others to God. Their main priority is to create an atmosphere of worship so people can encounter Jesus personally. Their most recent album, CAN YOU IMAGINE? released on May 19, 2023.</Text>
        </ScrollView>  
      </View>
    );
  }
}



class Perfil7 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/fhop.png")} />
          </View>

        <ScrollView>
          <Text style={styles.textPerfil}><Text style={styles.textPerfilBold}>Fhop Music</Text> começou do transbordar da casa de oraçao em Florianopolis, onde líderes de louvor, muitas vezes cantando as Escrituras em uma sala vazia viram surgir canções sinceras que abençoariam a igreja de Cristo na Terra. Percebemos a necessidade de trazer Cristo para o centro das nossas canções. Isso despertou uma urgência em nossos corações de sermos um megafone, proclamando canções corporativas que levamssem à igreja uma compreensão bíblica de quem Deus é. Vimos em nossa comunidade canções sendo entoadas e pessoas sendo renovadas, encorajando e fortalecendo umas as outras no cantar a palavra corporativamente. Cremos que isso é ser igreja e está disponível para todo corpo de Cristo, por isso fazemos o que fazemos! Ouça o último lançamento do ministério, o álbum A Boa Parte (Ao Vivo).</Text>
        </ScrollView>  
      </View>
    );
  }
}


class Perfil8 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/gabguedes.png")} />
          </View>

        <ScrollView>
          <Text style={styles.textPerfil}><Text style={styles.textPerfilBold}>Gabriel Guedes de Almeida</Text> é um jovem musico nascido em São Paulo, capital. Filho de pastores e membro da Igreja Evangélica Corpus Christ, onde iniciou sua caminhada pelo mundo da musica aos 12 anos. Gabriel e um musico da nova geracao que tem decolado na musica gospel. O ministro ficou conhecido através de várias canções de sua autoria e tambem por vários covers gospel. Em 2019 o ministro lançou seu primeiro DVD intitulado Eterno Presente (Ao Vivo). Alicerçado numa vida de adoração, o ministro tem como objetivos: potencializar a revelação de Cristo por meio de suas canções, levando acalanto e esperança aos corações aflitos; e manifestar o reino de Deus por onde passar.</Text>
        </ScrollView>  
      </View>
    );
  }
}




class Album1 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/elevation_album.png")} />
            <Text style={styles.textTitlesMusics}>CAN YOU IMAGINE?</Text>
            <Text style={styles.textMusicInfo}>Elevation Worship</Text>
            <Text style={styles.textMusicInfo}> </Text>
          </View>
      </View>
    );
  }
}



class Album2 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/album_fhop.png")} />
            <Text style={styles.textTitlesMusics}>A Boa Parte</Text>
            <Text style={styles.textMusicInfo}>Fhop Music</Text>
            <Text style={styles.textMusicInfo}> </Text>
          </View>
      </View>
    );
  }
}



class Album3 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/album_gabi.png")} />
            <Text style={styles.textTitlesMusics}>A Presença</Text>
            <Text style={styles.textMusicInfo}>Gabriela Rocha</Text>
            <Text style={styles.textMusicInfo}> </Text>
          </View>
      </View>
    );
  }
}



class Album4 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/musica1.png")} />
            <Text style={styles.textTitlesMusics}>Quem é Como Nosso Deus?</Text>
            <Text style={styles.textMusicInfo}>Nivea Soares</Text>
            <Text style={styles.textMusicInfo}> </Text>
          </View>
      </View>
    );
  }
}



class Album5 extends React.Component {
  render() {
    return (
      <View style={styles.containerApp}>
        <View style={styles.barMusic}>
          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.goBack()}>
            <Image style={{width: 20, height: 30,}} source={require("./assets/back.png")} /> 
          </TouchableOpacity>
        </View>

          <View style={styles.backgroundInstruments}>
            <Image style={styles.imagePerfil} source={require("./assets/ni_album.png")} />
            <Text style={styles.textTitlesMusics}>Glória e Honra</Text>
            <Text style={styles.textMusicInfo}>Nivea Soares</Text>
            <Text style={styles.textMusicInfo}> </Text>
          </View>
      </View>
    );
  }
}





class Musicas extends React.Component {
    render() {
    return (
      <ScrollView style={styles.containerApp}>
        <View>
          <Text style={styles.titleApp}>VSMusic</Text>
          <TextInput style={styles.pesquisaBox} placeholder='Pesquisar'></TextInput>
        </View>

        <View>
          <FlatList 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          data={categories} 
          keyExtrator={item=> item.id} 
          className='overflow-visible' 
          renderItem={({item})=>{
            return(
              <TouchableOpacity style={styles.buttonApp}>
                <Text style={styles.textButtonApp}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}
          />
        </View>

        <View>
        <Text style={styles.textTitles}>Top Músicas</Text>
          <FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            data={musicItems}
            keyExtrator={item=> item.id} 
            className='overflow-visible' 
            renderItem={({item})=>{
              return(
                <TouchableOpacity style={styles.buttonMusics} onPress={()=>this.props.navigation.navigate(item.page)}>
                  <Image style={styles.buttonMusicsImage} source={item.image} /> 
                  <Text style={styles.buttonMusicsText}>{item.name}</Text>
                  <Text style={styles.textMusicInfo}>{item.singer}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <View>
        <Text style={styles.textTitles}>Artistas</Text>
          <FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            data={singerItems}
            keyExtrator={item=> item.id} 
            className='overflow-visible' 
            renderItem={({item})=>{
              return(
                <TouchableOpacity style={styles.buttonMusics} onPress={()=>this.props.navigation.navigate(item.page)}>
                  <Image style={styles.buttonArtistsImage} source={item.photo} /> 
                  <Text style={styles.buttonMusicsText}>{item.name}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <View>
        <Text style={styles.textTitles}>Top Albuns</Text>
          <FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            data={albumItems}
            keyExtrator={item=> item.id} 
            className='overflow-visible' 
            renderItem={({item})=>{
              return(
                <TouchableOpacity style={styles.buttonMusics} onPress={()=>this.props.navigation.navigate(item.page)}>
                  <Image style={styles.buttonMusicsImage} source={item.photo} /> 
                  <Text style={styles.buttonMusicsText}>{item.name}</Text>
                  <Text style={styles.textMusicInfo}>{item.singer}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        
      </ScrollView>
    );
  }
}



class App extends React.Component {

  render() {
    return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Inicio} 
          options={{
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home-account" color={color} size={size}/>)
            , headerShown: false
          }}
        />
        <Tab.Screen name="Login" component={Nav2} 
          options={{
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home-account" color={color} size={size}/>)
            , headerShown: false
          }}
        />
        <Tab.Screen name="Cadastrar" component={Cadastro}
          options={{
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account-details" color={color} size={size}/>)
            , headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    )
  }
}



const styles = StyleSheet.create({
  imageLogo: {
    width: 170,
    height: 170,
    marginTop: 80,
    alignSelf: 'center'
  },
  imageInicio: {
    width: 300,
    height: 300,
    marginTop: 150,
    alignSelf: 'center'
  },
  buttonLogIn: {
    backgroundColor: '#171D21',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  buttonCadastrar: {
    borderColor: '#445763',
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    margin: 9,
    marginLeft: 26,
    marginRight: 26,
  },
  textButtonInicio: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#252F36',
  },
  textLogin: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 25,
  },
  textInput: {
    backgroundColor: '#445763',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginLeft: 25,
    marginRight: 25,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#171D21',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginTop: 35,
    marginLeft: 25,
    marginRight: 25,
  },
  textButton:{
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: 'center',
  },
  textTitles: {
    marginLeft: 15,
    padding: 5,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 'bold',
  },


  
  containerApp: {
    flex: 1,
    backgroundColor: '#202020',
  },
  pesquisaBox: {
    flex: 1,
    margin: 8,
    backgroundColor: '#333333',
    padding: 18,
    borderRadius: 100,
    color: '#909090'
  },
  titleApp: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 60,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonApp: {
    padding: 9,
    backgroundColor: '#333333',
    borderRadius: 15,
    margin: 5,
  },
  textButtonApp: {
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: 'center',
  },
  backgroundInstruments:{
    backgroundColor: '#101010',
  },
  buttonInstruments: {
    padding: 9,
    margin: 7,
    borderBottomWidth: 3,
    borderColor: "#FFFFFF",
  },



  buttonMusics: {
    width: 180,
    height: 230,
    padding: 10,
  },
  buttonMusicsImage: {
    width: 165,
    height: 165,
    alignSelf: 'center',
    borderRadius: 20,
  },
  buttonArtistsImage: {
    width: 165,
    height: 165,
    alignSelf: 'center',
    borderRadius: 150,
  },
  buttonMusicsText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonBack: {
    marginTop: 50,
    marginLeft: 10,
    width: 20,
    height: 30,
  },
  barMusic: {
    height: 90,
    backgroundColor: '#101010',
  },
  textTitlesMusics: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 'bold',
  },
  textLetraMusica: {
    marginBottom: 10,
    marginLeft: 21,
    color: "#FFFFFF",
    fontSize: 14,
  },
  imageMusic: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    margin: 20,
    marginBottom: 5,
    borderRadius: 15,
  },
  textMusicInfo: {
    textAlign: 'center',
    color: "#808080",
    fontSize: 13,
  },

  imagePerfil: {
    alignSelf: 'center',
    width: 400,
    height: 400,
    margin: 20,
    marginBottom: 20,
  },
  textPerfil: {
    color: "#AAAAAA",
    margin: 15,
    fontSize: 16,
    textAlign: 'justify'
  },
  textPerfilBold: {
    color: "#FFFFFF",
    fontWeight: 'bold',
  }
})

export default App;

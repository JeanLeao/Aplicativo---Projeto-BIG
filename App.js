import React from 'react';
import { StyleSheet,  View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Logado from  './Logado';
import Fun from  './Fun';
const Pilha = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Pilha.Navigator initialRouteName="Home">
        <Pilha.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Pilha.Screen name="Logado" component={Logado} options={{headerShown: false}}/>
        <Pilha.Screen name="QR" component={Fun} options={{headerShown: false}}/>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}


export function Verification(){

    if (usuario == 'senac'){

      navigation.navigate('Logado', username)
      return;
    } 


  }


 function Home({ navigation }) {

  const [usuario, setUsername] = React.useState("Anonimo");
  const username={
  name: usuario
  }

  function Verification(){

    if (usuario == 'Senac'){

      navigation.navigate('Logado', username)
      return;
    } 


  }
  return (
    <View style={styles.global}>
      <View style={styles.top}>
        <Image style={styles.img} source={require('./src/big.png')}/>
      </View>

      <View style={styles.dados}>
        <View style = {styles.user}>
        <Text style = {styles.txtbtn} >Username: </Text>
            <TextInput style ={styles.btn} placeholder="Username" multiline={false} keyboardType="default" onChangeText={text => setUsername(text)}/>
        </View>
        <View style = {styles.user}>
            <Text style = {styles.txtbtn} >Password:  </Text>
            <TextInput style = {styles.btn} placeholder="Password" textContentType={'password'} multiline={false} secureTextEntry={true} />
        </View>
            </View>  
            <TouchableOpacity style ={styles.logar} onPress={() => Verification()}><Text>Login</Text></TouchableOpacity>

        <View style={styles.map}>
          <Text style={styles.txt}>Mapeamento de Setores da Loja</Text>

        </View>

        <View style={styles.footerbtn}>
        <TouchableOpacity style ={styles.sobre}><Text>Porque Cadastrar?</Text></TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txt:{
    fontSize: 15,
    textAlign: 'center'
  },
  global: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',

  },
    dados: { 
      flexDirection: 'column',
      marginTop: '47%',
      marginLeft: '5%'
    },
    user: {
      flexDirection: 'row',
      marginTop: 6,

    },
  top: { 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4169E1',
    position: 'absolute',
    top: 0,
    height: '20%',
    width: '100%',
  },
 txtbtn: {marginTop: 10},
  btn: {
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    padding: 10,
    width: '75%',
    marginTop: 0,
    height: 40,
    backgroundColor: '#EEEEEE',
},
logar: {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
  width: 70,
  height: 35,
  padding: 5,
  backgroundColor: '#87CEFA',
  marginTop: 15,
  marginLeft: '77%'
},

footerbtn:{
  position: 'absolute',
  bottom: 20,
  
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
  width: 120,
  height: 40,
  padding: 10,
  marginLeft: '30%',
  backgroundColor: '#87CEFA',
},

img: {
  position: 'absolute',
  top: 17,
  left: 30,
  width: 215,
  height: 125,


},

map: {
  marginTop: 40,
  alignItems: 'center',
  justifyContent: 'center'
}

});

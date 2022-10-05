import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image, Modal, Button, ScrollView, SafeAreaView } from "react-native"

import Scanner from './src/Scanner.js';

export default function Logado({route ,  navigation}) {

    const [modalVisible, setModalVisible] = React.useState(false);
  
    const [type, setType] = React.useState("");
    const [data, setData] = React.useState("");
    const [user, setUser] = React.useState("");

    const log={
      useri: user
    }


    const onCodeScanned = (type, data) => {
      setType(type);
      setData(data);
    
     if (data == '111'){
        setUser("Jean Leão");
        if (user == "Jean Leão"){
          setModalVisible(false);
          navigation.navigate('QR', log);
        }
      }else if (data == '222'){
        setUser("Amanda Santos");
       if (user == "Amanda Santos"){
        setModalVisible(false);
        navigation.navigate('QR', log);
      }
      }
       else if (data == '333'){
        setUser("Efraim Oliveira");
      if (user == "Efraim Oliveira"){
        setModalVisible(false);
        navigation.navigate('QR', log);
      }
      } else{
        alert(`Esse código não pertence a nenhum funcionário que esteja em recrutamento!`);
      }



    };

    return (
        <SafeAreaView  style={styles.geral}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Scanner onCodeScanned={onCodeScanned} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
        <StatusBar style="auto" />
            <View style={styles.head}>
            <Text style={styles.txt1}> Olá, {route.params.name}</Text>
            <Text style={styles.sublime}>O que procura fazer hoje?</Text>

            </View>

            <ScrollView horizontal={true} style={styles.componentes}>
                <TouchableOpacity style={styles.funcionario} onPress={() => setModalVisible(true)}><Image style={styles.fimg} source={require('./src/fimg.png')}/>

                    <Text>Avaliar</Text>
                    <Text>Funcionários</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.funcionario}><Image style={styles.fimg} source={require('./src/lupa.png')}/>

                    <Text>Buscar</Text>
                    <Text>Setores</Text></TouchableOpacity>
                   
                    <TouchableOpacity style={styles.funcionario}><Image style={styles.fimg} source={require('./src/reportar.png')}/>

                    <Text>Reportar</Text>
                    <Text>Falta de Produto</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.funcionario}><Image style={styles.fimg} source={require('./src/tec.png')}/>

                    <Text>Reportar</Text>
                    <Text>Problema em Setores</Text></TouchableOpacity>

                    

            </ScrollView  >
            
        </SafeAreaView >

    );}

    const styles = StyleSheet.create({
          modal: {
            flex: 1,
            alignItems: "center",
            borderRadius: 50,
            justifyContent: "space-around",
            backgroundColor: "#FFF",
          },
        geral:{
            flex: 1,
            backgroundColor: '#FFF'
        },
        head:{
            marginTop: 90,
            justifyContent: "flex-start",
            alignItems: "flex-start"
        },
        txt1:{
            fontSize: 25,
            

        },
        sublime:{
                marginLeft: 10,
                fontSize: 9
        },

        componentes: {
            marginTop: 40,
            flexDirection: "row",
            
        },
        funcionario:{
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 10,
            height: '30%',
            width: '20%',
            marginHorizontal: 15,
            backgroundColor: '#F5F5F5',
            borderRadius: 20,
            borderStyle: "dashed",

            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 2, width: 2 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 3, //IOS
            backgroundColor: '#fff',
            elevation: 16, // Android

        },

        fimg:{
            width: 60,
            height: 60,
            marginLeft: 15,
            marginBottom: 15,
            opacity: 0.8
        }
    });
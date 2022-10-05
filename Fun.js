import React from "react";
import { View, Text, TextInput,StyleSheet, Image,TouchableOpacity} from "react-native";


export default function Fun({route}) {
    return (
            <View style={styles.geral}>
                <View style={styles.header}>
                <Image style={styles.img} source={require('./src/fimg.png')}/>
                <Text   >Esse funcionario é:  </Text>
                <Text style={styles.h1}>{route.params.useri}</Text>
                
                <Text  style={styles.h2}>Oque deseja falar sobre esse funcionário?</Text>
                </View>


                <View style={styles.body}>
                    <Text style={styles.txt}>O que essa pessoa pode fazer para melhorar seu trabalho e suas relações na empresa?</Text>
                <TextInput style ={styles.btn} placeholder="Digite aqui" keyboardType="default"/>
                    <Text style={styles.txt}>Quais os problemas que vem tendo para uma suposta melhora?</Text>
                <TextInput style ={styles.btn} placeholder="Digite aqui" keyboardType="default"/>
                    <Text style={styles.txt}>Qual a nota você daria para este funcionario?</Text>
                <TextInput style ={styles.btn} placeholder="Digite aqui" keyboardType="number-pad"/>
                </View>

                <TouchableOpacity style={styles.av}><Text>Avaliar</Text></TouchableOpacity>
            </View>
    );
  }

  const styles = StyleSheet.create({
    geral:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    h1:{
        fontSize: 15,
        marginBottom: 20
    },
    h2:{
        fontSize: 12
    },
    header: {  
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    body: {
        flex: 2,
        marginTop: 30,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    img:{   
        marginTop: 20,
        height: 160,
        width: 160

    },
    txt:{
        margin: 20
    },
    btn:{
        borderRadius: 20,
        padding: 10,
        width: 300,
        marginTop: 0,
        height: 50,
        backgroundColor: '#EEEEEE',
    },
    av:{
        height: 30,
        width: 70,
        marginBottom: 50,
        marginLeft: 35
    }

});
  
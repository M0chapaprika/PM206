/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';

/*Zona2: Main - Hogar de los componentes*/
export default function App() {
  return (
    <View style={styles.container}>

      <Perfil nombre= "Rodriguez Ruiz Ian David" 
      carrera= "Ingenieria en Sistemas Computacionales" 
      materia= "Programacion Movil" 
      cuatrimestre= "9"/>

      <Text>----------------------------------------------------------------</Text>


      <Text>----------------------------------------------------------------</Text>
      
      <Perfil nombre= "Isaac menso" 
      carrera= "Negocios" 
      materia= "Abracitos" 
      cuatrimestre= "10-1"/>

    </View>
  );
}

/*Zona3: Estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


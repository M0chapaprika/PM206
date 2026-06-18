/* Zona 1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Perfil} from '../components/Perfil';

/* Zona 2: Main - Hogar de los componentes */
export default function TarjetasScreen() {
  return (
    <View style = {styles.container}>
        <Perfil 
        nombre = "Rodríguez Ruiz Ian David" 
        carrera = "Ingenieria en Sistemas Computacionales" 
        materia = "Programacion Móvil" 
        cuatrimestre = "9"
        estiloExterno = {styles.tarjetaRoja}
      />

      <Perfil 
        nombre = "Isaac Menso" 
        carrera = "Ingenieria en Sistemas Computacionales" 
        materia = "Abracitos" 
        cuatrimestre = "10-1"
        estiloExterno = {styles.tarjetaRoja}
      />
      <Perfil 
        nombre = "Ximenita Hermosa" 
        carrera = "Ingenieria en Sistemas Computacionales" 
        materia = "Programación Móvil" 
        cuatrimestre = "9"
        estiloExterno = {styles.tarjetaVerde}
      />

    </View>
  );
}

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  tarjetaRoja: {
    backgroundColor: '#FF6B6B',
  },
  tarjetaVerde: {
    backgroundColor: '#6BCB77'
  }
});
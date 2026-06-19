/* Zona 1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import NuevoPerfilForm from '../components/NuevoPerfilForm';

/* Zona 2: Main - Hogar de los componentes */
export default function ActivityIndicatorScreen() {
  return (
    <View style = {styles.container}>

      <NuevoPerfilForm/>
    
    </View>
  );
}

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
});
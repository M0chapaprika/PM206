import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

export default function EjActivityIndicator() {
  const [descargando, setDescargando] = useState(false);
  const [mensaje, setMensaje] = useState('Presiona para ver la galería de cargas');

  const iniciarDescarga = () => {
    setDescargando(true);
    setMensaje('Descargando y mostrando indicadores...');

    setTimeout(() => {
      setDescargando(false);
      setMensaje('¡Descarga completada!');
    }, 4000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{mensaje}</Text>

      {descargando && (
        <View style={styles.galeriaContainer}>
          
          <View style={styles.item}>
            <Text>Por defecto</Text>
            <ActivityIndicator /> 
          </View>

          <View style={styles.item}>
            <Text>Small y Rojo</Text>
            <ActivityIndicator size="small" color="#FF0000" />
          </View>

          <View style={styles.item}>
            <Text>Large y Azul</Text>
            <ActivityIndicator size="large" color="blue" />
          </View>

          <View style={styles.item}>
            <Text>Con estilo externo</Text>
            <ActivityIndicator 
              size="large" 
              color="#FFFFFF" 
              style={styles.indicadorConFondo} 
            />
          </View>

        </View>
      )}

      {!descargando && (
        <Button title="Descargar Archivo" onPress={iniciarDescarga} color="#8A2BE2" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  galeriaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  item: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '40%'
  },
  indicadorConFondo: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 50,
    marginTop: 5,
  }
});
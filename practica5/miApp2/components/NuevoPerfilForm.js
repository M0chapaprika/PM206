import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, ActivityIndicator, Platform } from 'react-native';

export default function NuevoPerfilForm() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const handleGuardar = () => {
    if (nombre.trim() === '' || carrera.trim() === '') {
      alert('Por favor, llena todos los campos.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert(`Perfil de ${nombre} guardado con éxito`); 
      
      setNombre('');
      setCarrera('');
    }, 3000);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.formContainer}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.titulo}>Agregar Perfil</Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="Nombre completo" 
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput 
          style={styles.input} 
          placeholder="Carrera" 
          value={carrera}
          onChangeText={setCarrera}
        />

        {isLoading ? (
          <ActivityIndicator size="small" color="#4D96FF" style={styles.loader} />
        ) : (
          <Button title="Guardar Perfil" onPress={handleGuardar} color="#4D96FF" />
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1, 
    backgroundColor: '#f9f9f9',
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', 
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50, 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  loader: {
    marginVertical: 10,
  }
});
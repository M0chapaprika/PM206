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
      alert(`¡Perfil de ${nombre} guardado con éxito!`);
      
      setNombre('');
      setCarrera('');
    }, 3000);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.formContainer}
    >
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    width: '90%', 
    alignSelf: 'center',
    marginTop: 20,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  loader: {
    marginVertical: 10,
  }
});
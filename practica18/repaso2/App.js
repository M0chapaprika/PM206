import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, ImageBackground, ActivityIndicator, SafeAreaView, StatusBar, Modal } from 'react-native';

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleAgregarLibro = () => {
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      setModalVisible(true);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero,
      };
      setLibros((prevLibros) => [...prevLibros, nuevoLibro]);
      setTitulo('');
      setAutor('');
      setGenero('');
      setIsLoading(false);
      setBottomSheetVisible(true);
    }, 4000);
  };

  const renderLibro = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.titulo}</Text>
      <Text style={styles.cardSubtitle}>Autor: {item.autor}</Text>
      <Text style={styles.cardSubtitle}>Género: {item.genero}</Text>
    </View>
  );

  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido</Text>
        <Text style={styles.splashSubText}>Catálogo de Libros</Text>
        <ActivityIndicator size="large" color="#ffffff" style={{marginTop: 20}} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop' }} 
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.headerTitle}>Catálogo de Libros</Text>

          <TextInput
            style={styles.input}
            placeholder="Título del libro"
            placeholderTextColor="#666"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={styles.input}
            placeholder="Autor"
            placeholderTextColor="#666"
            value={autor}
            onChangeText={setAutor}
          />
          <TextInput
            style={styles.input}
            placeholder="Género"
            placeholderTextColor="#666"
            value={genero}
            onChangeText={setGenero}
          />

          <Pressable 
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.8 }
            ]}
            onPress={handleAgregarLibro}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>Agregar Libro</Text>
          </Pressable>

          <Text style={styles.totalText}>Total de libros: {libros.length}</Text>

          {isLoading ? (
            <View style={styles.loadingContainer}>
               <ActivityIndicator size="large" color="#ffffff" />
               <Text style={styles.loadingText}>Guardando...</Text>
            </View>
          ) : (
            <FlatList
              data={libros}
              keyExtractor={(item) => item.id}
              renderItem={renderLibro}
              contentContainerStyle={styles.listContainer}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </ImageBackground>

      <Modal 
        animationType="fade" 
        transparent={true} 
        visible={modalVisible}
      >
        <View style={styles.modalFondo}>
          <View style={styles.modalCuerpo}>
            <Text style={styles.textoModal}>Todos los campos son obligatorios.</Text>
            <Pressable style={styles.botonModal} onPress={() => setModalVisible(false)}>
              <Text style={styles.textoBotonModal}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal 
        animationType="slide" 
        transparent={true} 
        visible={bottomSheetVisible}
      >
        <View style={styles.fondoBottomSheet}>
          <View style={styles.bottomSheet}>
            <Text style={styles.textoModal}>Libro guardado correctamente.</Text>
            <Pressable style={styles.botonModal} onPress={() => setBottomSheetVisible(false)}>
              <Text style={styles.textoBotonModal}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#1E3A8A', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  splashSubText: {
    fontSize: 18,
    color: '#d1d5db',
    marginTop: 10,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  modalFondo: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "rgba(0,0,0,0.6)", 
  }, 
  modalCuerpo: {
    backgroundColor: "#ffffff", 
    padding: 25, 
    borderRadius: 15, 
    alignItems: "center", 
    width: '80%',
  }, 
  fondoBottomSheet: {
    flex: 1, 
    justifyContent: "flex-end", 
    backgroundColor: "rgba(0,0,0,0.6)", 
  }, 
  bottomSheet: {
    backgroundColor: "#ffffff", 
    padding: 30, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    alignItems: "center", 
  }, 
  textoModal: {
    fontSize: 18, 
    marginBottom: 20, 
    textAlign: 'center',
    fontWeight: '500',
  }, 
  botonModal: {
    backgroundColor: "#1d4ed8", 
    paddingHorizontal: 30, 
    paddingVertical: 12, 
    borderRadius: 8, 
    width: '100%',
    alignItems: 'center',
  }, 
  textoBotonModal: {
    color: "#ffffff", 
    fontWeight: "bold", 
    fontSize: 16,
  }
});
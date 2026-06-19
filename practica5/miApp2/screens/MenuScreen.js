/* Zona 1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';
import EjActivityIndicator from './EjActivityScreen';
import EjemploKeyboard from './EjKeyboardScreen';


/* Zona 2: Main - Hogar de los componentes */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas': 
            return <TarjetasScreen/>
        case 'safearea':
            return <SafeAreaScreen/>
        case 'pressable':
            return <PressableScreen/>
        case 'textinput':
            return <TextInputScreen/>
        case 'flatlist':
            return <FlatListScreen/>
        case 'imagebackground':
            return <ImageBackgroundScreen/>
        case 'activityindicator':
            return <ActivityIndicatorScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'ejactivityindicator':
            return <EjActivityIndicator/>
        case 'ejkeyboard':
            return <EjemploKeyboard/>
        case 'menu':
            default:
            return (
            <View style = {styles.container}>
            
                <Text> Menu de Practicas </Text>

                <Button onPress={() => setScreen('tarjetas')} title='Tarjetas'/>

                <Button onPress={() => setScreen('safearea')} title='SafeAreaView'/>
                
                <Button onPress={() => setScreen('pressable')} title='Pressable'/>

                <Button onPress={() => setScreen('textinput')} title='TextInput'/>

                <Button onPress={() => setScreen('flatlist')} title='FlatList'/>
                
                <Button onPress={() => setScreen('imagebackground')} title='ImageBackground'/>

                <Button onPress={() => setScreen('activityindicator')} title='ActivityIndicator'/>

                <Button onPress={() => setScreen('modal')} title='Modal'/>

                <Button onPress={() => setScreen('ejactivityindicator')} title='Ej Activity Indicator'/>

                <Button onPress={() => setScreen('ejkeyboard')} title='Ej Keyboard Avoiding View'/>

                <StatusBar style="auto" />

            </View>
        );
    }

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
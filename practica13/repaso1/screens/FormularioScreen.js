import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Platform, Alert, Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, View, TextInput, Text, Switch, Button, StyleSheet, } from "react-native";

export default function FormularioScreen() {
    const [estudianteNombre, setEstudianteNombre] = useState("");
    const [programaAcademico, setProgramaAcademico] = useState("");
    const [nivelCursado, setNivelCursado] = useState("");

    const [asisteConferencia, setAsisteConferencia] = useState(false);
    const [requiereCertificado, setRequiereCertificado] = useState(false);
    const [participaTorneo, setParticipaTorneo] = useState(false);

    const mostrarNotificacion = (cabecera, cuerpo) => {
        if(Platform.OS === "web") {
            alert(`${cabecera}: ${cuerpo}`);
            return;
        }
        Alert.alert(cabecera, cuerpo);
    };

    const procesarFormulario = () => {
        if(Platform.OS !== "web") Keyboard.dismiss();
        
        if(!estudianteNombre || !programaAcademico || !nivelCursado) {
            mostrarNotificacion("Faltan datos", "Completa todos los campos >:(");
            return;
        }

        const valorNivel = parseInt(nivelCursado, 10);

        if(Number.isInteger(valorNivel) && (valorNivel >= 1 && valorNivel <= 10)) {
            mostrarNotificacion(
                "Inscripcion exitosa", 
                `
Datos guardados

Alumno: ${estudianteNombre}
Programa: ${programaAcademico}
Semestre: ${valorNivel}

Taller: ${asisteConferencia ? "Si" : "No"}
Certificado: ${requiereCertificado ? "Si" : "No"}
Deportes: ${participaTorneo ? "Si" : "No"}
                `
            );
        } else {
            mostrarNotificacion("Dato invalido", "Ingresa un semestre valido");
        }
    };

    return (
        <KeyboardAvoidingView 
            style={estilos.mainWrapper} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <StatusBar style="auto"/>

            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <View style={[estilos.headerBox, estilos.bottomMargin]}>
                            <Text style={[estilos.baseText, estilos.mainHeading]}>Inscripcion Estudiantil</Text>
                        </View>

                        <TextInput 
                            style={[estilos.textField, estilos.baseText]} 
                            placeholder="Nombre del alumno" 
                            value={estudianteNombre} 
                            onChangeText={setEstudianteNombre} 
                            maxLength={255}
                        />

                        <TextInput 
                            style={[estilos.textField, estilos.baseText]} 
                            placeholder="Programa educativo" 
                            value={programaAcademico} 
                            onChangeText={setProgramaAcademico} 
                            maxLength={100}
                        />

                        <TextInput 
                            style={[estilos.textField, estilos.baseText]} 
                            placeholder="Semestre actual" 
                            value={nivelCursado} 
                            onChangeText={setNivelCursado} 
                            keyboardType="number-pad" 
                            maxLength={2}
                        />

                        <Text style={[estilos.baseText, estilos.subHeading, estilos.bottomMargin]}>Preferencias</Text>

                        <View style={estilos.rowLayout}>
                            <Text style={estilos.baseText}>¿Tomara el taller?</Text>
                            <Switch 
                                value={asisteConferencia} 
                                onValueChange={setAsisteConferencia} 
                                trackColor={{false: "#d3d3d3", true: "lightblue"}} 
                                thumbColor="#fff"
                            />
                        </View>

                        <View style={estilos.rowLayout}>
                            <Text style={estilos.baseText}>¿Solicita certificado?</Text>
                            <Switch 
                                value={requiereCertificado} 
                                onValueChange={setRequiereCertificado} 
                                trackColor={{false: "#d3d3d3", true: "lightblue"}} 
                                thumbColor="#fff"
                            />
                        </View>

                        <View style={[estilos.rowLayout, estilos.bottomMargin]}>
                            <Text style={estilos.baseText}>¿Se une a los torneos?</Text>
                            <Switch 
                                value={participaTorneo} 
                                onValueChange={setParticipaTorneo} 
                                trackColor={{false: "#d3d3d3", true: "lightblue"}} 
                                thumbColor="#fff"
                            />
                        </View>

                        <Button 
                            title="Confirmar inscripcion" 
                            onPress={procesarFormulario}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const estilos = StyleSheet.create({
    mainWrapper: { 
        flex: 1, 
        paddingTop: 60, 
        paddingBottom: 60, 
        paddingLeft: 20, 
        paddingRight: 20, 
        backgroundColor: "#fff", 
    }, 
    rowLayout: { 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
    }, 
    textField: { 
        borderWidth: 1.5, 
        borderColor: "#d3d3d3", 
        padding: 15, 
        borderRadius: 15, 
        marginBottom: 15, 
        backgroundColor: "#fff", 
    }, 
    headerBox: { 
        alignItems: "center", 
    }, 
    mainHeading: { 
        fontSize: 20, 
        fontWeight: "bold", 
    }, 
    subHeading: { 
        fontSize: 16, 
        fontWeight: "bold", 
        marginTop: 30, 
    }, 
    baseText: { 
        fontSize: 14, 
        fontFamily: "Arial", 
    }, 
    bottomMargin: { 
        marginBottom: 30, 
    }, 
});
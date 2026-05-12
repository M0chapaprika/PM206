from flask import Flask, render_template

app = Flask(__name__)

niveles_db = {
    'reglas': {
        'titulo': 'La Cámara de las Reglas',
        'lore': 'Has entrado a un salón iluminado por antorchas digitales. Una voz resuena: "Para convivir en este gremio, debes conocer la ley".',
        'contenido': [
            '1. Asistencia del 80% obligatoria para derecho a evaluación.',
            '2. Prohibido consumir pociones (alimentos/bebidas) en el laboratorio.',
            '3. Respeto absoluto a los miembros del party.'
        ],
        'q1': {'pregunta': '¿Cuál es el porcentaje mínimo de asistencia?', 'opciones': ['50%', '80%', '100%'], 'respuesta': '80%'},
        'q2': {'pregunta': '¿Qué está prohibido en el laboratorio?', 'opciones': ['Programar', 'Respirar', 'Consumir alimentos'], 'respuesta': 'Consumir alimentos'},
        'siguiente_url': '/nivel/notas',
        'nombre_siguiente': 'Avanzar al Oráculo de las Notas'
    },
    'notas': {
        'titulo': 'El Oráculo de las Notas',
        'lore': 'Frente a ti flota una esfera de cristal mostrando números brillantes. "Conoce cómo serás juzgado en esta cruzada".',
        'contenido': [
            '• Primer Parcial: 30% (Misiones básicas).',
            '• Segundo Parcial: 30% (Dungeons intermedios).',
            '• Proyecto Final: 40% (Batalla contra el Jefe Final - Tu App Móvil).'
        ],
        'q1': {'pregunta': '¿Cuánto vale el Proyecto Final?', 'opciones': ['30%', '40%', '50%'], 'respuesta': '40%'},
        'q2': {'pregunta': '¿Cuántos parciales regulares hay?', 'opciones': ['Uno', 'Dos', 'Tres'], 'respuesta': 'Dos'},
        'siguiente_url': '/nivel/skills',
        'nombre_siguiente': 'Avanzar a los Skills'
    },
    'skills': {
        'titulo': 'Skills a Desbloquear',
        'lore': 'Un árbol de habilidades antiguo se despliega ante tus ojos.',
        'contenido': [
            '• Objetivo General: Desarrollar aplicaciones móviles multiplataforma.',
            '• Objetivos Particulares: Dominar el lenguaje nativo.',
            '• Objetivos Particulares: Consumir APIs REST.',
            '• Objetivos Particulares: Diseñar interfaces de usuario (UI/UX) intuitivas.'
        ],
        'q1': {'pregunta': '¿Cuál es el porcentaje mínimo de asistencia?', 'opciones': ['50%', '80%', '100%'], 'respuesta': '80%'},
        'q2': {'pregunta': '¿Qué tipo de APIs aprenderás a consumir?', 'opciones': ['APIs REST', 'APIs de cocina', 'Ninguna'], 'respuesta': 'APIs REST'},
        'siguiente_url': '/nivel/tiempo',
        'nombre_siguiente': 'Avanzar a la Línea del Tiempo'
    },
    'tiempo': {
        'titulo': 'La Línea del Tiempo',
        'lore': 'Un reloj de arena gigante flota en el centro de la sala. Las arenas muestran los eventos futuros.',
        'contenido': [
            '• Semana 4: Entrega del GDD (Game Design Document).',
            '• Semana 8: Primer prototipo funcional.',
            '• Semana 14: Defensa del Proyecto Final.'
        ],
        'q1': {'pregunta': '¿Qué se entrega en la Semana 8?', 'opciones': ['El GDD', 'Prototipo funcional', 'Proyecto Final'], 'respuesta': 'Prototipo funcional'},
        'q2': {'pregunta': '¿En qué semana es la defensa del proyecto final?', 'opciones': ['Semana 4', 'Semana 10', 'Semana 14'], 'respuesta': 'Semana 14'},
        'siguiente_url': '/',
        'nombre_siguiente': '¡Has sobrevivido! Regresar al inicio'
    }
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/nivel/<nombre_nivel>')
def nivel(nombre_nivel):
    if nombre_nivel in niveles_db:
        datos = niveles_db[nombre_nivel]
        return render_template('nivel.html', nivel=datos, id_nivel=nombre_nivel)
    return "Nivel no encontrado", 404

if __name__ == '__main__':
    app.run(debug=True)
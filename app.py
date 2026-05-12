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
            '• 1P y 2P: Conocimiento 40%, Desempeño 20%, Producto 30%, Proyecto Integrador 10%.',
            '• 3P: Conocimiento 10%, Desempeño 10%, Producto 30%, Proyecto Integrador 50%.'
        ],
        'q1': {'pregunta': '¿Cuánto vale el Proyecto Integrador en el 3er Parcial (3P)?', 'opciones': ['10%', '30%', '50%'], 'respuesta': '50%'},
        'q2': {'pregunta': '¿Cuánto vale la Evidencia de Conocimiento en el 1er Parcial (1P)?', 'opciones': ['10%', '20%', '40%'], 'respuesta': '40%'},
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
        'q1': {'pregunta': '¿Cuál es el objetivo general?', 'opciones': ['Hacer bases de datos', 'Desarrollar apps móviles', 'Reparar hardware'], 'respuesta': 'Desarrollar apps móviles'},
        'q2': {'pregunta': '¿Qué tipo de APIs aprenderás a consumir?', 'opciones': ['APIs REST', 'APIs de cocina', 'Ninguna'], 'respuesta': 'APIs REST'},
        'siguiente_url': '/nivel/tiempo',
        'nombre_siguiente': 'Avanzar a la Línea del Tiempo'
    },
    'tiempo': {
        'titulo': 'La Línea del Tiempo',
        'lore': 'Un reloj de arena gigante flota en el centro de la sala. Las arenas muestran los eventos futuros.',
        'contenido': [
            '• 1er Parcial: 02-06-26',
            '• 2do Parcial: 07-07-26',
            '• 3er Parcial: 11-08-26',
            '• Final: 17-08-26'
        ],
        'q1': {'pregunta': '¿Cuál es la fecha del 1er Parcial?', 'opciones': ['02-06-26', '07-07-26', '11-08-26'], 'respuesta': '02-06-26'},
        'q2': {'pregunta': '¿Cuál es la fecha de evaluación Final?', 'opciones': ['11-08-26', '17-08-26', '02-06-26'], 'respuesta': '17-08-26'},
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
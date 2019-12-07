/*
Archivo: datos_preguntas.js
Configuración de las preguntas del juego.
*/

let preguntas = [
  {
   texto_pregunta:'¿Qué indica la siguiente señal?',
    opciones:[
      'No girar en U.',
      'Prohibido girar a la izquierda.',
      'Giro a la izquierda'
    ],
    imagen_src:'img/preguntas/img_preg_01.png',
    respuesta_correcta: 'Prohibido girar a la izquierda.'
  },
  {
   texto_pregunta:'Entre los efectos que produce el alcohol en el conductor se encuentra la:',
    opciones:[
      'Incorrecta apreciación de distancias y velocidades.',
      'Ampliación del campo visual.',
      'Disminución de la distancia de frenado.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'Incorrecta apreciación de distancias y velocidades.'
  },
  {
   texto_pregunta:'¿Qué señal indica giro obligatorio izquierda?',
    opciones:[
      'Opción A',
      'Opción B',
      'Opción C'
    ],
    imagen_src:'img/preguntas/img_preg_03.png',
    respuesta_correcta: 'Opción C'
  },
  {
   texto_pregunta:'Marcá dónde está permitido estacionar?',
    opciones:[
      'Opción A',
      'Opción B',
      'Opción C'
    ],
    imagen_src:'img/preguntas/img_preg_04.png',
    respuesta_correcta: 'Opción B'
  },
  {
   texto_pregunta:'¿Según que señal de tránsito existe siempre la obligación de parar?',
    opciones:[
      'Señal 124',
      'Señal 301',
      'Señal 302'
    ],
    imagen_src:'img/preguntas/img_preg_05.png',
    respuesta_correcta: 'Señal 302'
  },
  {
   texto_pregunta:'¿Qué indica la siguiente señal?',
    opciones:[
      'Puesto de control.',
      'Contramano.',
      'No avanzar.'
    ],
    imagen_src:'img/preguntas/img_preg_06.png',
    respuesta_correcta: 'Puesto de control.'
  },
  {
   texto_pregunta:'¿Qué indica la siguiente señal?',
    opciones:[
      'Límite de velocidad mínima.',
      'Velocidad controlada por radar.',
      'Límite máximo de velocidad.'
    ],
    imagen_src:'img/preguntas/img_preg_07.png',
    respuesta_correcta: 'Límite máximo de velocidad.'
  },
  {
   texto_pregunta:'Si encuentra este semáforo en una intersección, podrá pasar:',
    opciones:[
      'Cualquiera sea la dirección que vaya a tomar.',
      'Sólo si sigue de frente.',
      'Sólo si va a seguir la dirección que marca la flecha.'
    ],
    imagen_src:'img/preguntas/img_preg_08.png',
    respuesta_correcta: 'Sólo si va a seguir la dirección que marca la flecha.'
  },
  {
   texto_pregunta:'¿Qué indica la siguiente señal?',
    opciones:[
      'Prioridad Ciclomotores.',
      'Prohibición de Circular (motos).',
      'Prohibición Tracción a Sangre.'
    ],
    imagen_src:'img/preguntas/img_preg_09.png',
    respuesta_correcta: 'Prohibición de Circular (motos).'
  },
  {
   texto_pregunta:'¿Cuál es la forma correcta de adelantarse a otro vehículo? ',
    opciones:[
      'Por la derecha.',
      'Por la banquina.',
      'Por la izquierda, haciendo las señales respectivas.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'Por la izquierda, haciendo las señales respectivas.'
  },
  {
   texto_pregunta:'¿Quién es el responsable civil por un accidente de tránsito producido por un menor de edad poseedor de una licencia de conductor?',
    opciones:[
      'El que lo acompaña.',
      'El que firmó la autorización para obtener la licencia.',
      'El que le autorizó el uso del vehículo.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'El que firmó la autorización para obtener la licencia.'
  },
  {
   texto_pregunta:'El que conduce un vehículo ¿qué documentación personal debe llevar consigo?',
    opciones:[
      'La licencia de conductor es suficiente.',
      'La licencia de conductor y su documento de identidad.',
      'La licencia de conductor, su documento de identidad y la cédula verde.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'La licencia de conductor y su documento de identidad.'
  },
  {
   texto_pregunta:'¿Está permitido estacionar moto vehículos sobre la vereda?',
    opciones:[
      'Sólo si la vereda es ancha.',
      'Únicamente en días feriados.',
      'No, no está permitido.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'No, no está permitido.'
  },
  {
   texto_pregunta:'¿Qué tipo de casco deben utilizar obligatoriamente todas las personas que circulan en motocicletas o vehículos similares?',
    opciones:[
      'Opción A',
      'Opción B',
      'Opción C'
    ],
    imagen_src:'img/preguntas/img_preg_14.png',
    respuesta_correcta: 'Opción C'
  },
  {
   texto_pregunta:'¿Qué debe hacer si observa que un vehículo está a punto de alcanzarlo y pasarlo?',
    opciones:[
      'Ceñirse bien a la derecha, y si es necesario, bajar la velocidad.',
      'Aumentar la velocidad.',
      'Es indiferente la velocidad de su vehículo.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'Ceñirse bien a la derecha, y si es necesario, bajar la velocidad.'
  },
  {
   texto_pregunta:'Si el conductor de un vehículo circula con las balizas encendidas, toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo. ¿Qué están indicando?',
    opciones:[
      'Que el vehículo tiene un desperfecto.',
      'Que transportan a una persona grave a un hospital.',
      'Al exceso de velocidad y a la violación de luz roja.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'Que transportan a una persona grave a un hospital.'
  },
  {
   texto_pregunta:'¿Cuál es el nivel máximo de alcoholemia admitido para conducir un automóvil particular?',
    opciones:[
      '0,8 gr. por litro de sangre.',
      '0,5 gr. por litro de sangre.',
      '1,5 gr. por litro de sangre.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: '0,5 gr. por litro de sangre.'
  },
  {
   texto_pregunta:'Ud. está llegando a un cruce de calles sin semáforos ni policía, una persona está cruzando por la senda peatonal, Ud. debe:',
    opciones:[
      'Disminuir la marcha y tener cuidado.',
      'Parar y cederle el paso al peatón.',
      'Seguir y atravesar el cruce, porque tiene prioridad.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'Parar y cederle el paso al peatón.'
  },
  {
   texto_pregunta:'¿Qué deben hacer los conductores para facilitar el paso a un coche de bomberos en servicio de emergencia?',
    opciones:[
      'Aumentar la velocidad para no ser un obstáculo.',
      'Avisar a otros conductores usando repetidamente la bocina.',
      'Apartarse normalmente a la derecha y, si es necesario, detenerse.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'Apartarse normalmente a la derecha y, si es necesario, detenerse.'
  },
  {
   texto_pregunta:'¿Cuál es la velocidad máxima permitida en autopistas, en el ámbito de la Ciudad Autónoma de Buenos Aires?',
    opciones:[
      '70 km/h.',
      '100 km/h.',
      '120 km/h.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: '100 km/h.'
  },
  {
   texto_pregunta:'¿Según se muestra en la fotografía, donde se debe parar?',
    opciones:[
      'El lugar de detención no tiene importancia. Pero hay que parar antes de entrar al cruce.',
      'Antes de la columna en la cual se encuentra la señal de tránsito.',
      'Antes y cerca de la línea de detención.'
    ],
    imagen_src:'img/preguntas/img_preg_21.png',
    respuesta_correcta: 'Antes y cerca de la línea de detención.'
  }
  ,
  {
   texto_pregunta:'¿Cómo se conducirá al acercarse a un cruce donde hay un semáforo donde titila el amarillo?',
    opciones:[
      'Acelere la velocidad antes que cambie la luz a roja en el semáforo.',
      'Reducir la velocidad y dar prioridad de paso al vehículo que viene sólo por la izquierda.',
      'Reducir la velocidad e incluso parar si es necesario - según el tráfico a su alrededor.'
    ],
    imagen_src:'img/preguntas/img_preg_22.png',
    respuesta_correcta: 'Reducir la velocidad e incluso parar si es necesario - según el tráfico a su alrededor.'
  }
  ,
  {
   texto_pregunta:'¿Qué vehículo está girando correctamente en la rotonda?',
    opciones:[
      'El rojo.',
      'El celeste.',
      'El Amarillo.'
    ],
    imagen_src:'img/preguntas/img_preg_23.png',
    respuesta_correcta: 'El celeste.'
  }
  ,
  {
   texto_pregunta:'Como norma de carácter general, ¿quién tiene prioridad de paso en una encrucijada o bocacalle?',
    opciones:[
      'Los vehículos que viene por el lado izquierdo.',
      'El vehículo que va a girar.',
      'El vehículo que se presenta por el lado derecho.'
    ],
    imagen_src:'img/preguntas/img_preg_24.png',
    respuesta_correcta: 'El vehículo que se presenta por el lado derecho.'
  }

];


module.exports = {
  preguntas
}


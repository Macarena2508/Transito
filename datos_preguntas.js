/*
Archivo: datos_preguntas.js
Configuración de las preguntas del juego.
*/

let preguntas = [
  {
   texto_pregunta:'Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., ¿cuál es el rango etario con mayor número de víctimas lesionadas y fatales en siniestros viales?',
    opciones:[
      'Niños menores de 15 años',
      'Jóvenes y adultos de 15 a 34 años',
      'Adultos mayores de 35 años'
    ],
    imagen_src:'img/preguntas/word-image.jpeg',
    respuesta_correcta: 'Jóvenes y adultos de 15 a 34 años'
  },
  {
   texto_pregunta:'Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., la tasa más alta de víctimas fatales como consecuencia de incidentes de tránsito (luego de los peatones) son los usuarios de',
   opciones: [
      'Opción A',
      'Opcion B',
      'Opcion C'
    ],
    imagen_src:'img/preguntas/pregunta2.png',
    respuesta_correcta: 'Opcion B'
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
   texto_pregunta:'A fin de aumentar la propia seguridad y la de los demás, ¿a qué se debería poner atención durante la circulación?',
    opciones:[
      'Al estado del pavimento y al clima, en especial',
      'A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor',
      'Ninguna de las anteriores'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor'
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
   texto_pregunta:'¿A qué se denomina incidente de tránsito o incidente vial?',
    opciones:[
      'Hecho que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública',
      'Hecho impredecible e inevitable en ocasión de circulación en la vía pública',
      'Hecho, evitable o no, que involucra daños a terceros.'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'Hecho que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública'
  },
  {
   texto_pregunta:'Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad',
    opciones:[
      'Opción A',
      'Opción B',
      'Opción A y B'
    ],
    imagen_src:'img/preguntas/AyB.png',
    respuesta_correcta: 'Opción B.'
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
   texto_pregunta:'¿Cuál de las siguientes opciones representa a los usuarios de la vía, ordenados de más a menos vulnerable?',
    opciones:[
      'Camión – Colectivo – Moto – Ciclista – Peatón – Taxi/Automóvil',
      'Peatón – Ciclista – Moto – Colectivo – Taxi/Automóvil – Camión',
      'Peatón – Ciclista – Colectivo – Moto – Taxi/Automóvil – Camión'
    ],
    imagen_src:'img/preguntas/img_generica.png',
    respuesta_correcta: 'Peatón – Ciclista – Moto – Colectivo – Taxi/Automóvil – Camión'
  },
  {
   texto_pregunta:'¿A qué medio de transporte corresponden todos los siguientes beneficios: ecológico, saludable, económico y rápido?',
    opciones:[
      'Opción A',
      'Opción B',
      'Opción C'
    ],
    imagen_src:'img/preguntas/ABC.png',
    respuesta_correcta: 'Opción A'
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
   texto_pregunta:'¿Es aconsejable circular en bicicleta de esta manera?',
    opciones:[
      'Sí, porque está conduciendo correctamente',
      'No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor',
      'Sí, ya que tiene las medidas de seguridad necesarias y el uso de los auriculares permite mejorar la calidad del viaje'
    ],
    imagen_src:'img/preguntas/hombreenbici.jpeg',
    respuesta_correcta: 'No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor'
  },
  {
   texto_pregunta:'¿Se puede circular en bicicleta por esta vía?',
    opciones:[
      'Sí, siempre que se mantenga en el carril derecho.',
      'No, está prohibido',
      'Sí, mientras se respete la velocidad mínima de la arteria'
    ],
    imagen_src:'img/preguntas/autopista.jpeg',
    respuesta_correcta: 'No, está prohibido'
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
   texto_pregunta:'¿Está permitido estacionar una bicicleta en este lugar?',
    opciones:[
      'No, los estacionamientos son exclusivos para usuarios de autos y motos',
      'Sólo en algunos estacionamientos está permitido',
      'Sí, los estacionamientos están obligados a destinar un espacio para bicicletas'
    ],
    imagen_src:'img/preguntas/estacionamiento.jpeg',
    respuesta_correcta: 'Sí, los estacionamientos están obligados a destinar un espacio para bicicletas'
  },
  {
   texto_pregunta:'Si usted pretende cruzar esta intersección, ¿hacia qué lado debe mirar?',
    opciones:[
      'Hacia la derecha',
      'Hacia la izquierda',
      'Hacia ambos lados'
    ],
    imagen_src:'img/preguntas/sendapeatonal.jpeg',
    respuesta_correcta: 'Hacia ambos lados'
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
   texto_pregunta:'¿Qué vehículos pueden circular por el carril señalizado en la imagen?',
    opciones:[
      'Todos los transportes de pasajeros',
      'los colectivos entre las 07 h y las 21 h.',
      'Colectivos autorizados y vehículos destinados al servicio de emergencia en cumplimiento de sus funciones'
    ],
    imagen_src:'img/preguntas/colectivo.jpeg',
    respuesta_correcta: 'Colectivos autorizados y vehículos destinados al servicio de emergencia en cumplimiento de sus funciones'
  }
  ,
  {
   texto_pregunta:'¿Qué indica la señal horizontal que se encuentra demarcada sobre la calzada?',
    opciones:[
      'Carril exclusivo de colectivo de pasajeros',
      'Cruce exclusivo de vehículos de emergencia',
      'Ceda el paso'
    ],
    imagen_src:'img/preguntas/carril.jpeg',
    respuesta_correcta: 'Carril exclusivo de colectivo de pasajeros'
  }

];


module.exports = {
  preguntas
}


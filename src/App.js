// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { Factory, Wheat, Calendar, Landmark, ShieldAlert, X, ScrollText, BookOpen, Search, ChevronLeft, ChevronRight, RefreshCw, Flag, Users, Youtube, Clapperboard, ExternalLink } from 'lucide-react';

const edgeTop = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='15' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L100,0 L100,5 L95,12 L85,4 L75,15 L65,5 L55,10 L45,2 L30,12 L20,5 L12,15 L5,4 L0,10 Z' fill='%231a110a'/%3E%3C/svg%3E";
const edgeBottom = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='15' preserveAspectRatio='none'%3E%3Cpath d='M0,15 L100,15 L100,10 L95,3 L85,11 L75,0 L65,10 L55,5 L45,13 L30,3 L20,10 L12,0 L5,11 L0,5 Z' fill='%231a110a'/%3E%3C/svg%3E";

const timelineItems = [
  // --- ÉPOCA: ORDEN CONSERVADOR ---
  {
    id: 'vid-1', itemType: 'video', model: 'MAE', embedId: "RX9yBpJp9dw", url: "https://www.youtube.com/watch?v=RX9yBpJp9dw",
    title: "1880 - 1916: El Orden Conservador", period: "1880-1916", summary: "Análisis de la consolidación del Estado Nacional, el auge del Modelo Agroexportador (MAE) y el dominio político de la oligarquía a través del fraude electoral."
  },
  {
    id: 'roca-1', itemType: 'president', name: 'Julio Argentino Roca', period: '1880 - 1886', model: 'MAE', type: 'Constitucional', party: 'Partido Autonomista Nacional (PAN)', votePercentage: 'Fraude', voteCount: 'Colegio Electoral', image: 'https://i.ibb.co/99K5kWN5/julio-roca.jpg',
    events: [
      'Consolidación definitiva del Estado Nacional Argentino e institucionalización del país.',
      'Federalización de la Ciudad de Buenos Aires (1880), terminando con las guerras civiles.',
      'Impulso económico masivo tras la Campaña del Desierto, sumando millones de hectáreas productivas.',
      'Sanción de la histórica Ley 1420 de Educación Común, Laica, Gratuita y Obligatoria (1884).',
      'Creación del Registro Civil y sanción de la Ley de Matrimonio Civil, limitando el poder de la Iglesia.',
      'Auge del modelo agroexportador e inicio de la gran ola inmigratoria europea.'
    ]
  },
  {
    id: 'juarez-celman', itemType: 'president', name: 'Miguel Juárez Celman', period: '1886 - 1890', model: 'MAE', type: 'Constitucional', party: 'PAN', votePercentage: 'Fraude', voteCount: 'Colegio Electoral', image: 'https://i.ibb.co/vxQBNYNX/Miguel-ngel-Juarez-Celman-presidente-argentino-color.png',
    events: [
      'Instauración de un régimen político altamente personalista y concentrado conocido como "El Unicato".',
      'Fuerte expansión del crédito y especulación financiera indiscriminada con emisión monetaria descontrolada.',
      'Privatización masiva de obras públicas estatales, destacándose la venta de los ferrocarriles.',
      'Estallido de la profunda y devastadora Crisis Económica de 1890.',
      'Levantamiento armado opositor en la Revolución del Parque (julio 1890).',
      'Renuncia a la presidencia en agosto de 1890 tras perder el apoyo político de Roca.'
    ]
  },
  {
    id: 'pellegrini', itemType: 'president', name: 'Carlos Pellegrini', period: '1890 - 1892', model: 'MAE', type: 'Sucesión Presidencial', party: 'PAN', votePercentage: 'Sucesión', voteCount: '-', image: 'https://i.ibb.co/qFp2QC49/carlos-pellegrini.jpg',
    events: [
      'Asume como vicepresidente tras la renuncia de Juárez Celman (apodado "El Piloto de Tormentas").',
      'Fundación del Banco de la Nación Argentina (1891) para sanear las finanzas públicas.',
      'Creación de la Caja de Conversión para regular la emisión monetaria.',
      'Logra evitar el default de la deuda externa y estabiliza la grave crisis económica heredada.',
      'Implementa medidas proteccionistas para impulsar incipientes industrias locales.'
    ]
  },
  {
    id: 'l-saenz-pena', itemType: 'president', name: 'Luis Sáenz Peña', period: '1892 - 1895', model: 'MAE', type: 'Constitucional', party: 'PAN', votePercentage: 'Fraude', voteCount: 'Colegio Electoral', image: 'https://i.ibb.co/cKp3d1Zq/Luis-Saenz-Pena.jpg',
    events: [
      'Presidencia marcada por una inestabilidad política crónica y falta de apoyo legislativo.',
      'Enfrenta las violentas Revoluciones Radicales armadas en varias provincias durante 1893.',
      'Constantes cambios de gabinete frente a la presión combinada de Roca y Pellegrini.',
      'Renuncia en enero de 1895 ante la imposibilidad material y política de gobernar.'
    ]
  },
  {
    id: 'uriburu-1', itemType: 'president', name: 'José Evaristo Uriburu', period: '1895 - 1898', model: 'MAE', type: 'Sucesión Presidencial', party: 'PAN', votePercentage: 'Sucesión', voteCount: '-', image: 'https://i.ibb.co/gZNpQzGz/uriburu.avif',
    events: [
      'Asume como vicepresidente tras la renuncia de Luis Sáenz Peña.',
      'Adquisición de moderno armamento y flota naval debido a la peligrosa carrera armamentista con Chile.',
      'Superación de los graves conflictos limítrofes con Chile en la Puna de Atacama mediante arbitraje.',
      'Realización del Segundo Censo Nacional de Población (1895) mostrando un fuerte crecimiento demográfico.'
    ]
  },
  {
    id: 'roca-2', itemType: 'president', name: 'Julio Argentino Roca', period: '1898 - 1904', model: 'MAE', type: 'Constitucional', party: 'PAN', votePercentage: 'Fraude', voteCount: 'Colegio Electoral', image: 'https://i.ibb.co/99K5kWN5/julio-roca.jpg',
    events: [
      'Segunda presidencia (conocido en esta etapa por su gran muñeca política como "El Zorro").',
      'Firma de los Pactos de Mayo con Chile (1902), deteniendo una guerra inminente y limitando armamentos.',
      'Sanción de la dura Ley de Residencia (1902) para expulsar a extranjeros acusados de agitación anarquista.',
      'Formulación de la "Doctrina Drago", oponiéndose terminantemente al cobro armado de deudas soberanas por potencias extranjeras.',
      'Intento fallido de reforma laboral (Código de Trabajo de Joaquín V. González).'
    ]
  },
  {
    id: 'quintana', itemType: 'president', name: 'Manuel Quintana', period: '1904 - 1906', model: 'MAE', type: 'Constitucional', party: 'PAN', votePercentage: 'Fraude', voteCount: 'Colegio Electoral', image: 'https://i.ibb.co/PsDydDPM/Manuel-Quintana.webp',
    events: [
      'Nacionalización de la Universidad de La Plata (1905).',
      'Sofoca duramente la Nueva Revolución Radical armada de 1905 impulsada por Yrigoyen.',
      'Presidencia jaqueada por el auge del anarquismo y fuertes huelgas obreras reclamando derechos básicos.',
      'Presidencia interrumpida abruptamente: fallece en el cargo en marzo de 1906.'
    ]
  },
  {
    id: 'figueroa-alcorta', itemType: 'president', name: 'José Figueroa Alcorta', period: '1906 - 1910', model: 'MAE', type: 'Sucesión Presidencial', party: 'PAN', votePercentage: 'Sucesión', voteCount: '-', image: 'https://i.ibb.co/x8MhYm1q/JOS-FIGUEROA-ALCORTA-773x458.jpg',
    events: [
      'Descubrimiento histórico del primer pozo de petróleo estatal en Comodoro Rivadavia (1907).',
      'Clausura el Congreso Nacional en 1908 tras negarse a aprobar el presupuesto estatal.',
      'Inauguración del majestuoso Teatro Colón de Buenos Aires (1908).',
      'Celebración del Centenario de la Revolución de Mayo (1910) bajo estado de sitio por amenazas anarquistas.'
    ]
  },
  {
    id: 'r-saenz-pena', itemType: 'president', name: 'Roque Sáenz Peña', period: '1910 - 1914', model: 'MAE', type: 'Constitucional', party: 'PAN', votePercentage: 'Fraude', voteCount: 'Colegio Electoral', image: 'https://i.ibb.co/hRTMChqQ/Retrato-de-Roque-S-enz-Pe-a-en-el-Museo-Parlamentario.jpg',
    events: [
      'Hito democrático fundamental: Sanción de la Ley Sáenz Peña (1912).',
      'Se establece por primera vez el voto universal (masculino), secreto y obligatorio, acabando con el fraude.',
      'Apertura del sistema político permitiendo el acceso de las clases medias y populares al poder.',
      'Estallido del "Grito de Alcorta" (1912), gran rebelión agraria en la región pampeana.',
      'Fallece en el cargo debido a una larga enfermedad sin ver las primeras elecciones presidenciales limpias.'
    ]
  },
  {
    id: 'de-la-plaza', itemType: 'president', name: 'Victorino de la Plaza', period: '1914 - 1916', model: 'MAE', type: 'Sucesión Presidencial', party: 'PAN', votePercentage: 'Sucesión', voteCount: '-', image: 'https://i.ibb.co/2Y0KwSQb/victorino-de-la-plaza.jpg',
    events: [
      'Estallido de la Primera Guerra Mundial: declara la estricta neutralidad argentina.',
      'Impacto económico adverso inmediato por la guerra: freno abrupto de exportaciones e importaciones.',
      'Crea la Dirección General de Yacimientos Petrolíferos Fiscales.',
      'Garantiza la transparencia institucional entregando el poder tras las primeras elecciones presidenciales bajo la Ley Sáenz Peña.'
    ]
  },

  // --- ÉPOCA: RADICALISMO ---
  {
    id: 'vid-2', itemType: 'video', model: 'MAE', embedId: "curDr8ezXM4", url: "https://www.youtube.com/watch?v=curDr8ezXM4",
    title: "1916 - 1930: Yrigoyen, Alvear y el Radicalismo", period: "1916-1930", summary: "Documental sobre la primera experiencia democrática ampliada tras la Ley Sáenz Peña, las tensiones sociales y el inicio de la crisis del modelo primario exportador."
  },
  {
    id: 'yrigoyen-1', itemType: 'president', name: 'Hipólito Yrigoyen', period: '1916 - 1922', model: 'MAE', type: 'Constitucional', party: 'UCR', votePercentage: '47.2%', voteCount: '~340.000', image: 'https://i.ibb.co/xtLV1j82/yrigoyen.jpg',
    events: [
      'Primer presidente electo democráticamente sin fraude popular. Fin de la hegemonía conservadora.',
      'Mantenimiento estricto de la neutralidad durante la Primera Guerra Mundial priorizando el comercio.',
      'Apoyo estatal y concreción de la Reforma Universitaria de 1918 en Córdoba.',
      'Graves conflictos y masacres obreras: Semana Trágica (1919) en Buenos Aires y la Patagonia Rebelde (1920-1921).',
      'Creación de la Marina Mercante Nacional e impulso a los ferrocarriles estatales.'
    ]
  },
  {
    id: 'alvear', itemType: 'president', name: 'Marcelo T. de Alvear', period: '1922 - 1928', model: 'MAE', type: 'Constitucional', party: 'UCR', votePercentage: '49.0%', voteCount: '~419.000', image: 'https://i.ibb.co/mVf428Ng/marcelo-t-de-alvear-20221011-1434471.jpg',
    events: [
      'Período marcado por prosperidad económica global, aumento salarial y crecimiento de la clase media.',
      'Creación de Yacimientos Petrolíferos Fiscales (YPF) como empresa estatal en 1922 al mando del Gral. Mosconi.',
      'Fuerte radicación de capitales estadounidenses e instalación de las primeras industrias automotrices.',
      'Época de oro de la cultura porteña, el teatro, el tango y el inicio de la radiofonía nacional.',
      'Profunda división interna del partido radical (Yrigoyenistas vs. Antipersonalistas).'
    ]
  },
  {
    id: 'yrigoyen-2', itemType: 'president', name: 'Hipólito Yrigoyen', period: '1928 - 1930', model: 'MAE', type: 'Constitucional', party: 'UCR', votePercentage: '61.6%', voteCount: '~840.000', image: 'https://i.ibb.co/xtLV1j82/yrigoyen.jpg',
    events: [
      'Segunda presidencia (conocido como "El Peludo"), reelecto por una abrumadora mayoría plebiscitaria.',
      'Impacto devastador e inmediato de la Gran Depresión Mundial de 1929 (Caída de Wall Street).',
      'Colapso total del Modelo Agroexportador puro debido al cierre de mercados y desplome de precios.',
      'Uso excesivo de la "intervención federal" a provincias gobernadas por la oposición.',
      'Derrocado por el primer Golpe de Estado cívico-militar del siglo XX el 6 de septiembre de 1930 (Gral. Uriburu).'
    ]
  },

  // --- ÉPOCA: DÉCADA INFAME ---
  {
    id: 'vid-3', itemType: 'video', model: 'ISI', embedId: "izRlmCgSq0c", url: "https://www.youtube.com/watch?v=izRlmCgSq0c",
    title: "1930 - 1943: Década Infame", period: "1930-1943", summary: "Repaso por el primer golpe de Estado, el retorno al fraude 'patriótico', el pacto Roca-Runciman y los inicios de la Industrialización por Sustitución (ISI)."
  },
  {
    id: 'uriburu-2', itemType: 'president', name: 'José Félix Uriburu', period: '1930 - 1932', model: 'ISI', type: 'De Facto', party: 'Dictadura', votePercentage: 'Golpe de Estado', voteCount: '-', image: 'https://i.ibb.co/7LgW8Ld/uriburu-jose-felix.jpg',
    events: [
      'Inicio del período conocido históricamente como la "Década Infame".',
      'Intento fallido de reemplazar la Constitución Nacional por un sistema corporativista al estilo del fascismo italiano.',
      'Sistemática persecución, tortura y fusilamientos a opositores políticos y anarquistas (ej. Severino Di Giovanni).',
      'Establecimiento de la Ley Marcial.',
      'Comienza la incipiente Industrialización por Sustitución de Importaciones (ISI) por la imposibilidad de importar bienes.'
    ]
  },
  {
    id: 'justo', itemType: 'president', name: 'Agustín P. Justo', period: '1932 - 1938', model: 'ISI', type: 'Constitucional', party: 'Concordancia', votePercentage: 'Fraude Patriótico', voteCount: '~606.000', image: 'https://i.ibb.co/v64dMCSL/Agustin-P-Justo.jpg',
    events: [
      'Llega al poder mediante elecciones amañadas institucionalizando el fraude electoral (denominado "Fraude Patriótico").',
      'Firma del polémico e impopular Pacto Roca-Runciman (1933) con Gran Bretaña para asegurar cuotas de exportación de carne.',
      'Abandono del liberalismo extremo: Intervención masiva del Estado en la economía (creación de las Juntas Reguladoras).',
      'Creación histórica del Banco Central de la República Argentina (BCRA) en 1935 con un modelo mixto.',
      'Plan masivo de obras públicas, creación de Vialidad Nacional y construcción de la red de rutas pavimentadas y el Obelisco.'
    ]
  },
  {
    id: 'ortiz', itemType: 'president', name: 'Roberto M. Ortiz', period: '1938 - 1942', model: 'ISI', type: 'Constitucional', party: 'Concordancia', votePercentage: 'Fraude Patriótico', voteCount: '~1.097.000', image: 'https://i.ibb.co/rGS2VM4r/Roberto-m-ortiz.jpg',
    events: [
      'Llegó al poder con fraude pero intentó sanear la democracia, anulando elecciones provinciales viciadas.',
      'Estallido de la Segunda Guerra Mundial: reafirma la neutralidad argentina pese a presiones internacionales.',
      'Fuerte aceleración de la industria nacional ante la escasez global de bienes manufacturados.',
      'Su proyecto democratizador queda trunco: pide licencia y luego renuncia acosado por una grave ceguera (diabetes).'
    ]
  },
  {
    id: 'castillo', itemType: 'president', name: 'Ramón S. Castillo', period: '1942 - 1943', model: 'ISI', type: 'Sucesión Presidencial', party: 'Concordancia', votePercentage: 'Sucesión', voteCount: '-', image: 'https://i.ibb.co/Y7R0HDQW/ramon-s-castillo.jpg',
    events: [
      'Da marcha atrás a las reformas democratizadoras de Ortiz y retorna al fraude electoral sistemático.',
      'Creación de la Flota Mercante del Estado para garantizar el comercio exterior en tiempos de guerra.',
      'Sostiene tenazmente la neutralidad ganándose el boicot económico y embargo de armas de EE.UU.',
      'Fuerte migración interna del campo a la ciudad formando los nuevos cordones industriales urbanos.',
      'Es derrocado por la "Revolución del 43", un golpe militar nacionalista encabezado por el GOU.'
    ]
  },

  // --- ÉPOCA: PERONISMO ---
  {
    id: 'vid-4', itemType: 'video', model: 'ISI', embedId: "kniXAnBvLZ4", url: "https://www.youtube.com/watch?v=kniXAnBvLZ4",
    title: "1943 - 1955: El Peronismo", period: "1943-1955", summary: "Surgimiento del peronismo, el estado de bienestar, la ampliación de derechos laborales y la fuerte polarización política."
  },
  {
    id: 'ramirez-farrell', itemType: 'president', name: 'P. Ramírez / E. Farrell', period: '1943 - 1946', model: 'ISI', type: 'De Facto', party: 'Dictadura', votePercentage: 'Revolución del 43', voteCount: '-', image: 'https://i.ibb.co/hJQGqHrr/16045917060-Edelmiro-Farrell-773x458.jpg',
    events: [
      'Gobiernos de facto surgidos de la Revolución del 43 (logias militares como el GOU).',
      'Ruptura forzada de relaciones con el Eje y declaración formal de guerra a Alemania y Japón (1945).',
      'Ascenso meteórico del Coronel Juan D. Perón desde la Secretaría de Trabajo y Previsión.',
      'Sanción del Estatuto del Peón Rural, creación de tribunales laborales, aguinaldo y vacaciones pagas.',
      'Encarcelamiento de Perón y posterior e histórica movilización obrera masiva exigiendo su libertad el 17 de octubre de 1945.'
    ]
  },
  {
    id: 'peron-1', itemType: 'president', name: 'Juan Domingo Perón', period: '1946 - 1952', model: 'ISI', type: 'Constitucional', party: 'Partido Laborista', votePercentage: '52.8%', voteCount: '~1.487.000', image: 'https://i.ibb.co/bR8m9SfS/peron.jpg',
    events: [
      'Primer Plan Quinquenal: fuerte intervención estatal impulsando la industria liviana y el mercado interno.',
      'Creación del IAPI (Instituto Argentino de Promoción del Intercambio) monopolizando el comercio exterior.',
      'Nacionalización de ferrocarriles, teléfonos, puertos, gas y repatriación de la deuda externa.',
      'Sanción histórica de la Ley de Voto Femenino (1947), fuertemente impulsada por Eva Perón.',
      'Reforma Constitucional de 1949 incorporando los derechos del trabajador, la ancianidad y permitiendo la reelección.',
      'Decreto de gratuidad de la enseñanza universitaria (1949).'
    ]
  },
  {
    id: 'peron-2', itemType: 'president', name: 'Juan Domingo Perón', period: '1952 - 1955', model: 'ISI', type: 'Constitucional', party: 'Partido Peronista', votePercentage: '62.4%', voteCount: '~4.745.000', image: 'https://i.ibb.co/bR8m9SfS/peron.jpg',
    events: [
      'Segundo Plan Quinquenal: viraje económico hacia la industria pesada, ajuste fiscal y apertura a capitales extranjeros.',
      'Celebración del Congreso de la Productividad buscando resolver cuellos de botella económicos.',
      'Fallecimiento de Eva Perón (julio 1952) generando enorme conmoción popular y polarización.',
      'Ruptura y grave conflicto abierto con la Iglesia Católica (supresión de enseñanza religiosa, ley de divorcio).',
      'Trágico bombardeo a Plaza de Mayo por la Aviación Naval con el objetivo de asesinarlo (cientos de civiles muertos, junio 1955).',
      'Derrocado finalmente por el golpe cívico-militar autodenominado "Revolución Libertadora" (septiembre 1955).'
    ]
  },

  // --- ÉPOCA: RESISTENCIA Y DESARROLLISMO ---
  {
    id: 'vid-5', itemType: 'video', model: 'ISI', embedId: "UB-mbR3anyw", url: "https://www.youtube.com/watch?v=UB-mbR3anyw",
    title: "1955 - 1966: Dictadura, Resistencia y Desarrollismo", period: "1955-1966", summary: "Aborda la proscripción del peronismo, la etapa del desarrollismo económico, la inestabilidad institucional y el tutelaje militar."
  },
  {
    id: 'lonardi-aramburu', itemType: 'president', name: 'E. Lonardi / P. E. Aramburu', period: '1955 - 1958', model: 'ISI', type: 'De Facto', party: 'Dictadura', votePercentage: 'Revolución Libertadora', voteCount: '-', image: 'https://i.ibb.co/KxpJ0b45/Eduardo-Lonardi-y-Pedro-Eugenio-Aramburu-Revoluci-n-Libertadora.png',
    events: [
      'Régimen dictatorial que buscó "desperonizar" completamente y a la fuerza a la sociedad argentina.',
      'Proscripción total del peronismo (Decreto 4161): prohibición de nombrar a Perón o usar sus símbolos.',
      'Desmantelamiento del IAPI e ingreso formal de Argentina al FMI y al Banco Mundial.',
      'Sangrienta represión militar: fusilamientos clandestinos en José León Suárez (levantamiento de Valle, 1956).',
      'Derogación de la Constitución de 1949 y convocatoria a Constituyente de 1957 (incorporando el Art. 14 bis).'
    ]
  },
  {
    id: 'frondizi', itemType: 'president', name: 'Arturo Frondizi', period: '1958 - 1962', model: 'ISI', type: 'Constitucional', party: 'UCRI', votePercentage: '44.9% (Proscripción)', voteCount: '~4.049.000', image: 'https://i.ibb.co/Swfz3kRg/frondizi.jpg',
    events: [
      'Llega al poder mediante un pacto secreto con Perón, superando la proscripción en las urnas.',
      'Implementación del modelo "Desarrollista": fuerte salto a la industria automotriz, petroquímica y siderúrgica.',
      '"La Batalla del Petróleo": polémicos contratos con empresas extranjeras para lograr el autoabastecimiento.',
      'Enorme conflictividad sindical duramente reprimida mediante el Plan CONINTES (militarización de huelgas).',
      'Grave conflicto universitario conocido como "Laica o Libre" permitiendo universidades privadas.',
      'Derrocado militarmente tras legalizar al peronismo en elecciones provinciales y permitir sus triunfos.'
    ]
  },
  {
    id: 'guido', itemType: 'president', name: 'José María Guido', period: '1962 - 1963', model: 'ISI', type: 'Sucesión Presidencial', party: 'UCRI', votePercentage: 'Ley de Acefalía', voteCount: '-', image: 'https://i.ibb.co/PGC4tKh2/jose-maria-guido.jpg',
    events: [
      'Asume temporalmente mediante la Ley de Acefalía, gobernando bajo estricta vigilancia y tutela militar.',
      'Funciona como una "democracia de fachada", gobernando con el Congreso Nacional clausurado.',
      'Fuertes y peligrosos enfrentamientos armados entre facciones militares rivales: los "Azules" (institucionalistas) y "Colorados" (golpistas).',
      'Anulación sistemática de las elecciones provinciales ganadas democráticamente por el peronismo.'
    ]
  },
  {
    id: 'illia', itemType: 'president', name: 'Arturo Illia', period: '1963 - 1966', model: 'ISI', type: 'Constitucional', party: 'UCRP', votePercentage: '25.1% (Proscripción)', voteCount: '~2.441.000', image: 'https://i.ibb.co/KcXK1knf/illia-humberto.jpg',
    events: [
      'Electo con debilidad de origen: obtuvo solo el 25% de los votos debido al alto porcentaje de voto en blanco peronista.',
      'Cumple su promesa de campaña y anula drásticamente los contratos petroleros firmados por Frondizi.',
      'Sanción de la Ley de Medicamentos (Ley Oñativia) congelando precios, enfrentándose a grandes laboratorios.',
      'Establecimiento de la Ley del Salario Mínimo, Vital y Móvil para recuperar poder adquisitivo.',
      'Destinó el mayor porcentaje histórico del Presupuesto Nacional a la Educación (casi 24%).',
      'Derrocado por un golpe militar apoyado por medios de comunicación y sectores empresariales.'
    ]
  },

  // --- ÉPOCA: TIEMPOS VIOLENTOS ---
  {
    id: 'vid-6', itemType: 'video', model: 'ISI', embedId: "n64fDZyy7dU", url: "https://www.youtube.com/watch?v=n64fDZyy7dU",
    title: "1966 - 1976: Tiempos Violentos", period: "1966-1976", summary: "El impacto de la 'Revolución Argentina', el Cordobazo, el surgimiento de la lucha armada y el breve retorno del peronismo."
  },
  {
    id: 'ongania', itemType: 'president', name: 'Juan Carlos Onganía', period: '1966 - 1970', model: 'ISI', type: 'De Facto', party: 'Dictadura', votePercentage: 'Revolución Argentina', voteCount: '-', image: 'https://i.ibb.co/4gTSCmJ4/Ongan-a.jpg',
    events: [
      'Instauración de la autodenominada "Revolución Argentina", supresión total de partidos políticos y sindicatos.',
      'Violenta intervención universitaria ("La Noche de los Bastones Largos") provocando una masiva fuga de cerebros.',
      'Plan Económico de Krieger Vasena: congelamiento salarial, devaluación y fomento a multinacionales.',
      'Estallido popular incontrolable: "El Cordobazo" (mayo de 1969), marcando el inicio del fin de la dictadura.',
      'Aparición de organizaciones guerrilleras armadas urbanas (Montoneros y ERP). Secuestro y asesinato de Aramburu.'
    ]
  },
  {
    id: 'levingston-lanusse', itemType: 'president', name: 'R. Levingston / A. Lanusse', period: '1970 - 1973', model: 'ISI', type: 'De Facto', party: 'Dictadura', votePercentage: 'Sucesión Militar', voteCount: '-', image: 'https://i.ibb.co/991pGHS8/Ongan-a-Levingston-Lanusse-Revoluci-n-Argentina.jpg',
    events: [
      'Continuación del régimen de facto bajo extrema inestabilidad, huelgas generales ("Viborazo") y violencia política.',
      'Trágica Masacre de Trelew (1972): fusilamiento en la base militar de guerrilleros recapturados tras una fuga.',
      'Lanusse impulsa el "Gran Acuerdo Nacional" buscando una salida electoral controlada para las Fuerzas Armadas.',
      'Levantamiento definitivo de la proscripción al Partido Justicialista tras 18 años, forzando la transición democrática.'
    ]
  },
  {
    id: 'campora-lastiri', itemType: 'president', name: 'H. Cámpora / R. Lastiri', period: '1973', model: 'ISI', type: 'Constitucional', party: 'FREJULI', votePercentage: '49.5%', voteCount: '~5.907.000', image: 'https://i.ibb.co/0VprgjKS/hector-jose-campora.jpg',
    events: [
      'Cámpora asume la presidencia tras triunfar bajo la histórica consigna "Cámpora al gobierno, Perón al poder".',
      'Liberación masiva y amnistía de presos políticos ("El Devotazo") la misma noche de la asunción.',
      'Trágico retorno definitivo de Perón al país, marcado por enfrentamientos armados en la "Masacre de Ezeiza".',
      'Renuncia planificada de Cámpora a los 49 días. Asume Raúl Lastiri interinamente y convoca a nuevas elecciones.'
    ]
  },
  {
    id: 'peron-3', itemType: 'president', name: 'Juan Domingo Perón', period: '1973 - 1974', model: 'ISI', type: 'Constitucional', party: 'FREJULI', votePercentage: '61.8%', voteCount: '~7.359.000', image: 'https://i.ibb.co/bR8m9SfS/peron.jpg',
    events: [
      'Tercera presidencia tras ganar con un aplastante 62% de los votos junto a su esposa Isabel como vicepresidenta.',
      'Implementación del "Pacto Social" (ministro Gelbard) congelando precios y salarios para frenar la inflación.',
      'El modelo económico choca externamente contra los estragos de la Crisis Mundial del Petróleo (1973).',
      'Ataque guerrillero del ERP a la poderosa guarnición militar de Azul, endureciendo las leyes de seguridad.',
      'Ruptura pública y definitiva de Perón con la agrupación Montoneros (acto del 1 de mayo de 1974).',
      'Fallece el 1 de julio de 1974, dejando un enorme vacío de poder institucional.'
    ]
  },
  {
    id: 'isabel', itemType: 'president', name: 'María Estela Martínez de Perón', period: '1974 - 1976', model: 'ISI', type: 'Sucesión Presidencial', party: 'FREJULI', votePercentage: 'Sucesión', voteCount: '-', image: 'https://i.ibb.co/mCrKvx4C/Mar-a-Estela-Mart-nez-de-Per-n.jpg',
    events: [
      'Asume constitucionalmente tras enviudar de Perón (primera mujer presidenta en la historia argentina).',
      'Aumento exponencial del terrorismo paramilitar estatal desde el Ministerio de Bienestar Social (la Triple A de López Rega).',
      'Crisis económica terminal: el histórico "Rodrigazo" (1975) con megadevaluación de la moneda y estallido hiperinflacionario.',
      'Firma de decretos ordenando a las Fuerzas Armadas "aniquilar el accionar de los elementos subversivos" (Operativo Independencia).',
      'Derrocada por el sangriento y devastador golpe de Estado cívico-militar el 24 de marzo de 1976.'
    ]
  },

  // --- ÉPOCA: DICTADURA ---
  {
    id: 'vid-7', itemType: 'video', model: 'Apertura', embedId: "g4pZIU3eLos", url: "https://www.youtube.com/watch?v=g4pZIU3eLos",
    title: "1976 - 1983: La Dictadura Militar", period: "1976-1983", summary: "Documental sobre el autodenominado 'Proceso': el terrorismo de Estado sistemático, la apertura financiera y la Guerra de Malvinas."
  },
  {
    id: 'videla', itemType: 'president', name: 'Jorge Rafael Videla', period: '1976 - 1981', model: 'Apertura', type: 'De Facto', party: 'Dictadura', votePercentage: 'Proceso de Reorg. Nacional', voteCount: '-', image: 'https://imagenes.elpais.com/resizer/v2/https%3A%2F%2Fep01.epimg.net%2Finternacional%2Fimagenes%2F2013%2F05%2F17%2Factualidad%2F1368816159_248715_1368821924_noticia_fotograma.png?auth=7c2a5faa24b35e162d888464e98feb4587a21ae2453cfa4e9d54bb9122682b5e&width=1960&height=1103&smart=true',
    events: [
      'Inicio de la dictadura más brutal y sangrienta de la historia argentina ("Proceso de Reorganización Nacional").',
      'Aplicación sistemática del Terrorismo de Estado: secuestros, torturas, centros clandestinos, robo de bebés y miles de desaparecidos.',
      'Plan económico de Martínez de Hoz: apertura total de importaciones que provocó una drástica desindustrialización.',
      'Reforma Financiera de 1977: auge de la especulación financiera ("plata dulce") y "la tablita" cambiaria.',
      'Crecimiento exponencial de la deuda externa privada que luego el Estado estatizó y asumió como propia.'
    ]
  },
  {
    id: 'galtieri', itemType: 'president', name: 'Leopoldo Galtieri', period: '1981 - 1982', model: 'Apertura', type: 'De Facto', party: 'Dictadura', votePercentage: 'Sucesión Militar', voteCount: '-', image: 'https://www.biografiasyvidas.com/biografia/g/fotos/galtieri.jpg',
    events: [
      'Asume el mando en medio de una profunda crisis económica, recesión, fuerte devaluación y un naciente malestar sindical.',
      'Histórica movilización sindical de la CGT (Paz, Pan y Trabajo) el 30 de marzo de 1982, duramente reprimida.',
      'Intento de recuperar apoyo popular y prolongar la dictadura lanzando la recuperación armada de las Islas Malvinas.',
      'Guerra de Malvinas contra el Reino Unido, culminando en derrota y capitulación en junio de 1982.',
      'El fracaso militar provoca el derrumbe político inmediato y definitivo del régimen dictatorial.'
    ]
  },

  // --- ÉPOCA: RECUPERACIÓN DEMOCRÁTICA ---
  {
    id: 'vid-8', itemType: 'video', model: 'Transición', embedId: "ZzCBXFQfjYs", url: "https://www.youtube.com/watch?v=ZzCBXFQfjYs",
    title: "1983 - 1989: Recuperación de la Democracia", period: "1983-1989", summary: "El complejo retorno a la democracia, el histórico Juicio a las Juntas, y los enormes desafíos económicos frente a la hiperinflación."
  },
  {
    id: 'alfonsin', itemType: 'president', name: 'Raúl Alfonsín', period: '1983 - 1989', model: 'Transición', type: 'Constitucional', party: 'UCR', votePercentage: '51.7%', voteCount: '~7.725.000', image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Ra%C3%BAl_Alfons%C3%ADn_con_banda_presidencial_%28cropped%29.jpg',
    events: [
      'Retorno definitivo a la democracia. Creación de la CONADEP (Nunca Más) para investigar crímenes de lesa humanidad.',
      'Histórico e inédito Juicio a las Juntas Militares (1985), condenando a los jerarcas de la dictadura.',
      'Graves presiones militares: levantamientos "carapintadas" y concesión de las leyes de Punto Final y Obediencia Debida.',
      'Firma del Tratado de Paz y Amistad con Chile (aprobado en plebiscito), terminando el conflicto del Beagle.',
      'Planes económicos de estabilización fallidos frente a la enorme deuda heredada: Plan Austral y Plan Primavera.',
      'Descontrol económico, saqueos y brutal estallido hiperinflacionario en 1989, forzando la entrega anticipada del poder.'
    ]
  },

  // --- ÉPOCA: NEOLIBERALISMO ---
  {
    id: 'vid-9', itemType: 'video', model: 'Convertibilidad', embedId: "OPrzCX0p0vU", url: "https://www.youtube.com/watch?v=OPrzCX0p0vU",
    title: "1989 - 2001: Neoliberalismo y Convertibilidad", period: "1989-2001", summary: "Análisis de las políticas de los 90: privatizaciones masivas, la ilusión del 1 a 1, la desindustrialización y el estallido."
  },
  {
    id: 'menem', itemType: 'president', name: 'Carlos Menem', period: '1989 - 1999', model: 'Convertibilidad', type: 'Constitucional', party: 'PJ', votePercentage: '47.4%', voteCount: '~7.954.000', image: 'https://www.lacolumnavertebral.com.ar/wp-content/uploads/2024/05/Menem-presidente.jpg',
    events: [
      'Implementación del Consenso de Washington: masiva y acelerada privatización de empresas públicas (YPF, trenes, Aerolíneas, gas).',
      'Exitoso Plan de Convertibilidad (1991) liderado por Cavallo: paridad fija de "1 peso = 1 dólar", deteniendo la hiperinflación.',
      'Histórico Pacto de Olivos con Alfonsín permitiendo la Reforma Constitucional de 1994 y habilitando su reelección.',
      'Trágicos y devastadores atentados terroristas internacionales impunes: Embajada de Israel (1992) y AMIA (1994).',
      'Indultos presidenciales a ex comandantes militares y líderes guerrilleros de los 70.',
      'La estabilización económica generó un alto costo social: severa desindustrialización, crecimiento sostenido del desempleo y enorme toma de deuda externa.'
    ]
  },
  {
    id: 'delarua', itemType: 'president', name: 'Fernando de la Rúa', period: '1999 - 2001', model: 'Convertibilidad', type: 'Constitucional', party: 'La Alianza', votePercentage: '48.3%', voteCount: '~9.167.000', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Fernando_de_la_R%C3%BAa_con_bast%C3%B3n_y_banda_de_presidente.jpg',
    events: [
      'Asume heredando una profunda recesión económica, un fuerte déficit fiscal y la trampa de la sobrevaluación de la convertibilidad.',
      'Aplica fuertes ajustes (Ley de Déficit Cero, recorte del 13% a jubilados) y polémicos canjes de deuda ("Blindaje" y "Megacanje").',
      'Grave crisis política: escandalosas denuncias de sobornos en el Senado y renuncia de su vicepresidente (Chacho Álvarez).',
      'Fuga masiva de capitales que desemboca en la imposición del "Corralito" bancario (congelamiento de depósitos).',
      'Desata el trágico estallido social de diciembre de 2001 (saqueos, cacerolazos), decreta Estado de Sitio y renuncia abandonando la Casa Rosada en helicóptero tras una brutal represión con 39 muertos.'
    ]
  },

  // --- ÉPOCA: CRISIS 2001 AL PRESENTE ---
  {
    id: 'vid-10', itemType: 'video', model: 'Transición', embedId: "oD96zMG4p2w", url: "https://www.youtube.com/watch?v=oD96zMG4p2w",
    title: "2001 - Actualidad: De la Crisis al Presente", period: "2001-2026", summary: "El derrumbe del 2001, la transición asamblearia, la reestructuración económica y los vaivenes políticos de la historia reciente."
  },
  {
    id: 'puerta', itemType: 'president', name: 'Ramón Puerta', period: '21-23 Dic 2001', model: 'Transición', type: 'Asamblea Legislativa', party: 'PJ', votePercentage: 'Sucesión Provisional', voteCount: '-', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Conferencia_de_prensa_de_Ram%C3%B3n_Puerta.jpg',
    events: [
      'Inicio de la trágica "semana de los cinco presidentes" tras el colapso institucional.',
      'Asume la jefatura de Estado de forma interina por su cargo de presidente provisional del Senado (ante la falta de un vicepresidente).',
      'Restablece el Estado de Sitio y convoca rápidamente de urgencia a la Asamblea Legislativa para elegir mandatario.'
    ]
  },
  {
    id: 'rodriguez-saa', itemType: 'president', name: 'Adolfo Rodríguez Saá', period: '23-30 Dic 2001', model: 'Transición', type: 'Asamblea Legislativa', party: 'PJ', votePercentage: 'Elegido por Asamblea', voteCount: '-', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pYwFtCQnlvVHmet_ZeHWxLxVMOpAfnxEHyYAezHkCzR8OVdvCgTUlSY&s=10',
    events: [
      'Elegido por el Congreso para gobernar. Su primer acto fue declarar y ovacionar el default (suspensión del pago) de la deuda externa en el recinto legislativo.',
      'Anuncia el envío de un proyecto de ley para crear una polémica tercera moneda no convertible llamada "El Argentino".',
      'Ante fuertes cacerolazos, la crisis social sostenida y la falta de apoyo político de los propios gobernadores de su partido, renuncia al séptimo día.'
    ]
  },
  {
    id: 'camano', itemType: 'president', name: 'Eduardo Camaño', period: '30 Dic - 2 Ene', model: 'Transición', type: 'Asamblea Legislativa', party: 'PJ', votePercentage: 'Sucesión Provisional', voteCount: '-', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Eduardo_Cama%C3%B1o_Presidente_Interino_de_Argentina.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original',
    events: [
      'Tras las renuncias en cadena de De la Rúa, Puerta y Rodríguez Saá, asume interinamente por ser presidente de la Cámara de Diputados.',
      'Su principal función fue lograr un acuerdo político básico, restablecer el orden en las calles y rearmar institucionalmente al país.',
      'Vuelve a convocar a la Asamblea Legislativa que finalmente acordaría poner a Eduardo Duhalde para terminar el mandato original.'
    ]
  },
  {
    id: 'duhalde', itemType: 'president', name: 'Eduardo Duhalde', period: '2002 - 2003', model: 'Transición', type: 'Asamblea Legislativa', party: 'PJ', votePercentage: 'Elegido por Asamblea', voteCount: '-', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Eduardo_duhalde_presidente.jpg',
    events: [
      'Fin oficial y traumático de la Ley de Convertibilidad tras 11 años: megadevaluación y "pesificación asimétrica" de deudas y depósitos.',
      'Implementación masiva y urgente de los planes sociales ("Jefas y Jefes de Hogar Desocupados") para contener la explosión de pobreza e indigencia.',
      'La brutal represión policial y asesinato de los manifestantes sociales Darío Santillán y Maximiliano Kosteki (Masacre de Avellaneda, 2002).',
      'El peso político de la masacre lo obliga a adelantar las elecciones presidenciales y renunciar prematuramente al mandato.'
    ]
  },
  {
    id: 'n-kirchner', itemType: 'president', name: 'Néstor Kirchner', period: '2003 - 2007', model: 'Mercado Interno', type: 'Constitucional', party: 'PJ (FPV)', votePercentage: '22.2% (Renuncia oponente)', voteCount: '~4.312.000', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Kirchner_-_Galer%C3%ADa_de_Presidentes_de_casarosada.gob.ar.jpg',
    events: [
      'Llega al poder con una enorme debilidad inicial (22% de los votos) tras la negativa de Carlos Menem a competir en el balotaje definitivo.',
      'Fuerte renovación de la desprestigiada Corte Suprema e impulso clave a la derogación de las leyes de impunidad, reiniciando los juicios de lesa humanidad.',
      'Histórica y agresiva reestructuración de la abultada deuda externa en default (megacanje 2005) logrando quitas de capital récord.',
      'Cancelación del 100% de la deuda histórica con el FMI mediante un pago único al contado usando reservas del Banco Central.',
      'Fuerte auge y reactivación económica y del empleo gracias al modelo de superávits gemelos (fiscal y comercial) y a los inéditos altos precios de la soja.',
      'Rechazo contundente a la creación del ALCA (Área de Libre Comercio de las Américas) liderado por EEUU en la Cumbre de Mar del Plata (2005).'
    ]
  },
  {
    id: 'c-kirchner', itemType: 'president', name: 'Cristina Fernández', period: '2007 - 2015', model: 'Mercado Interno', type: 'Constitucional', party: 'PJ (FPV)', votePercentage: '45.2% / 54.1%', voteCount: '~11.863.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7WkleAVeaAl8gS8aPAsdHKRlHmSh-DDgYqZRpaXAkFvqb9zTCEgyCY0&s=10',
    events: [
      'Grave, extenso y paralizante conflicto con el sector agropecuario por la fallida Resolución 125 (retenciones móviles) en 2008.',
      'Creación de la Asignación Universal por Hijo (AUH) y avance en derechos civiles como la histórica Ley de Matrimonio Igualitario y Ley de Identidad de Género.',
      'Estatización del sistema jubilatorio privado (fin de las AFJP), re-estatización de Aerolíneas Argentinas y expropiación del 51% de la petrolera YPF.',
      'Sanción de la controversial Ley de Servicios de Comunicación Audiovisual (Ley de Medios) generando una dura batalla con los grandes grupos concentrados.',
      'Segunda presidencia (tras triunfar con el 54%) marcada por el estancamiento económico, la instauración del estricto "cepo cambiario" y la aceleración de la inflación.',
      'Compleja batalla judicial internacional (Griesa) y default técnico provocado por los acreedores no reestructurados ("fondos buitres").'
    ]
  },
  {
    id: 'macri', itemType: 'president', name: 'Mauricio Macri', period: '2015 - 2019', model: 'Apertura', type: 'Constitucional', party: 'PRO', votePercentage: '51.3% (Balotaje)', voteCount: '~12.997.000', image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Retrato_oficial_del_Presidente_Mauricio_Macri.jpg',
    events: [
      'Primera presidencia no peronista ni radical en 100 años. Levantamiento rápido del "cepo cambiario" y pago en efectivo millonario a los fondos buitres.',
      'Implementación agresiva de recortes estatales, quita masiva de retenciones a exportaciones mineras/agrícolas y fuerte aumento de tarifas públicas (shock tarifario).',
      'Desarrollo del plan masivo de Obras Públicas e impulso de la controvertida "Reparación Histórica" a jubilados (financiada por blanqueo de capitales).',
      'Severa crisis y corrida cambiaria en 2018 obligando a solicitar un gigantesco e histórico rescate financiero ("Stand-By") al Fondo Monetario Internacional por USD 57.000 millones.',
      'Finaliza su mandato con un grave deterioro socioeconómico: vuelta al cepo cambiario y a los controles de precios, altísima inflación (53% anual) y recesión productiva.'
    ]
  },
  {
    id: 'fernandez', itemType: 'president', name: 'Alberto Fernández', period: '2019 - 2023', model: 'Transición', type: 'Constitucional', party: 'PJ', votePercentage: '48.2%', voteCount: '~12.945.000', image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Alberto_fernandez_presidente_%28cropped%29.jpg',
    events: [
      'Gestión completamente condicionada por el estallido mundial de la Pandemia de COVID-19, dictando una de las cuarentenas obligatorias más largas del mundo.',
      'Sanción histórica de la Ley de Interrupción Voluntaria del Embarazo y del Plan de los Mil Días de cuidado integral maternal.',
      'Larga y agónica renegociación de la pesada deuda externa con acreedores privados internacionales y un nuevo acuerdo de facilidades extendidas con el FMI (Guzmán).',
      'Gobierno paralizado por gravísimas y crónicas crisis políticas internas en la coalición gobernante entre el Presidente y la Vicepresidenta.',
      'Finaliza su gobierno golpeado por el impacto demoledor de una sequía agropecuaria histórica y una de las peores crisis inflacionarias del siglo (superior al 211% interanual).'
    ]
  },
  {
    id: 'milei', itemType: 'president', name: 'Javier Milei', period: '2023 - 2027', model: 'Apertura Radical', type: 'Constitucional', party: 'LLA', votePercentage: '55.6% (Balotaje)', voteCount: '~14.554.000', image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Retrato_oficial_Presidente_Milei.png',
    events: [
      'Llegada al poder del primer presidente autodenominado libertario y anarcocapitalista, prometiendo achicar drásticamente el Estado y eliminar el Banco Central.',
      'Aplicación inmediata del "Plan Motosierra": un fortísimo e inédito ajuste fiscal ortodoxo, recortes masivos en obra pública, subsidios e infraestructura estatal.',
      'Megadevaluación abrupta de la moneda nacional acompañada de una severa desregulación económica decretada (Megadecreto DNU 70/2023).',
      'Aprobación en el Congreso de la fundamental "Ley Bases", reforma laboral regresiva y la creación del Régimen de Grandes Inversiones (RIGI).',
      'Caída libre y colapso inicial de las jubilaciones, del poder adquisitivo y la actividad industrial, logrando a la par una abrupta baja de la inflación y superávit financiero.'
    ]
  }
];

export default function App() {
  const [filter, setFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPresident, setSelectedPresident] = useState(null);
  
  const [showIntro, setShowIntro] = useState(true); 
  const [isOpening, setIsOpening] = useState(false);
  
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  const filteredPresidents = timelineItems.filter(p => {
    const matchesModel = filter === 'ALL' || p.model === filter;
    const matchesSearch = p.itemType === 'video' 
      ? p.title.toLowerCase().includes(searchTerm.toLowerCase())
      : p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesModel && matchesSearch;
  });

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    const handleWheel = (e) => {
      if (scrollContainer && e.deltaY !== 0 && !e.shiftKey && !selectedPresident && !showIntro) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY * 15.0; 
      }
    };

    const handleKeyDown = (e) => {
      if (showIntro || selectedPresident || document.activeElement.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight') handleManualScroll('right');
      if (e.key === 'ArrowLeft') handleManualScroll('left');
    };
    
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPresident, showIntro]);

  const handleScrollEvent = (e) => {
    const target = e.target;
    setScrollPos(target.scrollLeft);
    const maxScroll = target.scrollWidth - target.clientWidth;
    const progress = maxScroll > 0 ? (target.scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);
  };

  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.6; 
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const handleOpenScroll = () => {
    setIsOpening(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 1200);
  };

  const getTypeBadge = (type) => {
    if (type.includes('De Facto') || type.includes('Dictadura')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-[10px] font-bold bg-[#f4b6b6] text-[#7a1919] border border-[#d25f5f] shadow-sm uppercase tracking-wider">
          <ShieldAlert size={10} /> De Facto
        </span>
      );
    }
    if (type.includes('Asamblea') || type.includes('Sucesión')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-[10px] font-bold bg-[#f5d9a0] text-[#7a4819] border border-[#d2a65f] shadow-sm uppercase tracking-wider">
          <RefreshCw size={10} /> {type}
        </span>
      );
    }
    if (type.includes('Fraude') || type.includes('Proscripción')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-[10px] font-bold bg-[#f5d9a0] text-[#7a4819] border border-[#d2a65f] shadow-sm uppercase tracking-wider">
          <Landmark size={10} /> {type}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-[10px] font-bold bg-[#b6f4c3] text-[#197a2f] border border-[#5fd278] shadow-sm uppercase tracking-wider">
        <Landmark size={10} /> Constitucional
      </span>
    );
  };

  return (
    <div className="h-screen min-h-[700px] w-full flex flex-col bg-[#1a110a] overflow-hidden font-serif">
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .modal-scrollbar::-webkit-scrollbar { width: 8px; }
        .modal-scrollbar::-webkit-scrollbar-track { background: rgba(139, 69, 19, 0.1); border-radius: 4px; }
        .modal-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(139, 69, 19, 0.4); border-radius: 4px; }
      `}} />

      <header className="shrink-0 bg-gradient-to-b from-[#3e2723] to-[#2c1c14] border-b-2 border-[#120b06] shadow-[0_5px_15px_rgba(0,0,0,0.9)] z-50 relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          <div className="flex items-center gap-4">
            <ScrollText className="text-[#d2a65f] hidden sm:block" size={32} />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-[#f5d9a0] tracking-wide uppercase drop-shadow-md">
                Línea de Tiempo Argentina
              </h1>
              <p className="text-[#a88665] text-xs sm:text-sm italic">
                De la consolidación Agroexportadora a la actualidad (1880 - 2026)
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex items-center">
              <Search className="absolute left-2.5 text-[#a88665]" size={14} />
              <input 
                type="text" 
                placeholder="Buscar presidente o video..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#1c110a] border border-[#5d4037] text-[#f5d9a0] text-sm px-3 py-1.5 pl-8 rounded-sm focus:outline-none focus:border-[#d2a65f] placeholder-[#a88665]/50 transition-colors w-48 sm:w-56 shadow-inner"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-[#4e342e] text-[#f5d9a0] text-xs font-bold uppercase border border-[#5d4037] px-3 py-1.5 rounded-sm focus:outline-none focus:border-[#d2a65f] shadow-md cursor-pointer transition-colors"
              >
                <option value="ALL">Todos los Modelos</option>
                <option value="MAE">Modelo Agroexportador (MAE)</option>
                <option value="ISI">Ind. por Sustitución (ISI)</option>
                <option value="Apertura">Apertura Financiera</option>
                <option value="Transición">Transición / Crisis</option>
                <option value="Convertibilidad">Convertibilidad (1 a 1)</option>
                <option value="Mercado Interno">Mercado Interno</option>
                <option value="Apertura Radical">Apertura Radical</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="h-1.5 w-full bg-[#120803] relative border-b border-[#2c1406]">
          <div 
            className="h-full bg-gradient-to-r from-[#8b4513] via-[#d2a65f] to-[#8b4513] transition-all duration-300 ease-out shadow-[0_0_8px_rgba(210,166,95,0.6)]" 
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </header>

      <div className="flex-1 w-full relative py-6 sm:py-10 flex flex-col overflow-hidden">
        
        {!showIntro && (
          <div className="absolute bottom-16 right-20 sm:right-28 z-[35] pointer-events-none opacity-80 flex flex-col items-end mix-blend-multiply">
            <p className="text-[#5c3a21] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-0.5">Creado por</p>
            <p className="text-[#2c1a10] text-sm sm:text-xl font-black uppercase tracking-widest drop-shadow-sm">Gonzalo Chapelet</p>
          </div>
        )}

        {!showIntro && scrollProgress > 0 && (
          <button 
            onClick={() => handleManualScroll('left')} 
            className="absolute left-16 sm:left-24 top-1/2 -translate-y-1/2 z-[60] bg-[#2c1a10]/80 hover:bg-[#4e342e] text-[#d2a65f] p-3 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#8b4513] transition-all hover:scale-110 hidden md:flex backdrop-blur-sm"
          >
            <ChevronLeft size={28} />
          </button>
        )}
        {!showIntro && scrollProgress < 99 && (
          <button 
            onClick={() => handleManualScroll('right')} 
            className="absolute right-16 sm:right-24 top-1/2 -translate-y-1/2 z-[60] bg-[#2c1a10]/80 hover:bg-[#4e342e] text-[#d2a65f] p-3 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#8b4513] transition-all hover:scale-110 hidden md:flex backdrop-blur-sm animate-pulse-slow"
          >
            <ChevronRight size={28} />
          </button>
        )}

        <div className="relative w-full h-full flex flex-col max-w-[100vw]">
          
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 z-40 flex flex-col items-center pointer-events-none">
            <div className="w-14 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-b from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-[0_5px_10px_rgba(0,0,0,0.8)] -mt-3 relative z-50">
              <div className="absolute inset-x-2 top-1 h-1 bg-white/10 rounded-full"></div>
            </div>
            <div className="w-4 sm:w-6 h-4 bg-gradient-to-r from-[#2c1406] to-[#1a0c04] border-x-2 border-[#120803] z-40"></div>
            <div 
              className="flex-1 w-8 sm:w-14 shadow-[15px_0_20px_rgba(0,0,0,0.7)] relative z-40 overflow-hidden border-x border-[#8b4513]"
              style={{
                backgroundImage: 'url("https://i.ibb.co/jYWvjK5/papel-de-papiro.jpg")',
                backgroundSize: '400px auto',
                backgroundPositionX: `${-scrollPos * 8.5}px`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 mix-blend-multiply"></div>
            </div>
            <div className="w-4 sm:w-6 h-4 bg-gradient-to-r from-[#2c1406] to-[#1a0c04] border-x-2 border-[#120803] z-40"></div>
            <div className="w-14 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-t from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-[0_-5px_10px_rgba(0,0,0,0.8)] -mb-3 relative z-50">
              <div className="absolute inset-x-2 bottom-1 h-1 bg-white/10 rounded-full"></div>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 z-40 flex flex-col items-center pointer-events-none">
            <div className="w-14 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-b from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-[0_5px_10px_rgba(0,0,0,0.8)] -mt-3 relative z-50">
              <div className="absolute inset-x-2 top-1 h-1 bg-white/10 rounded-full"></div>
            </div>
            <div className="w-4 sm:w-6 h-4 bg-gradient-to-r from-[#2c1406] to-[#1a0c04] border-x-2 border-[#120803] z-40"></div>
            <div 
              className="flex-1 w-8 sm:w-14 shadow-[-15px_0_20px_rgba(0,0,0,0.7)] relative z-40 overflow-hidden border-x border-[#8b4513]"
              style={{
                backgroundImage: 'url("https://i.ibb.co/jYWvjK5/papel-de-papiro.jpg")',
                backgroundSize: '400px auto',
                backgroundPositionX: `${-scrollPos * 8.5}px`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 mix-blend-multiply"></div>
            </div>
            <div className="w-4 sm:w-6 h-4 bg-gradient-to-r from-[#2c1406] to-[#1a0c04] border-x-2 border-[#120803] z-40"></div>
            <div className="w-14 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-t from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-[0_-5px_10px_rgba(0,0,0,0.8)] -mb-3 relative z-50">
              <div className="absolute inset-x-2 bottom-1 h-1 bg-white/10 rounded-full"></div>
            </div>
          </div>

          <main
            ref={scrollRef}
            onScroll={handleScrollEvent} 
            className="flex-1 w-full h-full overflow-x-auto overflow-y-hidden hide-scrollbar select-none bg-[#1a110a]"
          >
            <div 
              className="relative min-w-max h-full flex items-center"
              style={{
                backgroundImage: 'url("https://i.ibb.co/jYWvjK5/papel-de-papiro.jpg")',
                backgroundRepeat: 'repeat',
                backgroundSize: '800px auto'
              }}
            >
              
              <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden shadow-[inset_60px_0_80px_rgba(30,15,5,0.7),inset_-60px_0_80px_rgba(30,15,5,0.7),inset_0_25px_40px_rgba(30,15,5,0.6),inset_0_-25px_40px_rgba(30,15,5,0.6)]">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#3a1d0b]/40 via-transparent to-[#3a1d0b]/50 mix-blend-multiply"></div>
              </div>

              <div className="absolute top-0 left-0 right-0 h-5 sm:h-8 z-20 pointer-events-none" style={{ backgroundImage: `url("${edgeTop}")`, backgroundSize: '150px 100%' }}></div>
              <div className="absolute bottom-0 left-0 right-0 h-5 sm:h-8 z-20 pointer-events-none" style={{ backgroundImage: `url("${edgeBottom}")`, backgroundSize: '150px 100%' }}></div>

              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5c3a21]/60 to-transparent transform -translate-y-1/2 z-10 shadow-[0_1px_3px_rgba(0,0,0,0.2)] pointer-events-none"></div>

              <div className="flex pl-[100px] pr-[150px] sm:pl-[120px] sm:pr-[250px] h-full items-center gap-6 sm:gap-10 py-8 relative z-30 transition-all duration-300">
                {filteredPresidents.length === 0 ? (
                  <div className="text-[#8b4513] text-xl italic px-20 flex flex-col items-center justify-center gap-4 w-full h-full">
                    <Search size={48} className="opacity-50" />
                    <span>No hay registros en este fragmento del papiro...</span>
                  </div>
                ) : (
                  filteredPresidents.map((president, index) => {
                    const isTop = index % 2 === 0;
                    
                    if (president.itemType === 'video') {
                      return (
                         <div key={president.id} className="relative w-[200px] h-[300px] flex flex-col justify-center shrink-0 group">
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"><div className="w-5 h-5 rounded-full border-4 border-[#e2c792] bg-[#a32929]"></div></div>
                           <div className={`absolute left-1/2 w-0.5 bg-[#8b4513]/40 transform -translate-x-1/2 z-10 ${isTop ? 'bottom-1/2 h-8 mb-2.5' : 'top-1/2 h-8 mt-2.5'}`}></div>
                           
                           <div onClick={() => setSelectedPresident(president)} className={`absolute left-0 right-0 bg-[#120b06] border border-[#a32929] shadow-lg rounded-sm p-3 flex flex-col items-center text-center cursor-pointer transition-all hover:scale-105 group-hover:z-50 ${isTop ? 'bottom-1/2 mb-6' : 'top-1/2 mt-6'}`}>
                             <div className="w-full aspect-video bg-black rounded-sm border border-[#3e2723] overflow-hidden mb-3 relative">
                               <img src={`https://img.youtube.com/vi/${president.embedId}/mqdefault.jpg`} loading="lazy" alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                               <div className="absolute inset-0 flex items-center justify-center">
                                 <Youtube size={32} className="text-white/80 group-hover:text-red-600 transition-colors drop-shadow-md" />
                               </div>
                             </div>
                             <h3 className="text-xs font-bold text-[#f5d9a0] mb-1 leading-tight">{president.title}</h3>
                             <div className="flex items-center gap-1 text-[10px] text-[#a88665]"><Clapperboard size={10} /> Cine Histórico</div>
                           </div>
                         </div>
                      );
                    }

                    return (
                      <div key={president.id} className="relative w-[180px] h-[300px] flex flex-col justify-center shrink-0 group">
                        
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                          <div className={`w-5 h-5 rounded-full border-4 border-[#e2c792] flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] ${
                            president.model === 'MAE' ? 'bg-[#b88c47]' : 
                            president.model === 'ISI' ? 'bg-[#62778e]' : 
                            president.model === 'Convertibilidad' ? 'bg-[#4a7c59]' :
                            president.model === 'Mercado Interno' ? 'bg-[#7c4a6b]' :
                            'bg-[#a34d4d]'
                          }`}></div>
                        </div>

                        <div className={`absolute left-1/2 w-0.5 bg-[#8b4513]/40 transform -translate-x-1/2 z-10 ${
                          isTop ? 'bottom-1/2 h-8 mb-2.5' : 'top-1/2 h-8 mt-2.5'
                        }`}></div>

                        <div 
                          onClick={() => setSelectedPresident(president)}
                          className={`absolute left-0 right-0 bg-[#fdfaf1] border border-[#a87f54] shadow-[2px_4px_12px_rgba(80,40,0,0.4)] rounded-sm p-3 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[4px_10px_20px_rgba(80,40,0,0.6)] hover:border-[#6a350f] group-hover:z-50 ${
                            isTop ? 'bottom-1/2 mb-6' : 'top-1/2 mt-6'
                          }`}
                        >
                          <div className="absolute inset-1 border border-[#a87f54]/40 pointer-events-none rounded-sm"></div>

                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#5c3a21] shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)] mb-3 relative bg-[#d2a65f]">
                            {president.image && (
                              <img 
                                src={president.image} 
                                alt={president.name} 
                                loading="lazy"
                                className="w-full h-full object-cover sepia-[40%] contrast-[110%] group-hover:sepia-0 group-hover:contrast-100 transition-all duration-300 relative z-10"
                                onError={(e) => e.target.style.opacity = '0'}
                              />
                            )}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors z-0">
                              <BookOpen size={24} className="text-[#8b4513] opacity-40 group-hover:text-white group-hover:opacity-100 transition-all drop-shadow-md scale-75 group-hover:scale-100" />
                            </div>
                          </div>

                          <h3 className="text-sm font-bold text-[#3a221a] leading-tight mb-1 min-h-[40px] flex items-center justify-center">
                            {president.name}
                          </h3>
                          
                          <div className="flex items-center gap-1 text-xs font-semibold text-[#8b4513] mb-3 bg-[#e8d5b5]/50 px-2 py-0.5 rounded-full">
                            <Calendar size={12} />
                            <span>{president.period}</span>
                          </div>

                          <div className="mt-auto">
                            {getTypeBadge(president.type)}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      {selectedPresident && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPresident(null)}
        >
          {selectedPresident.itemType === 'video' ? (
            <div className="relative w-full max-w-4xl bg-[#1a110a] border-4 border-[#a32929] rounded-sm p-6 shadow-2xl max-h-[90vh] overflow-y-auto modal-scrollbar" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedPresident(null)} className="absolute -top-4 -right-4 bg-[#a32929] text-white rounded-full p-2 hover:scale-110"><X size={24} /></button>
              
              <div className="flex items-center gap-3 mb-4 text-[#f5d9a0] border-b border-[#a32929]/50 pb-4">
                <Youtube size={32} className="text-red-600" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">{selectedPresident.title}</h2>
                  <p className="text-sm text-[#a88665] flex items-center gap-2"><Calendar size={14} /> Época: {selectedPresident.period}</p>
                </div>
              </div>
              
              <p className="text-[#d2a65f] text-sm mb-6 leading-relaxed italic border-l-4 border-red-800 pl-4">{selectedPresident.summary}</p>
              
              <div className="w-full aspect-video bg-black rounded-sm border-2 border-[#3e2723] overflow-hidden mb-4 shadow-[0_0_20px_rgba(0,0,0,0.8)] relative">
                <iframe 
                  src={`https://www.youtube.com/embed/${selectedPresident.embedId}`} 
                  title={selectedPresident.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <div className="bg-[#2c1c14] border border-[#a32929]/30 rounded-sm p-4 text-center mt-4">
                <p className="text-xs text-[#a88665] mb-3">¿El reproductor superior dice "Error de configuración" o "Video no disponible"? (Ocurre por protección de derechos en entornos cerrados).</p>
                <a href={selectedPresident.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#a32929] hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-sm transition-colors uppercase text-sm tracking-wide">
                  <ExternalLink size={18} /> Mirar el Documental en YouTube
                </a>
              </div>
            </div>
          ) : (
          <div 
            className="relative max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] bg-[#f4e4c1] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row overflow-hidden border-4 md:border-8 border-[#5c3a21] rounded-sm transform scale-95 sm:scale-100 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedPresident(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-50 text-[#5c3a21] hover:text-red-800 transition-colors bg-[#f4e4c1]/80 hover:bg-[#f4e4c1] rounded-full p-1 shadow-sm border border-[#5c3a21]/20 hover:scale-110"
            >
              <X size={28} />
            </button>

            <div className="w-full md:w-2/5 bg-gradient-to-b from-[#4e342e] to-[#2c1c14] border-b md:border-b-0 md:border-r-4 border-[#5c3a21] p-6 flex flex-col items-center overflow-y-auto modal-scrollbar relative shadow-[inset_-10px_0_20px_rgba(0,0,0,0.5)] max-h-[40vh] md:max-h-full">
               <div className="w-full flex flex-col items-center my-auto pb-4">
                 <div className="p-2 border-2 border-[#d2a65f] bg-[#f4e4c1] shadow-2xl mb-6 transform -rotate-2 shrink-0 mt-4 md:mt-0">
                   <img 
                     src={selectedPresident.image} 
                     alt={selectedPresident.name} 
                     className="w-32 h-44 sm:w-48 sm:h-64 object-cover border border-[#5c3a21] sepia-[20%]"
                   />
                 </div>
                 
                 <div className="text-center w-full">
                    <h2 className="text-[#f5d9a0] text-xl sm:text-2xl font-bold drop-shadow-md mb-2 px-4">{selectedPresident.name}</h2>
                    <p className="text-[#d2a65f] text-lg font-bold flex items-center justify-center gap-2 mb-4">
                      <Calendar size={18} /> {selectedPresident.period}
                    </p>
                    
                    <div className="flex flex-col gap-2 w-full px-4 mb-4">
                       <div className="flex flex-col items-center justify-center bg-[#2c1c14]/80 p-3 rounded-sm border border-[#5c3a21] shadow-inner w-full">
                         <div className="flex items-center justify-center gap-2 text-[#e2c792] text-xs mb-2 w-full">
                           <Flag size={14} className="text-[#8b4513] shrink-0" />
                           <span className="font-bold text-center leading-tight">{selectedPresident.party}</span>
                         </div>
                         <div className="flex items-center justify-center gap-2 text-[#a88665] text-xs w-full">
                            <Users size={14} className="text-[#8b4513] shrink-0" />
                            <span className="text-center leading-tight">
                              {selectedPresident.votePercentage 
                                ? `${selectedPresident.votePercentage} (${selectedPresident.voteCount})` 
                                : selectedPresident.voteCount}
                            </span>
                         </div>
                       </div>
                    </div>
                    
                    <div className="flex gap-2 justify-center pb-6 md:pb-0">
                      {getTypeBadge(selectedPresident.type)}
                    </div>
                 </div>
               </div>
            </div>

            <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col h-[55vh] md:h-auto overflow-hidden relative">
              <div className="absolute right-4 bottom-4 opacity-[0.03] pointer-events-none">
                {selectedPresident.model === 'MAE' ? <Wheat size={180} /> : <Factory size={180} />}
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-[#5c3a21] mb-4 border-b-2 border-[#c19b6c] pb-2 uppercase tracking-wider flex items-center gap-3 shrink-0">
                 <BookOpen size={24} className="text-[#8b4513]" />
                 Hechos Históricos
              </h3>
              
              <div className="flex-1 overflow-y-auto modal-scrollbar pr-2 sm:pr-4 text-[#4e342e] font-sans">
                <ul className="space-y-3 sm:space-y-4">
                  {selectedPresident.events.map((event, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm md:text-base leading-relaxed bg-white/40 hover:bg-white/60 transition-colors p-3 rounded-sm border border-[#c19b6c]/30 shadow-sm">
                      <span className="mr-3 text-lg sm:text-xl leading-none text-[#8b4513] mt-0.5">✦</span>
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          )}
        </div>
      )}

      {showIntro && (
        <div className="fixed inset-0 z-[200] flex overflow-hidden pointer-events-none">
          <div className={`w-1/2 h-full bg-[#1a110a] flex justify-end items-center pointer-events-auto transition-transform duration-[1200ms] ease-in-out relative ${isOpening ? '-translate-x-full' : 'translate-x-0'}`}>
             <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 flex flex-wrap content-center justify-around gap-6 p-4 md:p-8">
               {timelineItems.filter(p => p.itemType === 'president').slice(0, 8).map((p, i) => (
                 <img key={p.id} src={p.image} alt="" className={`w-24 h-32 md:w-32 md:h-44 object-cover sepia-[60%] grayscale-[60%] border-[4px] border-[#2c1406] shadow-2xl transform ${i % 2 === 0 ? '-rotate-12' : 'rotate-6'} ${i > 3 ? 'hidden md:block' : ''}`} />
               ))}
             </div>
             <div 
               className="w-12 sm:w-16 h-[75vh] border-y-2 border-l-2 border-[#120803] relative z-10 shadow-[inset_15px_0_20px_rgba(0,0,0,0.8)]"
               style={{ backgroundImage: 'url("https://i.ibb.co/jYWvjK5/papel-de-papiro.jpg")', backgroundSize: 'cover' }}
             >
               <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
               <div className="absolute -top-3 -right-0 w-16 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-b from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-lg"></div>
               <div className="absolute -bottom-3 -right-0 w-16 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-t from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-lg"></div>
               <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full h-12 bg-gradient-to-b from-[#7f1d1d] via-[#b91c1c] to-[#7f1d1d] shadow-sm z-20"></div>
             </div>
          </div>

          <div className={`w-1/2 h-full bg-[#1a110a] flex justify-start items-center pointer-events-auto transition-transform duration-[1200ms] ease-in-out relative ${isOpening ? 'translate-x-full' : 'translate-x-0'}`}>
             <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 flex flex-wrap content-center justify-around gap-6 p-4 md:p-8">
               {timelineItems.filter(p => p.itemType === 'president').slice(20, 28).map((p, i) => (
                 <img key={p.id} src={p.image} alt="" className={`w-24 h-32 md:w-32 md:h-44 object-cover sepia-[60%] grayscale-[60%] border-[4px] border-[#2c1406] shadow-2xl transform ${i % 2 === 0 ? 'rotate-12' : '-rotate-6'} ${i > 3 ? 'hidden md:block' : ''}`} />
               ))}
             </div>
             <div 
               className="w-12 sm:w-16 h-[75vh] border-y-2 border-r-2 border-[#120803] relative z-10 shadow-[inset_-15px_0_20px_rgba(0,0,0,0.8)]"
               style={{ backgroundImage: 'url("https://i.ibb.co/jYWvjK5/papel-de-papiro.jpg")', backgroundSize: 'cover' }}
             >
               <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
               <div className="absolute -top-3 -left-0 w-16 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-b from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-lg"></div>
               <div className="absolute -bottom-3 -left-0 w-16 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-t from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-lg"></div>
               <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-12 bg-gradient-to-b from-[#7f1d1d] via-[#b91c1c] to-[#7f1d1d] shadow-sm z-20"></div>
             </div>
          </div>

          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 pointer-events-none ${isOpening ? 'opacity-0 scale-125' : 'opacity-100 scale-100'}`}>
            <div className="mb-10 sm:mb-16 bg-[#f4e4c1] border-2 border-[#5c3a21] p-6 text-center rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.9)] max-w-[320px] sm:max-w-md pointer-events-auto z-[220]">
              <div className="flex justify-center mb-4">
                <img src="https://i.ibb.co/mFBjDDfw/logoisp.png" alt="Logo ISP 20" className="h-20 sm:h-24 object-contain drop-shadow-md" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#4e342e] uppercase mb-1 tracking-wide">Archivo Histórico</h1>
              <p className="text-sm sm:text-md text-[#8b4513] font-semibold mb-4 border-b border-[#c19b6c] pb-3">Argentina 1880 - 2026</p>
              
              <p className="text-xs sm:text-sm text-[#4e342e] mb-4 font-sans leading-relaxed px-2">
                Esta línea de tiempo interactiva recorre la historia presidencial desde la consolidación del <strong className="text-[#8b4513]">Modelo Agroexportador (MAE)</strong> hasta la actualidad.
              </p>
              
              <div className="w-full h-px bg-[#c19b6c] my-3"></div>
              <p className="text-xs text-[#5c3a21]">Creado por el alumno <strong className="uppercase font-bold text-[#4e342e]">Gonzalo Chapelet</strong></p>
            </div>

            <button 
              onClick={handleOpenScroll}
              className="pointer-events-auto w-24 h-24 rounded-full flex items-center justify-center relative hover:scale-105 transition-all group z-[220] cursor-pointer"
              title="Desatar papiro"
            >
              <div className="absolute top-[80%] left-1/4 w-5 h-20 bg-[#7f1d1d] transform rotate-[15deg] origin-top rounded-b-lg shadow-lg"></div>
              <div className="absolute top-[80%] right-1/4 w-5 h-24 bg-[#991b1b] transform -rotate-[10deg] origin-top rounded-b-lg shadow-lg z-0"></div>
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-10 h-12 bg-[#7f1d1d] rounded-l-full transform -rotate-12 group-hover:rotate-[-20deg] transition-all shadow-md"></div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-10 h-12 bg-[#7f1d1d] rounded-r-full transform rotate-12 group-hover:rotate-[20deg] transition-all shadow-md"></div>
              <div className="relative z-10 w-24 h-24 bg-[#991b1b] rounded-full flex flex-col items-center justify-center border-4 border-[#7f1d1d] shadow-[0_5px_15px_rgba(0,0,0,0.8)] hover:bg-[#b91c1c]">
                <div className="w-16 h-16 rounded-full border border-[#fca5a5]/30 flex flex-col items-center justify-center">
                  <span className="text-[#fca5a5] text-sm font-bold uppercase tracking-widest drop-shadow-md">Abrir</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

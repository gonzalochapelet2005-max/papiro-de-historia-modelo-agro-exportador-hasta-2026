// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import {
  Factory,
  Wheat,
  Calendar,
  Landmark,
  ShieldAlert,
  X,
  ScrollText,
  BookOpen,
  Search,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Flag,
  Users,
  Youtube,
  Clapperboard,
  ExternalLink,
} from "lucide-react";

const edgeTop =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='15' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L100,0 L100,5 L95,12 L85,4 L75,15 L65,5 L55,10 L45,2 L30,12 L20,5 L12,15 L5,4 L0,10 Z' fill='%231a110a'/%3E%3C/svg%3E";
const edgeBottom =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='15' preserveAspectRatio='none'%3E%3Cpath d='M0,15 L100,15 L100,10 L95,3 L85,11 L75,0 L65,10 L55,5 L45,13 L30,3 L20,10 L12,0 L5,11 L0,5 Z' fill='%231a110a'/%3E%3C/svg%3E";

const timelineItems = [
  // --- ÉPOCA: ORDEN CONSERVADOR ---
  {
    id: "vid-1",
    itemType: "video",
    model: "MAE",
    embedId: "RX9yBpJp9dw",
    url: "https://www.youtube.com/watch?v=RX9yBpJp9dw",
    title: "1880 - 1916: El Orden Conservador",
    period: "1880-1916",
    summary:
      "Análisis de la consolidación del Estado Nacional, el auge del Modelo Agroexportador (MAE) y el dominio político de la oligarquía a través del fraude electoral.",
  },
  {
    id: "roca-1",
    itemType: "president",
    name: "Julio Argentino Roca",
    period: "1880 - 1886",
    model: "MAE",
    type: "Constitucional",
    party: "Partido Autonomista Nacional (PAN)",
    votePercentage: "Fraude",
    voteCount: "Colegio Electoral",
    image: "https://i.ibb.co/99K5kWN5/julio-roca.jpg",
    events: [
      "Consolidación del Estado Nacional.",
      "Federalización de la Ciudad de Buenos Aires (1880).",
      "Impulso a la Campaña del Desierto.",
      "Auge del modelo agroexportador.",
    ],
  },
  {
    id: "juarez-celman",
    itemType: "president",
    name: "Miguel Juárez Celman",
    period: "1886 - 1890",
    model: "MAE",
    type: "Constitucional",
    party: "PAN",
    votePercentage: "Fraude",
    voteCount: "Colegio Electoral",
    image:
      "https://i.ibb.co/vxQBNYNX/Miguel-ngel-Juarez-Celman-presidente-argentino-color.png",
    events: [
      'Régimen de "El Unicato".',
      "Especulación financiera indiscriminada.",
      "Estallido de la Crisis de 1890 y renuncia.",
    ],
  },
  {
    id: "pellegrini",
    itemType: "president",
    name: "Carlos Pellegrini",
    period: "1890 - 1892",
    model: "MAE",
    type: "Sucesión Presidencial",
    party: "PAN",
    votePercentage: "Sucesión",
    voteCount: "-",
    image: "https://i.ibb.co/qFp2QC49/carlos-pellegrini.jpg",
    events: [
      "Fundación del Banco de la Nación Argentina.",
      "Creación de la Caja de Conversión.",
      "Estabilización post-crisis.",
    ],
  },
  {
    id: "l-saenz-pena",
    itemType: "president",
    name: "Luis Sáenz Peña",
    period: "1892 - 1895",
    model: "MAE",
    type: "Constitucional",
    party: "PAN",
    votePercentage: "Fraude",
    voteCount: "Colegio Electoral",
    image: "https://i.ibb.co/cKp3d1Zq/Luis-Saenz-Pena.jpg",
    events: [
      "Inestabilidad política constante.",
      "Revoluciones radicales de 1893.",
      "Renuncia en enero de 1895.",
    ],
  },
  {
    id: "uriburu-1",
    itemType: "president",
    name: "José Evaristo Uriburu",
    period: "1895 - 1898",
    model: "MAE",
    type: "Sucesión Presidencial",
    party: "PAN",
    votePercentage: "Sucesión",
    voteCount: "-",
    image: "https://i.ibb.co/gZNpQzGz/uriburu.avif",
    events: [
      "Adquisición de moderno armamento naval.",
      "Conflictos limítrofes con Chile.",
      "Segundo Censo Nacional (1895).",
    ],
  },
  {
    id: "roca-2",
    itemType: "president",
    name: "Julio Argentino Roca",
    period: "1898 - 1904",
    model: "MAE",
    type: "Constitucional",
    party: "PAN",
    votePercentage: "Fraude",
    voteCount: "Colegio Electoral",
    image: "https://i.ibb.co/99K5kWN5/julio-roca.jpg",
    events: [
      "Firma de los Pactos de Mayo con Chile (1902).",
      "Sanción de la Ley de Residencia.",
      "Doctrina Drago contra el cobro armado.",
    ],
  },
  {
    id: "quintana",
    itemType: "president",
    name: "Manuel Quintana",
    period: "1904 - 1906",
    model: "MAE",
    type: "Constitucional",
    party: "PAN",
    votePercentage: "Fraude",
    voteCount: "Colegio Electoral",
    image: "https://i.ibb.co/PsDydDPM/Manuel-Quintana.webp",
    events: [
      "Revolución Radical de 1905.",
      "Auge del anarquismo y huelgas.",
      "Fallece en el cargo.",
    ],
  },
  {
    id: "figueroa-alcorta",
    itemType: "president",
    name: "José Figueroa Alcorta",
    period: "1906 - 1910",
    model: "MAE",
    type: "Sucesión Presidencial",
    party: "PAN",
    votePercentage: "Sucesión",
    voteCount: "-",
    image: "https://i.ibb.co/x8MhYm1q/JOS-FIGUEROA-ALCORTA-773x458.jpg",
    events: [
      "Descubrimiento de petróleo en Comodoro Rivadavia.",
      "Inauguración del Teatro Colón.",
      "Centenario de la Revolución de Mayo.",
    ],
  },
  {
    id: "r-saenz-pena",
    itemType: "president",
    name: "Roque Sáenz Peña",
    period: "1910 - 1914",
    model: "MAE",
    type: "Constitucional",
    party: "PAN",
    votePercentage: "Fraude",
    voteCount: "Colegio Electoral",
    image:
      "https://i.ibb.co/hRTMChqQ/Retrato-de-Roque-S-enz-Pe-a-en-el-Museo-Parlamentario.jpg",
    events: [
      "Sanción de la Ley Sáenz Peña (1912).",
      "Voto universal masculino, secreto y obligatorio.",
      "Fallece en el cargo.",
    ],
  },
  {
    id: "de-la-plaza",
    itemType: "president",
    name: "Victorino de la Plaza",
    period: "1914 - 1916",
    model: "MAE",
    type: "Sucesión Presidencial",
    party: "PAN",
    votePercentage: "Sucesión",
    voteCount: "-",
    image: "https://i.ibb.co/2Y0KwSQb/victorino-de-la-plaza.jpg",
    events: [
      "Estallido de la Primera Guerra Mundial.",
      "Impacto económico por el freno de exportaciones.",
      "Garantiza las primeras elecciones limpias.",
    ],
  },

  // --- ÉPOCA: RADICALISMO ---
  {
    id: "vid-2",
    itemType: "video",
    model: "MAE",
    embedId: "curDr8ezXM4",
    url: "https://www.youtube.com/watch?v=curDr8ezXM4",
    title: "1916 - 1930: Yrigoyen, Alvear y el Radicalismo",
    period: "1916-1930",
    summary:
      "Documental sobre la primera experiencia democrática ampliada tras la Ley Sáenz Peña, las tensiones sociales y el inicio de la crisis del modelo primario exportador.",
  },
  {
    id: "yrigoyen-1",
    itemType: "president",
    name: "Hipólito Yrigoyen",
    period: "1916 - 1922",
    model: "MAE",
    type: "Constitucional",
    party: "UCR",
    votePercentage: "47.2%",
    voteCount: "~340.000",
    image: "https://i.ibb.co/xtLV1j82/yrigoyen.jpg",
    events: [
      "Primer presidente electo sin fraude.",
      "Neutralidad en la Primera Guerra.",
      "Reforma Universitaria de 1918.",
      "Semana Trágica y Patagonia Rebelde.",
    ],
  },
  {
    id: "alvear",
    itemType: "president",
    name: "Marcelo T. de Alvear",
    period: "1922 - 1928",
    model: "MAE",
    type: "Constitucional",
    party: "UCR",
    votePercentage: "49.0%",
    voteCount: "~419.000",
    image: "https://i.ibb.co/mVf428Ng/marcelo-t-de-alvear-20221011-1434471.jpg",
    events: [
      "Creación de YPF en 1922.",
      "Prosperidad económica.",
      "División de la UCR.",
    ],
  },
  {
    id: "yrigoyen-2",
    itemType: "president",
    name: "Hipólito Yrigoyen",
    period: "1928 - 1930",
    model: "MAE",
    type: "Constitucional",
    party: "UCR",
    votePercentage: "61.6%",
    voteCount: "~840.000",
    image: "https://i.ibb.co/xtLV1j82/yrigoyen.jpg",
    events: [
      "Impacto de la Gran Depresión (1929).",
      "Colapso del Modelo Agroexportador puro.",
      "Derrocado por el Golpe de Estado de 1930.",
    ],
  },

  // --- ÉPOCA: DÉCADA INFAME ---
  {
    id: "vid-3",
    itemType: "video",
    model: "ISI",
    embedId: "izRlmCgSq0c",
    url: "https://www.youtube.com/watch?v=izRlmCgSq0c",
    title: "1930 - 1943: Década Infame",
    period: "1930-1943",
    summary:
      "Repaso por el primer golpe de Estado, el retorno al fraude 'patriótico', el pacto Roca-Runciman y los inicios de la Industrialización por Sustitución (ISI).",
  },
  {
    id: "uriburu-2",
    itemType: "president",
    name: "José Félix Uriburu",
    period: "1930 - 1932",
    model: "ISI",
    type: "De Facto",
    party: "Dictadura",
    votePercentage: "Golpe de Estado",
    voteCount: "-",
    image: "https://i.ibb.co/7LgW8Ld/uriburu-jose-felix.jpg",
    events: [
      "Intento de sistema corporativista.",
      "Persecución a opositores.",
      "Comienza la incipiente industrialización.",
    ],
  },
  {
    id: "justo",
    itemType: "president",
    name: "Agustín P. Justo",
    period: "1932 - 1938",
    model: "ISI",
    type: "Constitucional",
    party: "Concordancia",
    votePercentage: "Fraude Patriótico",
    voteCount: "~606.000",
    image: "https://i.ibb.co/v64dMCSL/Agustin-P-Justo.jpg",
    events: [
      "Pacto Roca-Runciman (1933).",
      "Creación del Banco Central (BCRA).",
      "Construcción masiva de rutas pavimentadas.",
    ],
  },
  {
    id: "ortiz",
    itemType: "president",
    name: "Roberto M. Ortiz",
    period: "1938 - 1942",
    model: "ISI",
    type: "Constitucional",
    party: "Concordancia",
    votePercentage: "Fraude Patriótico",
    voteCount: "~1.097.000",
    image: "https://i.ibb.co/rGS2VM4r/Roberto-m-ortiz.jpg",
    events: [
      "Intento de desmantelar el fraude.",
      "Neutralidad en la Segunda Guerra.",
      "Aceleración de la industria nacional.",
    ],
  },
  {
    id: "castillo",
    itemType: "president",
    name: "Ramón S. Castillo",
    period: "1942 - 1943",
    model: "ISI",
    type: "Sucesión Presidencial",
    party: "Concordancia",
    votePercentage: "Sucesión",
    voteCount: "-",
    image: "https://i.ibb.co/Y7R0HDQW/ramon-s-castillo.jpg",
    events: [
      "Retorno al fraude sistemático.",
      "Creación de la Flota Mercante del Estado.",
      "Derrocado por la Revolución del 43.",
    ],
  },

  // --- ÉPOCA: PERONISMO ---
  {
    id: "vid-4",
    itemType: "video",
    model: "ISI",
    embedId: "kniXAnBvLZ4",
    url: "https://www.youtube.com/watch?v=kniXAnBvLZ4",
    title: "1943 - 1955: El Peronismo",
    period: "1943-1955",
    summary:
      "Surgimiento del peronismo, el estado de bienestar, la ampliación de derechos laborales y la fuerte polarización política.",
  },
  {
    id: "ramirez-farrell",
    itemType: "president",
    name: "P. Ramírez / E. Farrell",
    period: "1943 - 1946",
    model: "ISI",
    type: "De Facto",
    party: "Dictadura",
    votePercentage: "Revolución del 43",
    voteCount: "-",
    image: "https://i.ibb.co/hJQGqHrr/16045917060-Edelmiro-Farrell-773x458.jpg",
    events: [
      "Ruptura con el Eje (1945).",
      "Sanción del aguinaldo y vacaciones.",
      "Ascenso de Perón y el 17 de octubre.",
    ],
  },
  {
    id: "peron-1",
    itemType: "president",
    name: "Juan Domingo Perón",
    period: "1946 - 1952",
    model: "ISI",
    type: "Constitucional",
    party: "Partido Laborista",
    votePercentage: "52.8%",
    voteCount: "~1.487.000",
    image: "https://i.ibb.co/bR8m9SfS/peron.jpg",
    events: [
      "Primer Plan Quinquenal.",
      "Nacionalización de ferrocarriles.",
      "Ley de Voto Femenino (1947).",
      "Reforma Constitucional de 1949.",
    ],
  },
  {
    id: "peron-2",
    itemType: "president",
    name: "Juan Domingo Perón",
    period: "1952 - 1955",
    model: "ISI",
    type: "Constitucional",
    party: "Partido Peronista",
    votePercentage: "62.4%",
    voteCount: "~4.745.000",
    image: "https://i.ibb.co/bR8m9SfS/peron.jpg",
    events: [
      "Segundo Plan Quinquenal.",
      "Fallecimiento de Eva Perón.",
      "Bombardeo a Plaza de Mayo.",
      "Derrocado por la Revolución Libertadora.",
    ],
  },

  // --- ÉPOCA: RESISTENCIA Y DESARROLLISMO ---
  {
    id: "vid-5",
    itemType: "video",
    model: "ISI",
    embedId: "UB-mbR3anyw",
    url: "https://www.youtube.com/watch?v=UB-mbR3anyw",
    title: "1955 - 1966: Dictadura, Resistencia y Desarrollismo",
    period: "1955-1966",
    summary:
      "Aborda la proscripción del peronismo, la etapa del desarrollismo económico, la inestabilidad institucional y el tutelaje militar.",
  },
  {
    id: "lonardi-aramburu",
    itemType: "president",
    name: "E. Lonardi / P. E. Aramburu",
    period: "1955 - 1958",
    model: "ISI",
    type: "De Facto",
    party: "Dictadura",
    votePercentage: "Revolución Libertadora",
    voteCount: "-",
    image:
      "https://i.ibb.co/KxpJ0b45/Eduardo-Lonardi-y-Pedro-Eugenio-Aramburu-Revoluci-n-Libertadora.png",
    events: [
      'Búsqueda de "desperonizar" la sociedad.',
      "Proscripción total del peronismo.",
      "Ingreso formal al FMI.",
    ],
  },
  {
    id: "frondizi",
    itemType: "president",
    name: "Arturo Frondizi",
    period: "1958 - 1962",
    model: "ISI",
    type: "Constitucional",
    party: "UCRI",
    votePercentage: "44.9% (Proscripción)",
    voteCount: "~4.049.000",
    image: "https://i.ibb.co/Swfz3kRg/frondizi.jpg",
    events: [
      "Desarrollismo: industria automotriz y petroquímica.",
      "La Batalla del Petróleo.",
      'Conflicto "Laica o Libre".',
    ],
  },
  {
    id: "guido",
    itemType: "president",
    name: "José María Guido",
    period: "1962 - 1963",
    model: "ISI",
    type: "Sucesión Presidencial",
    party: "UCRI",
    votePercentage: "Ley de Acefalía",
    voteCount: "-",
    image: "https://i.ibb.co/PGC4tKh2/jose-maria-guido.jpg",
    events: [
      "Gobierna con Congreso clausurado.",
      "Enfrentamiento Azules vs Colorados.",
      "Anulación de elecciones peronistas.",
    ],
  },
  {
    id: "illia",
    itemType: "president",
    name: "Arturo Illia",
    period: "1963 - 1966",
    model: "ISI",
    type: "Constitucional",
    party: "UCRP",
    votePercentage: "25.1% (Proscripción)",
    voteCount: "~2.441.000",
    image: "https://i.ibb.co/KcXK1knf/illia-humberto.jpg",
    events: [
      "Anulación de contratos petroleros.",
      "Ley de Medicamentos (Oñativia).",
      "Presupuesto récord a Educación (24%).",
    ],
  },

  // --- ÉPOCA: TIEMPOS VIOLENTOS ---
  {
    id: "vid-6",
    itemType: "video",
    model: "ISI",
    embedId: "n64fDZyy7dU",
    url: "https://www.youtube.com/watch?v=n64fDZyy7dU",
    title: "1966 - 1976: Tiempos Violentos",
    period: "1966-1976",
    summary:
      "El impacto de la 'Revolución Argentina', el Cordobazo, el surgimiento de la lucha armada y el breve retorno del peronismo.",
  },
  {
    id: "ongania",
    itemType: "president",
    name: "Juan Carlos Onganía",
    period: "1966 - 1970",
    model: "ISI",
    type: "De Facto",
    party: "Dictadura",
    votePercentage: "Revolución Argentina",
    voteCount: "-",
    image: "https://i.ibb.co/4gTSCmJ4/Ongan-a.jpg",
    events: [
      'Intervención universitaria ("Bastones Largos").',
      'Estallido popular: "El Cordobazo" (1969).',
      "Aparición de guerrillas urbanas.",
    ],
  },
  {
    id: "levingston-lanusse",
    itemType: "president",
    name: "R. Levingston / A. Lanusse",
    period: "1970 - 1973",
    model: "ISI",
    type: "De Facto",
    party: "Dictadura",
    votePercentage: "Sucesión Militar",
    voteCount: "-",
    image:
      "https://i.ibb.co/991pGHS8/Ongan-a-Levingston-Lanusse-Revoluci-n-Argentina.jpg",
    events: [
      "Masacre de Trelew (1972).",
      "Gran Acuerdo Nacional.",
      "Levantamiento de la proscripción al PJ.",
    ],
  },
  {
    id: "campora-lastiri",
    itemType: "president",
    name: "H. Cámpora / R. Lastiri",
    period: "1973",
    model: "ISI",
    type: "Constitucional",
    party: "FREJULI",
    votePercentage: "49.5%",
    voteCount: "~5.907.000",
    image: "https://i.ibb.co/0VprgjKS/hector-jose-campora.jpg",
    events: [
      "Liberación de presos políticos.",
      'Retorno de Perón ("Masacre de Ezeiza").',
      "Renuncia a los 49 días.",
    ],
  },
  {
    id: "peron-3",
    itemType: "president",
    name: "Juan Domingo Perón",
    period: "1973 - 1974",
    model: "ISI",
    type: "Constitucional",
    party: "FREJULI",
    votePercentage: "61.8%",
    voteCount: "~7.359.000",
    image: "https://i.ibb.co/bR8m9SfS/peron.jpg",
    events: [
      "Pacto Social: congelamiento de precios.",
      "Ruptura con Montoneros.",
      "Fallece el 1 de julio de 1974.",
    ],
  },
  {
    id: "isabel",
    itemType: "president",
    name: "María Estela Martínez de Perón",
    period: "1974 - 1976",
    model: "ISI",
    type: "Sucesión Presidencial",
    party: "FREJULI",
    votePercentage: "Sucesión",
    voteCount: "-",
    image: "https://i.ibb.co/mCrKvx4C/Mar-a-Estela-Mart-nez-de-Per-n.jpg",
    events: [
      "Aumento del terrorismo paramilitar (Triple A).",
      'Crisis económica terminal: "El Rodrigazo".',
      "Derrocada por el golpe de 1976.",
    ],
  },

  // --- ÉPOCA: DICTADURA ---
  {
    id: "vid-7",
    itemType: "video",
    model: "Apertura",
    embedId: "g4pZIU3eLos",
    url: "https://www.youtube.com/watch?v=g4pZIU3eLos",
    title: "1976 - 1983: La Dictadura Militar",
    period: "1976-1983",
    summary:
      "Documental sobre el autodenominado 'Proceso': el terrorismo de Estado sistemático, la apertura financiera y la Guerra de Malvinas.",
  },
  {
    id: "videla",
    itemType: "president",
    name: "Jorge Rafael Videla",
    period: "1976 - 1981",
    model: "Apertura",
    type: "De Facto",
    party: "Dictadura",
    votePercentage: "Proceso de Reorg. Nacional",
    voteCount: "-",
    image:
      "https://imagenes.elpais.com/resizer/v2/https%3A%2F%2Fep01.epimg.net%2Finternacional%2Fimagenes%2F2013%2F05%2F17%2Factualidad%2F1368816159_248715_1368821924_noticia_fotograma.png?auth=7c2a5faa24b35e162d888464e98feb4587a21ae2453cfa4e9d54bb9122682b5e&width=1960&height=1103&smart=true",
    events: [
      "Terrorismo de Estado y desapariciones.",
      "Plan de Martínez de Hoz: apertura y desindustrialización.",
      "Reforma Financiera y crecimiento de deuda.",
    ],
  },
  {
    id: "galtieri",
    itemType: "president",
    name: "Leopoldo Galtieri",
    period: "1981 - 1982",
    model: "Apertura",
    type: "De Facto",
    party: "Dictadura",
    votePercentage: "Sucesión Militar",
    voteCount: "-",
    image: "https://www.biografiasyvidas.com/biografia/g/fotos/galtieri.jpg",
    events: [
      "Guerra de Malvinas contra el Reino Unido (1982).",
      "Profunda crisis económica.",
      "Aceleración del colapso del régimen.",
    ],
  },

  // --- ÉPOCA: RECUPERACIÓN DEMOCRÁTICA ---
  {
    id: "vid-8",
    itemType: "video",
    model: "Transición",
    embedId: "ZzCBXFQfjYs",
    url: "https://www.youtube.com/watch?v=ZzCBXFQfjYs",
    title: "1983 - 1989: Recuperación de la Democracia",
    period: "1983-1989",
    summary:
      "El complejo retorno a la democracia, el histórico Juicio a las Juntas, y los enormes desafíos económicos frente a la hiperinflación.",
  },
  {
    id: "alfonsin",
    itemType: "president",
    name: "Raúl Alfonsín",
    period: "1983 - 1989",
    model: "Transición",
    type: "Constitucional",
    party: "UCR",
    votePercentage: "51.7%",
    voteCount: "~7.725.000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ra%C3%BAl_Alfons%C3%ADn_con_banda_presidencial_%28cropped%29.jpg",
    events: [
      "Retorno a la democracia y Juicio a las Juntas.",
      "Levantamientos carapintadas.",
      "Planes económicos fallidos (Austral).",
      "Estallido hiperinflacionario en 1989.",
    ],
  },

  // --- ÉPOCA: NEOLIBERALISMO ---
  {
    id: "vid-9",
    itemType: "video",
    model: "Convertibilidad",
    embedId: "OPrzCX0p0vU",
    url: "https://www.youtube.com/watch?v=OPrzCX0p0vU",
    title: "1989 - 2001: Neoliberalismo y Convertibilidad",
    period: "1989-2001",
    summary:
      "Análisis de las políticas de los 90: privatizaciones masivas, la ilusión del 1 a 1, la desindustrialización y el estallido.",
  },
  {
    id: "menem",
    itemType: "president",
    name: "Carlos Menem",
    period: "1989 - 1999",
    model: "Convertibilidad",
    type: "Constitucional",
    party: "PJ",
    votePercentage: "47.4%",
    voteCount: "~7.954.000",
    image:
      "https://www.lacolumnavertebral.com.ar/wp-content/uploads/2024/05/Menem-presidente.jpg",
    events: [
      "Plan de Convertibilidad (1 a 1).",
      "Privatización masiva de empresas públicas.",
      "Pacto de Olivos y Reforma Constitucional.",
      "Atentados a Embajada de Israel y AMIA.",
    ],
  },
  {
    id: "delarua",
    itemType: "president",
    name: "Fernando de la Rúa",
    period: "1999 - 2001",
    model: "Convertibilidad",
    type: "Constitucional",
    party: "La Alianza",
    votePercentage: "48.3%",
    voteCount: "~9.167.000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Fernando_de_la_R%C3%BAa_con_bast%C3%B3n_y_banda_de_presidente.jpg",
    events: [
      "Agravamiento de la recesión.",
      "Megacanje de deuda externa.",
      'Imposición del "Corralito".',
      "Estallido social y renuncia (Diciembre 2001).",
    ],
  },

  // --- ÉPOCA: CRISIS 2001 AL PRESENTE ---
  {
    id: "vid-10",
    itemType: "video",
    model: "Transición",
    embedId: "oD96zMG4p2w",
    url: "https://www.youtube.com/watch?v=oD96zMG4p2w",
    title: "2001 - Actualidad: De la Crisis al Presente",
    period: "2001-2026",
    summary:
      "El derrumbe del 2001, la transición asamblearia, la reestructuración económica y los vaivenes políticos de la historia reciente.",
  },
  {
    id: "puerta",
    itemType: "president",
    name: "Ramón Puerta",
    period: "21-23 Dic 2001",
    model: "Transición",
    type: "Asamblea Legislativa",
    party: "PJ",
    votePercentage: "Sucesión Provisional",
    voteCount: "-",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Conferencia_de_prensa_de_Ram%C3%B3n_Puerta.jpg",
    events: [
      "Asume por ser presidente provisional del Senado.",
      "Convoca de urgencia a la Asamblea Legislativa.",
    ],
  },
  {
    id: "rodriguez-saa",
    itemType: "president",
    name: "Adolfo Rodríguez Saá",
    period: "23-30 Dic 2001",
    model: "Transición",
    type: "Asamblea Legislativa",
    party: "PJ",
    votePercentage: "Elegido por Asamblea",
    voteCount: "-",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pYwFtCQnlvVHmet_ZeHWxLxVMOpAfnxEHyYAezHkCzR8OVdvCgTUlSY&s=10",
    events: [
      "Declara el default de la deuda externa.",
      'Anuncia la moneda paralela "El Argentino".',
      "Renuncia por falta de apoyo político.",
    ],
  },
  {
    id: "camano",
    itemType: "president",
    name: "Eduardo Camaño",
    period: "30 Dic - 2 Ene",
    model: "Transición",
    type: "Asamblea Legislativa",
    party: "PJ",
    votePercentage: "Sucesión Provisional",
    voteCount: "-",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Eduardo_Cama%C3%B1o_Presidente_Interino_de_Argentina.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
    events: [
      "Asume por ser presidente de Diputados.",
      "Restablece el orden institucional.",
      "Convoca a nueva Asamblea.",
    ],
  },
  {
    id: "duhalde",
    itemType: "president",
    name: "Eduardo Duhalde",
    period: "2002 - 2003",
    model: "Transición",
    type: "Asamblea Legislativa",
    party: "PJ",
    votePercentage: "Elegido por Asamblea",
    voteCount: "-",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Eduardo_duhalde_presidente.jpg",
    events: [
      "Fin de la Convertibilidad y megadevaluación.",
      "Planes sociales (Jefas y Jefes de Hogar).",
      "Asesinatos de Kosteki y Santillán.",
    ],
  },
  {
    id: "n-kirchner",
    itemType: "president",
    name: "Néstor Kirchner",
    period: "2003 - 2007",
    model: "Mercado Interno",
    type: "Constitucional",
    party: "PJ (FPV)",
    votePercentage: "22.2% (Renuncia oponente)",
    voteCount: "~4.312.000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kirchner_-_Galer%C3%ADa_de_Presidentes_de_casarosada.gob.ar.jpg",
    events: [
      "Reestructuración de deuda en default.",
      "Cancelación total con el FMI.",
      "Auge económico por precios de la soja.",
    ],
  },
  {
    id: "c-kirchner",
    itemType: "president",
    name: "Cristina Fernández",
    period: "2007 - 2015",
    model: "Mercado Interno",
    type: "Constitucional",
    party: "PJ (FPV)",
    votePercentage: "45.2% / 54.1%",
    voteCount: "~11.863.000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7WkleAVeaAl8gS8aPAsdHKRlHmSh-DDgYqZRpaXAkFvqb9zTCEgyCY0&s=10",
    events: [
      "Conflicto con el agro (Resolución 125).",
      "Estatización de AFJP y 51% de YPF.",
      "Asignación Universal por Hijo (AUH).",
      "Cepo cambiario e inflación creciente.",
    ],
  },
  {
    id: "macri",
    itemType: "president",
    name: "Mauricio Macri",
    period: "2015 - 2019",
    model: "Apertura",
    type: "Constitucional",
    party: "PRO",
    votePercentage: "51.3% (Balotaje)",
    voteCount: "~12.997.000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Retrato_oficial_del_Presidente_Mauricio_Macri.jpg",
    events: [
      "Arreglo con fondos buitre.",
      "Quita de subsidios y retenciones.",
      "Crisis cambiaria y retorno al FMI (2018).",
    ],
  },
  {
    id: "fernandez",
    itemType: "president",
    name: "Alberto Fernández",
    period: "2019 - 2023",
    model: "Transición",
    type: "Constitucional",
    party: "PJ",
    votePercentage: "48.2%",
    voteCount: "~12.945.000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alberto_fernandez_presidente_%28cropped%29.jpg",
    events: [
      "Pandemia de COVID-19 y cuarentena.",
      "Renegociación de la deuda externa.",
      "Sequía histórica y altísima inflación.",
    ],
  },
  {
    id: "milei",
    itemType: "president",
    name: "Javier Milei",
    period: "2023 - 2026",
    model: "Apertura Radical",
    type: "Constitucional",
    party: "LLA",
    votePercentage: "55.6% (Balotaje)",
    voteCount: "~14.554.000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Retrato_oficial_Presidente_Milei.png",
    events: [
      "Ajuste fiscal ortodoxo (déficit cero).",
      "Desregulación profunda (DNU 70/2023).",
      "Aprobación de la Ley Bases y RIGI.",
    ],
  },
];

export default function App() {
  const [filter, setFilter] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPresident, setSelectedPresident] = useState(null);

  const [showIntro, setShowIntro] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  const [scrollPos, setScrollPos] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  const filteredPresidents = timelineItems.filter((p) => {
    const matchesModel = filter === "ALL" || p.model === filter;
    const matchesSearch =
      p.itemType === "video"
        ? p.title.toLowerCase().includes(searchTerm.toLowerCase())
        : p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesModel && matchesSearch;
  });

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleWheel = (e) => {
      if (
        scrollContainer &&
        e.deltaY !== 0 &&
        !e.shiftKey &&
        !selectedPresident &&
        !showIntro
      ) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY * 15.0;
      }
    };

    const handleKeyDown = (e) => {
      if (
        showIntro ||
        selectedPresident ||
        document.activeElement.tagName === "INPUT"
      )
        return;
      if (e.key === "ArrowRight") handleManualScroll("right");
      if (e.key === "ArrowLeft") handleManualScroll("left");
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
      window.removeEventListener("keydown", handleKeyDown);
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
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
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
    if (type.includes("De Facto") || type.includes("Dictadura")) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-[10px] font-bold bg-[#f4b6b6] text-[#7a1919] border border-[#d25f5f] shadow-sm uppercase tracking-wider">
          <ShieldAlert size={10} /> De Facto
        </span>
      );
    }
    if (type.includes("Asamblea") || type.includes("Sucesión")) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-[10px] font-bold bg-[#f5d9a0] text-[#7a4819] border border-[#d2a65f] shadow-sm uppercase tracking-wider">
          <RefreshCw size={10} /> {type}
        </span>
      );
    }
    if (type.includes("Fraude") || type.includes("Proscripción")) {
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .modal-scrollbar::-webkit-scrollbar { width: 8px; }
        .modal-scrollbar::-webkit-scrollbar-track { background: rgba(139, 69, 19, 0.1); border-radius: 4px; }
        .modal-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(139, 69, 19, 0.4); border-radius: 4px; }
      `,
        }}
      />

      <header className="shrink-0 bg-gradient-to-b from-[#3e2723] to-[#2c1c14] border-b-2 border-[#120b06] shadow-[0_5px_15px_rgba(0,0,0,0.9)] z-50 relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          <div className="flex items-center gap-4">
            <ScrollText className="text-[#d2a65f] hidden sm:block" size={32} />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-[#f5d9a0] tracking-wide uppercase drop-shadow-md">
                Línea de Tiempo Argentina
              </h1>
              <p className="text-[#a88665] text-xs sm:text-sm italic">
                De la consolidación Agroexportadora a la actualidad (1880 -
                2026)
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
          <div className="absolute bottom-10 right-20 sm:right-28 z-[35] pointer-events-none opacity-80 flex flex-col items-end mix-blend-multiply">
            <p className="text-[#5c3a21] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-0.5">
              Creado por
            </p>
            <p className="text-[#2c1a10] text-sm sm:text-xl font-black uppercase tracking-widest drop-shadow-sm">
              Gonzalo Chapelet
            </p>
          </div>
        )}

        {!showIntro && scrollProgress > 0 && (
          <button
            onClick={() => handleManualScroll("left")}
            className="absolute left-16 sm:left-24 top-1/2 -translate-y-1/2 z-[60] bg-[#2c1a10]/80 hover:bg-[#4e342e] text-[#d2a65f] p-3 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#8b4513] transition-all hover:scale-110 hidden md:flex backdrop-blur-sm"
          >
            <ChevronLeft size={28} />
          </button>
        )}
        {!showIntro && scrollProgress < 99 && (
          <button
            onClick={() => handleManualScroll("right")}
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
                backgroundImage:
                  'url("https://i.ibb.co/jYWvjK5/papel-de-papiro.jpg")',
                backgroundSize: "400px auto",
                backgroundPositionX: `${-scrollPos * 8.5}px`,
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
                backgroundImage:
                  'url("https://i.ibb.co/jYWvjK5/papel-de-papiro.jpg")',
                backgroundSize: "400px auto",
                backgroundPositionX: `${-scrollPos * 8.5}px`,
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
                backgroundImage:
                  'url("https://i.ibb.co/jYWvjK5/papel-de-papiro.jpg")',
                backgroundRepeat: "repeat",
                backgroundSize: "800px auto",
              }}
            >
              <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden shadow-[inset_60px_0_80px_rgba(30,15,5,0.7),inset_-60px_0_80px_rgba(30,15,5,0.7),inset_0_25px_40px_rgba(30,15,5,0.6),inset_0_-25px_40px_rgba(30,15,5,0.6)]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#3a1d0b]/40 via-transparent to-[#3a1d0b]/50 mix-blend-multiply"></div>
              </div>

              <div
                className="absolute top-0 left-0 right-0 h-5 sm:h-8 z-20 pointer-events-none"
                style={{
                  backgroundImage: `url("${edgeTop}")`,
                  backgroundSize: "150px 100%",
                }}
              ></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-5 sm:h-8 z-20 pointer-events-none"
                style={{
                  backgroundImage: `url("${edgeBottom}")`,
                  backgroundSize: "150px 100%",
                }}
              ></div>

              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5c3a21]/60 to-transparent transform -translate-y-1/2 z-10 shadow-[0_1px_3px_rgba(0,0,0,0.2)] pointer-events-none"></div>

              <div className="flex pl-[100px] pr-[150px] sm:pl-[120px] sm:pr-[250px] h-full items-center gap-6 sm:gap-10 py-8 relative z-30 transition-all duration-300">
                {filteredPresidents.length === 0 ? (
                  <div className="text-[#8b4513] text-xl italic px-20 flex flex-col items-center justify-center gap-4 w-full h-full">
                    <Search size={48} className="opacity-50" />
                    <span>
                      No hay registros en este fragmento del papiro...
                    </span>
                  </div>
                ) : (
                  filteredPresidents.map((president, index) => {
                    const isTop = index % 2 === 0;

                    if (president.itemType === "video") {
                      return (
                        <div
                          key={president.id}
                          className="relative w-[200px] h-[300px] flex flex-col justify-center shrink-0 group"
                        >
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="w-5 h-5 rounded-full border-4 border-[#e2c792] bg-[#a32929]"></div>
                          </div>
                          <div
                            className={`absolute left-1/2 w-0.5 bg-[#8b4513]/40 transform -translate-x-1/2 z-10 ${
                              isTop
                                ? "bottom-1/2 h-8 mb-2.5"
                                : "top-1/2 h-8 mt-2.5"
                            }`}
                          ></div>

                          <div
                            onClick={() => setSelectedPresident(president)}
                            className={`absolute left-0 right-0 bg-[#120b06] border border-[#a32929] shadow-lg rounded-sm p-3 flex flex-col items-center text-center cursor-pointer transition-all hover:scale-105 group-hover:z-50 ${
                              isTop ? "bottom-1/2 mb-6" : "top-1/2 mt-6"
                            }`}
                          >
                            <div className="w-full aspect-video bg-black rounded-sm border border-[#3e2723] overflow-hidden mb-3 relative">
                              <img
                                src={`https://img.youtube.com/vi/${president.embedId}/mqdefault.jpg`}
                                loading="lazy"
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Youtube
                                  size={32}
                                  className="text-white/80 group-hover:text-red-600 transition-colors drop-shadow-md"
                                />
                              </div>
                            </div>
                            <h3 className="text-xs font-bold text-[#f5d9a0] mb-1 leading-tight">
                              {president.title}
                            </h3>
                            <div className="flex items-center gap-1 text-[10px] text-[#a88665]">
                              <Clapperboard size={10} /> Cine Histórico
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={president.id}
                        className="relative w-[180px] h-[300px] flex flex-col justify-center shrink-0 group"
                      >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                          <div
                            className={`w-5 h-5 rounded-full border-4 border-[#e2c792] flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] ${
                              president.model === "MAE"
                                ? "bg-[#b88c47]"
                                : president.model === "ISI"
                                ? "bg-[#62778e]"
                                : president.model === "Convertibilidad"
                                ? "bg-[#4a7c59]"
                                : president.model === "Mercado Interno"
                                ? "bg-[#7c4a6b]"
                                : "bg-[#a34d4d]"
                            }`}
                          ></div>
                        </div>

                        <div
                          className={`absolute left-1/2 w-0.5 bg-[#8b4513]/40 transform -translate-x-1/2 z-10 ${
                            isTop
                              ? "bottom-1/2 h-8 mb-2.5"
                              : "top-1/2 h-8 mt-2.5"
                          }`}
                        ></div>

                        <div
                          onClick={() => setSelectedPresident(president)}
                          className={`absolute left-0 right-0 bg-[#fdfaf1] border border-[#a87f54] shadow-[2px_4px_12px_rgba(80,40,0,0.4)] rounded-sm p-3 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[4px_10px_20px_rgba(80,40,0,0.6)] hover:border-[#6a350f] group-hover:z-50 ${
                            isTop ? "bottom-1/2 mb-6" : "top-1/2 mt-6"
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
                                onError={(e) => (e.target.style.opacity = "0")}
                              />
                            )}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors z-0">
                              <BookOpen
                                size={24}
                                className="text-[#8b4513] opacity-40 group-hover:text-white group-hover:opacity-100 transition-all drop-shadow-md scale-75 group-hover:scale-100"
                              />
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
          {selectedPresident.itemType === "video" ? (
            <div
              className="relative w-full max-w-4xl bg-[#1a110a] border-4 border-[#a32929] rounded-sm p-6 shadow-2xl max-h-[90vh] overflow-y-auto modal-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPresident(null)}
                className="absolute -top-4 -right-4 bg-[#a32929] text-white rounded-full p-2 hover:scale-110"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-3 mb-4 text-[#f5d9a0] border-b border-[#a32929]/50 pb-4">
                <Youtube size={32} className="text-red-600" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
                    {selectedPresident.title}
                  </h2>
                  <p className="text-sm text-[#a88665] flex items-center gap-2">
                    <Calendar size={14} /> Época: {selectedPresident.period}
                  </p>
                </div>
              </div>

              <p className="text-[#d2a65f] text-sm mb-6 leading-relaxed italic border-l-4 border-red-800 pl-4">
                {selectedPresident.summary}
              </p>

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
                <p className="text-xs text-[#a88665] mb-3">
                  ¿El reproductor superior dice "Error de configuración" o
                  "Video no disponible"? (Ocurre por protección de derechos en
                  entornos cerrados).
                </p>
                <a
                  href={selectedPresident.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#a32929] hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-sm transition-colors uppercase text-sm tracking-wide"
                >
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
                    <h2 className="text-[#f5d9a0] text-xl sm:text-2xl font-bold drop-shadow-md mb-2 px-4">
                      {selectedPresident.name}
                    </h2>
                    <p className="text-[#d2a65f] text-lg font-bold flex items-center justify-center gap-2 mb-4">
                      <Calendar size={18} /> {selectedPresident.period}
                    </p>

                    <div className="flex flex-col gap-2 w-full px-4 mb-4">
                      <div className="flex flex-col items-center justify-center bg-[#2c1c14]/80 p-3 rounded-sm border border-[#5c3a21] shadow-inner w-full">
                        <div className="flex items-center justify-center gap-2 text-[#e2c792] text-xs mb-2 w-full">
                          <Flag size={14} className="text-[#8b4513] shrink-0" />
                          <span className="font-bold text-center leading-tight">
                            {selectedPresident.party}
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-[#a88665] text-xs w-full">
                          <Users
                            size={14}
                            className="text-[#8b4513] shrink-0"
                          />
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
                  {selectedPresident.model === "MAE" ? (
                    <Wheat size={180} />
                  ) : (
                    <Factory size={180} />
                  )}
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-[#5c3a21] mb-4 border-b-2 border-[#c19b6c] pb-2 uppercase tracking-wider flex items-center gap-3 shrink-0">
                  <BookOpen size={24} className="text-[#8b4513]" />
                  Hechos Históricos
                </h3>

                <div className="flex-1 overflow-y-auto modal-scrollbar pr-2 sm:pr-4 text-[#4e342e] font-sans">
                  <ul className="space-y-3 sm:space-y-4">
                    {selectedPresident.events.map((event, i) => (
                      <li
                        key={i}
                        className="flex items-start text-xs sm:text-sm md:text-base leading-relaxed bg-white/40 hover:bg-white/60 transition-colors p-3 rounded-sm border border-[#c19b6c]/30 shadow-sm"
                      >
                        <span className="mr-3 text-lg sm:text-xl leading-none text-[#8b4513] mt-0.5">
                          ✦
                        </span>
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
          <div
            className={`w-1/2 h-full bg-[#1a110a] flex justify-end items-center pointer-events-auto transition-transform duration-[1200ms] ease-in-out relative ${
              isOpening ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 flex flex-wrap content-center justify-around gap-6 p-4 md:p-8">
              {timelineItems
                .filter((p) => p.itemType === "president")
                .slice(0, 8)
                .map((p, i) => (
                  <img
                    key={p.id}
                    src={p.image}
                    alt=""
                    className={`w-24 h-32 md:w-32 md:h-44 object-cover sepia-[60%] grayscale-[60%] border-[4px] border-[#2c1406] shadow-2xl transform ${
                      i % 2 === 0 ? "-rotate-12" : "rotate-6"
                    } ${i > 3 ? "hidden md:block" : ""}`}
                  />
                ))}
            </div>
            <div
              className="w-12 sm:w-16 h-[75vh] border-y-2 border-l-2 border-[#120803] relative z-10 shadow-[inset_15px_0_20px_rgba(0,0,0,0.8)]"
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/jYWvjK5/papel-de-papiro.jpg")',
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
              <div className="absolute -top-3 -right-0 w-16 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-b from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-lg"></div>
              <div className="absolute -bottom-3 -right-0 w-16 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-t from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-lg"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full h-12 bg-gradient-to-b from-[#7f1d1d] via-[#b91c1c] to-[#7f1d1d] shadow-sm z-20"></div>
            </div>
          </div>

          <div
            className={`w-1/2 h-full bg-[#1a110a] flex justify-start items-center pointer-events-auto transition-transform duration-[1200ms] ease-in-out relative ${
              isOpening ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 flex flex-wrap content-center justify-around gap-6 p-4 md:p-8">
              {timelineItems
                .filter((p) => p.itemType === "president")
                .slice(20, 28)
                .map((p, i) => (
                  <img
                    key={p.id}
                    src={p.image}
                    alt=""
                    className={`w-24 h-32 md:w-32 md:h-44 object-cover sepia-[60%] grayscale-[60%] border-[4px] border-[#2c1406] shadow-2xl transform ${
                      i % 2 === 0 ? "rotate-12" : "-rotate-6"
                    } ${i > 3 ? "hidden md:block" : ""}`}
                  />
                ))}
            </div>
            <div
              className="w-12 sm:w-16 h-[75vh] border-y-2 border-r-2 border-[#120803] relative z-10 shadow-[inset_-15px_0_20px_rgba(0,0,0,0.8)]"
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/jYWvjK5/papel-de-papiro.jpg")',
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
              <div className="absolute -top-3 -left-0 w-16 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-b from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-lg"></div>
              <div className="absolute -bottom-3 -left-0 w-16 sm:w-20 h-6 sm:h-8 rounded-full bg-gradient-to-t from-[#8b5a33] to-[#3a1d0b] border-2 border-[#1a0c04] shadow-lg"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-12 bg-gradient-to-b from-[#7f1d1d] via-[#b91c1c] to-[#7f1d1d] shadow-sm z-20"></div>
            </div>
          </div>

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 pointer-events-none ${
              isOpening ? "opacity-0 scale-125" : "opacity-100 scale-100"
            }`}
          >
            <div className="mb-10 sm:mb-16 bg-[#f4e4c1] border-2 border-[#5c3a21] p-6 text-center rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.9)] max-w-[320px] sm:max-w-md pointer-events-auto z-[220]">
              <div className="flex justify-center mb-4">
                <img
                  src="https://i.ibb.co/mFBjDDfw/logoisp.png"
                  alt="Logo ISP 20"
                  className="h-20 sm:h-24 object-contain drop-shadow-md"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#4e342e] uppercase mb-1 tracking-wide">
                Archivo Histórico
              </h1>
              <p className="text-sm sm:text-md text-[#8b4513] font-semibold mb-4 border-b border-[#c19b6c] pb-3">
                Argentina 1880 - 2026
              </p>

              <p className="text-xs sm:text-sm text-[#4e342e] mb-4 font-sans leading-relaxed px-2">
                Esta línea de tiempo interactiva recorre la historia
                presidencial desde la consolidación del{" "}
                <strong className="text-[#8b4513]">
                  Modelo Agroexportador (MAE)
                </strong>{" "}
                hasta la actualidad.
              </p>

              <div className="w-full h-px bg-[#c19b6c] my-3"></div>
              <p className="text-xs text-[#5c3a21]">
                Creado por el alumno{" "}
                <strong className="uppercase font-bold text-[#4e342e]">
                  Gonzalo Chapelet
                </strong>
              </p>
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
                  <span className="text-[#fca5a5] text-sm font-bold uppercase tracking-widest drop-shadow-md">
                    Abrir
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

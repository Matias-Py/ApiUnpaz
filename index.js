const { response } = require("express")
const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())

let materias = [
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Análisis Matemático 1",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 1,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 01,
        "temas": "Ecuaciones e inecuaciones polinómicas, exponenciales y trigonométricas. Funciones reales de una variable. Límite funcional y continuidad. Cálculo Diferencial e Integral. Análisis de funciones. Sucesiones y series numéricas. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Arquitectura de Computadoras 1",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 1,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 02,
        "temas": "Digitales: códigos binarios. Álgebra de conmutación. Circuitos Combinacionales y Secuenciales. Computadoras digitales. Lenguaje Ensamblador. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Introduccion a la Programacion",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 1,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 03,
        "temas": "Sistemas de información. Algoritmos. Eficiencia de un algoritmo. Estructuras de control de flujo. Estructuras condicionales y repetitivas.Datos y Tipos de datos. Constantes y variables. Procedimientos.Funciones. Tipos de parámetros. Estructuras de datos. Algoritmos debúsqueda. Algoritmos de ordenamiento. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Estructuras Discretas",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 1,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 04,
        "temas": "Principios de conteo. Conjuntos. Operaciones entre conjuntos. Diagramas de Venn. Producto cartesiano. Relaciones. Funciones. Introducción a la lógica. Lógica proposicional. Tablas de verdad. Pruebas. Teoría de grafos. Grafos dirigidos. Árboles. Matriz de adyacencia. Isomorfismo. Caminos y ciclos. Expresiones lambda. Hashing. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Ciencia, Tecnología y Sociedad",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 1,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 05,
        "temas": "Historia de la Informática. Teoría General de Sistemas. Pensamiento sistémico. Información. Computación y sociedad. Estructuras organizativas y sistemas de información. Los sistemas y su entorno. Sistematización. Automatización. El rol de los usuarios en el desarrolloy utilización de sistemas. Stakeholders. Software libre.Responsabilidad y ética profesional. "
    },
    {
        "correlativas" : [{"materia" : "Análisis Matemático 1"}],
        "nombre": "Análisis Matemático 2",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 2,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 06,
        "temas": "Funciones de varias variables reales. Curvas y superficies de nivel. Cálculo diferencial e integral de funciones de varias variables. Introducción a las ecuaciones diferenciales ordinarias de primer y segundo orden. "
    },
    {
        "correlativas" : [{"materia" : "Análisis Matemático 1"}],
        "nombre": "Álgebra y Geometria Analítica",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 2,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 07,
        "temas": "Números complejos. Sistemas de ecuaciones lineales. Álgebra Vectorial. Recta y Plano en el espacio. Matrices. Determinantes. Rn como espacio vectorial, subespacios, transformaciones lineales, cambio de base. Autovalores y autovectores. Formas bilineales. Estructuras algebraicas. Geometría Analítica. Sistemas de representación. "
    },
    {
        "correlativas" : [{"materia" : "Introducción a la Programacion"},{"materia" : "Estructuras Discretas"}],
        "nombre": "Algoritmos y programacion",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 2,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 08,
        "temas": "Estructuras de datos lineales. Pilas, listas y colas. Recursividad. Manejo dé memoria en ejecución. Corrección y verificación. Análisis de Algoritmos. Cálculo de tiempo y orden de ejecución. Estructuras de datos no lineales. Algoritmos de recorrido, búsqueda y actualización de árboles. Algoritmos de recorrido de grafos. Abstracción de datos. Encapsulamiento de datos. Archivos. Procesamiento de un lenguaje. "
    },
    {
        "correlativas" : [{"materia" : "Arquitectura de Computadoras 1"},{"materia" : "Ciencia Tecnología y Sociedad"}],
        "nombre": "Arquitectura de Computadoras 2",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 2,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 09,
        "temas": "Memoria. Segmentación del Cauce (Pipeline). Arquitectura de computadoras paralelas. Análisis de las tecnologías actuales de arquitecturas de computadoras. "
    },
    {
        "correlativas" : [{"materia" : "Ciencia Tecnología y Sociedad"}],
        "nombre": "Inglés 1",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 2,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 10,
        "temas": "Estructuras gramaticales. Morfología. Tiempos verbales. Verbos regulares e irregulares. Lengua comprensiva y análisis de textos. "
    },
    {
        "correlativas" : [{"materia" : "Inglés"},{"materia" : "Arquitectura de Computadoras 1"}],
        "nombre": "Sistemas Operativos 1",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 3,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 11,
        "temas": "Sistemas Operativos, concepto, evolución, estructura y servicios que brindan. Inicialización y configuración de un Sistema Operativos. Gestión de Procesos e Hilos. Gestión de Memoria. Gestión de Archivos. Gestión de Entrada/Salida. "
    },
    {
        "correlativas" : [{"materia" : "Análisis Matemático 1"}],
        "nombre": "Economía General",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 3,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 12,
        "temas": "Economía como ciencia social. Teoría de las precios. Los autores clásicos y la teoría del valor. El concepto de utilidad marginal y la elección del consumidor. La curva de demanda. La maximización de beneficios de las empresas. El costo marginal y la curva de oferta. Equilibrio de mercado. Elasticidades. Introducción a la macroeconomía. Contabilidad nacional. La ley de Say y el mercado de trabajo neoclásico. Modelo simple de determinación de la renta. El multiplicador keynesiano. Política fiscal. El dinero y ta política monetaria. La balanza de pagos y el tipo de cambio. La inflación, causas y consecuencias. La visión estructuralista latinoamericana."
    },
    {
        "correlativas" : [{"materia" : "Inglés"}],
        "nombre": "Inglés 2",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 3,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 13,
        "temas": "Lectura selectiva. Vocabulario técnico. Verbos de modalidad. Voz pasiva. Comparativos y superlativos. "
    },
    {
        "correlativas" : [{"materia" : "Introducción a la Programacion"},{"materia" : "Estructura Discretas"},{"materia" : "Ciencia Tecnología y Sociedad"}],
        "nombre": "Ingeniería de Software 1",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 3,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 14,
        "temas": "El proceso de desarrollo de software. Ciclos de vida de software. Modelos de calidad de procesos. Elicitación, análisis y documentación de requerimientos. Estándares de especificaciones de requerimientos de sistemas de información. Lenguajes de modelado de software. Lenguajes de modelado de sistemas. Calidad de software. Aseguramiento y estándares de calidad. "
    },
    {
        "correlativas" : [{"materia" : "Introducción a la Programacion"}],
        "nombre": "Paradigmas de Programación",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 3,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 15,
        "temas": "Principios de diseño de los lenguajes. Lenguajes funcionales. Lenguajes orientados a objetos. Pasaje de rutinas como parámetros. Sistema de tipos. Paradigmas de lenguajes. Paradigma imperativo. Paradigma funcional: conceptos, estudio y práctica de lenguajes funcionales. Conceptos de paradigma orientado a objetos. Paradigma lógico: conceptos. Estudio de lenguajes y práctica de programación lógica. "
    },
    {
        "correlativas" : [{"materia" : "Sistemas Operativos 1"}],
        "nombre": "Sistemas Operativos 2",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 4,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 16,
        "temas": "Sistemas operativos de tiempo real y sistemas distribuidos, conceptos y arquitecturas. Sistemas empotrados. Sistemas operativos no convencionales. Concurrencia. Modelo cliente servidor. Gestión de procesos distribuidos. Planificación de multiprocesamiento distribuido. Manejo de archivos en sistemas distribuidos. Transacciones distribuidas. Control de concurrencia en Sistemas distribuidos. Servicios web, SOA, XML, cloud computing. Tópicos de seguridad en sistemas distribuidos. "
    },
    {
        "correlativas" : [{"materia" : "Paradigma de programación"}],
        "nombre": "Laboratorio de Programación y Lenguajes",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 4,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 17,
        "temas": "Aplicación de lenguajes de programación. Estudios de lenguajes de programación según distintas necesidades y aplicaciones. Problemáticas de compatibilidad entre lenguajes. Instalación y configuración de lenguajes en distintos sistemas operativos. Desarrollo de un proyecto de programación en un lenguaje particular. "
    },
    {
        "correlativas" : [{"materia" : "Algoritmos y programacion"}],
        "nombre": "Programación Orientada a Objetos",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 4,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 18,
        "temas": "Problemas de las técnicas procedurales. Clases y Objetos. Programas orientado a objetos. Encapsulamiento. Atributos. Propiedades de los atributos. Mensaje y método. Jerarquías de clases. Herencia. Clases abstractas. Polimorfismo y binding dinámico. Diseño de objetos complejos. Relaciones entre objetos. Objetos contenedores. Colecciones de objetos. Lenguajes orientados a objetos. "
    },
    {
        "correlativas" : [{"materia" : "estructura Discretas"},{"materia" : "Algebra y Geometria Analítica"}],
        "nombre": "Base de Datos 1",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 4,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 19,
        "temas": "Modelos de datos. Modelo relacional. Algebra relacional. Modelo entidad - relación. introducción al diseño de bases de datos relacional. Perspectiva lógica del modelo relacional. Sistemas de gestión de bases de datos. Normalización. Lenguajes de definición de datos. Lenguajes de manipulación de datos. Lenguajes de control de"
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Administración 1",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 4,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 20,
        "temas": "Organización. Tipología organizacional. La administración como disciplina. La gestión administrativa. La toma de decisiones. Planeamiento estratégico y planeamiento táctico. Elementos del diseño de la organización. La estructura organizativa. Los procesos. El factor humano en la organización. Clima y cultura. Poder y autoridad. Concepto y estilos de liderazgo. Comunicación. Conceptos básicos de administración de recursos humanos. Sistemas de información y control. El proceso de control. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Probabilidad y Estadísticas",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 5,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 21,
        "temas": "Modelos estadísticos. Variables aleatorias unidimensionales. Variables aleatorias bidimensionales. Distribuciones de variables aleatorias particulares. Estadística descriptiva. Inferencia estadística. Ensayo de hipótesis. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Comunicaciones y Redes",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 5,
        "CargaSemanal": 6,
        "cargaTotal": 96,
        "id": 22,
        "temas": "Introducción a tecnologías de redes. Modelos de referencia OSI/ISO. Medios físicos. Conceptos y tecnologías de capa enlace. Protocolo IP. Conceptos y tecnologías de capa de red. Conceptos y tecnologías de servicios de la capa de Transporte. Capa de aplicación. Servicios de capa de aplicación. Características de sistemas operativos de redes. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Ingeniería de Software 2",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 5,
        "CargaSemanal": 6,
        "cargaTotal": 96,
        "id": 23,
        "temas": "Lenguajes de modelado de sistemas, refinamiento de modelos de análisis y modelos en el diseño de sistemas. Diseño de interfaz de usuario. Diseño de arquitectura. Patrones de diseño. Pruebas de software. Verificación y validación. Métricas. Gestión del riesgo. Gestión de configuración. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Administración 2",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 5,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 24,
        "temas": "Organización como sistema complejo de información y control. Caracterización de sistemas administrativos y elementos que lo constituyen. Los modelos de sistemas. Las áreas de la organización: funciones y procesos. Niveles de autoridad. Sistemas componentes. Tecnología de los sistemas aplicados a la gestión. Diferentes formas de diseño de la organización. Los circuitos de normatización. Procedimientos para la formulación de presupuestos y evaluación del control interno. Presupuestos de ingresos, costos, producción, gastos e inversiones. Auditoría de sistemas administrativos. Sistemas de Control de Gestión. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Laboratorio de Software",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 6,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 25,
        "temas": "Herramientas de modelado de sistemas. Características y comparación de frameworks de desarrollo de software. Implementación de bases de datos relacionales. Implementación de bases de datos no relacionales. Implementación de persistencia de datos en el software. Implementación de comunicación entre sistemas software. Sistemas de control de versiones. Ejemplos y prácticas de implementación de software aplicando diferentes metodologías de ciclo de vida de desarrollo de software. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Base de Datos 2",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 6,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 26,
        "temas": "Modelos de Bases de Datos Orientados a Objetos. Modelos de Datos Relacional Extendido. Bases de datos XML. Bases de datos No SQL. Lenguajes de consulta orientados a objetos. Mapeo objeto relacional. introducción a la integración de las base de datos a la aplicaciones. "
    },
    {
        "correlativas" : [],
        "nombre": "Contabilidad 1",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 6,
        "CargaSemanal": 6,
        "cargaTotal": 96,
        "id": 27,
        "temas": "Marco conceptual de la contabilidad. Registración de diversas Operaciones en distintos tipos de organizaciones. Sistema Contable. Objetivos de! sistema contable: Informes. Estructuración del sistema contable. Métodos de Procesamiento. Función de la contabilidad. Ecuación contable estática y dinámica. Partida doble. Patrimonio y Contabilidad. Variaciones Patrimoniales, Registraciones en Libro Diario y Libros Auxiliares. Concepto y componentes del Patrimonio. Operaciones y hechos económicos. La contabilidad y sus segmentos: patrimonial o financiero, gubernamental, social y ambiental, económica y de gestión. Informes contables como salida de información. Balances de saldos y presentación de estados contables. Estado de Situación Patrimonial, Estado de Resultados, Estado de Evolución del Patrimonio Neto, Estado de Flujo Efectivo. Cuadros y Anexos. Información complementaria. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Trabajo de Campo",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 6,
        "CargaSemanal": 6,
        "cargaTotal": 96,
        "id": 28,
        "temas": "Aspectos avanzados de lenguajes de modelado de sistemas, lenguajes de programación y bases de datos. Desarrollo de trabajo integrador de aplicación de todos los conocimientos adquiridos con la finalidad de consolidar la formación experimental aplicando todas las etapas conceptuales de! ciclo de vida de software. Producción de entregables de proyecto de software: modelos, empaquetamiento de código, estrategias de implantación y documentación. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Investigación operativa",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 7,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 29,
        "temas": "Problemas de optimización. Programación lineal. Programación no lineal. Teoría de juegos. Teoría de colas. Modelos de inventarios. Flujo en Redes. Métodos de camino crítico. Teoría de decisiones. Generación de números pseudoaleatorios. Simulación de sistemas. Métodos de simulación. Dinámica de sistemas. Modelado basado en agentes. Modelado de eventos discretos. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Arquitectura web",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 7,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 30,
        "temas": "Ciclo de Vida de Desarrollo de Aplicaciones Web. Arquitectura de Aplicaciones Web. Arquitectura Orientada a Servicios. Evolución de la Web: web 1.0, 1.5, 2.0 y posteriores. Web Services. Arquitectura de Software Aplicaciones N-Capa. Tecnologías web. Metodologías de diseño, tecnologías de desarrollo y herramientas de validación de aplicaciones. Accesibilidad y Usabilidad de Aplicaciones "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Seguridad Informática",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 7,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 31,
        "temas": "Fundamentos de seguridad informática. Factores humano, lógico y físico. Políticas, y procedimientos de seguridad. Área de seguridad informática en una organización. Vulnerabilidades de sistemas informáticos. Arquitecturas de seguridad en sistemas informáticos de organizaciones. Planes de contingencias y continuidad de negocios. Leyes, normas, regulaciones sobre delitos informáticos. Auditoría, peritaje e informática forense. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Administración de Recursos Humanos",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 7,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 32,
        "temas": "Gestión Integral de Recursos Humanos: Concepto, objetivos, funciones, procesos. Modelos de gestión en las organizaciones laborales. Problemática del empleo y desempleo. Impacto de los aspectos sociales en las Organizaciones. Planeamiento organizacional y planificación estratégica de recursos humanos. Comportamiento organizacional: individuo, grupo, organización. Selección, capacitación y desarrollo. Administración de Personal. Estructura organizacional. Remuneraciones: compensaciones y beneficios. Calidad de vida laboral. Relaciones laborales. Legislación vigente. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Contabilidad Avanzada",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 7,
        "CargaSemanal": 6,
        "cargaTotal": 96,
        "id": 33,
        "temas": "Sistemas administrativos. Conceptualización y clasificación de modelos. Caracterización y elementos constitutivos. Metodología de análisis, diseño e implementación. Principales conceptos de la Auditoría Operativa. La independencia como requisito esencial. El riesgo en Auditoría. Evaluación de los elementos de control. Planificación. Procedimientos. Papeles de Trabajo. Examen de los rubros de los estados contables, su análisis e interpretación. Teoría general de costos. Costo para la toma de decisiones. Uso de los costos de gestión. Elementos de costos y su tratamiento. Costos de no producción, comercialización, administrativos y financieros. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Sistemas Inteligentes",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 8,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 34,
        "temas": "Fundamentos de inteligencia artificial. Agentes inteligentes. Sistemas multiagentes. Aprendizaje automático supervisado y no supervisado. Árboles de decisiones. Redes neuronales artificiales. Perceptrón. Backpropagation. Mapas autoorganizados. Introducción a las redes de aprendizaje profundo. Algoritmos genéticos. Computación evolutiva. Inteligencia de enjambre. Redes bayesianas. Máquinas de vectores de soporte." 
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Gestión de la tecnología",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 8,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 35,
        "temas": "Tipos de sistemas de información en las organizaciones. Sistemas de gestión de procesos. Sistemas de soporte a la toma de decisiones. Otros sistemas de gestión. Reingeniería de procesos. Gestión del cambio en implementaciones de sistemas. Estructura y gestión de áreas de TIC. Planes estratégicos de TIC. Legislación relacionada a la gestión de las TIC. Auditoría informática. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Comercialización",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 8,
        "CargaSemanal": 6,
        "cargaTotal": 96,
        "id": 36,
        "temas": "La comercialización en las organizaciones, los negocios y la sociedad. Valor. Calidad de Servicio al Cliente. Ética. Marketing y Sociedad. Marketing no empresarial. Organización, Planeamiento y Estrategias Competitivas. Conducta de compra del consumidor. Marketing de negocio a negocio. Segmentación, Diferenciación, Posicionamiento. Inteligencia Comercial e Investigación de mercado. Producto. Servicio. Logística y Canales de distribución. Comunicaciones integradas. Publicidad y RRPP. Promoción — Marketing Directo y Ventas Personales. Precios. El mercado global. El Marketing en la era digital. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Planificación Financiera y Proyecto de Inversion",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 8,
        "CargaSemanal": 6,
        "cargaTotal": 96,
        "id": 37,
        "temas": "Regímenes financieros de interés simple y compuesto. Rentas; temporales y perpetuas, constantes y variables (de progresión  aritmética y geométrica), inmediatas y diferidas, vencidas y adelantadas, enteras y fraccionadas. Valuación de proyectos de inversión; Payback, Tasa Contable de Ganancia, Plazo de recupero ajustado, VAN, TIR, TIRM, Índice de rentabilidad. Análisis financiero. Inversión bajo certidumbre. Tratamiento del riesgo y la incertidumbre en las decisiones financieras. Flujos de caja. Decisiones de financiamiento (corto, mediano y targo plazo), efecto de la palanca financiera. Sistemas especiales de financiamiento. Estructura financiera y costo de capital. Evaluación financiera y Análisis de Escenarios. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Optativa 1",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 8,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 38,
        "temas": "Elección entre OP1, OP2 ó OP3. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Gestión de Proyectos",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 9,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 39,
        "temas": "Dirección de Proyectos. Identificación de necesidades. La Dirección de Proyectos. Gestión de requisitos. Gestión de Integración. Gestión del Alcance. Gestión de Tiempos y la gestión de Costos. Gestión de la configuración. Gestión del mantenimiento. Rentabilidad. Financiamiento. Amortización de proyectos. Proyectos de 18:D "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Inteligencia de negocios",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 9,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 40,
        "temas": "Almacenes de datos. Gestión de grandes volúmenes de datos. Minería de datos. Bases de datos OLAP y OLTP. Desnormalización. Etiquetado. Estandarización. Algoritmos de reconocimiento de patrones. Aplicación de algoritmos de aprendizaje automático: clasificación, clusterización, regresión y reducción de dimensionalidad. Trabajo con datos no estructurados. Procesamiento del lenguaje natural. Gestión de proyectos de inteligencia de negocios. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Optativa 2",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 9,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 41,
        "temas": "Elección entre OP4, OP5 ó OP6. "
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Direccion Estratégica",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 9,
        "CargaSemanal": 4,
        "cargaTotal": 64,
        "id": 42,
        "temas":"Naturaleza de la dirección estratégica. Que es la dirección estratégica. Acerca del proceso estratégico. Poder y política en las organizaciones. El liderazgo organizacional. Administración de conflictos. El proceso  estratégico. Definición del rumbo. El diagnóstico estratégico. Identificación y selección de la estrategia. Alcances del concepto de estrategia. Estrategia de negocio. La estrategia corporativa. Estrategias globales. Naturaleza de la implantación de la estrategia. Distribución de recursos. Estructura y estrategia. Gestión del cambio. Control y revisión de la estrategia. Introducción al pensamiento ético. El marco ético de das organizaciones. La responsabilidad social. Hacia una dirección ética. " 
    },
    {
        "correlativas" : [{"materia" : ""}],
        "nombre": "Trabajo final de grado",
        "tipo": "Cuatrimestral",
        "cuatrimestre": 9,
        "CargaSemanal": 6,
        "cargaTotal": 96,
        "id": 43,
        "temas": "Impacto de los sistemas de información en las organizaciones. Modelos de calidad, maduración de procesos y abordaje de problemáticas de gestión de proyectos. Propiedad intelectual. Licencias de software. Desarrollo de un proyecto de sistema de información, modelo de proceso, servicio o producto que aplique e  integre los contenidos teóricos y prácticos aprendidos durante la carrera. "
    }
]

app.get("/",(request, response) => {
    response.send("<h1>Espero esto te sea de ayuda 😉</h1>")
})

app.get("/lgti/materias",(request,response) => {
    response.json(materias)
})

app.get("/lgti/materias/:id",(request,response) => {
    const id = Number(request.params.id)
    const materia = materias.find(m => m.id === id)
    if(materia){
        response.json(materia)
    }else{
        response.status(404).end()
    }
})

const PORT = process.env.PORT || 8008
app.listen(PORT, () => {
    console.log("Servidor en funcionamiento")
})

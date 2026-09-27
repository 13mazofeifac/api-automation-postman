------------------------------------------------------------------------

Índice

[1. Introducción [2](#introducción)](#introducción)

[2. Objetivos de la investigación [3](#objetivos-de-la-investigación)](#objetivos-de-la-investigación)

[2.1 Objetivo general [3](#objetivo-general)](#objetivo-general)

[2.2 Objetivos específicos [3](#objetivos-específicos)](#objetivos-específicos)

[3. ¿Qué es una API? [4](#qué-es-una-api)](#qué-es-una-api)

[3.1 Componentes de una API [4](#componentes-de-una-api)](#componentes-de-una-api)

[4. Funcionamiento de una API [5](#funcionamiento-de-una-api)](#funcionamiento-de-una-api)

[5. Arquitecturas de APIs [6](#arquitecturas-de-apis)](#arquitecturas-de-apis)

[5.1 REST (Representational State Transfer) [6](#rest-representational-state-transfer)](#rest-representational-state-transfer)

[5.2 SOAP (Simple Object Access Protocol) [7](#soap-simple-object-access-protocol)](#soap-simple-object-access-protocol)

[6. Comparación entre REST y SOAP [7](#comparación-entre-rest-y-soap)](#comparación-entre-rest-y-soap)

[7. Importancia de las APIs en el desarrollo moderno [8](#importancia-de-las-apis-en-el-desarrollo-moderno)](#importancia-de-las-apis-en-el-desarrollo-moderno)

[8. Protocolo HTTP en las APIs [8](#protocolo-http-en-las-apis)](#protocolo-http-en-las-apis)

[9. Estructura de una solicitud HTTP [8](#estructura-de-una-solicitud-http)](#estructura-de-una-solicitud-http)

[9.1 Método HTTP [8](#método-http)](#método-http)

[9.2 URL o Endpoint [9](#url-o-endpoint)](#url-o-endpoint)

[9.3 Headers (Encabezados) [9](#headers-encabezados)](#headers-encabezados)

[10. Métodos HTTP utilizados en APIs REST [10](#métodos-http-utilizados-en-apis-rest)](#métodos-http-utilizados-en-apis-rest)

[10.1 GET [10](#get)](#get)

[10.2 POST [11](#post)](#post)

[201 Created [11](#created)](#created)

[10.3 PUT [11](#put)](#put)

[200 OK [11](#ok)](#ok)

[10.4 PATCH [11](#patch)](#patch)

[10.5 DELETE [12](#delete)](#delete)

[200 OK [12](#ok-1)](#ok-1)

[204 No Content [12](#no-content)](#no-content)

[11. Parámetros en APIs [12](#parámetros-en-apis)](#parámetros-en-apis)

[11.1 Path Parameters [12](#path-parameters)](#path-parameters)

[11.2 Query Parameters [12](#query-parameters)](#query-parameters)

[11.3 Body Parameters [13](#body-parameters)](#body-parameters)

[12. Formatos de intercambio de información [13](#formatos-de-intercambio-de-información)](#formatos-de-intercambio-de-información)

[12.1 JSON (JavaScript Object Notation) [13](#json-javascript-object-notation)](#json-javascript-object-notation)

[12.2 XML (eXtensible Markup Language) [14](#xml-extensible-markup-language)](#xml-extensible-markup-language)

[13. Códigos de estado HTTP [14](#códigos-de-estado-http)](#códigos-de-estado-http)

[13.1 Códigos 1xx - Información [15](#códigos-1xx---información)](#códigos-1xx---información)

[100 Continue [15](#continue)](#continue)

[13.2 Códigos 2xx - Respuestas exitosas [15](#códigos-2xx---respuestas-exitosas)](#códigos-2xx---respuestas-exitosas)

[200 OK [15](#ok-2)](#ok-2)

[200 OK [15](#ok-3)](#ok-3)

[201 Created [15](#created-1)](#created-1)

[201 Created [15](#created-2)](#created-2)

[204 No Content [16](#no-content-1)](#no-content-1)

[204 No Content [16](#no-content-2)](#no-content-2)

[13.3 Códigos 3xx - Redirecciones [16](#códigos-3xx---redirecciones)](#códigos-3xx---redirecciones)

[301 Moved Permanently [16](#moved-permanently)](#moved-permanently)

[304 Not Modified [16](#not-modified)](#not-modified)

[13.4 Códigos 4xx - Errores del cliente [16](#códigos-4xx---errores-del-cliente)](#códigos-4xx---errores-del-cliente)

[400 Bad Request [16](#bad-request)](#bad-request)

[401 Unauthorized [16](#unauthorized)](#unauthorized)

[403 Forbidden [17](#forbidden)](#forbidden)

[404 Not Found [17](#not-found)](#not-found)

[404 Not Found [17](#not-found-1)](#not-found-1)

[405 Method Not Allowed [17](#method-not-allowed)](#method-not-allowed)

[13.5 Códigos 5xx - Errores del servidor [17](#códigos-5xx---errores-del-servidor)](#códigos-5xx---errores-del-servidor)

[500 Internal Server Error [17](#internal-server-error)](#internal-server-error)

[502 Bad Gateway [17](#bad-gateway)](#bad-gateway)

[503 Service Unavailable [18](#service-unavailable)](#service-unavailable)

[14. Importancia de validar códigos HTTP en pruebas automatizadas [18](#importancia-de-validar-códigos-http-en-pruebas-automatizadas)](#importancia-de-validar-códigos-http-en-pruebas-automatizadas)

[200 OK [18](#ok-4)](#ok-4)

[404 Not Found [18](#not-found-2)](#not-found-2)

[15. Relación entre HTTP y pruebas automatizadas [18](#relación-entre-http-y-pruebas-automatizadas)](#relación-entre-http-y-pruebas-automatizadas)

[Conclusión [19](#conclusión)](#conclusión)

[16. ¿Qué son las pruebas de APIs? [19](#qué-son-las-pruebas-de-apis)](#qué-son-las-pruebas-de-apis)

[17. Importancia de las pruebas de APIs [20](#importancia-de-las-pruebas-de-apis)](#importancia-de-las-pruebas-de-apis)

[17.1 Detección temprana de errores [20](#detección-temprana-de-errores)](#detección-temprana-de-errores)

[17.2 Mayor confiabilidad del software [21](#mayor-confiabilidad-del-software)](#mayor-confiabilidad-del-software)

[17.3 Facilita la integración entre sistemas [21](#facilita-la-integración-entre-sistemas)](#facilita-la-integración-entre-sistemas)

[17.4 Automatización y ahorro de tiempo [21](#automatización-y-ahorro-de-tiempo)](#automatización-y-ahorro-de-tiempo)

[18. Pruebas manuales vs pruebas automatizadas [21](#pruebas-manuales-vs-pruebas-automatizadas)](#pruebas-manuales-vs-pruebas-automatizadas)

[18.1 Pruebas manuales [22](#pruebas-manuales)](#pruebas-manuales)

[18.2 Pruebas automatizadas [22](#pruebas-automatizadas)](#pruebas-automatizadas)

[• 50 solicitudes. [22](#solicitudes.)](#solicitudes.)

[19. Tipos de pruebas de APIs [23](#tipos-de-pruebas-de-apis)](#tipos-de-pruebas-de-apis)

[19.1 Pruebas funcionales [23](#pruebas-funcionales)](#pruebas-funcionales)

[19.2 Pruebas de validación de datos [23](#pruebas-de-validación-de-datos)](#pruebas-de-validación-de-datos)

[19.3 Pruebas de integración [24](#pruebas-de-integración)](#pruebas-de-integración)

[19.4 Pruebas de regresión [24](#pruebas-de-regresión)](#pruebas-de-regresión)

[19.5 Pruebas de rendimiento [25](#pruebas-de-rendimiento)](#pruebas-de-rendimiento)

[500 usuarios realizando solicitudes simultáneamente. [25](#usuarios-realizando-solicitudes-simultáneamente.)](#usuarios-realizando-solicitudes-simultáneamente.)

[19.6 Pruebas de seguridad [26](#pruebas-de-seguridad)](#pruebas-de-seguridad)

[401 Unauthorized [26](#unauthorized-1)](#unauthorized-1)

[19.7 Pruebas de contrato (Contract Testing) [26](#pruebas-de-contrato-contract-testing)](#pruebas-de-contrato-contract-testing)

[19.8 Smoke Testing [27](#smoke-testing)](#smoke-testing)

[20. Metodologías para pruebas de APIs [27](#metodologías-para-pruebas-de-apis)](#metodologías-para-pruebas-de-apis)

[20.1 Pruebas basadas en requisitos [27](#pruebas-basadas-en-requisitos)](#pruebas-basadas-en-requisitos)

[20.2 Pruebas basadas en riesgos [27](#pruebas-basadas-en-riesgos)](#pruebas-basadas-en-riesgos)

[20.3 Pruebas exploratorias [28](#pruebas-exploratorias)](#pruebas-exploratorias)

[20.4 Desarrollo guiado por pruebas (TDD) [28](#desarrollo-guiado-por-pruebas-tdd)](#desarrollo-guiado-por-pruebas-tdd)

[20.5 Integración Continua (CI/CD) [28](#integración-continua-cicd)](#integración-continua-cicd)

[21. Diseño de casos de prueba para APIs [29](#diseño-de-casos-de-prueba-para-apis)](#diseño-de-casos-de-prueba-para-apis)

[Conclusión [30](#conclusión-1)](#conclusión-1)

[22. Automatización de pruebas de APIs [30](#automatización-de-pruebas-de-apis)](#automatización-de-pruebas-de-apis)

[23. Importancia de automatizar pruebas de APIs [31](#importancia-de-automatizar-pruebas-de-apis)](#importancia-de-automatizar-pruebas-de-apis)

[23.1 Reducir tiempos de ejecución [31](#reducir-tiempos-de-ejecución)](#reducir-tiempos-de-ejecución)

[23.2 Mejorar la repetibilidad [31](#mejorar-la-repetibilidad)](#mejorar-la-repetibilidad)

[23.3 Incrementar la cobertura [32](#incrementar-la-cobertura)](#incrementar-la-cobertura)

[23.4 Facilitar integración continua [32](#facilitar-integración-continua)](#facilitar-integración-continua)

[24. Componentes de una automatización de APIs [32](#componentes-de-una-automatización-de-apis)](#componentes-de-una-automatización-de-apis)

[24.1 Herramienta de automatización [32](#herramienta-de-automatización)](#herramienta-de-automatización)

[24.2 Scripts de validación [32](#scripts-de-validación)](#scripts-de-validación)

[24.3 Datos de prueba [33](#datos-de-prueba)](#datos-de-prueba)

[24.4 Ambientes [33](#ambientes)](#ambientes)

[24.5 Reportes [33](#reportes)](#reportes)

[25. Herramientas utilizadas para automatización de APIs [33](#herramientas-utilizadas-para-automatización-de-apis)](#herramientas-utilizadas-para-automatización-de-apis)

[25.1 Postman [34](#postman)](#postman)

[25.2 Newman [34](#newman)](#newman)

[25.3 REST Assured [35](#rest-assured)](#rest-assured)

[25.4 Karate Framework [36](#karate-framework)](#karate-framework)

[25.5 Cypress [36](#cypress)](#cypress)

[25.6 Playwright [37](#playwright)](#playwright)

[26. Comparación general de herramientas [37](#comparación-general-de-herramientas)](#comparación-general-de-herramientas)

[27. Buenas prácticas para automatización de APIs [37](#buenas-prácticas-para-automatización-de-apis)](#buenas-prácticas-para-automatización-de-apis)

[27.1 Mantener pruebas independientes [38](#mantener-pruebas-independientes)](#mantener-pruebas-independientes)

[27.2 Usar variables de entorno [38](#usar-variables-de-entorno)](#usar-variables-de-entorno)

[27.3 Crear nombres claros [38](#crear-nombres-claros)](#crear-nombres-claros)

[27.4 Validar respuestas completas [38](#validar-respuestas-completas)](#validar-respuestas-completas)

[27.5 Mantener datos separados del código [39](#mantener-datos-separados-del-código)](#mantener-datos-separados-del-código)

[27.6 Generar evidencia de resultados [39](#generar-evidencia-de-resultados)](#generar-evidencia-de-resultados)

[28. Integración con CI/CD [39](#integración-con-cicd)](#integración-con-cicd)

[29. Manejo de ambientes en automatización [40](#manejo-de-ambientes-en-automatización)](#manejo-de-ambientes-en-automatización)

[30. Seguridad en pruebas automatizadas [40](#seguridad-en-pruebas-automatizadas)](#seguridad-en-pruebas-automatizadas)

[Conclusión [41](#conclusión-2)](#conclusión-2)

[31. Estrategia recomendada para implementar pruebas de APIs [41](#estrategia-recomendada-para-implementar-pruebas-de-apis)](#estrategia-recomendada-para-implementar-pruebas-de-apis)

[31.1 Análisis de requerimientos [42](#análisis-de-requerimientos)](#análisis-de-requerimientos)

[31.2 Definición de alcance de pruebas [42](#definición-de-alcance-de-pruebas)](#definición-de-alcance-de-pruebas)

[31.3 Diseño de casos de prueba [43](#diseño-de-casos-de-prueba)](#diseño-de-casos-de-prueba)

[31.4 Automatización progresiva [43](#automatización-progresiva)](#automatización-progresiva)

[31.5 Mantenimiento de pruebas automatizadas [44](#mantenimiento-de-pruebas-automatizadas)](#mantenimiento-de-pruebas-automatizadas)

[32. Arquitectura recomendada para un proyecto de automatización API [44](#arquitectura-recomendada-para-un-proyecto-de-automatización-api)](#arquitectura-recomendada-para-un-proyecto-de-automatización-api)

[33. Gestión de datos de prueba [45](#gestión-de-datos-de-prueba)](#gestión-de-datos-de-prueba)

[33.1 Datos estáticos [46](#datos-estáticos)](#datos-estáticos)

[33.2 Datos dinámicos [46](#datos-dinámicos)](#datos-dinámicos)

[33.3 Datos parametrizados [46](#datos-parametrizados)](#datos-parametrizados)

[34. Manejo de errores en pruebas automatizadas [47](#manejo-de-errores-en-pruebas-automatizadas)](#manejo-de-errores-en-pruebas-automatizadas)

[401 Unauthorized [47](#unauthorized-2)](#unauthorized-2)

[404 Not Found [47](#not-found-3)](#not-found-3)

[400 Bad Request [47](#bad-request-1)](#bad-request-1)

[35. Métricas para evaluar automatización [47](#métricas-para-evaluar-automatización)](#métricas-para-evaluar-automatización)

[100 endpoints existentes [48](#endpoints-existentes)](#endpoints-existentes)

[80 endpoints automatizados [48](#endpoints-automatizados)](#endpoints-automatizados)

[100 pruebas ejecutadas [48](#pruebas-ejecutadas)](#pruebas-ejecutadas)

[95 exitosas [48](#exitosas)](#exitosas)

[5 fallidas [48](#fallidas)](#fallidas)

[8 horas [48](#horas)](#horas)

[15 minutos [48](#minutos)](#minutos)

[36. Beneficios generales de la automatización de APIs [49](#beneficios-generales-de-la-automatización-de-apis)](#beneficios-generales-de-la-automatización-de-apis)

[37. Desafíos de automatizar pruebas de APIs [49](#desafíos-de-automatizar-pruebas-de-apis)](#desafíos-de-automatizar-pruebas-de-apis)

[37.1 Inversión inicial [49](#inversión-inicial)](#inversión-inicial)

[37.2 Mantenimiento [49](#mantenimiento)](#mantenimiento)

[37.3 Selección adecuada de herramientas [49](#selección-adecuada-de-herramientas)](#selección-adecuada-de-herramientas)

[38. Buenas prácticas finales [50](#buenas-prácticas-finales)](#buenas-prácticas-finales)

[39. Conclusiones generales [50](#conclusiones-generales)](#conclusiones-generales)

[40. Glosario técnico [51](#glosario-técnico)](#glosario-técnico)

[41. Referencias bibliográficas [52](#referencias-bibliográficas)](#referencias-bibliográficas)

# **1. Introducción**

En la actualidad, el desarrollo de software está orientado hacia arquitecturas distribuidas, aplicaciones web y servicios en la nube, donde la comunicación entre sistemas es un componente fundamental. Las Interfaces de Programación de Aplicaciones (Application Programming Interfaces o APIs) se han convertido en uno de los principales mecanismos para permitir el intercambio de información entre aplicaciones, dispositivos y plataformas tecnológicas.

Las APIs son utilizadas por aplicaciones móviles, sistemas empresariales, plataformas de comercio electrónico, servicios bancarios, redes sociales y prácticamente cualquier solución basada en Internet. Debido a esta importancia, garantizar su correcto funcionamiento es una actividad crítica dentro del proceso de desarrollo de software.

Las pruebas de APIs permiten validar que los servicios implementados cumplan con los requisitos funcionales y no funcionales establecidos, verificando aspectos como la correcta comunicación entre sistemas, la integridad de la información, el manejo adecuado de errores, la seguridad, el rendimiento y el cumplimiento de los estándares de desarrollo.

A diferencia de las pruebas de interfaz gráfica (UI Testing), las pruebas de APIs se ejecutan directamente sobre los servicios, permitiendo detectar defectos en etapas tempranas del ciclo de vida del software, reduciendo costos de mantenimiento y mejorando significativamente la calidad del producto final.

La automatización de estas pruebas representa un avance importante dentro de los procesos de aseguramiento de calidad (QA), ya que permite ejecutar cientos de validaciones de forma rápida, repetitiva y consistente, integrándose fácilmente en procesos de Integración Continua y Entrega Continua (CI/CD).

Este documento presenta una investigación sobre los fundamentos de las pruebas de APIs, los diferentes tipos de pruebas existentes, las metodologías utilizadas, las herramientas más empleadas en la industria y las buenas prácticas para implementar procesos efectivos de automatización.

------------------------------------------------------------------------

# **2. Objetivos de la investigación**

## **2.1 Objetivo general**

Investigar los fundamentos de las pruebas de APIs con el fin de comprender su importancia, metodologías, herramientas y buenas prácticas para su correcta implementación dentro del proceso de desarrollo de software.

## **2.2 Objetivos específicos**

- Comprender el concepto de API y su funcionamiento.

- Identificar las arquitecturas más utilizadas para el desarrollo de APIs.

- Analizar los principales métodos HTTP utilizados en servicios REST.

- Estudiar los códigos de estado HTTP utilizados durante la comunicación entre cliente y servidor.

- Conocer los distintos tipos de pruebas de APIs.

- Investigar las herramientas utilizadas para automatizar pruebas.

- Comprender las ventajas de implementar automatización de pruebas dentro de un proceso de desarrollo moderno.

------------------------------------------------------------------------

# **3. ¿Qué es una API?**

Una API (Application Programming Interface) es un conjunto de reglas, protocolos y definiciones que permiten que dos o más aplicaciones puedan comunicarse entre sí de manera estructurada y segura.

En términos simples, una API funciona como un intermediario entre un cliente y un servidor. El cliente realiza una solicitud solicitando determinada información o ejecutando una operación específica, mientras que el servidor procesa dicha solicitud y devuelve una respuesta.

Por ejemplo, cuando un usuario consulta el clima desde una aplicación móvil, la aplicación no almacena directamente toda la información meteorológica. En su lugar, realiza una solicitud a una API especializada, la cual obtiene la información desde un servidor y responde con los datos correspondientes.

Este mecanismo permite reutilizar funcionalidades existentes sin necesidad de desarrollar nuevamente toda la lógica de negocio.

## **3.1 Componentes de una API**

Una API está conformada por varios elementos que trabajan conjuntamente para permitir la comunicación entre aplicaciones.

### **Cliente**

Es la aplicación que realiza la solicitud al servidor.

Ejemplos:

- Aplicaciones móviles.

- Aplicaciones web.

- Sistemas ERP.

- Aplicaciones de escritorio.

### **Servidor**

Es el sistema encargado de recibir la solicitud, procesarla y devolver una respuesta.

### **Endpoint**

Corresponde a la dirección específica donde se encuentra disponible un recurso de la API.

Ejemplo:

GET https://api.ejemplo.com/users

En este caso:

- **GET** corresponde al método HTTP.

- **/users** representa el recurso solicitado.

### **Request (Solicitud)**

Es el mensaje enviado por el cliente hacia el servidor.

Una solicitud puede contener:

- Método HTTP.

- URL.

- Encabezados (Headers).

- Parámetros.

- Cuerpo (Body).

### **Response (Respuesta)**

Es la información enviada por el servidor como resultado del procesamiento de la solicitud.

Generalmente incluye:

- Código HTTP.

- Encabezados.

- Datos en formato JSON o XML.

------------------------------------------------------------------------

# **4. Funcionamiento de una API**

El funcionamiento básico de una API puede resumirse en las siguientes etapas:

1.  El cliente envía una solicitud HTTP al servidor.

2.  El servidor recibe la solicitud.

3.  La API valida la información recibida.

4.  Se ejecuta la lógica del negocio.

5.  Se consulta la base de datos si es necesario.

6.  Se genera una respuesta.

7.  El servidor devuelve un código HTTP junto con los datos solicitados.

### **Ejemplo práctico**

Supongamos que una aplicación necesita consultar los datos de un usuario.

El cliente realiza la siguiente solicitud:

GET /users/15

El servidor procesa la solicitud y responde:

{

"id": 15,

"nombre": "Carlos Pérez",

"correo": "carlos@email.com"

}

Además del contenido, la respuesta incluye un código de estado HTTP **200 OK**, indicando que la operación fue exitosa.

------------------------------------------------------------------------

# **5. Arquitecturas de APIs**

A lo largo de la evolución del desarrollo de software han surgido diferentes arquitecturas para implementar servicios. Las más utilizadas actualmente son REST y SOAP.

## **5.1 REST (Representational State Transfer)**

REST es un estilo de arquitectura propuesto por Roy Fielding en el año 2000 y actualmente es el más utilizado para el desarrollo de servicios web.

Se basa en el protocolo HTTP y en el intercambio de información utilizando principalmente el formato JSON.

### **Características de REST**

- Arquitectura cliente-servidor.

- Comunicación sin estado (Stateless).

- Uso de métodos HTTP estándar.

- Recursos identificados mediante URL.

- Fácil integración entre plataformas.

- Alto rendimiento.

- Bajo consumo de recursos.

### **Ventajas**

- Fácil implementación.

- Mayor velocidad.

- Menor consumo de ancho de banda.

- Compatible con prácticamente cualquier lenguaje de programación.

- Excelente integración con aplicaciones móviles.

### **Desventajas**

- No define un estándar estricto de seguridad.

- Puede requerir configuraciones adicionales para autenticación y autorización.

- El diseño depende de las buenas prácticas del desarrollador.

### **Ejemplo REST**

GET https://api.miempresa.com/clientes

Respuesta:

\[

{

"id":1,

"nombre":"Juan"

},

{

"id":2,

"nombre":"Ana"

}

\]

------------------------------------------------------------------------

## **5.2 SOAP (Simple Object Access Protocol)**

SOAP es un protocolo diseñado para el intercambio estructurado de información entre aplicaciones.

A diferencia de REST, SOAP utiliza mensajes XML y posee un estándar mucho más estricto.

Es ampliamente utilizado en sistemas financieros, gubernamentales y empresariales donde la seguridad y la confiabilidad son prioritarias.

### **Características de SOAP**

- Basado en XML.

- Altamente estandarizado.

- Soporta WS-Security.

- Compatible con múltiples protocolos.

- Manejo avanzado de errores.

### **Ventajas**

- Alto nivel de seguridad.

- Gran confiabilidad.

- Excelente manejo de transacciones.

- Ideal para sistemas críticos.

### **Desventajas**

- Mayor complejidad.

- Mensajes más pesados.

- Menor velocidad que REST.

- Desarrollo más complejo.

------------------------------------------------------------------------

# **6. Comparación entre REST y SOAP**

| **Característica** | **REST** | **SOAP** |
|:---|:---|:---|
| Arquitectura | Estilo arquitectónico | Protocolo |
| Formato principal | JSON | XML |
| Rendimiento | Alto | Medio |
| Facilidad de uso | Alta | Media |
| Seguridad | Depende de la implementación | Alta (WS-Security) |
| Consumo de ancho de banda | Bajo | Alto |
| Curva de aprendizaje | Baja | Alta |
| Uso más común | Aplicaciones web y móviles | Sistemas empresariales y financieros |

------------------------------------------------------------------------

# **7. Importancia de las APIs en el desarrollo moderno**

Las APIs se han convertido en el eje central de las arquitecturas de software actuales. Gracias a ellas es posible construir aplicaciones desacopladas, reutilizar funcionalidades existentes e integrar servicios de diferentes proveedores sin necesidad de desarrollar cada componente desde cero.

Actualmente, organizaciones de todos los sectores exponen APIs para facilitar la integración con sus plataformas. Algunos ejemplos son los servicios de autenticación, pasarelas de pago, plataformas de mapas, redes sociales y sistemas de mensajería. Esta tendencia ha impulsado el crecimiento de arquitecturas basadas en microservicios, donde cada componente ofrece funcionalidades específicas mediante APIs bien definidas.

Desde la perspectiva de la calidad del software, una API representa un punto crítico de integración. Un error en un servicio puede afectar múltiples aplicaciones consumidoras, por lo que es indispensable implementar procesos de prueba que garanticen su correcto funcionamiento antes de su despliegue en ambientes productivos.

En consecuencia, las pruebas de APIs se consideran hoy una práctica esencial dentro de las estrategias de aseguramiento de calidad y automatización, permitiendo validar de forma temprana la funcionalidad, estabilidad y confiabilidad de los servicios desarrollados.

# **8. Protocolo HTTP en las APIs**

El protocolo HTTP (HyperText Transfer Protocol) es el principal mecanismo de comunicación utilizado por las APIs REST. Permite que un cliente pueda enviar solicitudes a un servidor y recibir respuestas con información procesada.

HTTP funciona bajo un modelo de comunicación basado en solicitudes y respuestas:

Cliente -------- Request HTTP --------\> Servidor

Cliente \<------- Response HTTP -------- Servidor

Cada interacción entre cliente y servidor contiene información que permite identificar qué operación debe ejecutarse y cuál debe ser el resultado esperado.

------------------------------------------------------------------------

# **9. Estructura de una solicitud HTTP**

Una solicitud HTTP está compuesta por diferentes elementos:

## **9.1 Método HTTP**

Define la acción que se desea realizar sobre un recurso.

Ejemplos:

- GET

- POST

- PUT

- PATCH

- DELETE

------------------------------------------------------------------------

## **9.2 URL o Endpoint**

Es la dirección donde se encuentra disponible el recurso.

Ejemplo:

https://api.empresa.com/products

La URL normalmente está compuesta por:

Protocolo + Dominio + Ruta + Parámetros

Ejemplo:

https://api.com/users?id=10

Donde:

- https:// → protocolo

- api.com → servidor

- /users → recurso

- id=10 → parámetro

------------------------------------------------------------------------

## **9.3 Headers (Encabezados)**

Los headers contienen información adicional sobre la solicitud o respuesta.

Algunos headers comunes:

### **Content-Type**

Indica el formato de los datos enviados.

Ejemplo:

Content-Type: application/json

------------------------------------------------------------------------

### **Authorization**

Permite enviar información de autenticación.

Ejemplo:

Authorization: Bearer eyJhbGciOiJIUzI1

------------------------------------------------------------------------

### **Accept**

Indica qué formato espera recibir el cliente.

Ejemplo:

Accept: application/json

------------------------------------------------------------------------

### **User-Agent**

Identifica el cliente que realiza la solicitud.

Ejemplo:

User-Agent: PostmanRuntime

------------------------------------------------------------------------

# **10. Métodos HTTP utilizados en APIs REST**

Los métodos HTTP representan las operaciones que pueden realizarse sobre los recursos de una API.

------------------------------------------------------------------------

## **10.1 GET**

El método GET se utiliza para consultar información.

Características:

- No modifica datos.

- Puede repetirse sin afectar información.

- Generalmente no utiliza Body.

Ejemplo:

GET /users

Respuesta:

\[

{

"id":1,

"name":"Carlos"

}

\]

Casos de prueba asociados:

- Validar código 200.

- Validar estructura JSON.

- Validar cantidad de registros.

- Validar tiempo de respuesta.

------------------------------------------------------------------------

## **10.2 POST**

POST se utiliza para crear nuevos recursos.

Ejemplo:

POST /users

Body:

{

"name":"Maria",

"email":"maria@test.com"

}

Respuesta esperada:

# 201 Created

Casos de prueba:

- Validar creación exitosa.

- Validar campos obligatorios.

- Validar datos inválidos.

- Validar mensajes de error.

------------------------------------------------------------------------

## **10.3 PUT**

PUT actualiza completamente un recurso existente.

Ejemplo:

PUT /users/10

Body:

{

"name":"Nuevo Nombre",

"email":"nuevo@test.com"

}

Respuesta:

# 200 OK

------------------------------------------------------------------------

## **10.4 PATCH**

PATCH realiza una actualización parcial.

Ejemplo:

PATCH /users/10

Body:

{

"email":"nuevo@test.com"

}

Diferencia:

| **PUT**                   | **PATCH**                   |
|:--------------------------|:----------------------------|
| Actualiza todo el recurso | Actualiza una parte         |
| Reemplaza información     | Modifica campos específicos |

------------------------------------------------------------------------

## **10.5 DELETE**

DELETE elimina un recurso.

Ejemplo:

DELETE /users/10

Respuesta:

# 200 OK

o

# 204 No Content

------------------------------------------------------------------------

# **11. Parámetros en APIs**

Las APIs utilizan diferentes tipos de parámetros para enviar información.

------------------------------------------------------------------------

## **11.1 Path Parameters**

Forman parte de la URL.

Ejemplo:

GET /users/15

El valor:

15

representa el identificador del usuario.

------------------------------------------------------------------------

## **11.2 Query Parameters**

Se envían después del signo "?"

Ejemplo:

GET /users?page=2

Permiten realizar:

- Filtrado.

- Ordenamiento.

- Paginación.

Ejemplo:

GET /products?category=computer

------------------------------------------------------------------------

## **11.3 Body Parameters**

Contienen información enviada dentro de la solicitud.

Normalmente utilizados en:

- POST.

- PUT.

- PATCH.

Ejemplo:

{

"username":"admin",

"password":"123456"

}

------------------------------------------------------------------------

# **12. Formatos de intercambio de información**

Las APIs necesitan un formato estándar para enviar y recibir información.

Los formatos más utilizados son:

- JSON.

- XML.

------------------------------------------------------------------------

## **12.1 JSON (JavaScript Object Notation)**

JSON es actualmente el formato más utilizado en APIs REST debido a su simplicidad y facilidad de lectura.

Ejemplo:

{

"id":100,

"nombre":"Carlos",

"activo":true

}

Características:

- Ligero.

- Fácil de interpretar.

- Compatible con múltiples lenguajes.

- Ideal para aplicaciones web y móviles.

Tipos de datos soportados:

- String.

- Number.

- Boolean.

- Array.

- Object.

- Null.

------------------------------------------------------------------------

## **12.2 XML (eXtensible Markup Language)**

XML utiliza etiquetas para representar información.

Ejemplo:

\<usuario\>

\<id\>100\</id\>

\<nombre\>Carlos\</nombre\>

\</usuario\>

Características:

- Más estructurado.

- Mayor tamaño que JSON.

- Utilizado frecuentemente en servicios SOAP.

------------------------------------------------------------------------

# **13. Códigos de estado HTTP**

Los códigos HTTP permiten conocer el resultado de una solicitud realizada a una API.

Estos códigos se dividen en cinco grupos:

| **Grupo** | **Significado**    |
|:----------|:-------------------|
| 1xx       | Información        |
| 2xx       | Éxito              |
| 3xx       | Redirección        |
| 4xx       | Error del cliente  |
| 5xx       | Error del servidor |

------------------------------------------------------------------------

## **13.1 Códigos 1xx - Información**

Son respuestas informativas.

Ejemplo:

# **100 Continue**

Indica que el servidor recibió correctamente la primera parte de la solicitud.

------------------------------------------------------------------------

## **13.2 Códigos 2xx - Respuestas exitosas**

Indican que la operación fue realizada correctamente.

------------------------------------------------------------------------

# **200 OK**

Solicitud exitosa.

Ejemplo:

GET /users

# 200 OK

------------------------------------------------------------------------

# **201 Created**

Recurso creado correctamente.

Ejemplo:

POST /users

# 201 Created

------------------------------------------------------------------------

# **204 No Content**

Operación exitosa sin contenido de respuesta.

Ejemplo:

DELETE /users/10

# 204 No Content

------------------------------------------------------------------------

## **13.3 Códigos 3xx - Redirecciones**

Indican que se requiere una acción adicional.

------------------------------------------------------------------------

# **301 Moved Permanently**

El recurso cambió de ubicación.

------------------------------------------------------------------------

# **304 Not Modified**

Permite utilizar una versión almacenada en caché.

------------------------------------------------------------------------

## **13.4 Códigos 4xx - Errores del cliente**

Indican problemas en la solicitud realizada.

------------------------------------------------------------------------

# **400 Bad Request**

La solicitud tiene información incorrecta.

Ejemplo:

{

"email":"correo incorrecto"

}

------------------------------------------------------------------------

# **401 Unauthorized**

El usuario no está autenticado.

Ejemplo:

Falta token:

Authorization: Bearer token

------------------------------------------------------------------------

# **403 Forbidden**

El usuario está autenticado pero no tiene permisos.

------------------------------------------------------------------------

# **404 Not Found**

El recurso no existe.

Ejemplo:

GET /users/999999

Respuesta:

# 404 Not Found

------------------------------------------------------------------------

# **405 Method Not Allowed**

El método HTTP no está permitido.

Ejemplo:

Enviar POST donde solamente existe GET.

------------------------------------------------------------------------

## **13.5 Códigos 5xx - Errores del servidor**

Representan problemas internos del servidor.

------------------------------------------------------------------------

# **500 Internal Server Error**

Error inesperado en la aplicación.

------------------------------------------------------------------------

# **502 Bad Gateway**

Problema de comunicación entre servidores.

------------------------------------------------------------------------

# **503 Service Unavailable**

Servicio temporalmente no disponible.

------------------------------------------------------------------------

# **14. Importancia de validar códigos HTTP en pruebas automatizadas**

Dentro de la automatización de pruebas de APIs, validar códigos HTTP es fundamental porque permite verificar que el servicio responde correctamente ante diferentes escenarios.

Ejemplo:

Caso exitoso:

Solicitud:

GET /users/1

Esperado:

# 200 OK

Caso negativo:

Solicitud:

GET /users/999999

Esperado:

# 404 Not Found

Una API correctamente probada debe manejar tanto escenarios exitosos como errores esperados.

------------------------------------------------------------------------

# **15. Relación entre HTTP y pruebas automatizadas**

Las herramientas de automatización como Postman, Newman, REST Assured y Karate utilizan directamente el protocolo HTTP para ejecutar pruebas.

Durante una prueba automatizada se pueden validar:

- Método HTTP utilizado.

- Código de respuesta.

- Headers.

- Tiempo de respuesta.

- Contenido del Body.

- Estructura JSON.

- Mensajes de error.

Esto permite simular el comportamiento de usuarios y sistemas consumidores antes de que la API llegue a producción.

------------------------------------------------------------------------

# **Conclusión** 

El conocimiento del protocolo HTTP, métodos de comunicación, estructura de solicitudes, formatos de datos y códigos de estado constituye la base necesaria para realizar pruebas efectivas sobre APIs.

Antes de automatizar pruebas es indispensable comprender cómo funciona la comunicación entre cliente y servidor, ya que las validaciones automatizadas dependen directamente de estos elementos para determinar si un servicio cumple correctamente con los requisitos establecidos.

# **16. ¿Qué son las pruebas de APIs?**

Las pruebas de APIs (API Testing) son un conjunto de actividades destinadas a validar el correcto funcionamiento de una interfaz de programación de aplicaciones, verificando que los servicios respondan de acuerdo con los requerimientos funcionales y técnicos definidos.

Estas pruebas se ejecutan directamente sobre la capa de servicios, sin depender de una interfaz gráfica, permitiendo validar la lógica interna de una aplicación y la comunicación entre diferentes componentes de software.

El objetivo principal de las pruebas de APIs es garantizar que los servicios sean:

- Funcionales.

- Confiables.

- Seguros.

- Estables.

- Escalables.

- Compatibles con otros sistemas.

A través de las pruebas de APIs es posible detectar errores relacionados con:

- Datos incorrectos.

- Fallos de comunicación.

- Problemas de autenticación.

- Validaciones incompletas.

- Errores en reglas de negocio.

- Respuestas HTTP incorrectas.

- Problemas de rendimiento.

------------------------------------------------------------------------

# **17. Importancia de las pruebas de APIs**

En las arquitecturas modernas de software, las APIs representan puntos críticos de comunicación entre aplicaciones. Un error en una API puede afectar múltiples sistemas que dependen de ella.

Por esta razón, las pruebas de APIs son una actividad esencial dentro del ciclo de desarrollo de software.

## **17.1 Detección temprana de errores**

Las pruebas permiten identificar problemas antes de que el software llegue a producción.

Ejemplos:

- Un endpoint que retorna información incorrecta.

- Una validación de datos incompleta.

- Un código HTTP incorrecto.

- Un fallo de autenticación.

Detectar estos problemas durante la etapa de desarrollo reduce costos y tiempos de corrección.

------------------------------------------------------------------------

## **17.2 Mayor confiabilidad del software**

Una API probada correctamente proporciona mayor confianza a los equipos de desarrollo y a los usuarios finales.

Las pruebas permiten comprobar que:

- Los datos enviados sean correctos.

- Las respuestas tengan la estructura esperada.

- Los errores sean manejados adecuadamente.

------------------------------------------------------------------------

## **17.3 Facilita la integración entre sistemas**

Las organizaciones utilizan múltiples aplicaciones que necesitan comunicarse entre sí.

Ejemplos:

- Aplicación móvil con backend.

- Sistema de pagos con banco.

- Plataforma web con servicios externos.

Las pruebas de APIs garantizan que estas integraciones funcionen correctamente.

------------------------------------------------------------------------

## **17.4 Automatización y ahorro de tiempo**

Una prueba manual puede requerir varios pasos repetitivos.

Ejemplo:

1.  Abrir herramienta.

2.  Configurar solicitud.

3.  Enviar petición.

4.  Revisar respuesta.

5.  Validar datos.

Con automatización:

1.  Ejecutar colección.

2.  Obtener resultados automáticamente.

Esto permite realizar pruebas frecuentes sin aumentar el esfuerzo del equipo.

------------------------------------------------------------------------

# **18. Pruebas manuales vs pruebas automatizadas**

Existen dos enfoques principales para validar APIs:

- Pruebas manuales.

- Pruebas automatizadas.

------------------------------------------------------------------------

## **18.1 Pruebas manuales**

Son aquellas donde un tester ejecuta las validaciones utilizando herramientas como Postman, Insomnia o herramientas similares.

Ejemplo:

Un tester envía manualmente:

GET /users/1

y verifica:

- Código HTTP.

- Respuesta JSON.

- Datos obtenidos.

### **Ventajas**

- Fácil implementación inicial.

- Útiles para pruebas exploratorias.

- Permiten analizar comportamientos inesperados.

### **Desventajas**

- Consumen más tiempo.

- Mayor posibilidad de errores humanos.

- Difíciles de repetir constantemente.

- No ideales para grandes proyectos.

------------------------------------------------------------------------

## **18.2 Pruebas automatizadas**

Son pruebas ejecutadas mediante scripts o herramientas especializadas sin intervención manual constante.

Ejemplo:

Una colección de Postman puede ejecutar automáticamente:

# 50 solicitudes.

- Diferentes escenarios.

- Validaciones múltiples.

### **Ventajas**

- Rapidez.

- Repetibilidad.

- Mayor cobertura.

- Integración con CI/CD.

- Reducción de errores humanos.

### **Desventajas**

- Requieren configuración inicial.

- Necesitan mantenimiento.

- Requieren conocimientos técnicos.

------------------------------------------------------------------------

# **19. Tipos de pruebas de APIs**

Las pruebas de APIs pueden clasificarse según el objetivo de validación.

------------------------------------------------------------------------

## **19.1 Pruebas funcionales**

Las pruebas funcionales verifican que una API cumpla correctamente con los requisitos definidos.

Evalúan:

- Entrada de datos.

- Procesamiento.

- Respuesta esperada.

Ejemplo:

Requisito:

"El sistema debe permitir consultar usuarios por ID".

Prueba:

Solicitud:

GET /users/10

Validaciones:

- Código 200.

- Usuario existente.

- Información correcta.

------------------------------------------------------------------------

## **19.2 Pruebas de validación de datos**

Estas pruebas verifican que la información recibida tenga la estructura correcta.

Se validan aspectos como:

- Campos obligatorios.

- Tipos de datos.

- Valores permitidos.

- Formatos.

Ejemplo:

Respuesta esperada:

{

"id":1,

"name":"Carlos",

"email":"carlos@test.com"

}

Validaciones:

- Existe campo ID.

- ID es numérico.

- Email tiene formato válido.

------------------------------------------------------------------------

## **19.3 Pruebas de integración**

Validan la comunicación entre diferentes servicios.

Ejemplo:

Una aplicación de compras utiliza:

- API de usuarios.

- API de productos.

- API de pagos.

La prueba verifica que estos servicios trabajen correctamente juntos.

Validaciones:

- Comunicación correcta.

- Datos transferidos correctamente.

- Manejo de errores.

------------------------------------------------------------------------

## **19.4 Pruebas de regresión**

Las pruebas de regresión verifican que los cambios realizados no afecten funcionalidades existentes.

Ejemplo:

Un desarrollador modifica la autenticación.

La prueba de regresión verifica:

- Login funciona.

- Usuarios siguen disponibles.

- Permisos continúan funcionando.

Estas pruebas son fundamentales en proyectos con cambios frecuentes.

------------------------------------------------------------------------

## **19.5 Pruebas de rendimiento**

Evalúan el comportamiento de una API bajo diferentes niveles de carga.

Permiten conocer:

- Tiempo de respuesta.

- Cantidad de solicitudes soportadas.

- Uso de recursos.

Tipos principales:

------------------------------------------------------------------------

### **Load Testing**

Evalúa el comportamiento con carga esperada.

Ejemplo:

# 500 usuarios realizando solicitudes simultáneamente.

------------------------------------------------------------------------

### **Stress Testing**

Busca identificar el límite máximo del sistema.

Ejemplo:

Incrementar usuarios hasta provocar degradación.

------------------------------------------------------------------------

### **Spike Testing**

Evalúa cambios bruscos de tráfico.

Ejemplo:

Una API recibe repentinamente miles de solicitudes.

------------------------------------------------------------------------

### **Endurance Testing**

Evalúa estabilidad durante largos periodos.

Ejemplo:

API ejecutándose durante 24 horas.

------------------------------------------------------------------------

## **19.6 Pruebas de seguridad**

Evalúan la protección de la API ante accesos no autorizados.

Validan:

- Autenticación.

- Autorización.

- Tokens.

- Permisos.

- Exposición de información sensible.

Ejemplos:

Intentar acceder sin token:

GET /users

Authorization: -

Resultado esperado:

# 401 Unauthorized

------------------------------------------------------------------------

## **19.7 Pruebas de contrato (Contract Testing)**

Validan que una API mantenga un contrato establecido entre consumidor y proveedor.

Un contrato define:

- Endpoint.

- Campos.

- Tipos de datos.

- Respuestas esperadas.

Son utilizadas frecuentemente en arquitecturas de microservicios.

Ejemplo:

Servicio A espera:

{

"id":10,

"name":"Juan"

}

Si Servicio B cambia el nombre del campo:

{

"user_id":10

}

el contrato falla.

------------------------------------------------------------------------

## **19.8 Smoke Testing**

Son pruebas rápidas que verifican que la API funciona después de un despliegue.

Ejemplo:

Después de publicar una nueva versión:

- Consultar usuarios.

- Crear registro.

- Validar autenticación.

Su objetivo es detectar fallos críticos rápidamente.

------------------------------------------------------------------------

# **20. Metodologías para pruebas de APIs**

Las metodologías definen cómo planificar, diseñar y ejecutar las pruebas.

------------------------------------------------------------------------

## **20.1 Pruebas basadas en requisitos**

Se diseñan pruebas a partir de los requisitos funcionales.

Ejemplo:

Requisito:

"El usuario puede crear una cuenta".

Casos:

- Crear usuario válido.

- Crear usuario sin correo.

- Crear usuario duplicado.

------------------------------------------------------------------------

## **20.2 Pruebas basadas en riesgos**

Se priorizan las funcionalidades con mayor impacto.

Ejemplo:

Alta prioridad:

- Pagos.

- Autenticación.

- Datos personales.

Menor prioridad:

- Campos informativos.

------------------------------------------------------------------------

## **20.3 Pruebas exploratorias**

El tester analiza el comportamiento del sistema sin seguir únicamente casos predefinidos.

Busca encontrar:

- Errores inesperados.

- Comportamientos no documentados.

- Problemas de usabilidad.

------------------------------------------------------------------------

## **20.4 Desarrollo guiado por pruebas (TDD)**

En TDD las pruebas se crean antes del desarrollo.

Flujo:

1.  Crear prueba.

2.  Ejecutar prueba.

3.  Desarrollar funcionalidad.

4.  Mejorar código.

------------------------------------------------------------------------

## **20.5 Integración Continua (CI/CD)**

La automatización de pruebas de APIs forma parte de procesos CI/CD.

Flujo típico:

Desarrollador realiza cambio

↓

GitHub recibe código

↓

Pipeline ejecuta pruebas

↓

Si pasan:

Despliegue permitido

Si fallan:

Proceso detenido

Beneficios:

- Mayor calidad.

- Menor riesgo.

- Detección rápida de errores.

------------------------------------------------------------------------

# **21. Diseño de casos de prueba para APIs**

Un caso de prueba debe definir claramente qué se desea validar.

Elementos principales:

| **Elemento**       | **Descripción**        |
|:-------------------|:-----------------------|
| ID                 | Identificador único    |
| Nombre             | Nombre del escenario   |
| Objetivo           | Qué se valida          |
| Endpoint           | Servicio probado       |
| Método HTTP        | GET, POST, PUT, DELETE |
| Datos de entrada   | Información enviada    |
| Resultado esperado | Respuesta correcta     |
| Resultado obtenido | Resultado real         |
| Estado             | Aprobado/Fallido       |

------------------------------------------------------------------------

### **Ejemplo de caso de prueba**

### **ID**

API-GET-001

### **Nombre**

Consultar usuario existente

### **Endpoint**

GET /users/1

### **Resultado esperado**

- Código HTTP 200.

- Respuesta JSON válida.

- Campo ID presente.

- Nombre del usuario informado.

### **Validaciones automatizadas**

pm.response.to.have.status(200);

pm.expect(pm.response.json())

.to.have.property("id");

# **Conclusión** 

Las pruebas de APIs son un componente fundamental dentro del aseguramiento de calidad moderno. Permiten validar la comunicación entre sistemas, detectar errores tempranos y garantizar servicios confiables.

La automatización de estas pruebas proporciona beneficios importantes como reducción de tiempos, ejecución repetible, mayor cobertura y facilidad de integración con procesos CI/CD.

El conocimiento de los diferentes tipos de pruebas y metodologías permite diseñar estrategias eficientes que serán aplicadas posteriormente mediante herramientas especializadas como Postman y Newman.

------------------------------------------------------------------------

# **22. Automatización de pruebas de APIs**

La automatización de pruebas de APIs consiste en utilizar herramientas, frameworks y scripts que permitan ejecutar validaciones de forma automática sobre los servicios de una aplicación.

A diferencia de las pruebas manuales, donde un tester debe realizar cada validación individualmente, la automatización permite ejecutar múltiples escenarios de prueba con poca o ninguna intervención humana.

Una prueba automatizada puede realizar acciones como:

- Enviar solicitudes HTTP.

- Validar códigos de respuesta.

- Comparar datos esperados contra datos obtenidos.

- Verificar estructuras JSON.

- Validar tiempos de respuesta.

- Generar reportes.

- Ejecutarse automáticamente dentro de procesos CI/CD.

------------------------------------------------------------------------

# **23. Importancia de automatizar pruebas de APIs**

La automatización se ha convertido en una práctica esencial debido al crecimiento de arquitecturas modernas como:

- Microservicios.

- Aplicaciones móviles.

- Sistemas distribuidos.

- Plataformas en la nube.

Cuando una aplicación contiene múltiples servicios conectados, realizar validaciones manuales resulta poco eficiente.

La automatización permite:

## **23.1 Reducir tiempos de ejecución**

Una colección con cientos de pruebas puede ejecutarse en minutos, mientras que realizar el mismo proceso manualmente podría tomar horas o días.

------------------------------------------------------------------------

## **23.2 Mejorar la repetibilidad**

Una prueba automatizada siempre ejecuta los mismos pasos, reduciendo variaciones causadas por errores humanos.

Ejemplo:

Una prueba de login siempre validará:

- Usuario correcto.

- Contraseña incorrecta.

- Usuario bloqueado.

- Token generado.

------------------------------------------------------------------------

## **23.3 Incrementar la cobertura**

Permite validar una mayor cantidad de escenarios:

- Casos exitosos.

- Casos negativos.

- Diferentes datos de entrada.

- Diferentes ambientes.

------------------------------------------------------------------------

## **23.4 Facilitar integración continua**

Las pruebas pueden ejecutarse automáticamente cada vez que un desarrollador realiza cambios en el código.

Esto permite detectar errores antes del despliegue.

------------------------------------------------------------------------

# **24. Componentes de una automatización de APIs**

Una solución de automatización normalmente está compuesta por diferentes elementos.

------------------------------------------------------------------------

## **24.1 Herramienta de automatización**

Es la plataforma utilizada para crear y ejecutar pruebas.

Ejemplos:

- Postman.

- REST Assured.

- Karate.

- Playwright.

- Cypress.

------------------------------------------------------------------------

## **24.2 Scripts de validación**

Son instrucciones programadas que verifican el comportamiento esperado.

Ejemplo:

Validar código HTTP:

pm.test("Código correcto", function () {

pm.response.to.have.status(200);

});

------------------------------------------------------------------------

## **24.3 Datos de prueba**

Información utilizada para ejecutar diferentes escenarios.

Ejemplo:

Usuarios:

{

"username":"usuario1",

"password":"123456"

}

------------------------------------------------------------------------

## **24.4 Ambientes**

Permiten ejecutar las pruebas contra diferentes sistemas.

Ejemplo:

Ambiente desarrollo:

https://dev-api.empresa.com

Ambiente pruebas:

https://qa-api.empresa.com

Ambiente producción:

https://api.empresa.com

------------------------------------------------------------------------

## **24.5 Reportes**

Los resultados deben quedar documentados.

Un reporte puede incluir:

- Pruebas ejecutadas.

- Pruebas exitosas.

- Pruebas fallidas.

- Tiempo de ejecución.

- Errores encontrados.

------------------------------------------------------------------------

# **25. Herramientas utilizadas para automatización de APIs**

Actualmente existen múltiples herramientas utilizadas en equipos profesionales de desarrollo y calidad.

------------------------------------------------------------------------

## **25.1 Postman**

Postman es una de las herramientas más utilizadas para pruebas de APIs REST.

Permite crear solicitudes HTTP, organizar pruebas mediante colecciones y automatizar validaciones utilizando JavaScript.

### **Características principales**

- Creación de requests HTTP.

- Organización mediante Collections.

- Variables de entorno.

- Scripts de prueba.

- Ejecución automatizada.

- Generación de reportes.

- Integración con CI/CD.

### **Lenguaje utilizado**

JavaScript.

Ejemplo:

pm.test("Validar status", function(){

pm.response.to.have.status(200);

});

### **Ventajas**

- Interfaz sencilla.

- Curva de aprendizaje baja.

- Amplia documentación.

- Gran comunidad.

- Ideal para equipos QA.

### **Desventajas**

- Requiere herramientas adicionales para automatización avanzada.

- Menos flexible que frameworks completamente programables.

------------------------------------------------------------------------

## **25.2 Newman**

Newman es una herramienta de línea de comandos creada para ejecutar colecciones de Postman.

Permite llevar las pruebas fuera de la interfaz gráfica.

Ejemplo:

newman run collection.json

### **Características**

- Ejecución automática.

- Integración CI/CD.

- Generación de reportes.

- Compatible con pipelines.

### **Ventajas**

- Fácil integración con servidores.

- Permite automatización completa.

- Basado en Node.js.

### **Desventajas**

- Depende de colecciones creadas en Postman.

------------------------------------------------------------------------

## **25.3 REST Assured**

REST Assured es un framework Java especializado en pruebas automatizadas de APIs REST.

Es utilizado principalmente por equipos de desarrollo con conocimientos de programación.

Ejemplo:

given()

.when()

.get("/users")

.then()

.statusCode(200);

### **Ventajas**

- Muy flexible.

- Integración con JUnit y TestNG.

- Ideal para grandes proyectos.

### **Desventajas**

- Requiere conocimientos Java.

- Mayor complejidad inicial.

------------------------------------------------------------------------

## **25.4 Karate Framework**

Karate combina pruebas API, automatización y enfoque BDD.

Utiliza una sintaxis basada en lenguaje natural.

Ejemplo:

Given url apiUrl

When method GET

Then status 200

### **Ventajas**

- Fácil lectura.

- No requiere mucho código.

- Permite pruebas API y rendimiento.

### **Desventajas**

- Menor adopción que Postman.

- Requiere aprendizaje del framework.

------------------------------------------------------------------------

## **25.5 Cypress**

Cypress es una herramienta principalmente utilizada para pruebas frontend, pero también permite realizar pruebas de APIs.

Ejemplo:

cy.request('/users')

.should(response =\> {

expect(response.status)

.eq(200)

})

### **Ventajas**

- Excelente experiencia para desarrolladores.

- Fácil configuración.

- Buena documentación.

### **Desventajas**

- No está enfocada exclusivamente en APIs.

------------------------------------------------------------------------

## **25.6 Playwright**

Playwright es un framework moderno desarrollado para automatización web y pruebas API.

Soporta:

- JavaScript.

- TypeScript.

- Python.

- Java.

- C#.

Ejemplo:

const response =

await request.get('/users');

expect(response.status())

.toBe(200);

### **Ventajas**

- Alta velocidad.

- Soporte multiplataforma.

- Integración moderna con CI/CD.

### **Desventajas**

- Mayor complejidad inicial.

------------------------------------------------------------------------

# **26. Comparación general de herramientas**

| **Herramienta** | **Lenguaje** | **Facilidad** | **Automatización** | **CI/CD** |
|:----------------|:-------------|:--------------|:-------------------|:----------|
| Postman         | JavaScript   | Alta          | Alta               | Sí        |
| Newman          | JavaScript   | Alta          | Muy alta           | Sí        |
| REST Assured    | Java         | Media         | Muy alta           | Sí        |
| Karate          | Gherkin/Java | Alta          | Alta               | Sí        |
| Cypress         | JavaScript   | Alta          | Alta               | Sí        |
| Playwright      | JS/TS/Python | Media         | Muy alta           | Sí        |

------------------------------------------------------------------------

# **27. Buenas prácticas para automatización de APIs**

Una automatización profesional debe seguir ciertas recomendaciones.

------------------------------------------------------------------------

## **27.1 Mantener pruebas independientes**

Cada prueba debe poder ejecutarse sin depender completamente de otra.

Ejemplo incorrecto:

Prueba 2 necesita que Prueba 1 cree un usuario.

Ejemplo correcto:

Cada prueba genera o prepara sus propios datos.

------------------------------------------------------------------------

## **27.2 Usar variables de entorno**

No se deben colocar URLs o credenciales directamente dentro de los scripts.

Incorrecto:

https://api-produccion.com

Correcto:

{{baseUrl}}

------------------------------------------------------------------------

## **27.3 Crear nombres claros**

Ejemplo:

Incorrecto:

Test1

Correcto:

GET - Validate user exists

------------------------------------------------------------------------

## **27.4 Validar respuestas completas**

No solo validar el código HTTP.

También verificar:

- Body.

- Headers.

- Tiempo.

- Estructura.

------------------------------------------------------------------------

## **27.5 Mantener datos separados del código**

Los datos de prueba deben manejarse mediante:

- Variables.

- Archivos JSON.

- Ambientes.

------------------------------------------------------------------------

## **27.6 Generar evidencia de resultados**

Toda ejecución debe generar información verificable:

- Reportes.

- Logs.

- Capturas.

- Historial.

------------------------------------------------------------------------

# **28. Integración con CI/CD**

La integración continua permite ejecutar automáticamente pruebas cada vez que existe un cambio en el proyecto.

Flujo típico:

Desarrollador

↓

Commit en Git

↓

Pipeline CI/CD

↓

Ejecutar pruebas API

↓

Generar reporte

↓

Aprobar o rechazar despliegue

------------------------------------------------------------------------

### **Beneficios de CI/CD con pruebas API**

- Detección temprana de errores.

- Mayor confianza en despliegues.

- Reducción de riesgos.

- Automatización completa del ciclo de calidad.

------------------------------------------------------------------------

# **29. Manejo de ambientes en automatización**

Los proyectos reales normalmente tienen diferentes ambientes:

### **Desarrollo (DEV)**

Utilizado por desarrolladores.

### **Calidad (QA)**

Utilizado para pruebas.

### **Producción (PROD)**

Ambiente donde trabajan usuarios reales.

Una buena práctica es manejar variables:

{

"baseUrl":

"https://qa-api.com",

"token":

"xxxx"

}

Esto permite ejecutar las mismas pruebas en diferentes ambientes.

------------------------------------------------------------------------

# **30. Seguridad en pruebas automatizadas**

Las pruebas automatizadas deben proteger información sensible.

Buenas prácticas:

- No almacenar contraseñas reales.

- No subir tokens a GitHub.

- Utilizar variables seguras.

- Utilizar secretos del repositorio.

Ejemplo:

GitHub Secrets:

API_TOKEN

DATABASE_PASSWORD

------------------------------------------------------------------------

# **Conclusión** 

La automatización de pruebas de APIs permite mejorar significativamente la calidad del software al proporcionar validaciones rápidas, repetibles y confiables.

Herramientas como Postman y Newman ofrecen una solución accesible y potente para implementar pruebas automatizadas, mientras que frameworks como REST Assured, Karate y Playwright permiten soluciones más avanzadas orientadas a equipos con mayores necesidades técnicas.

La integración de estas herramientas con procesos CI/CD permite crear flujos de trabajo modernos donde la calidad del software es validada automáticamente antes de cada entrega.

Para este proyecto se selecciona **Postman + Newman** debido a su facilidad de implementación, amplia adopción industrial, capacidad de automatización e integración con plataformas como GitHub Actions.

# **31. Estrategia recomendada para implementar pruebas de APIs**

La implementación de pruebas de APIs debe realizarse mediante una estrategia organizada que permita obtener resultados confiables y mantener las pruebas a largo plazo.

Una estrategia adecuada debe considerar aspectos técnicos, funcionales y organizacionales.

------------------------------------------------------------------------

## **31.1 Análisis de requerimientos**

Antes de crear cualquier prueba es necesario comprender:

- Qué funcionalidad proporciona la API.

- Qué datos recibe.

- Qué respuesta debe entregar.

- Qué reglas de negocio aplica.

- Qué errores deben ser controlados.

Ejemplo:

Requerimiento:

"El sistema debe permitir crear usuarios registrados".

Escenarios identificados:

Caso positivo:

- Usuario con información válida.

Casos negativos:

- Usuario sin correo.

- Usuario duplicado.

- Datos incompletos.

------------------------------------------------------------------------

## **31.2 Definición de alcance de pruebas**

No todas las funcionalidades requieren el mismo nivel de validación.

Se recomienda priorizar:

### **Alta prioridad**

- Autenticación.

- Pagos.

- Información personal.

- Procesos críticos.

### **Media prioridad**

- Consultas.

- Reportes.

- Procesos administrativos.

### **Baja prioridad**

- Funcionalidades informativas.

Esta priorización permite utilizar eficientemente el tiempo del equipo.

------------------------------------------------------------------------

## **31.3 Diseño de casos de prueba**

Los casos de prueba deben ser claros, repetibles y documentados.

Una estructura recomendada:

| **Campo**          | **Descripción**           |
|:-------------------|:--------------------------|
| ID                 | Código del caso           |
| Nombre             | Descripción del escenario |
| Endpoint           | Servicio probado          |
| Método             | GET, POST, PUT, DELETE    |
| Datos entrada      | Información enviada       |
| Resultado esperado | Respuesta correcta        |
| Validaciones       | Reglas comprobadas        |
| Estado             | Pass/Fail                 |

------------------------------------------------------------------------

## **31.4 Automatización progresiva**

La automatización debe implementarse gradualmente.

Una estrategia recomendada:

### **Primera etapa**

Automatizar pruebas críticas:

- Login.

- Consultas principales.

- Creación de datos.

### **Segunda etapa**

Agregar:

- Validaciones negativas.

- Regresión.

- Integraciones.

### **Tercera etapa**

Integrar:

- CI/CD.

- Reportes automáticos.

- Ejecución programada.

------------------------------------------------------------------------

## **31.5 Mantenimiento de pruebas automatizadas**

Las pruebas automatizadas también requieren mantenimiento.

Cambios frecuentes que pueden afectar pruebas:

- Nuevos endpoints.

- Cambios en respuestas JSON.

- Modificación de reglas de negocio.

- Nuevos ambientes.

Buenas prácticas:

- Revisar periódicamente las pruebas.

- Eliminar pruebas obsoletas.

- Actualizar documentación.

- Mantener nombres descriptivos.

------------------------------------------------------------------------

# **32. Arquitectura recomendada para un proyecto de automatización API**

Una estructura organizada facilita la administración del proyecto.

Ejemplo:

api-testing-project/

│

├── collections/

│ └── api-tests.json

│

├── environments/

│ └── qa-environment.json

│

├── tests/

│ └── validation-scripts.js

│

├── reports/

│ └── execution-report.html

│

├── documentation/

│ └── test-cases.md

│

└── README.md

Esta organización permite separar:

- Código.

- Configuración.

- Documentación.

- Resultados.

------------------------------------------------------------------------

# **33. Gestión de datos de prueba**

Los datos utilizados durante las pruebas deben ser administrados correctamente.

Existen diferentes estrategias:

------------------------------------------------------------------------

## **33.1 Datos estáticos**

Información fija utilizada durante las pruebas.

Ejemplo:

{

"id":1,

"name":"Test User"

}

Ventajas:

- Fácil implementación.

Desventajas:

- Puede generar dependencia.

------------------------------------------------------------------------

## **33.2 Datos dinámicos**

Datos generados durante la ejecución.

Ejemplo:

Crear usuarios con información aleatoria:

usuario_12345@test.com

Ventajas:

- Mayor independencia.

- Evita conflictos.

------------------------------------------------------------------------

## **33.3 Datos parametrizados**

Permiten ejecutar una misma prueba con diferentes valores.

Ejemplo:

Archivo CSV:

usuario,password

admin,123456

guest,guest123

Beneficio:

Permite ampliar cobertura sin duplicar pruebas.

------------------------------------------------------------------------

# **34. Manejo de errores en pruebas automatizadas**

Una automatización profesional debe validar tanto escenarios correctos como errores esperados.

Ejemplos:

------------------------------------------------------------------------

### **Error de autenticación**

Solicitud:

GET /profile

Sin token:

Respuesta esperada:

# 401 Unauthorized

------------------------------------------------------------------------

### **Recurso inexistente**

Solicitud:

GET /users/9999

Respuesta esperada:

# 404 Not Found

------------------------------------------------------------------------

### **Información inválida**

Solicitud:

{

"email":"incorrecto"

}

Respuesta esperada:

# 400 Bad Request

------------------------------------------------------------------------

# **35. Métricas para evaluar automatización**

Para medir la efectividad de una estrategia de automatización pueden utilizarse indicadores.

------------------------------------------------------------------------

### **Cobertura de pruebas**

Mide qué porcentaje de funcionalidades están automatizadas.

Ejemplo:

# 100 endpoints existentes

# 80 endpoints automatizados

Cobertura: 80%

------------------------------------------------------------------------

### **Tasa de éxito**

Porcentaje de pruebas aprobadas.

Ejemplo:

# 100 pruebas ejecutadas

# 95 exitosas

# 5 fallidas

------------------------------------------------------------------------

### **Tiempo de ejecución**

Permite comparar:

Antes:

Prueba manual:

# 8 horas

Después:

Automatización:

# 15 minutos

------------------------------------------------------------------------

### **Defectos encontrados**

Permite conocer la capacidad de detección de errores.

------------------------------------------------------------------------

# **36. Beneficios generales de la automatización de APIs**

La automatización proporciona beneficios importantes dentro del desarrollo de software:

### **Calidad**

Permite detectar errores antes de producción.

### **Productividad**

Reduce tareas repetitivas.

### **Confianza**

Entrega mayor seguridad al realizar cambios.

### **Velocidad**

Permite ejecutar pruebas rápidamente.

### **Integración**

Facilita procesos DevOps y CI/CD.

------------------------------------------------------------------------

# **37. Desafíos de automatizar pruebas de APIs**

Aunque la automatización ofrece grandes ventajas, también presenta retos.

------------------------------------------------------------------------

## **37.1 Inversión inicial**

Crear una infraestructura de automatización requiere tiempo inicial.

Incluye:

- Configuración.

- Diseño de pruebas.

- Creación de scripts.

------------------------------------------------------------------------

## **37.2 Mantenimiento**

Las pruebas deben actualizarse cuando cambia la aplicación.

------------------------------------------------------------------------

## **37.3 Selección adecuada de herramientas**

No todas las herramientas funcionan igual para todos los proyectos.

La elección depende de:

- Lenguaje utilizado.

- Complejidad.

- Equipo.

- Presupuesto.

- Requerimientos.

------------------------------------------------------------------------

# **38. Buenas prácticas finales**

Para obtener una automatización efectiva se recomienda:

- Mantener pruebas simples y claras.

- Utilizar nombres descriptivos.

- Separar ambientes.

- Evitar información sensible.

- Validar respuestas completas.

- Automatizar pruebas repetitivas.

- Generar reportes.

- Integrar con CI/CD.

- Mantener documentación actualizada.

- Revisar periódicamente la estabilidad de las pruebas.

------------------------------------------------------------------------

# **39. Conclusiones generales**

Las APIs representan actualmente uno de los componentes más importantes dentro de los sistemas modernos debido a su capacidad de conectar aplicaciones, plataformas y servicios.

Debido a esta importancia, las pruebas de APIs son fundamentales para garantizar que los servicios funcionen correctamente, entreguen información confiable y manejen adecuadamente diferentes escenarios.

Durante esta investigación se identificó que las pruebas de APIs permiten validar aspectos funcionales, técnicos y de seguridad, incluyendo respuestas HTTP, estructuras de datos, reglas de negocio y comportamiento ante errores.

La automatización de pruebas aporta grandes beneficios al proceso de desarrollo, principalmente por la reducción de tiempos, aumento de cobertura y posibilidad de integración con metodologías modernas como DevOps y CI/CD.

Entre las herramientas disponibles en la industria existen diferentes alternativas, pero para este proyecto se selecciona la combinación **Postman + Newman**, debido a su facilidad de adopción, capacidad de automatización, integración con pipelines y amplio uso profesional.

La correcta implementación de una estrategia de pruebas automatizadas permite mejorar la calidad del software, reducir riesgos y aumentar la confianza durante los procesos de entrega.

------------------------------------------------------------------------

# **40. Glosario técnico**

### **API**

Interfaz que permite la comunicación entre diferentes aplicaciones.

### **Endpoint**

Dirección específica donde una API expone un recurso.

### **HTTP**

Protocolo utilizado para comunicación entre clientes y servidores.

### **REST**

Arquitectura utilizada para construir servicios web basados en HTTP.

### **SOAP**

Protocolo basado en XML para comunicación entre sistemas.

### **JSON**

Formato ligero utilizado para intercambio de información.

### **Request**

Solicitud enviada hacia una API.

### **Response**

Respuesta generada por una API.

### **Header**

Información adicional enviada junto con una solicitud HTTP.

### **Token**

Elemento utilizado para autenticación y autorización.

### **CI/CD**

Prácticas que permiten integrar y entregar software automáticamente.

### **Automatización**

Uso de herramientas y scripts para ejecutar pruebas sin intervención manual.

------------------------------------------------------------------------

# **41. Referencias bibliográficas**

- Fielding, R. T. (2000). *Architectural Styles and the Design of Network-based Software Architectures*. University of California, Irvine.

- Richardson, L., & Ruby, S. (2007). *RESTful Web Services*. O'Reilly Media.

- Postman. (2026). *Postman Learning Center - API Testing Documentation.*

- Newman Documentation. (2026). *Command-line Collection Runner for Postman.*

- Fowler, M. (2018). *Continuous Integration.*

- Humble, J., & Farley, D. (2010). *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation.*

- Pressman, R. (2015). *Software Engineering: A Practitioner's Approach.*

- Sommerville, I. (2016). *Software Engineering.*

------------------------------------------------------------------------

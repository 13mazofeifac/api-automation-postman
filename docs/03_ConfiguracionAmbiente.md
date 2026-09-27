**Fecha:** Julio 2026

Índice

[1. Introducción [3](#introducción)](#introducción)

[2. Requisitos del ambiente [3](#requisitos-del-ambiente)](#requisitos-del-ambiente)

[2.1 Requisitos de hardware [3](#requisitos-de-hardware)](#requisitos-de-hardware)

[2.2 Sistema operativo [3](#sistema-operativo)](#sistema-operativo)

[3. Instalación de herramientas principales [4](#instalación-de-herramientas-principales)](#instalación-de-herramientas-principales)

[3.1 Instalación de Node.js [4](#instalación-de-node.js)](#instalación-de-node.js)

[3.2 Instalación de Postman [4](#instalación-de-postman)](#instalación-de-postman)

[3.3 Instalación de Newman [5](#instalación-de-newman)](#instalación-de-newman)

[3.4 Instalación del generador de reportes HTML [5](#instalación-del-generador-de-reportes-html)](#instalación-del-generador-de-reportes-html)

[4. Instalación de Git [5](#instalación-de-git)](#instalación-de-git)

[5. Configuración inicial de Git [6](#configuración-inicial-de-git)](#configuración-inicial-de-git)

[6. Creación de estructura del proyecto [6](#creación-de-estructura-del-proyecto)](#creación-de-estructura-del-proyecto)

[7. Configuración del proyecto Node.js [7](#configuración-del-proyecto-node.js)](#configuración-del-proyecto-node.js)

[8. Configuración de dependencias [8](#configuración-de-dependencias)](#configuración-de-dependencias)

[9. Configuración de variables de ambiente [8](#configuración-de-variables-de-ambiente)](#configuración-de-variables-de-ambiente)

[10. Configuración de colección Postman [9](#configuración-de-colección-postman)](#configuración-de-colección-postman)

[11. Configuración de scripts de prueba [10](#configuración-de-scripts-de-prueba)](#configuración-de-scripts-de-prueba)

[12. Primera ejecución de prueba [10](#primera-ejecución-de-prueba)](#primera-ejecución-de-prueba)

[13. Generación de reporte HTML [11](#generación-de-reporte-html)](#generación-de-reporte-html)

[14. Integración con control de versiones [11](#integración-con-control-de-versiones)](#integración-con-control-de-versiones)

[15. Preparación para GitHub [11](#preparación-para-github)](#preparación-para-github)

[16. Preparación para CI/CD [12](#preparación-para-cicd)](#preparación-para-cicd)

[17. Evidencias requeridas [13](#evidencias-requeridas)](#evidencias-requeridas)

[18. Conclusión [14](#conclusión)](#conclusión)

------------------------------------------------------------------------

# **1. Introducción**

Para implementar una estrategia de automatización de pruebas de APIs es necesario preparar un ambiente de trabajo que permita diseñar, ejecutar y analizar los resultados de las pruebas.

La configuración del ambiente incluye la instalación de herramientas, configuración de dependencias, organización del proyecto y preparación de los componentes necesarios para ejecutar pruebas automatizadas mediante Postman y Newman.

El ambiente desarrollado en este proyecto está compuesto por:

- Postman como herramienta principal de diseño y ejecución de pruebas.

- Newman como ejecutor de pruebas automatizadas desde línea de comandos.

- Node.js como plataforma requerida para ejecutar Newman.

- Git como herramienta de control de versiones.

- GitHub como plataforma de almacenamiento y colaboración.

- GitHub Actions para integración continua.

------------------------------------------------------------------------

# **2. Requisitos del ambiente**

## **2.1 Requisitos de hardware**

Los requisitos mínimos recomendados son:

| **Recurso**      | **Recomendación**           |
|:-----------------|:----------------------------|
| Procesador       | Intel Core i5 o equivalente |
| Memoria RAM      | 8 GB mínimo                 |
| Disco disponible | 5 GB                        |
| Conexión         | Acceso a Internet           |

------------------------------------------------------------------------

## **2.2 Sistema operativo**

El proyecto puede ejecutarse en:

- Windows 10/11.

- Linux.

- macOS.

Para esta implementación se utilizará:

Sistema operativo:

Windows 11

------------------------------------------------------------------------

# **3. Instalación de herramientas principales**

------------------------------------------------------------------------

## **3.1 Instalación de Node.js**

Node.js es requerido debido a que Newman funciona sobre el entorno de ejecución JavaScript Node.

### **Descarga**

Ingresar al sitio oficial:

[https://nodejs.org](https://nodejs.org/)

Se recomienda instalar la versión LTS.

------------------------------------------------------------------------

### **Verificación de instalación**

Abrir una terminal y ejecutar:

node -v

Resultado esperado:

v20.x.x

Validar npm:

npm -v

Resultado esperado:

10.x.x

------------------------------------------------------------------------

## **3.2 Instalación de Postman**

Postman será utilizado para:

- Crear solicitudes HTTP.

- Diseñar colecciones.

- Crear scripts de validación.

- Ejecutar pruebas manuales.

- Exportar colecciones automatizadas.

------------------------------------------------------------------------

### **Instalación**

Descargar desde:

https://www.postman.com/downloads/

Instalar la aplicación siguiendo el asistente de instalación.

------------------------------------------------------------------------

### **Verificación**

Abrir Postman y validar:

- La aplicación inicia correctamente.

- Es posible crear una nueva colección.

- Se pueden enviar solicitudes HTTP.

------------------------------------------------------------------------

## **3.3 Instalación de Newman**

Newman permite ejecutar colecciones de Postman desde línea de comandos.

Instalación:

npm install -g newman

------------------------------------------------------------------------

### **Verificación**

Ejecutar:

newman -v

Resultado esperado:

6.x.x

------------------------------------------------------------------------

## **3.4 Instalación del generador de reportes HTML**

Para generar evidencias visuales de las ejecuciones se instalará:

npm install -g newman-reporter-htmlextra

Este componente permite generar reportes con:

- Resumen de ejecución.

- Pruebas exitosas.

- Pruebas fallidas.

- Tiempo de ejecución.

- Detalles de errores.

------------------------------------------------------------------------

# **4. Instalación de Git**

Git será utilizado para administrar el código fuente del proyecto.

------------------------------------------------------------------------

### **Verificación**

Ejecutar:

git --version

Resultado esperado:

git version 2.x.x

------------------------------------------------------------------------

# **5. Configuración inicial de Git**

Configurar identidad del usuario:

git config --global user.name "Tu Nombre"

Configurar correo:

git config --global user.email "correo@example.com"

Validar configuración:

git config --list

------------------------------------------------------------------------

# **6. Creación de estructura del proyecto**

Se crea la siguiente estructura:

api-automation-postman/

│

├── collections/

│ └── jsonplaceholder.postman_collection.json

│

├── environments/

│ └── development.postman_environment.json

│

├── reports/

│

├── screenshots/

│

├── docs/

│ ├── 01_Investigacion.md

│ ├── 02_ComparacionHerramientas.md

│ ├── 03_ConfiguracionAmbiente.md

│ ├── 04_CasosPrueba.md

│ └── 05_Resultados.md

│

├── .github/

│ └── workflows/

│

├── package.json

└── README.md

------------------------------------------------------------------------

# **7. Configuración del proyecto Node.js**

Dentro de la carpeta principal se inicializa Node:

npm init -y

Esto genera:

package.json

Ejemplo:

{

"name":"api-automation-postman",

"version":"1.0.0",

"description":"Automatización de pruebas API con Postman y Newman"

}

------------------------------------------------------------------------

# **8. Configuración de dependencias**

Las dependencias utilizadas son:

### **Newman**

Ejecutor de colecciones:

npm install newman

------------------------------------------------------------------------

### **Newman HTML Reporter**

Generador de reportes:

npm install newman-reporter-htmlextra

------------------------------------------------------------------------

# **9. Configuración de variables de ambiente**

Para evitar valores fijos dentro de las pruebas se utilizan variables.

Ejemplo:

Archivo:

development.postman_environment.json

Contenido:

{

"name":"Development Environment",

"values":\[

{

"key":"baseUrl",

"value":"https://jsonplaceholder.typicode.com"

},

{

"key":"userId",

"value":"1"

}

\]

}

------------------------------------------------------------------------

# **10. Configuración de colección Postman**

Las pruebas serán organizadas mediante colecciones.

Ejemplo:

Collection:

API Automation Testing

\|

├── Users

│ ├── GET Users

│ ├── GET User By ID

│

├── Posts

│ ├── Create Post

│ ├── Update Post

│

└── Error Handling

├── Invalid ID

└── Invalid Request

------------------------------------------------------------------------

# **11. Configuración de scripts de prueba**

Cada solicitud tendrá validaciones automáticas.

Ejemplo:

Validación de código HTTP:

pm.test(

"Status code is 200",

function(){

pm.response.to.have.status(200);

});

Validación de tiempo:

pm.test(

"Response time below 500ms",

function(){

pm.expect(pm.response.responseTime)

.to.be.below(500);

});

------------------------------------------------------------------------

# **12. Primera ejecución de prueba**

Una vez configurado el ambiente se realiza una prueba inicial.

Comando:

newman run collections/jsonplaceholder.postman_collection.json

Resultado esperado:

iterations 1

requests completed

tests passed

------------------------------------------------------------------------

# **13. Generación de reporte HTML**

Ejecutar:

newman run collections/jsonplaceholder.postman_collection.json \\

-r cli,htmlextra \\

--reporter-htmlextra-export reports/report.html

Resultado:

reports/

└── report.html

Este archivo será utilizado como evidencia del resultado de ejecución.

------------------------------------------------------------------------

# **14. Integración con control de versiones**

Inicializar repositorio:

git init

Agregar archivos:

git add .

Crear primer commit:

git commit -m "Configuracion inicial proyecto API Automation"

------------------------------------------------------------------------

# **15. Preparación para GitHub**

Crear repositorio:

api-automation-postman

Conectar repositorio remoto:

git remote add origin URL_REPOSITORIO

Enviar cambios:

git push -u origin main

------------------------------------------------------------------------

# **16. Preparación para CI/CD**

El proyecto queda preparado para integrarse con GitHub Actions.

El flujo será:

Push a GitHub

↓

Instalar Node.js

↓

Instalar Newman

↓

Ejecutar colección Postman

↓

Generar reporte

↓

Guardar resultado

------------------------------------------------------------------------

# **17. Evidencias requeridas**

Durante la configuración deben recopilarse evidencias:

### **Instalación**

- Versión Node.js.

- Versión npm.

- Versión Newman.

### **Postman**

- Colección creada.

- Ambiente configurado.

- Ejecución exitosa.

### **Newman**

- Ejecución desde terminal.

- Reporte generado.

### **GitHub**

- Repositorio creado.

- Código publicado.

------------------------------------------------------------------------

# **18. Conclusión**

La configuración correcta del ambiente es una etapa fundamental para garantizar la ejecución estable de pruebas automatizadas de APIs.

Durante este proceso se instalaron y configuraron las herramientas necesarias para desarrollar una solución completa basada en Postman y Newman.

El ambiente preparado permite:

- Diseñar pruebas automatizadas.

- Ejecutarlas localmente.

- Generar reportes.

- Versionar el proyecto.

- Integrarlo posteriormente con pipelines CI/CD.

Con esta configuración se cuenta con la base técnica necesaria para iniciar el desarrollo de los casos de prueba automatizados y su posterior publicación en GitHub.

------------------------------------------------------------------------

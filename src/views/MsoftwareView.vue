<template>
    <div class="container">
        <div id="qa-introduction" class="content">
            <h1>Metodología de Software</h1>
            <div class="centered">
                        <h2>Requisitos del Sistema (Análisis de Requisitos)</h2>
                        <p>Se identifican las necesidades y expectativas del cliente. Se documentan los requisitos y se verifica su viabilidad.</p>
                    </div>
                    <div class="centered">
                        <h2>Diseño del Sistema</h2>
                        <p>Se crea una arquitectura del sistema basada en los requisitos. Se diseñan componentes y interfaces.</p>
                    </div>
                    <div class="centered">
                        <h2>Implementación (Desarrollo)</h2>
                        <p>Los programadores codifican los módulos del sistema siguiendo el diseño establecido. Se realiza el desarrollo iterativo y continuo.</p>
                    </div>
                    <div class="centered">
                        <h2>Pruebas (Testing)</h2>
                        <p>Se verifica y valida el software desarrollado. Se realizan pruebas unitarias, de integración y de sistema.</p>
                    </div>
                    <div class="centered">
                        <h2>Despliegue (Implementación)</h2>
                        <p>El software es desplegado en el entorno de producción. Se asegura que el sistema funcione correctamente en el entorno del usuario final.</p>
                    </div>
                    <div class="centered">
                        <h2>Mantenimiento y Actualización</h2>
                        <p>Se corrigen errores y se realizan mejoras y actualizaciones. El software se adapta a nuevas necesidades y cambios tecnológicos.</p>
                    </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    background-color: #3c3c3c4a; /* Color de fondo */
}

.content {
    max-width: 800px;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
    background-color: #3c3c3c4a; /* Fondo blanco para el contenido */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.centered {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
}

.content p {
    margin-bottom: 10px;
    text-align: start;
}
</style>

/*
 * Validaciones comunes para pruebas API con Postman.
 *
 * Este archivo sirve como referencia/reutilización para
 * las validaciones utilizadas en la automatización.
 */

// Validar que la respuesta sea JSON
pm.test("Validar respuesta JSON", function () {
    pm.response.to.be.json;
});

// Validar que el tiempo de respuesta sea menor a 1000 ms
pm.test("Validar tiempo de respuesta", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
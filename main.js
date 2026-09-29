const nota = 85; 

console.log("Nota obtenida por el alumno: " + nota);

if (nota > 0) {
    if (nota >= 90) {
        console.log("Resultado: Aprueba con Excelente");
    } 
    else if (nota >= 75) {
        console.log("Resultado: Aprueba con Bien");
    } 
    else if (nota >= 60) {
        console.log("Resultado: Aprueba con Suficiente");
    } 
    else {
        console.log("Resultado: El estudiante no aprueba");
    }
} else {
    console.log("Resultado: El estudiante no aprueba (Nota igual o menor a 0)");
}
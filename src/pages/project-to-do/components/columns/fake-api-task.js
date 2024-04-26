// Simulación de una API fake para obtener datos de proyectos
const fakeApitask = {
    // Método para obtener una lista de proyectos
    getTasks: () => {
        return new Promise((resolve, reject) => {
            // Simulamos un tiempo de carga con setTimeout
            setTimeout(() => {
                // Datos estáticos de proyectos
                const Tasks = [
                    { id: 1, title: 'Task 1', assigned: 'personaX', due: '7/10/2018 00:00' },
                    { id: 2, title: 'Task 2', assigned: 'personaX1', due: '7/10/2018 00:00' },
                    { id: 3, title: 'Task 3', assigned: 'personaX2', due: '7/10/2018 00:00' },
                    // Agrega más proyectos según sea necesario
                ];
                // Resolvemos la promesa con los datos de los proyectos
                resolve(Tasks);
            }, 1000); // Simulamos un tiempo de 1 segundo de carga
        });
    },
};

export default fakeApitask;


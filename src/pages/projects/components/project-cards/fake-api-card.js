// Simulación de una API fake para obtener datos de proyectos
const fakeApi = {
    // Método para obtener una lista de proyectos
    getProjects: () => {
        return new Promise((resolve, reject) => {
            // Simulamos un tiempo de carga con setTimeout
            setTimeout(() => {
                // Datos estáticos de proyectos
                const projects = [
                    { id: 1, name: 'Proyecto 1', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlwAa3FhsapzrIDW2IyMtMjR0VTgOmKkEXw6_N60MahSJE_N9Y' },
                    { id: 2, name: 'Proyecto 2', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQknE-houeICeNsQ6LegXqMnxLQSClpIP4Bthv2NQEjlV2gzfek' },
                    { id: 3, name: 'Proyecto 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyudHd35INCkB7jF_aXq6aeSjZdhs5QU5AZrKLkqRFuiMhGEz' },
                    // Agrega más proyectos según sea necesario
                ];
                // Resolvemos la promesa con los datos de los proyectos
                resolve(projects);
            }, 1000); // Simulamos un tiempo de 1 segundo de carga
        });
    },
};

export default fakeApi;


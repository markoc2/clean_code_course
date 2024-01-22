(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fileOfEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const fileOfDelete = fileOfEvaluate.map( file => file.flagged );

    //Mal
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lasttName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;

    //array
    const frutsNames =['manzana', 'pera','fresa'];

    //boolean
    const isOpen= true;
    const canWrite = false;
    const isActive= true;
    const isEmpty = false;

    //Numbers
    const maxFruts =100;
    const minFruts =5;
    const totalFruts =100;

    const totalOfCars =100;

    //Funtions
    createUser();
    updateUser();
    sendMessage();

})();
function createUser() {
    throw new Error("Function not implemented.");
}

function updateUser() {
    throw new Error("Function not implemented.");
}

function sendMessage() {
    throw new Error("Function not implemented.");
}



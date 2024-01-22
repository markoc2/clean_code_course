(() => {

    // arreglo de temperaturas celsius
    const temperatuCelsiusList = [33.6, 12.34];

    // Dirección ip del servidor
    const ipAddressOfServer = '123.123.123.123';

    // Listado de usuarios
    const userList = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const userEmailsList = userList.map( user => user.email );

    // Variables booleanas de un video juego
    const isJumping = false;
    const isRun = true;
    const hasItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksbyUrl( URL: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getScuareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
        // envia un correo
        //sendMessage('maro@correo.com');
    function sendMessage(toWhom : string): boolean {
        
            if(!toWhom.includes('@') ) return false;
    
            return true;
            throw new Error('Function not implemented.');
       }
       

       interface SendMessageOptions {
            toWhom : string;
            from : string;
            body : string;
            subjet : string;
            apikey : string;
       }
       
       function sendMessageFromInterface({  toWhom ,from ,body ,subjet ,apikey }:SendMessageOptions): boolean {
        
        if(!toWhom.includes('@') ) return false;

        return true;
        throw new Error('Function not implemented.');
   }
   
    




})();

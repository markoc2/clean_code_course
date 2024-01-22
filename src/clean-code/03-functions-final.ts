(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: number ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getlMovieCastById( id: number ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: number ) {
        console.log({ id });
    }
    
    // Crear una película

    interface MovieOptions {
        title: string;
        description: string;
        rating: number;
        cast: string[]
   }

    function createMovie({title, description, rating , cast }: MovieOptions) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();

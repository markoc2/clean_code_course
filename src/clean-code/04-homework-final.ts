(() => {

    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        const frutsList = ['manzana' , 'cereza' , 'ciruela'];
        return  frutsList.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type frutsColors ='red'|'yellow'|'purple';

    function getFruitsByColor( color: frutsColors ): string[] {
        const frutsByColors={
            red : ['manzana','fresa'],
            yellow :['piña','banana'],
            purple :['moras','uvas']
        };

        if ( !Object.keys(frutsByColors).includes(color))
            throw Error('the color must be: red, yellow, purple') ;

        return frutsByColors[color];

    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if( !isFirstStepWorking )    return 'First step broken.';
        if( !isSecondStepWorking )   return 'Second step broken.';
        if( !isThirdStepWorking )    return 'Third step broken.';
        return ( !isFourthStepWorking )  ?    'Fourth step broken.': 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
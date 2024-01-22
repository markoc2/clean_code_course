(() => {
const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result: number;

    if ( isDead ) return 1500;  
    if ( isSeparated )  return 2500; 
    return  isRetired ? 3000: 4000;
    
}
})
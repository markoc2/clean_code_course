type Size =''|'S'|'M'|'L';

class Product {
    constructor(
        public name : string ='',
        public price: number = 0,
        public size : Size =''
        ) { }

        isProductReady(): boolean {
            // if (this.name.length<=0) throw Error('product name is empty')
            // if (this.price<0) throw Error('product price is empty')
            // if (this.size.length<=0) throw Error('product size is empty')
            
            for(const key in this){
                // console.log(key);
                // console.log(typeof this[key] );
                switch (typeof this[key] ) {
                    case 'string':
                        if ((<string><unknown>this[key]).length<= 0) throw Error(`${key} is empty`)
                        break;
                   case 'number':
                        if ((<number><unknown>this[key])<= 0) throw Error(`${key} is zero`)
                        break;  
                    default:
                        throw Error(`${typeof this[key] } is invalid`)
                        break;
                }
            }
            return true;
        }

        toString (){
            
            if (!this.isProductReady) return;
            
            return `${this.name} (${this.price}) ${this.size}`;
        }
}

(()=>{
    const bluePants = new Product ('Ropa',1,'S');
    console.log(bluePants.toString());
}

)();
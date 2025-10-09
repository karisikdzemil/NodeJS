module.exports = class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
        this.cart = {items: []};
    }

    save(){
        
    }

    static findById(){

    }

    static addToCart(product){

    }
    
    static removeFromCart(productId){

    }

    static getCart(){

    }

    static clearCart(){

    }
}
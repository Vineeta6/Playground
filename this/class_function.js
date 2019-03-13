const Book={
    title:'wings of fire',
    price:[500,600,400],

    display(){
        this.price.forEach(function(price){
            console.log(this.title,price);
        },this);
    }
    };
    Book.display();
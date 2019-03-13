
// this here refers to global object as we are calling it in regular function
// In browser it refers to windows object  &  in node in refers to global object


const Book={
    title:'wings of fire',
    display(){
        console.log(this);
    }
    };
   
    function viewBooks(){
        console.log(this);

    }
    viewBooks();

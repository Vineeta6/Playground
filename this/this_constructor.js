// here this method is called inside the constructor
// it refers to the new empty object

function viewBooks(title){
    this.title=title;
    console.log(this);
}

const v1=new viewBooks('wings of fire');

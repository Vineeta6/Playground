
// here this references the object of the class because it is within the class

const Book={
title:'wings of fire',
display(){
    console.log(this);
}
};
Book.display();

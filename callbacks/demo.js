function a(){
    throw new Error('Oops!');
}
function b(){
    a();
}
function c(){
    b();
}
c();

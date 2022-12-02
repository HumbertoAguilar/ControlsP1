
function setup(){

    homen=createButton('🏠︎')
    homen.position(1120,20);
    reset=createButton('⇦')
    reset.position(300,20);


}
function draw(){
    homen.mousePressed(goHome)
    reset.mousePressed(regresar)

}
function goHome(){
    location.replace('https://humbertoaguilar.github.io/Home/');

}
function regresar(){
    location.replace('https://humbertoaguilar.github.io/FH-1player/')
}

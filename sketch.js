
function setup(){

    homen=createButton('🏠︎')
    homen.position(1220,20);
    reset=createButton('⇦')
    reset.position(195,20);


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
var chaoimage,ground



function preload(){
  //imagens pré-carregadas
chaoimage = loadimage ("path.png")


}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
chao = createSprite (300,300,300,300)
chao.addimage (chaoimage)
}

function draw() {
  background(0);

}

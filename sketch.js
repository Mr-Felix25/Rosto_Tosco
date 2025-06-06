function setup() {
  createCanvas(500, 600);
}

let corA = 255;
let olhoX = 250;
let olhoY = 260;


function draw() {
  background(corA, 160, 160);

  // Orelhas
  fill(255-corA, 160, 160);
  ellipse(75, 245, 35, 80);
  ellipse(420, 245, 35, 80);

  //  rosto.
  fill(200-corA, 160, 160);

  ellipse(250, 300, 350, 400);

  // olho esquerdo
fill(255);
  arc(170, 250, 120, 80, 0, PI);
  arc(170, 250, 120, 80, PI, 0);

  //olho direito
fill(255);
  arc(320, 250, 120, 80, 0, PI);
  arc(320, 250, 120, 80, PI, 0);

  // nariz

  triangle(245, 293, 213, 344, 250, 345);

  // boca
  corA = map(mouseX, 0, 500, 00, 255);
  fill("#E91E63");
  arc(250, 390, 150, corA, 0, PI);

  // dentes
  fill("#FAF3F5");
  rect(210, 390, 21, 39, 0, 1, 10, 15);
  rect(230, 390, 21, 39, 0, 1, 10, 15);
  rect(250, 390, 21, 39, 0, 1, 10, 15);
  rect(270, 390, 21, 39, 0, 1, 10, 15);

  // Cabelo
  fill("rgb(25,23,23)");
  bezier(115, 160, 190, 100, 220, 90, 300, 100, 350, 120, 580, 280);
  
  
  // Variáveis para movimentar os olhos.
  olhoX = map(mouseX, 0, 500, 150, 190);
  olhoY = map(mouseY, 0, 600, 240, 260);

  // Olhos 
  fill("blue");
  circle(olhoX, olhoY, 60);
  circle(olhoX + 150, olhoY, 60);
  fill("rgb(8,8,8)");
  circle(olhoX, olhoY, 35); // nova pupila esquerda
  circle(olhoX + 150, olhoY, 35); //nova pupila direita

  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
    
  }
}

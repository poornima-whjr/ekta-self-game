class Game {
    constructor()
    {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
   
     start() {
        if (gameState === 0) {
            player = new Player();
            
            form = new Login()
            form.displayLogin();
                
        }
       
        
          
        space = createSprite(windowWidth/2,windowHeight/2,50,50);
        space.addImage(background1);
        space.velocityX=-5;

        logship = createSprite(110,600,50,50);
        logship.addImage(logshipImg);

    }
     

    play(){
        
        background("black");
        
        if (space.x < 0){
            space.x = space.width/2;
          }
          drawSprites();
          if(shipState===0&&timer>0){
            textSize(25);
            fill("white");  
            text("Astroid belt",800,500);
            timer--;
            if(timer===1){
               shipState=1;
               timer=350;
            }

          }
              var sub;
              var grade=parseInt(player.grade);
              var qno = player.lastQuestion;
          if(shipState===1&&timer>=350){
             if(player.subject==="logic"){
                sub=0;
                
             }
             else{
                sub=1;
             }
             console.log(player.grade);
             console.log(questions.subject[sub][grade]);
            text(questions.subject[sub][grade][0][qno],700,300);
           
          }
    }
} 
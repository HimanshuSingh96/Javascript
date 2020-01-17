function StartGame(){
     this.lives=0;
     this.addLives = function(){
        this.oneUp = setTimeout(function(){
            console.log(this.lives++);
        },1000);
    }
  }
  
  var mario = new StartGame();
  mario.addLives();

  
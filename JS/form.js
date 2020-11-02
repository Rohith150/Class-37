class Form{
    constructor(){
        this.title = createElement('h2', 'Car Racing Game');
        this.title.position(width/2-100, height/2-300);
        this.input = createInput();
        this.input.position(width/2-100,height/2-200);
        this.button = createButton('Play');
        this.button.position(width/2-50,height/2-150);
    }

    display(){
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting = createElement('h2');
            this.greeting.html("Hello " + player.name);
            this.greeting.position(400,150);

        });
    }
}
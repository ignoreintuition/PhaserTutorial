var playState = {
	create: function(){
		var player = game.add.sprite(300, 200, 'characters');
    	player.frame = 90; 
    	game.add.existing(player);
    	player.anchor.setTo(.5, 1);
    },
    update: function(){

    }
};
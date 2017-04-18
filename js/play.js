var playState = {
	player: null,
	create: function(){
			var self = this;
			self.player = game.add.sprite(300, 200, 'characters');
			self.player.frame = 0;
    	game.add.existing(self.player);
    	self.player.anchor.setTo(.5, 1);
			self.player.animations.add('wait', [8,9], 4);
			game.input.activePointer.capture = true;
			game.physics.enable(self.player, Phaser.Physics.ARCADE);
		},
    update: function(){
			var self = this;
			self.player.animations.play('wait');
			if (game.input.activePointer.isDown) {
					if(self.player.x < game.input.x) {
						self.player.body.velocity.x += 10
					} else if(self.player.x > game.input.x) {
						self.player.body.velocity.x -= 10
					}
			}
		}
}

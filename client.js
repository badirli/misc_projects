function connect() {
	var remote_id = document.getElementById("remote_id").value;
	var peer = new Peer();
	peer.on('open', function(id) {
		var conn = peer.connect(remote_id);
		conn.on('open', function() {
			conn.on('data', function(data) {
				console.log('Received: ', data);
			});
			
			conn.send('Hello, host!');
			window.addEventListener('deviceorientation', function(event) {
				conn.send(JSON.stringify({alpha: event.alpha, beta: event.beta, gamma: event.gamma}));
			}, true);

		});
	});
}

window.onload = function() {
	console.log('ook client')
}
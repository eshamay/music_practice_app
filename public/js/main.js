$(document).ready(function() {                   

	var keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Ab', 'Bb', 'Db', 'Eb', 'Gb'];

	var scaleBb = ['A', 'Bb', 'C', 'D', 'Eb', 'F', 'G'];
	var scaleEb = ['Ab', 'Bb', 'C', 'D', 'Eb', 'F', 'G'];

	var chooseRandom = function(list) {
		var i = Math.floor(Math.random() * list.length);
		return list[i];
	}

	var getQualities = function() {
		var qualities = [''];
		if ($('#minor-quality').is(":checked")) {
			qualities.push('m');
		}
		if ($('#seven-quality').is(":checked")) {
			qualities.push('7');
		}
		if ($('#major-seven-quality').is(":checked")) {
			qualities.push('maj7');
		}
		if ($('#minor-seven-quality').is(":checked")) {
			qualities.push('m7');
		}
		if ($('#nine-quality').is(":checked")) {
			qualities.push('9');
		}
		return qualities;
	}

	var displayScore = function() {
		var score = [];
		var numBars = parseInt($('#num-bars').val());

		for (var i=0;i<numBars;i++) {
			var key = chooseRandom(keys);
			var quality = chooseRandom(getQualities());
			score.push(key+quality);
		}

		$('#display').html(score.join('  |  '));
	}

	$('#num-bars').val('16');

	$('#submit').click(function() {
		displayScore();
	});

});

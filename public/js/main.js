$(document).ready(function() {                   

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
		var numBars = parseInt($('#num-bars').val());

		$.post('/score/random', { qualities: getQualities(), numBars: numBars })
			.done(function(data) {
			$('#display').html(data.join('  |  '));
		});

	}

	$('#num-bars').val('16');

	$('#submit').click(function() {
		displayScore();
	});

});

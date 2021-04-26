
// Day/Night

if (document.querySelector('.by-day') && document.querySelector('.by-night')) {
	let day = document.querySelector('.by-day')
	let night = document.querySelector('.by-night')
	day.addEventListener('click', function() {
		document.body.id = ''
	})
	night.addEventListener('click', function() {
		document.body.id = 'night'
	})
}


// Notes 

if (document.querySelector('.notes')) {
	let notes = document.querySelectorAll('.note')
	for (let i = 0; i < notes.length; i++) {
		notes[i].addEventListener('click', function() {
			notes[i].classList.toggle('open-note')
			document.body.classList.toggle('note-open')
			document.body.scrollTop = 0; // For Safari
  			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  		})
	}
}


// Works

if (document.querySelector('.works-container')) {
	let notes = document.querySelectorAll('.work')
	for (let i = 0; i < notes.length; i++) {
		notes[i].addEventListener('click', function() {
			notes[i].classList.toggle('open-work')
			document.body.classList.toggle('work-open')
			document.body.scrollTop = 0; // For Safari
  			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  		})
	}
}


// Scenarios

if (document.querySelector('.scenarios')) {
	let next = document.querySelector('.scenarios .next')
	let prev = document.querySelector('.scenarios .prev')
	let body = document.body

	next.addEventListener('click', function() {
		if (body.classList.contains('one')) {
			body.classList.remove('one')
			body.classList.add('two')		
		} else if (body.classList.contains('two')) {
			body.classList.remove('two')
			body.classList.add('three')
		} else if (body.classList.contains('three')) {
			body.classList.remove('three')
			body.classList.add('four')
		} else if (body.classList.contains('four')) {
			body.classList.remove('four')
			body.classList.add('five')
		} else if (body.classList.contains('five')) {
			body.classList.remove('five')
			body.classList.add('one')
		} else {
			body.classList.add('one')
		}
	})

	prev.addEventListener('click', function() {
		if (body.classList.contains('one')) {
			body.classList.remove('one')
			body.classList.add('five')
		} else if (body.classList.contains('five')) {
			body.classList.remove('five')
			body.classList.add('four')
		} else if (body.classList.contains('four')) {
			body.classList.remove('four')
			body.classList.add('three')		
		} else if (body.classList.contains('three')) {
			body.classList.remove('three')
			body.classList.add('two')
		} else if (body.classList.contains('two')) {
			body.classList.remove('two')
			body.classList.add('one')
		} else {
			body.classList.add('one')
		}

	})

}



// Songs

if (document.querySelector('.songs')) {
	let songs = document.querySelectorAll('.song')
	for (let i = 0; i < songs.length; i++) {
		songs[i].addEventListener('click', function() {
			songs[i].classList.toggle('active')
		})
	}
}





// Shows

if (document.querySelector('.shows')) {
	let shows  = document.querySelectorAll('.show')
	let remote = document.querySelector('.remote')
	let screen = document.querySelector('.screen')
	let buttons = ``
	for (let i = 0; i < shows.length; i++) {
		buttons += `<div class="button">${i + 1}</div>`

	}
	remote.innerHTML = buttons
	let btns = document.querySelectorAll('.remote .button')
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function() {
			console.log(btns[i])
			screen.innerHTML = shows[i].innerHTML
		})
	}
}




// Sounds
if (document.querySelector('.rain')) {
	let rain = document.querySelector('.rain')
	let rainVid = document.querySelector('.rainVideo')
	let rainAu = document.querySelector('.rainAu')
	let fire = document.querySelector('.fire')
	let fireVid = document.querySelector('.fireVideo')
	let fireAu = document.querySelector('.fireAu')
	let stream = document.querySelector('.stream')
	let streamVid = document.querySelector('.streamVideo')
	let streamAu = document.querySelector('.streamAu')
	let piano = document.querySelector('.piano')
	let pianoVid = document.querySelector('.pianoVideo')
	let pianoAu = document.querySelector('.pianoAu')
	let guitar = document.querySelector('.guitar')
	let guitarVid = document.querySelector('.guitarVideo')
	let guitarAu = document.querySelector('.guitarAu')
	let waves = document.querySelector('.waves')
	let wavesVid = document.querySelector('.wavesVideo')
	let wavesAu = document.querySelector('.wavesAu')


	rain.addEventListener ('click', PlayRain)
	rainVid.addEventListener ('click', PlayRain)

	function PlayRain() {
		if (document.body.id === 'playing') {
			rainAu.pause()
			rainVid.pause()	
			document.body.id = ''
		} else {
			rainAu.play()
			rainVid.play()
			fireVid.pause()
			fireAu.pause()
			streamVid.pause()
			streamAu.pause()
			pianoVid.pause()
			pianoAu.pause()
			guitarVid.pause()
			guitarAu.pause()
			wavesVid.pause()
			wavesAu.pause()
			document.body.id = 'playing'
		}

	  }

	fire.addEventListener('click', PlayFire)
	fireVid.addEventListener('click', PlayFire)

	function PlayFire () {
		if (document.body.id === 'playing2') {
			fireAu.pause()
			fireVid.pause()
			document.body.id = ''
		} else {
			fireAu.play()
			fireVid.play()
			rainVid.pause()
			rainAu.pause()
			streamVid.pause()
			streamAu.pause()
			pianoVid.pause()
			pianoAu.pause()
			guitarVid.pause()
			guitarAu.pause()
			wavesVid.pause()
			wavesAu.pause()
			document.body.id = 'playing2'
		}

	   }

	stream.addEventListener('click', PlayStream)
	streamVid.addEventListener('click', PlayStream)

	function PlayStream () {
		if (document.body.id === 'playing3') {
			streamAu.pause()
			streamVid.pause()
			document.body.id = ''
		} else {
			streamVid.play()
			streamAu.play()
			fireAu.pause()
			fireVid.pause()
			rainVid.pause()
			rainAu.pause()
			pianoVid.pause()
			pianoAu.pause()
			guitarVid.pause()
			guitarAu.pause()
			wavesVid.pause()
			wavesAu.pause()
			document.body.id = 'playing3'
		}

	   }

	piano.addEventListener('click', PlayPiano)
	pianoVid.addEventListener('click', PlayPiano)

	function PlayPiano () {
		if (document.body.id === 'playing4') {
			pianoAu.pause()
			pianoVid.pause()
			document.body.id = ''
		} else {
			pianoVid.play()
			pianoAu.play()
			fireAu.pause()
			fireVid.pause()
			rainVid.pause()
			rainAu.pause()
			streamVid.pause()
			streamAu.pause()
			guitarVid.pause()
			guitarAu.pause()
			wavesVid.pause()
			wavesAu.pause()
			document.body.id = 'playing4'
		}

	   }

	guitar.addEventListener('click', PlayGuitar)
	guitarVid.addEventListener('click', PlayGuitar)

	function PlayGuitar () {
		if (document.body.id === 'playing5') {
			guitarAu.pause()
			guitarVid.pause()
			document.body.id = ''
		} else {
			guitarVid.play()
			guitarAu.play()
			fireAu.pause()
			fireVid.pause()
			rainVid.pause()
			rainAu.pause()
			streamVid.pause()
			streamAu.pause()
			pianoVid.pause()
			pianoAu.pause()
			wavesVid.pause()
			wavesAu.pause()
			document.body.id = 'playing5'
		}

	   }

	waves.addEventListener('click', PlayWaves)
	wavesVid.addEventListener('click', PlayWaves)

	function PlayWaves () {
		if (document.body.id === 'playing6') {
			wavesAu.pause()
			wavesVid.pause()
			document.body.id = ''
		} else {
			wavesVid.play()
			wavesAu.play()
			fireAu.pause()
			fireVid.pause()
			rainVid.pause()
			rainAu.pause()
			streamVid.pause()
			streamAu.pause()
			pianoVid.pause()
			pianoAu.pause()
			guitarVid.pause()
			guitarAu.pause()
			document.body.id = 'playing6'
		}

	   }
}

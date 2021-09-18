window.onload = function speak() {
	let lab = document.querySelector('.lab');
		var utter = new SpeechSynthesisUtterance();
		utter.text = "Hello! What's your name?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
		lab.style.visibility = "visible";
}

function speak2() {
    let labela = document.querySelector(".labela").value.toLowerCase();
		var utter = new SpeechSynthesisUtterance();
		utter.text = "Nice to meet you" + labela + "I'm your new assistant, Kai";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
        speak3();
}

function speak3() {
	let lab = document.querySelector('.lab');
	let lab2 = document.querySelector('.lab2');
    let labela = document.querySelector(".labela").value.toLowerCase();
    let pitanje = document.querySelector(".pitanje");
    pitanje.innerHTML = "Nice to meet you " + labela + " I am your assistant, Kai. Tell me, how old are you " + labela + "?";
		var utter = new SpeechSynthesisUtterance();
		utter.text = "Tell me, how old are you " + labela;
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
		lab.style.visibility = "hidden";
		lab2.style.visibility = "visible";
}

function speak4() {
	let lab3 = document.querySelector('.lab3');
	let lab2 = document.querySelector('.lab2');
    let pitanje = document.querySelector(".pitanje");
    let labela2 = document.querySelector(".labela2").value.toLowerCase();
    pitanje.innerHTML = labela2 + ", great age, are you a male or female?";
		var utter = new SpeechSynthesisUtterance();
		utter.text = labela2 + "great age, are you a male or female";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
		lab2.style.visibility = "hidden";
		lab3.style.visibility = "visible";
}

function speak5() {
	let lab3 = document.querySelector('.lab3');
	let lab4 = document.querySelector('.lab4');
    let pitanje = document.querySelector(".pitanje");
    let labela3 = document.querySelector(".labela3").value.toLowerCase();
    pitanje.innerHTML =  "A " + labela3 + ", That's nice, can you guess my gender?";
		var utter = new SpeechSynthesisUtterance();
		utter.text = "A " + labela3 + ", That's nice, can you guess my gender";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
		lab3.style.visibility = "hidden";
		lab4.style.visibility = "visible";
}

function speak6() {
	let lab4 = document.querySelector('.lab4');
	let lab5 = document.querySelector('.lab5');
	let img = document.querySelector(".img");
    let pitanje = document.querySelector(".pitanje");
    let labela4 = document.querySelector(".labela4").value.toLowerCase();
    pitanje.innerHTML =  "Correct! let me show you how I look like. How do I look?";
		var utter = new SpeechSynthesisUtterance();
		utter.text = "Correct! let me show you how I look like. How do I look?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
		if (labela4 == "male") {
			img.src = "images/male.jpg";
		} else {
			img.src = "images/female.jpg";
		}
		lab4.style.visibility = "hidden";
		lab5.style.visibility = "visible";
		img.style.visibility = "visible";
}

function speak7() {
	let img = document.querySelector(".img");
    let pitanje = document.querySelector(".pitanje");
    let labela5 = document.querySelector(".labela5").value.toLowerCase();
    pitanje.innerHTML =  "Well Thank you, but I was just playing, I actually look like this. You see, I have no gender because I'm AI. Now that we properly introduced ourselves, tell me, how can I help you today?";
		var utter = new SpeechSynthesisUtterance();
		utter.text = "Well Thank you, but I was just playing, I actually look like this. You see, I have no gender because I'm AI. Now that we properly introduced ourselves, tell me, how can I help you today?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
		img.src = "images/robot.jpg";
}






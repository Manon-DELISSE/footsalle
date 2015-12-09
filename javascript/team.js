function team() {

	var team = [];

	team[1] = new Object();
	team[1].nameTeam = document.getElementById('teamOne').value;
	team[1].nameJoueurOne = document.getElementById('teamOnePlayerOne').value;
	team[1].nameJoueurTwo = document.getElementById('teamOnePlayerTwo').value;
	team[1].nameJoueurThree = document.getElementById('teamOnePlayerThree').value;
	team[1].nameJoueurFour = document.getElementById('teamOnePlayerFour').value;
	team[1].nameJoueurFive = document.getElementById('teamOnePlayerFive').value;

	team[2] = new Object();
	team[2].nameTeam = document.getElementById('teamTwo').value;
	team[2].nameJoueurOne = document.getElementById('teamTwoPlayerOne').value;
	team[2].nameJoueurTwo = document.getElementById('teamTwoPlayerTwo').value;
	team[2].nameJoueurThree = document.getElementById('teamTwoPlayerThree').value;
	team[2].nameJoueurFour = document.getElementById('teamTwoPlayerFour').value;
	team[2].nameJoueurFive = document.getElementById('teamTwoPlayerFive').value;

	team[3] = new Object();
	team[3].nameTeam = document.getElementById('teamThree').value;
	team[3].nameJoueurOne = document.getElementById('teamThreePlayerOne').value;
	team[3].nameJoueurTwo = document.getElementById('teamThreePlayerTwo').value;
	team[3].nameJoueurThree = document.getElementById('teamThreePlayerThree').value;
	team[3].nameJoueurFour = document.getElementById('teamThreePlayerFour').value;
	team[3].nameJoueurFive = document.getElementById('teamThreePlayerFive').value;

	team[4] = new Object();
	team[4].nameTeam = document.getElementById('teamFour').value;
	team[4].nameJoueurOne = document.getElementById('teamFourPlayerOne').value;
	team[4].nameJoueurTwo = document.getElementById('teamFourPlayerTwo').value;
	team[4].nameJoueurThree = document.getElementById('teamFourPlayerThree').value;
	team[4].nameJoueurFour = document.getElementById('teamFourPlayerFour').value;
	team[4].nameJoueurFive = document.getElementById('teamFourPlayerFive').value;

	team[5] = new Object();
	team[5].nameTeam = document.getElementById('teamFive').value;
	team[5].nameJoueurOne = document.getElementById('teamFivePlayerOne').value;
	team[5].nameJoueurTwo = document.getElementById('teamFivePlayerTwo').value;
	team[5].nameJoueurThree = document.getElementById('teamFivePlayerThree').value;
	team[5].nameJoueurFour = document.getElementById('teamFivePlayerFour').value;
	team[5].nameJoueurFive = document.getElementById('teamFivePlayerFive').value;

	team[6] = new Object();
	team[6].nameTeam = document.getElementById('teamSix').value;
	team[6].nameJoueurOne = document.getElementById('teamSixPlayerOne').value;
	team[6].nameJoueurTwo = document.getElementById('teamSixPlayerTwo').value;
	team[6].nameJoueurThree = document.getElementById('teamSixPlayerThree').value;
	team[6].nameJoueurFour = document.getElementById('teamSixPlayerFour').value;
	team[6].nameJoueurFive = document.getElementById('teamSixPlayerFive').value;

	for (var i = 1; i <= 6; i++) { // boucle des equipes : on le fait une fois pour chaque équipe
		var test = document.getElementsByClassName('t'+ i);  // on attrape tous les éléments avec la classe t + n° équipe. Renvoie un tableau
		for (var j=0; j<test.length;j++) {
			test[j].innerHTML = team[i].nameTeam; // A chaque element de classe t+n° equipe on met le nom de l'equipe n° equipe (i)
		}
	};

	document.getElementById('match').style.display = 'block';
	document.getElementById('score').style.display = 'block';

	document.getElementById('m1t1vst2').innerHTML = team[1].nameTeam +' vs '+ team[2].nameTeam;
	document.getElementById('m1t3vst4').innerHTML = team[3].nameTeam +' vs '+ team[4].nameTeam;
	document.getElementById('m1t5vst6').innerHTML = team[5].nameTeam +' vs '+ team[6].nameTeam;

	document.getElementById('m2t2vst3').innerHTML = team[2].nameTeam +' vs '+ team[3].nameTeam;
	document.getElementById('m2t4vst5').innerHTML = team[4].nameTeam +' vs '+ team[5].nameTeam;
	document.getElementById('m2t6vst1').innerHTML = team[6].nameTeam +' vs '+ team[1].nameTeam;

	document.getElementById('m3t3vst5').innerHTML = team[3].nameTeam +' vs '+ team[5].nameTeam;
	document.getElementById('m3t4vst1').innerHTML = team[4].nameTeam +' vs '+ team[1].nameTeam;
	document.getElementById('m3t6vst2').innerHTML = team[6].nameTeam +' vs '+ team[2].nameTeam;

	document.getElementById('m4t5vst2').innerHTML = team[5].nameTeam +' vs '+ team[2].nameTeam;
	document.getElementById('m4t1vst3').innerHTML = team[1].nameTeam +' vs '+ team[3].nameTeam;
	document.getElementById('m4t6vst4').innerHTML = team[6].nameTeam +' vs '+ team[4].nameTeam;

	document.getElementById('m5t5vst1').innerHTML = team[5].nameTeam +' vs '+ team[1].nameTeam;
	document.getElementById('m5t3vst6').innerHTML = team[3].nameTeam +' vs '+ team[6].nameTeam;
	document.getElementById('m5t4vst2').innerHTML = team[4].nameTeam +' vs '+ team[2].nameTeam;
}
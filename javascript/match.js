function matchOne() { 
	var nbButOne = parseInt(document.getElementById('matchOneTeamOne').value);
	var nbButTwo = parseInt(document.getElementById('matchOneTeamTwo').value);
	var nbButThree = parseInt(document.getElementById('matchOneTeamThree').value);
	var nbButFour = parseInt(document.getElementById('matchOneTeamFour').value);
	var nbButFive = parseInt(document.getElementById('matchOneTeamFive').value);
	var nbButSix = parseInt(document.getElementById('matchOneTeamSix').value);

	if (nbButOne > nbButTwo) {
		var result = nbButOne - nbButTwo;
		if (result >= 3) {
			score.teamOne += 4;
		} else if (result <= 2 && result > 0) {
			score.teamOne += 3;
		} else if (result == 0) {
			score.teamTwo += 1;
			score.teamOne += 1;
		}
	} else {
		var result = nbButTwo - nbButOne;
		if (result >= 3) {
			score.teamTwo += 4;
		} else if (result <= 2 && result > 0) {
			score.teamTwo += 3;
		} else if (result == 0) {
			score.teamTwo += 1;
			score.teamOne += 1;
		}
	}

	if (nbButThree > nbButFour) {
		var result = nbButThree - nbButFour;
		if (result >= 3) {
			score.teamThree += 4;
		} else if (result <= 2 && result > 0) {
			score.teamThree += 3;
		} else if (result == 0) {
			score.teamThree += 1;
			score.teamFour += 1;
		}

	} else {
		var result = nbButFour - nbButThree;
		if (result >= 3) {
			score.teamFour += 4;
		} else if (result <= 2 && result > 0) {
			score.teamFour += 3;
		} else if (result == 0) {
			score.teamThree += 1;
			score.teamFour += 1;
		}
	}

	if (nbButThree > nbButFour) {
		var result = nbButFive - nbButSix;
		if (result >= 3) {
			score.teamFive += 4;
		} else if (result <= 2 && result > 0) {
			score.teamFive += 3;
		} else if (result == 0) {
			score.teamSix += 1;
			score.teamFive += 1;
		}
	} else {
		var result = nbButSix - nbButFive;
		if (result >= 3) {
			score.teamSix += 4;
		} else if (result <= 2 && result > 0) {
			score.teamSix += 3;
		} else if (result == 0) {
			score.teamSix += 1;
			score.teamFive += 1;
		}
	}
}
function matchTwo() {
	var nbButOne = parseInt(document.getElementById('matchTwoTeamOne').value);
	var nbButTwo = parseInt(document.getElementById('matchTwoTeamTwo').value);
	var nbButThree = parseInt(document.getElementById('matchTwoTeamThree').value);
	var nbButFour = parseInt(document.getElementById('matchTwoTeamFour').value);
	var nbButFive = parseInt(document.getElementById('matchTwoTeamFive').value);
	var nbButSix = parseInt(document.getElementById('matchTwoTeamSix').value);

	if (nbButTwo > nbButThree) {
		var result = nbButTwo - nbButThree;
		if (result >= 3) {
			score.teamTwo += 4;
		} else if (result <= 2 && result > 0) {
			score.teamTwo += 3;
		} else if (result == 0) {
			score.teamTwo += 1;
			score.teamThree += 1;
		}
	} else {
		var result = nbButThree - nbButTwo;
		if (result >= 3) {
			score.teamThree += 4;
		} else if (result <= 2 && result > 0) {
			score.teamThree += 3;
		} else if (result == 0) {
			score.teamTwo += 1;
			score.teamThree += 1;
		}
	}

	if (nbButFour > nbButFive) {
		var result = nbButFour - nbButFive;
		if (result >= 3) {
			score.teamFour += 4;
		} else if (result <= 2 && result > 0) {
			score.teamFour += 3;
		} else if (result == 0) {
			score.teamFour += 1;
			score.teamFive += 1;
		}
	} else {
		var result = nbButFive - nbButFour;
		if (result >= 3) {
			score.teamFive += 4;
		} else if (result <= 2 && result > 0) {
			score.teamFive += 3;
		} else if (result == 0) {
			score.teamFour += 1;
			score.teamFive += 1;
		}
	}

	if (nbButSix > nbButOne) {
		var result = nbButSix - nbButOne;
		if (result >= 3) {
			score.teamSix += 4;
		} else if (result <= 2 && result > 0) {
			score.teamSix += 3;
		} else if (result == 0) {
			score.teamSix += 1;
			score.teamOne += 1;
		}
	} else {
		var result = nbButOne - nbButSix;
		if (result >= 3) {
			score.teamOne += 4;
		} else if (result <= 2 && result > 0) {
			score.teamOne += 3;
		} else if (result == 0) {
			score.teamSix += 1;
			score.teamOne += 1;
		}
	}
}
function matchThree() {
	var nbButOne = parseInt(document.getElementById('matchThreeTeamOne').value);
	var nbButTwo = parseInt(document.getElementById('matchThreeTeamTwo').value);
	var nbButThree = parseInt(document.getElementById('matchThreeTwoTeamThree').value);
	var nbButFour = parseInt(document.getElementById('matchThreeTeamFour').value);
	var nbButFive = parseInt(document.getElementById('matchThreeTeamFive').value);
	var nbButSix = parseInt(document.getElementById('matchThreeTeamSix').value);

	if (nbButThree > nbButFive) {
		var result = nbButThree - nbButFive;
		if (result >= 3) {
			score.teamThree += 4;
		} else if (result <= 2 && result > 0) {
			score.teamThree += 3;
		} else if (result == 0) {
			score.teamThree += 1;
			score.teamFive += 1;
		}
	} else {
		var result = nbButFive - nbButThree;
		if (result >= 3) {
			score.teamFive += 4;
		} else if (result <= 2 && result > 0) {
			score.teamFive += 3;
		} else if (result == 0) {
			score.teamThree += 1;
			score.teamFive += 1;
		}
	}

	if (nbButFour > nbButOne) {
		var result = nbButFour - nbButOne;
		if (result >= 3) {
			score.teamFour += 4;
		} else if (result <= 2 && result > 0) {
			score.teamFour += 3;
		} else if (result == 0) {
			score.teamFour += 1;
			score.teamOne += 1;
		}
	} else {
		var result = nbButOne - nbButFour;
		if (result >= 3) {
			score.teamOne += 4;
		} else if (result <= 2 && result > 0) {
			score.teamOne += 3;
		} else if (result == 0) {
			score.teamFour += 1;
			score.teamOne += 1;
		}
	}

	if (nbButSix > nbButTwo) {
		var result = nbButSix - nbButTwo;
		if (result >= 3) {
			score.teamSix += 4;
		} else if (result <= 2 && result > 0) {
			score.teamSix += 3;
		} else if (result == 0) {
			score.teamSix += 1;
			score.teamTwo += 1;
		}
	} else {
		var result = nbButTwo - nbButSix;
		if (result >= 3) {
			score.teamTwo += 4;
		} else if (result <= 2 && result > 0) {
			score.teamTwo += 3;
		} else if (result == 0) {
			score.teamSix += 1;
			score.teamTwo += 1;
		}
	}
}
function matchFour() {
	var nbButOne = parseInt(document.getElementById('matchFourTeamOne').value);
	var nbButTwo = parseInt(document.getElementById('matchFourTeamTwo').value);
	var nbButThree = parseInt(document.getElementById('matchFourTeamThree').value);
	var nbButFour = parseInt(document.getElementById('matchFourTeamFour').value);
	var nbButFive = parseInt(document.getElementById('matchFourTeamFive').value);
	var nbButSix = parseInt(document.getElementById('matchFourTeamSix').value);

	if (nbButFive > nbButTwo) {
		var result = nbButFive - nbButTwo;
		if (result >= 3) {
			score.teamFive += 4;
		} else if (result <= 2 && result > 0) {
			score.teamFive += 3;
		} else if (result == 0) {
			score.teamFive += 1;
			score.teamTwo += 1;
		}
	} else {
		var result = nbButTwo - nbButFive;
		if (result >= 3) {
			score.teamTwo += 4;
		} else if (result <= 2 && result > 0) {
			score.teamTwo += 3;
		} else if (result == 0) {
			score.teamFive += 1;
			score.teamTwo += 1;
		}
	}

	if (nbButOne > nbButThree) {
		var result = nbButOne - nbButThree;
		if (result >= 3) {
			score.teamOne += 4;
		} else if (result <= 2 && result > 0) {
			score.teamOne += 3;
		} else if (result == 0) {
			score.teamOne += 1;
			score.teamThree += 1;
		}
	} else {
		var result = nbButThree - nbButOne;
		if (result >= 3) {
			score.teamThree += 4;
		} else if (result <= 2 && result > 0) {
			score.teamThree += 3;
		} else if (result == 0) {
			score.teamOne += 1;
			score.teamThree += 1;
		}
	}

	if (nbButFour > nbButSix) {
		var result = nbButFour - nbButSix;
		if (result >= 3) {
			score.teamFour += 4;
		} else if (result <= 2 && result > 0) {
			score.teamFour += 3;
		} else if (result == 0) {
			score.teamFour += 1;
			score.teamSix += 1;
		}
	} else {
		var result = nbButSix - nbButFour;
		if (result >= 3) {
			score.teamSix += 4;
		} else if (result <= 2 && result > 0) {
			score.teamSix += 3;
		} else if (result == 0) {
			score.teamFour += 1;
			score.teamSix += 1;
		}
	}
}
function matchFive() {
	var nbButOne = parseInt(document.getElementById('matchFiveTeamOne').value);
	var nbButTwo = parseInt(document.getElementById('matchFiveTeamTwo').value);
	var nbButThree = parseInt(document.getElementById('matchFiveTeamThree').value);
	var nbButFour = parseInt(document.getElementById('matchFiveTeamFour').value);
	var nbButFive = parseInt(document.getElementById('matchFiveTeamFive').value);
	var nbButSix = parseInt(document.getElementById('matchFiveTeamSix').value);

	if (nbButFive > nbButOne) {
		var result = nbButFive - nbButOne;
		if (result >= 3) {
			score.teamFive += 4;
		} else if (result <= 2 && result > 0) {
			score.teamFive += 3;
		} else if (result == 0) {
			score.teamFive += 1;
			score.teamOne += 1;
		}
	} else {
		var result = nbButOne - nbButFive;
		if (result >= 3) {
			score.teamOne += 4;
		} else if (result <= 2 && result > 0) {
			score.teamOne += 3;
		} else if (result == 0) {
			score.teamFive += 1;
			score.teamOne += 1;
		}
	}

	if (nbButSix > nbButThree) {
		var result = nbButSix - nbButThree;
		if (result >= 3) {
			score.teamSix += 4;
		} else if (result <= 2 && result > 0) {
			score.teamSix += 3;
		} else if (result == 0) {
			score.teamSix += 1;
			score.teamThree += 1;
		}
	} else {
		var result = nbButThree - nbButSix;
		if (result >= 3) {
			score.teamThree += 4;
		} else if (result <= 2 && result > 0) {
			score.teamThree += 3;
		} else if (result == 0) {
			score.teamSix += 1;
			score.teamThree += 1;
		}
	}

	if (nbButFour > nbButTwo) {
		var result = nbButFour - nbButTwo;
		if (result >= 3) {
			score.teamFour += 4;
		} else if (result <= 2 && result > 0) {
			score.teamFour += 3;
		} else if (result == 0) {
			score.teamFour += 1;
			score.teamTwo += 1;
		}
	} else {
		var result = nbButTwo - nbButFour;
		if (result >= 3) {
			score.teamTwo += 4;
		} else if (result <= 2 && result > 0) {
			score.teamTwo += 3;
		} else if (result == 0) {
			score.teamFour += 1;
			score.teamTwo += 1;
		}
	}
}
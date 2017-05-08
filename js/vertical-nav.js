$(document).ready(function() {
	// var now = parseInt(moment().format("DDD"));
	// var spring = parseInt(moment("21-03", "DD-MM").format("DDD"));
	// var summer = parseInt(moment("22-06", "DD-MM").format("DDD"));
	// var autumn = parseInt(moment("23-09", "DD-MM").format("DDD"));
	// var winter = parseInt(moment("22-12", "DD-MM").format("DDD"));

	// var now = moment("11-10-2017", "DD-MM-YYYY");
	// var now = moment("21-06", "DD-MM");
	var now = moment();

	

	var spring = moment("21-03", "DD-MM");
	var summer = moment("22-06", "DD-MM");
	var autumn = moment("23-09", "DD-MM");
	var winter = moment("22-12", "DD-MM");

	// console.log('today', now.format());
	// console.log('spring', spring.format());
	// console.log('summer', summer.format());

	var currentSeason = '';

	var thisSpring = now.diff(spring, 'days')+1;
	var thisSummer = now.diff(summer, 'days')+1;
	var thisAutumn = now.diff(autumn, 'days')+1;
	var thisWinter = now.isSameOrAfter(winter) ? now.diff(winter, 'days')+1 : now.diff(moment("01-01", "DD-MM"), 'days')+9+1;

	console.log('zima', thisWinter)

	
	var ordinalNo = function(thisSeason) {
		if (parseInt(thisSeason.toString().slice(-1)) == 1) {
			thisSeason = thisSeason+'st'
		} 
		else if (parseInt(thisSeason.toString().slice(-1)) == 2) {
			thisSeason = thisSeason+'nd'
		}
		else if (parseInt(thisSeason.toString().slice(-1)) == 3) {
			thisSeason = thisSeason+'rd'
		}
		else {
			thisSeason = thisSeason+'th'
		}
		return thisSeason
	}



	
	console.log(thisSpring)
	console.log('ostatnia', thisSpring.toString().slice(-1));

	
	if (now.isBetween(spring, summer, null, '[)')) {
		$('section#p1').addClass('active')
		$('nav a[href="#p1"]').addClass('current')
		currentSeason = '1'
		$('section#p1').find('.days').text(ordinalNo(thisSpring) + ' day of ')
	}
	else if (now.isBetween(summer, autumn, null, '[)')) {
		$('section#p2').addClass('active')
		$('nav a[href="#p2"]').addClass('current')
		currentSeason = '2'
		$('section#p2').find('.days').text(ordinalNo(thisSummer) + ' day of ')
	}
	else if (now.isBetween(autumn, winter, null, '[)')) {
		$('section#p3').addClass('active')
		$('nav a[href="#p3"]').addClass('current')
		currentSeason = '3'
		$('section#p3').find('.days').text(ordinalNo(thisAutumn) + ' day of ')
	}
	else {
		$('section#p4').addClass('active')
		$('nav a[href="#p4"]').addClass('current')
		currentSeason = '4'
		$('section#p4').find('.days').text(ordinalNo(thisWinter) + ' day of ')
	}


	

	var nextSpring = now.isAfter(spring) ? spring.add(1, 'y') : spring;
	var nextSummer = now.isAfter(summer) ? summer.add(1, 'y') : summer;
	var nextAutumn = now.isAfter(autumn) ? autumn.add(1, 'y') : autumn;
	var nextWinter = now.isAfter(winter) ? winter.add(1, 'y') : winter;

	console.log('nextSpring', nextSpring);

	var untilSpring = nextSpring.diff(now,'days');
	var untilSummer = nextSummer.diff(now,'days');
	var untilAutumn = nextAutumn.diff(now,'days');
	var untilWinter = nextWinter.diff(now,'days');

	

	console.log(untilSpring, 'left to Spring');
	console.log(untilSummer, 'left to Summer');
	console.log(untilAutumn, 'left to Autumn');
	console.log(untilWinter, 'left to Winter');

	// if (now < spring || now >= winter) {
	// 	$('section#p4').addClass('active')
	// 	$('nav a[href="#p4"]').addClass('current')
	// }
	// else if (now < summer && now >= spring) {
	// 	$('section#p1').addClass('active')
	// 	$('nav a[href="#p1"]').addClass('current')
	// }
	// else if (now < autumn && now >= summer) {
	// 	$('section#p2').addClass('active')
	// 	$('nav a[href="#p2"]').addClass('current')
	// }
	// else if (now < winter && now >= autumn) {
	// 	$('section#p3').addClass('active')
	// 	$('nav a[href="#p3"]').addClass('current')
	// }



	// console.log(moment().isBetween(winter, spring, null, '[)'));
	// console.log(now.isBetween(spring, summer, null, '[)'));
	console.log(now.isBetween(summer, autumn, null, '[)'));

	
	// console.log('spring', spring);
	// console.log('summer ',summer);
	// console.log('autumn ',autumn);
	// console.log('winter ',winter);

	$('.today span').text(now.format("dddd, MMMM Do YYYY"));

	
	if (currentSeason !== '1') {
		$('#p1 .countdown .days').text(untilSpring + (untilSpring == 1 ? ' day ' : ' days ') + ' until ');
	}
	
	if (currentSeason !== '2') {
		$('#p2 .countdown .days').text(untilSummer + (untilSummer == 1 ? ' day ' : ' days ') + ' until ');
	}

	if (currentSeason !== '3') {
		$('#p3 .countdown .days').text(untilAutumn + (untilAutumn == 1 ? ' day ' : ' days ') + ' until ');
	}

	if (currentSeason !== '4') {
		$('#p4 .countdown .days').text(untilWinter + (untilWinter == 1 ? ' day ' : ' days ') + ' until ');
	}
	
	
	


	$('nav a').click(function() {
		var page = this.hash;
		// console.log(page);
		$('nav a').removeClass('current');
		$(this).addClass('current');
		$('section.active').removeClass('active').addClass('blur');
		$(page).removeClass('blur').addClass('active');
	})
})
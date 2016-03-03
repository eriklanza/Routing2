$(document).ready(function() {
	var count = 1 ;
	//default hidden elements
	$('#laterform').hide();
	$('#content2').hide();
	$('#showContent2').hide();
	$('#showPreferences').hide();
	$('#showSearch').hide();
	$('#arrow2').hide();
	$('#content').hide();
	$('.transData').hide();
	$('.icon').hide();

	//hide some elements when screen is smaller than default
	if (screen.width <= 640){
		$('#searchForm').hide();
		$('#preferences').hide();
		$('#showPreferences').show();
		$('#showSearch').show();
		$('#hideContent').hide();
		$('#showContent').hide();
		$('#content').show();
		$('#arrow2').hide();
		$('#arrow').hide();
		$('.walkCol').hide();
		$('.durationCol').hide();
		$('.co2Col').hide();
		$('.icon').show();
		}
	if (screen.width >640 && screen.width<1024){
		$('#showPreferences').show();
		$('#showSearch').show();
		$('#searchForm').hide();
		$('#preferences').hide();
		$('#content').show();
		$('#showContent').hide();
	}

	//Now and later buttons, changing color when one is selected
	$('#now').click(function(){
		$('#later').css("background-color", "#DBE6E0");
		$('#now').css("background-color", "#69D2E7");
		$('#now').css("color", "#fff");
		$('#later').css("color", "#275A43");
		$('#laterform').hide('fast');
		});
	$('#later').click(function(){
		$('#now').css("background-color", "#DBE6E0");
		$('#later').css("background-color", "#69D2E7");
		$('#later').css("color", "#fff");
		$('#now').css("color", "#275A43");
		$('#laterform').toggle('fast');
		});

	//transitions for hiding un-used elements while searching
	$('#search').click(function(){
		$('#content').hide('fast');
		$('#content2').show('slow');
		$('#preferences').hide('slow');
		$('#searchForm').hide('slow');
		$('#showPreferences').show();
		$('#showSearch').show();
		$('#showContent2').show();
		$('#showContent').hide();
	});

	//hides or shows the information or content
	$('#hideContent').click(function(){
		$('#content').hide('400');
		$('#showContent').show('400');
	});
	$('#showContent').click(function(){
		$('#showContent').hide('400');
		$('#content').show('400');
	});

	//hides or shows the preferences menu
	$('#hidePreferences').click(function(){
		$('#preferences').hide('400');
		$('#showPreferences').show('400');
	});
	$('#showPreferences').click(function(){
		$('#showPreferences').hide('400');
		$('#preferences').show('400');
	});

	//hides or shows the search menu
	$('#hideSearch').click(function(){
		$('#searchForm').hide('400');
		$('#showSearch').show('400');
	});
	$('#showSearch').click(function(){
		$('#showSearch').hide('400');
		$('#searchForm').show('400');
	});

	//hides or show the results page
	$('#showContent2').click(function(){
		$('#content2').hide('400');
		$('#content').show('400');
		$('#showContent2').hide();
	});

	//hides or shows navbar
	$('#arrow').click(function(){
		$('header').slideUp('400');
		$('#arrow2').show('slow');
	});
	$('#arrow2').click(function(){
		$('header').slideDown('400');
		$('#arrow2').hide('slow');
	});


	$("#viewAll").click(function () {
		$('.transData').toggle('slow');
      $(this).text(function(i, text){
          return text === "Less" ? "View All" : "Less";
      })
   });

});
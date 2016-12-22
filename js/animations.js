// Animations
$('.animated').waypoint(function() {
	$(this).toggleClass($(this).data('animation'));
},
{ offset: '90%' });


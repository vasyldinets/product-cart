;(function($){
		$(document).ready(function() {
		var people = 153;
        document.getElementById('reviews').innerHTML = people;

    });
    	$(document).ready(function() {
		var score = 4.25;
        document.getElementById('ba-rating').innerHTML = score;
    });
	$(document).ready(function(){
		var slider = $('.ba-slider');
		slider.slick({
	 	dots:true
	 	});
	var qtyField = $('.ba-product_qty-field'),
		qtyUp = $('.ba-product__qty--up'),
		qtyDown = $('.ba-product__qty--down'),
		raTing = $('.ba-rating__stars'),
		score = 4.25,
		people = 153,
		star1 = $('#star1'),
		star2 = $('#star2'),
		star3 = $('#star3'),
		star4 = $('#star4'),
		star5 = $('#star5');

	qtyUp.on("click", function(event){
		event.preventDefault();
		var oldVal = qtyField.val();
		qtyField.val(++oldVal);
	});
	qtyDown.on("click", function(event){
		event.preventDefault();
		var oldVal = qtyField.val();
		qtyField.val(--oldVal === 0 ? 1 : oldVal);
	});
	raTing.on("click", function(event){
		event.preventDefault();
		document.getElementById('reviews').innerHTML = ++people;
	});

	star1.on("click", function(event){
		event.preventDefault();

		 i = ((score*people) + 1)/(people+1);
		score = i;
		document.getElementById('ba-rating').innerHTML = score.toFixed(2);
		});
	star2.on("click", function(event){
		event.preventDefault();
		console.log(people)
		 i = ((score*people) + 2)/(people+1);
		score = i;
		document.getElementById('ba-rating').innerHTML = score.toFixed(2);
		});
	star3.on("click", function(event){
		event.preventDefault();
		console.log(people)
		 i = ((score*people) + 3)/(people+1);
		score = i;
		document.getElementById('ba-rating').innerHTML = score.toFixed(2);
		});
	star4.on("click", function(event){
		event.preventDefault();
		console.log(people)
		 i = ((score*people) + 4)/(people+1);
		score = i;
		document.getElementById('ba-rating').innerHTML = score.toFixed(2);
		});
	star5.on("click", function(event){
		event.preventDefault();
		console.log(people)
		 i = ((score*people) + 5)/(people+1);
		score = i;
		document.getElementById('ba-rating').innerHTML = score.toFixed(2);
		});
});
})(jQuery);

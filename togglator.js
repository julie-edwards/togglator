/* Togglator is a jQuery plugin by Julie Edwards
 * http://julie-edwards.com
 */

(function($){
	$.fn.togglate = function(options){
		//default settings
		var settings = $.extend({
			hideInitial  : true,          //togglator content is hidden on page load
			animate      : true,          //show slide animation on open and close
			animateSpeed : 400,           //duration of toggle animation
			arrow        : true,          //show arrow before title (togglator-arrow.png)
			rotateArrow  : true,          //rotate arrow on toggle
			animateArrow : true,          //animate arrow rotation
			defaultTitle : "View Content" //default title if no title attribute is specified
		
		},options);
		
		return this.each(function(){
			//wrap content in a containing div 
			$(this).wrap('<div class="togglator" />');
			$(this).addClass('togglator-content').removeClass('togglator');
			//create a title div
			if($(this).prop("title")==undefined || $(this).prop("title")==""){
				$(this).prop('title',settings.defaultTitle)
			}
			$(this).before('<div class="togglator-title">' + $(this).prop('title') + '</div>');
			//add arrow and apply arrow settings
			if(settings.arrow){
				$(this).prev().append('<div class="togglator-arrow"></div>');
			}
			var arrow = $(this).parent().find('.togglator-arrow')
			if(settings.rotateArrow){
				$(arrow).addClass('rotate');
			}
			if(settings.animateArrow){
				$(arrow).addClass('animate');
			}
			//start togglator open or closed
			if(settings.hideInitial){
				$(this).css("display","none");
			}
			else{
				$(this).prev().addClass('open');
			}
			//bind function to click event
			$(this).prev().click(togglateToggle);
		});
		//funtion called when title div is clicked
		function togglateToggle(){
			$(this).toggleClass('open');
			if(settings.animate){
				$(this).next().slideToggle(settings.animateSpeed);
			}
			else{
				$(this).next().toggle();
			}					
		}
	}
}(jQuery));
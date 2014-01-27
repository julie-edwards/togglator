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
            var t = $(this),
                title = t.prop("title"),
                arrow = $('<div/>', {class: "togglator-arrow"}),
                titleDiv = $('<div/>', {class: "togglator-title"});
            
            //wrap content in a containing div 
            t.wrap('<div class="togglator" />');
            t.toggleClass('togglator-content togglator');
            //create a title div and add title
            t.before(titleDiv);
            if(!title){
                title = settings.defaultTitle;
            }
            titleDiv.append(title);
            //add arrow and apply arrow settings
            if(settings.arrow){
               titleDiv.append(arrow);
                if(settings.rotateArrow){
                    arrow.addClass('rotate');
                }
                if(settings.animateArrow){
                    arrow.addClass('animate');
                }
            }
            //start togglator open or closed
            if(settings.hideInitial){
                t.css("display","none");
            }
            else{
                titleDiv.addClass('open');
            }
            //bind function to click event
            titleDiv.click(togglateToggle);
        });
        //funtion called when title div is clicked
        function togglateToggle(){
            var titleDiv = $(this)
                t = titleDiv.next();
            titleDiv.toggleClass('open');
            if(settings.animate){
                t.slideToggle(settings.animateSpeed);
            }
            else{
                t.toggle();
            }                   
        }
    }
}(jQuery));
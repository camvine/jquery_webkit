/*****************************************************************************
 * webkit.js - jQuery WebKit tranitions wrapper.
 * 
 * Copyright (c) 2009 Cambridge Visual Networks Ltd.
 *
 * Initial version by Michael Dales (michael@camvine.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a 
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 */
 

(function($) {

    $.fn.fadeIn = function(paramset)
    {                    
        var settings = $.extend({
            duration: 1.0,
            timing_function: 'linear'
        }, paramset || {});
        
        return this.each(function()
        {                                        
            $(this).css("-webkit-transition-property", "opacity");
            $(this).css("-webkit-transition-duration", settings.duration + "s");
            $(this).css("-webkit-transition-timing-function", settings.timing_function);
            $(this).css("opacity", 1);
        });
    }
    
    $.fn.fadeOut = function(paramset)
    {
        var settings = $.extend({
            duration: 1.0,
            timing_function: 'linear'
        }, paramset || {});
        
        return this.each(function()
        {            
            $(this).css("-webkit-transition-property", "opacity");
            $(this).css("-webkit-transition-duration", settings.duration + "s");
            $(this).css("-webkit-transition-timing-function", settings.timing_function);
            $(this).css("opacity", 0);            
        });
    }
    
    $.fn.webkitTransitionEnd = function(func)
    {
        return this.bind('webkitTransitionEnd', func);
    }
    
    $.fn.reflectOn = function(paramset)
    {
        var settings = $.extend({
            direction: 'below',
            offset: 0,
            mask_box_image: null
        }, paramset || {});
        
        return this.each(function()
        {
            var setting_string = settings.direction;
            
            if (settings.offset)
                setting_string += " " + offset;
                            
            if (settings.mask_box_image)
                setting_string += " " + mask_box_image;
            
            $(this).css("-webkit-box-reflect", setting_string);
        });
    }

    $.fn.reflectOff = function(paramset)
    {        
        return this.each(function()
        {
            $(this).css("-webkit-box-reflect", "none");
        });
    }
    
    $.fn.maskOn = function(paramset)
    {
        var settings = $.extend({
            mask: null
        }, paramset || {});
        
        return this.each(function()
        {
            var setting_string = settings.mask;
            
            $(this).css("-webkit-mask-image", setting_string);
        });
    }

    $.fn.maskOff = function(paramset)
    {        
        return this.each(function()
        {
            $(this).css("-webkit-mask-image", "none");
        });
    }
    
    
})(jQuery);

/*

attributeMap should look like:

    {
        'data-lazy-src': 'src'
    }

where `data-lazy-src` converts to `src` on command.


to convert, either:


1) execute returned function eg:

    var el = document.querySelector('.item'),
        lazy = lazyAttr(el, {'data-lazy-srcset': 'srcset'} );

    lazy();


2) fire event

     var el = document.querySelector('.item'),
        lazy = lazyAttr(el, {'data-lazy-srcset': 'srcset'} );

    el.dispatchEvent(new CustomEvent('attribute.load.cmd'));


*/

export default function (element, attributeMap) {

    var loader = function() {

        Object.keys(attributeMap).forEach(function(k){
            element.setAttribute(attributeMap[k], element.getAttribute(k));    
        });    

        element.dispatchEvent( new CustomEvent('attribute.load', { bubbles: true }) );
        element.removeEventListener('attribute.load.cmd', loader);

    };

    element.addEventListener('attribute.load.cmd', loader);

    return loader;


}
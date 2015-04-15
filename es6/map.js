export default function(attributeMap) {

    return function() {

        Object.keys( attributeMap ).forEach( k=>this.setAttribute(attributeMap[k], this.getAttribute(k)) );    
        this.dispatchEvent( new CustomEvent('attribute.load', { bubbles: true, detail: attributeMap }) );

    };

}
# lazy-attribute
Delay setting an elements attribute for lazy-loading.


## Example 1

### self converting event triggered


With the following, preconfigured lazy-loaded image
```
<img class="image--lazy" data-lazy-src="//placehold.it/300x300" />

```

Convert it on click
```
var img = document.querySelector('.image--lazy');
img.addEventListener('click', lazyAttribute.map( {'data-lazy-src': 'src'} ));
```


## Example 2

### trigger with bubbling, custom event


With the following, preconfigured lazy-loaded image
```
<img class="lazy" data-lazy-src="//placehold.it/300x300" />
<button class="button">Load</button>

```

Convert by custom event
```
lazyAttribute.listen();

var img = document.querySelector('.lazy'),
    btn = document.querySelector('.button');

btn.addEventListener('click', function(){
    img.dispatchEvent(
        new CustomEvent('attribute.load.cmd', {
            bubbles:true,
            detail: {'data-lazy-src': 'src'}
        })
    );
});
```


# Listening for attribute changes

Listen / react to lazy-loaded attribute

```
img.addEventListener('attribute.load', function(e){
    // e.detail is the attribute map
    console.log('These attributes changed: %s', 
        Object.keys(e.detail).join(', ')
    );

})


import map from './map';

export default function listen() {

    window.addEventListener('attribute.load.cmd', function(e){
        var loader = map(e.detail);
        loader.call(e.target);
    });

}

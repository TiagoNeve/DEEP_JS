<div id="demo"> Some content</div>

var p = document.createElement('p');
var node = document.createTextNode('Some new text');

p.appendChild(node);

var div = document.getElementById('demo');
div.appendChild(p);

// Removendo elementos

<div id="demo">
    <p id="p1">Isso é um parágrafo</p>
    <p id="p2">Isso é outro parágrafo</p>
</div>

var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.removeChild(child);

// Recolocando elementos

<div id="demo">
    <p id="p1">Isso é um parágrafo</p>
    <p id="p2">Isso é outro parágrafo</p>
</div>

var p = document.createElement("p");
var node = document.createTextNode("This is new");
p.appendChild(node);

parent.replaceChild(p, child);

// Animações 
// Utilizado o conceito de animações no codepen.io

//
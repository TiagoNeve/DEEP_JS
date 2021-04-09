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

// Eventos
/**
 * onclick -> Ocorre quando um elemento é clicado
 * onload -> Ocorre quando um objeto é carregado
 * onunload -> Ocorre quando uma página é descarregada da página body
 * onchange -> Ocorre quando o conteúdo de um elemento recebe alguma alteração
 * onmouseouver -> Ocorre quando o mouse passa por cima.
 * onmouseout -> Ocorre quando o mouse sai do range de um elemento, antes passado
 * onmousedown -> Ocorre quando o elemento recebe algum click, no momento em que ocorre o
 * click.
 * onmouseup -> Ocorre quando o elemento é desclicado pelo mouse que havia clicado antes.
 * onblur -> Ocorre quando um elemento perde o focus.
 * onfocus -> Ocorre quando um elemento ganha focus.
 */
// A função que é utilizada para referenciar eventos é geralmente chamada de events handle

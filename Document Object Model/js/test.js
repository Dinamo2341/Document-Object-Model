function ol(inner, addClass){
    var ol = document.createElement('ol');
    var body = document.querySelector('body');
    body.appendChild(ol);
    var li = document.createElement('li')
    var oL = document.querySelector('ol')
    oL.appendChild(li);
    li.innerHTML = inner;
    li.className = addClass;
}
function li(answer){
    var input = document.createElement('input');
    var li = document.querySelector('.question');
    var br = document.createElement('br');
    li.insertBefore(br, li.children[2]);
    li.appendChild(input);
    input.setAttribute('type', 'checkbox');

    var label = document.createElement('label');
    li.appendChild(label);
    label.innerHTML = answer;
}
ol('Вопрос', 'question');
li('Answer');
li('Answer 1');
li('Answer 2');

var data = {
    title: function(){
        var pageTitle = document.createElement('h1');
        pageTitle.innerHTML = 'Тест по программированию';
        var body = document.querySelector('body');
        body.appendChild(pageTitle);
    },
    question: function(inner, addClass){
        var ol = document.createElement('ol');
        var body = document.querySelector('body');
        body.appendChild(ol);
        var li = document.createElement('li')
        var oL = document.querySelector('ol')
        oL.appendChild(li);
        li.innerHTML = inner;
        li.className = addClass;
    },
    answer : function(answer){
        var input = document.createElement('input');
        var li = document.querySelector('.question'+i);
        var br = document.createElement('br');
        li.insertBefore(br, li.children[6]);
        li.appendChild(input);
        input.setAttribute('type', 'checkbox');

        var label = document.createElement('label');
        li.appendChild(label);
        label.innerHTML = answer;
    },
    btn : function (){
        var el = document.createElement('button');
        el.innerHTML = 'Проверить мои результаты';
        var body = document.querySelector('body');
        body.appendChild(el);
    },
    // pageInit : function(){
    // }
}

data.title();
for(var i = 1; i < 4; i++){
    data.question('Вопрос ' + i, 'question' + i);
    for (var j = 1; j < 4; j++){
            data.answer('Вариант ответа' + j, '.question' + i)
        }
    }
data.btn();

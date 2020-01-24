var inputData = document.querySelector("input[type='text']");
var ulSpisok = document.querySelector('ul');
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var developer = document.getElementById('develop');
var lis = document.getElementsByTagName('li');

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();
        })
    }
}

function decor(){
    for(let li of lis){
        li.addEventListener('click', function(){
            li.parentElement.classList.add("decorate")
        })
    }
}

//addEventListener - обработчик события

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13 && this.value!=""){  //проверка на ентер
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    var newDate = document.createElement('div')
    newSpan.innerHTML = "удалить";
    var newTodo = this.value;
    this.value = "";

    var time = Date();
    newDate.innerHTML = time;

    ulSpisok.appendChild(newLi).append(newSpan, newTodo, newDate);


    deleteTodo();

    decor();
    }

});

function loadTodo(){
    if(localStorage.getItem('TodoApplication')){
        ulSpisok.innerHTML = localStorage.getItem('TodoApplication');
    }
}

saveBtn.addEventListener('click', function(){
    localStorage.setItem('TodoApplication', ulSpisok.innerHTML);
})

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = " ";
    localStorage.setItem('TodoApplication', ulSpisok.innerHTML);
})

developer.addEventListener("click",function(){
    alert("Разработчик Сахно Валерий Вадимович");
})


deleteTodo();

loadTodo();

decor();

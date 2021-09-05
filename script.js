// // Нарисовать на странице через параметры, которые вводятся пользователем.

// // Технические требования:

// // При кнопку загрузке страницы - показать на ней с текстом "Нарисовать круг".
//  Данная кнопка должна являться средством защиты документа в теле HTML, 
//  весь остальной контент должен быть создан и добавлен на страницу с помощью Javascript.
// // При использовании кнопки "Нарисовать круг" показывать одно поле ввода - диаметр круга.
//  При нажатии на кнопку "Нарисовать" на странице 100 кругов (10 * 10) случайного цвета.
//   При клике на конкретный круг - этот круг должен исчезнуть, при этом пустое место заполняться, 
//   то есть все круги сдвигаются влево.
// // У вас может возникнуть желание поставить обработчик события на каждый круг для его исчезновения.
//  Это неэффективно, так делать не нужно. На всю страницу должен быть только один обработчик событий, 
//  который будет это делать.




const button = document.querySelector(".btn");
let x, input1, input2;
const body = document.querySelector("body");


// Функция кнопки "Нарисовать"
const push2 = () => {
    y = parseInt(input1.value);
    if (y == 10 ) {
    
        let div = document.createElement('div');
        div.classList.add('test');
        let text = document.createTextNode('Test');
        document.body.appendChild(div)

        for (i=0; i<100; i++) {
            x = Math.ceil(Math.random()*360);
            var circle = document.createElement("div")
            circle.classList.add("circle");
            circle.style.cssText = `
            margin: 8px;
            border-radius: 50%; `;
            circle.style.width = y + "px";
            circle.style.height = y + "px";
            circle.style.backgroundColor = "hsl(" + x + ", 100%, 50%)";  

            div.appendChild(circle);
        }
        
        const circlesAll = document.querySelectorAll(".circle")
        circlesAll.forEach(function (element, index, arr) {
            element.onclick = function () {
                this.remove();
            }
        })
        input2.removeEventListener("click", push2, false);
    }
    else {alert('Ведиите число  10')}
}

// Функция кнопки "Нарисовать круг"
const push1 = () => {
    input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Введите диаметр круга:";
    input1.style.cssText = `
    margin: 10px auto;
    display: block; `;

    input2 = document.createElement("input");
    input2.type = "button";
    input2.value = "Нарисовать";
    input2.style.cssText = `
    margin: 10px auto;
    display: block; `;
    
    body.append(input1, input2);
    
    button.removeEventListener("click", push1, false);
    input2.addEventListener("click", push2, false);

}

button.addEventListener("click", push1, false);

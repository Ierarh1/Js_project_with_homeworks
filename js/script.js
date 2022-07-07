/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1)задание
const adv = document.querySelectorAll(`.promo__adv img`);

//кстати внутри находится html-collection, поэтому удалить с помощью remove неполучится
//однако мы можем прогнать этот метод через цикл, кстати у querySelectorAll есть метод foreach
adv.forEach( item=>{
    item.remove();
});

//2-3 задачу решим вместе 
const poster = document.querySelector(`.promo__bg`);//тут наш бэкграунд, и внутри есть ещё валяется текст жанра

//тк внутри есть жанр мы тоже можем его вытащить
const genre = poster.querySelector(`.promo__genre`);

genre.textContent = `Drama`;

//мы можем обратиться к style там хранятся почти все css стили
//для того что бы поменять картинку мы можем воспользоваться одним из свойств css
poster.style.backgroundImage = `url("img/bg.jpg")`;//приходится использовать разные кавычки, что бы наш движок понимал где что


//4)задача 
const movieList = document.querySelector(`.promo__interactive-list`);

movieList.innerHTML = ``;//если вписать туда пустой объект то можно сказать что элемент очистится

//кстати innerHTML позволяет и получать элементы со страницы
console.log(poster.innerHTML);//там вылетит кусок вёрстки, прям с тэгами и текстом


//сортируем по алфавиту
movieDB[`movies`].sort();

//теперь вывелем на станицу обязательно пронумировав.
movieDB[`movies`].forEach((film,index)=>{
    movieList.innerHTML += `
    <li class="promo__interactive-item">${index+1} ${film}
        <div class="delete"></div>
    </li>
    `;
});
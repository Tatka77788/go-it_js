(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{A2vp:function(e,n,t){var i=t("mp5j");e.exports=(i.default||i).template({1:function(e,n,t,i,a){return'        <li class="tag-list__item">'+e.escapeExpression(e.lambda(n,n))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,i,a){var s,r,c=null!=n?n:e.nullContext||{},l=e.hooks.helperMissing,o="function",d=e.escapeExpression;return'<li class="menu__item">\r\n  <div class="card data-id '+d(typeof(r=null!=(r=t.id||(null!=n?n.id:n))?r:l)===o?r.call(c,{name:"id",hash:{},data:a,loc:{start:{line:2,column:27},end:{line:2,column:33}}}):r)+'">\r\n    <img\r\n      src="'+d(typeof(r=null!=(r=t.image||(null!=n?n.image:n))?r:l)===o?r.call(c,{name:"image",hash:{},data:a,loc:{start:{line:4,column:11},end:{line:4,column:20}}}):r)+'"\r\n      alt="'+d(typeof(r=null!=(r=t.name||(null!=n?n.name:n))?r:l)===o?r.call(c,{name:"name",hash:{},data:a,loc:{start:{line:5,column:11},end:{line:5,column:19}}}):r)+'"\r\n      class="card__image"\r\n    />\r\n    <div class="card__content">\r\n      <h2 class="card__name">'+d(typeof(r=null!=(r=t.name||(null!=n?n.name:n))?r:l)===o?r.call(c,{name:"name",hash:{},data:a,loc:{start:{line:9,column:29},end:{line:9,column:37}}}):r)+'</h2>\r\n      <p class="card__price">\r\n        <i class="material-icons">\r\n          monetization_on\r\n        </i>\r\n        '+d(typeof(r=null!=(r=t.price||(null!=n?n.price:n))?r:l)===o?r.call(c,{name:"price",hash:{},data:a,loc:{start:{line:14,column:8},end:{line:14,column:17}}}):r)+' кредитов\r\n      </p>\r\n\r\n      <p class="card__descr">\r\n      '+d(typeof(r=null!=(r=t.description||(null!=n?n.description:n))?r:l)===o?r.call(c,{name:"description",hash:{},data:a,loc:{start:{line:18,column:6},end:{line:18,column:21}}}):r)+'\r\n      </p>\r\n\r\n      <ul class="tag-list">\r\n'+(null!=(s=t.each.call(c,null!=n?n.ingredients:n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:22,column:8},end:{line:24,column:17}}}))?s:"")+'      </ul>\r\n    </div>\r\n\r\n    <button class="card__button button">\r\n      <i class="material-icons button__icon">\r\n        shopping_cart\r\n      </i>\r\n      В корзину\r\n    </button>\r\n  </div>\r\n</li>'},useData:!0})},L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO"),t("8cZI"),t("lmye");var i=t("A2vp"),a=t.n(i);var s=function(e,n){var t=e.map((function(e){return a()(e)})).join("\n");console.log(t),n.insertAdjacentHTML("afterbegin",t)},r=t("zG5e"),c={menu:document.querySelector(".js-menu"),switch:document.querySelector(".js-switch-input"),body:document.body},l=document.querySelector("body"),o=document.querySelector("#theme-switch-control"),d="light-theme",p="dark-theme",m=localStorage.getItem("theme");JSON.parse(m)===p?(o.checked=!0,l.setAttribute("class",p)):l.setAttribute("class",d);var u=function(e){e.target.checked?(l.classList.add(p),l.classList.remove(d),localStorage.setItem("theme",JSON.stringify(p))):(l.classList.add(d),l.classList.remove(p),localStorage.setItem("theme",JSON.stringify(d)))};o.addEventListener("change",u);s(r,c.menu)},zG5e:function(e){e.exports=JSON.parse('[{"id":"XWaQXcbk0","name":"Картофель, запеченный в мундире","description":"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.","image":"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg","price":100,"ingredients":["Картофель","Чеснок","Сметана","Бекон","Твердый сыр","Зеленый лук"]},{"id":"pkXzyRp1P","name":"Томатный магрибский суп","description":"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.","image":"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg","price":150,"ingredients":["Помидоры","Куриный бульон","Мед","Петрушка","Кинза","Паприка"]},{"id":"QMom9q4Ku","name":"Крем-суп из тыквы","description":"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.","image":"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png","price":100,"ingredients":["Тыква","Петрушка","Сливки","Бренди","Куриный бульон"]},{"id":"k2k0UrjZG","name":"Салат из красной фасоли с творожным сыром","description":"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.","image":"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg","price":150,"ingredients":["Фасоль","Соль","Чеснок","Оливковое масло","Творожный сыр","Красный лук"]},{"id":"j2k8U1jZd","name":"Классический греческий салат ","description":"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.","image":"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg","price":350,"ingredients":["Оливковое масло","Лимонный сок","Чеснок","Помидоры","Красный лук","Сыр фета","Маслины"]},{"id":"X2aQ7cvkd","name":"Маффины с голубикой и мускатным орехом","description":"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.","image":"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg","price":170,"ingredients":["Сливочное масло","Пшеничная мука","Голубика","Ванильный экстракт","Мускатный орех"]},{"id":"nk3zy1pf8","name":"Азу по‑татарски","description":"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.","image":"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg","price":270,"ingredients":["Говядина","Соленые огурцы","Картофель","Мясной бульон","Чеснок"]},{"id":"b7k2U13fd","name":"Жареный рис с яйцом по‑китайски","description":"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.","image":"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg","price":240,"ingredients":["Круглый рис","Мини цукини","Тертый имбирь","Грибы шиитаке","Соевый соус","Кунжутное масло"]}]')}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.352de6c4b24b71446128.js.map
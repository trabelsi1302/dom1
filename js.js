var diesel = document.getElementsByClassName('di1');


function random(number) {
  return Math.floor(Math.random()*(number+1));
}
for(var i =0;i<diesel.length;i++)
    diesel[i].onclick= function diesel() {
        var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        document.body.style.backgroundColor = rndCol;
      }



var pannier = document.getElementsByClassName("pannier")
const decreaseBtn = document.querySelector(".decrease-btn");
const increaseBtn = document.querySelector(".increase-btn");
const quantityInput = document.querySelector("#quantity-input");

// decreaseBtn.addEventListener("click", () => {
//   let currentQuantity = Number(quantityInput.value);
//   if (currentQuantity > 0) {
//     quantityInput.value = currentQuantity - 1;
//   }
// });

// pannier.addEventListener("click", () => {
//   let currentQuantity = Number(quantityInput.value);
//   quantityInput.value = currentQuantity + 1;
// });
for(var j =0;j<pannier.length;j++)
pannier[j].onclick=function pannier(){
    let currentQuantity = Number(quantityInput.value);
  quantityInput.value = currentQuantity + 1;  
};
let likeCount = 0;
const likeButton = document.getElementById('like-button');
const likeCountDisplay = document.getElementById('like-count');

for (var h=0;h<likeButton.length;h++)
likeButton[h].onclick=function updateLikeCount(){   if (likeButton[h].innerText === 'Like') {
      likeCount++;
       likeButton[h].innerText = 'Unlike';
    } else {
      likeCount--;
       likeButton[h].innerText = 'Like';
    }
     likeCountDisplay.innerText = likeCount;

}

// function updateLikeCount() {
//   if (likeButton.innerText === 'Like') {
//     likeCount++;
//     likeButton.innerText = 'Unlike';
//   } else {
//     likeCount--;
//     likeButton.innerText = 'Like';
//   }
//   likeCountDisplay.innerText = likeCount;
}
const itemPrices = {
  'Price': 10,
}; // prices of items
let totalQuantity = {
  'price': 0,
}; // total quantity of each item
let totalPrice = 0; // total price of all items
const totalDisplay = document.querySelector('p:last-of-type');



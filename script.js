const burgerButton = document.querySelector(".subheader__catalogy");
const catalog = document.querySelector(".catalog");
const cartButton = document.querySelector('.popup');
const cartPopup = document.querySelector('.cart-popup');
const closeCart = document.querySelector('.close-cart');
const cartItems = document.querySelector('.cart-items');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

burgerButton.addEventListener("click", function () {
	catalog.classList.toggle("catalog-active");
});

const searchInput = document.querySelector(".subheader__input");
const products = document.querySelectorAll(".products__box");

searchInput.addEventListener("input", () => {
	const searchTerm = searchInput.value.toLowerCase();
	products.forEach(product => {
		const title = product.querySelector(".box__title").textContent.toLowerCase();
		product.style.display = title.includes(searchTerm) ? "" : "none";
	});
});

cartButton.addEventListener('click', () => {
	cartPopup.classList.remove('hidden');
});

// Закрытие корзины
closeCart.addEventListener('click', () => {
	cartPopup.classList.add('hidden');
});

// Добавление товаров в корзину
addToCartButtons.forEach(button => {
	button.addEventListener('click', () => {
		const product = button.getAttribute('data-product');
		const listItem = document.createElement('li');
		cartPopup.classList.remove('hidden');
		listItem.textContent = product;
		cartItems.appendChild(listItem);
	});
});

const payment = document.querySelector('.payment');
const cartPayment = document.querySelector('.cart-payment');
const cartPaymentContent = document.querySelector('.cart-payment-content');
const closePaymentCart = document.querySelector('.close-payment-cart');

payment.addEventListener("click", () => {
	cartPayment.classList.remove('hidden');
});

closePaymentCart.addEventListener("click", () => {
	cartPayment.classList.add('hidden');
});
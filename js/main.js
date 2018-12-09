
document.querySelector(".button-login").onclick = () =>{
	login();
}

document.querySelector(".button-register").onclick = () =>{
	register();
}

function login(){
	let btnLogin = document.querySelector(".button-login"),
		btnRegister = document.querySelector(".button-register"),
		register = document.querySelector(".register"),
		login = document.querySelector(".login"),
		div = document.querySelectorAll(".box-login>div"),
		input = document.querySelectorAll(".box-login>input")

	for (let i = 0; i < div.length; i++) {
		div[i].style.opacity = "0"
		div[i].classList.remove("width-bar-animation")
	}

	for (let i = 0; i < input.length; i++) {
		input[i].style.opacity = "0"
	}

	document.querySelector(".box-login").style.padding = "0px"
	login.classList.remove("fade-out")
	register.classList.add("fade-out")
	register.style.diplay = "none"
	btnLogin.classList.remove("btn-login-animation")
	btnLogin.classList.add("button-login-animation")
	btnLogin.querySelector("i").classList.add("fade-out")
	btnLogin.querySelector("span").classList.add("fade-out")

	setTimeout(()=>{
		btnLogin.style.display = "none"
		register.style.display = "none"
		btnRegister.querySelector("i").classList.remove("fade-out")
		btnRegister.querySelector("span").classList.remove("fade-out")
		btnRegister.style.display = "flex"
		login.style.display = "flex"
		document.querySelector(".box-login").classList.add("box-animation")
		btnRegister.classList.add("btn-register-animation")
	},1000);

	setTimeout(()=>{
		document.querySelector(".box-login").classList.add("width-animation")
	},2000);

	setTimeout(()=>{		
		animationInputLogin();
	},3000);

	setTimeout(()=>{		
		animationBarLogin();
	},4000);
	
} 

function register(){
	let btnRegister = document.querySelector(".button-register"),
		btnLogin = document.querySelector(".button-login"),
		login = document.querySelector(".login")

	login.classList.add("fade-out")
	login.style.display = "none"
	btnRegister.classList.remove("btn-register-animation")
	btnRegister.classList.add("button-register-animation")
	btnRegister.querySelector("i").classList.add("fade-out")
	btnRegister.querySelector("span").classList.add("fade-out")

	setTimeout(()=>{
		btnRegister.style.display = "none"
		login.style.display = "none"
		btnLogin.style.display = "flex"
		document.querySelector(".register").style.display = "flex"
		document.querySelector(".box-register").classList.add("box-animation-register")
		btnLogin.classList.add("btn-login-animation")
	},1000);

	setTimeout(()=>{
		document.querySelector(".box-register").classList.add("width-animation")
	},2000);

	setTimeout(()=>{		
		animationInputRegister();
	},3000);

	setTimeout(()=>{		
		animationBarRegister();
		removeStyleRegister(btnRegister)
	},4000);
}

function removeStyleRegister(btnRegister){
	btnRegister.style.display = "none"
	btnRegister.classList.remove("btn-register-animation")
	btnRegister.classList.remove("button-register-animation")
}

function animationInputLogin(){
	let input = document.querySelectorAll(".box-login>input")

	for (let i = 0; i < input.length; i++) {
		input[i].classList.add("left-animation")
	}
}

function animationBarLogin(){
	let div = document.querySelectorAll(".box-login>div")

	for (let i = 0; i < div.length; i++) {	
		div[i].classList.add("width-bar-animation")
	}
}

function animationInputRegister(){
	let input = document.querySelectorAll(".box-register>input")

	for (let i = 0; i < input.length; i++) {
		input[i].classList.add("left-animation")
	}
}

function animationBarRegister(){
	let div = document.querySelectorAll(".box-register>div")

	for (let i = 0; i < div.length; i++) {	
		div[i].classList.add("width-bar-animation")
	}
}
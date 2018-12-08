
document.querySelector(".button-login").onclick = () =>{
	login();
}

document.querySelector(".button-register").onclick = () =>{
	register();
}

function login(){
	let btnLogin = document.querySelector(".button-login"),
		btnRegister = document.querySelector(".button-register"),
		register = document.querySelector(".register")

	register.classList.add("fade-out")
	register.style.diplay = "none"
	btnRegister.style.display = "flex"
	btnLogin.classList.add("button-login-animation")
	btnLogin.querySelector("i").classList.add("fade-out")
	btnLogin.querySelector("span").classList.add("fade-out")

	setTimeout(()=>{
		btnLogin.style.display = "none"
		register.style.display = "none"
		document.querySelector(".login").style.display = "flex"
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
	btnRegister.classList.remove("btn-register-animation")
	btnRegister.classList.add("button-register-animation")
	btnRegister.querySelector("i").classList.add("fade-out")
	btnRegister.querySelector("span").classList.add("fade-out")

	setTimeout(()=>{
		btnRegister.style.display = "none"
		login.style.display = "none"
		document.querySelector(".register").style.display = "flex"
		document.querySelector(".box-login").classList.add("box-animation")
		btnRegister.classList.add("btn-register-animation")*/
	},1000);
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
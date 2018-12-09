
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
		login = document.querySelector(".login")

	animationInputLogin("remove");
	animationBarLogin("remove");

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
		animationInputLogin("add");
	},2000);

	setTimeout(()=>{		
		animationBarLogin("add");
	},2000);
	
} 

function register(){
	let btnRegister = document.querySelector(".button-register"),
		btnLogin = document.querySelector(".button-login"),
		register = document.querySelector(".register"),
		login = document.querySelector(".login")

	animationInputRegister("remove");
	animationBarRegister("remove");

	login.classList.add("fade-out")
	register.classList.remove("fade-out")
	login.style.display = "none"
	btnRegister.classList.remove("btn-register-animation")
	btnRegister.classList.add("button-register-animation")
	btnRegister.querySelector("i").classList.add("fade-out")
	btnRegister.querySelector("span").classList.add("fade-out")

	setTimeout(()=>{
		btnRegister.style.display = "none"
		login.style.display = "none"
		btnLogin.style.display = "flex"
		btnLogin.querySelector("i").classList.remove("fade-out")
		btnLogin.querySelector("span").classList.remove("fade-out")
		document.querySelector(".register").style.display = "flex"
		document.querySelector(".box-register").classList.add("box-animation-register")
		btnLogin.classList.add("btn-login-animation")
	},1000);

	setTimeout(()=>{
		document.querySelector(".box-register").classList.add("width-animation")
	},2000);

	setTimeout(()=>{		
		animationInputRegister("add");
	},2000);

	setTimeout(()=>{		
		animationBarRegister("add");
	},2000);
}

function animationInputLogin(type){
	let input = document.querySelectorAll(".box-login>input")

	if(type == "remove"){
		for (let i = 0; i < input.length; i++) {	
			input[i].classList.remove("left-animation")
			input[i].style.opacity = "0"
			input[i].style.left = "-100%"
		}
	}else if("add"){
		for (let i = 0; i < input.length; i++) {	
			input[i].classList.add("left-animation")
		}
	}
}

function animationBarLogin(type){
	let div = document.querySelectorAll(".box-login>div")

	if(type == "remove"){
		for (let i = 0; i < div.length; i++) {	
			div[i].classList.remove("width-bar-animation")
			div[i].style.width = "0"
		}
	}else if("add"){
		for (let i = 0; i < div.length; i++) {	
			div[i].classList.add("width-bar-animation")
		}
	}
	
}

function animationInputRegister(type){
	let input = document.querySelectorAll(".box-register>input")

	if(type == "remove"){
		for (let i = 0; i < input.length; i++) {	
			input[i].classList.remove("left-animation")
			input[i].style.opacity = "0"
			input[i].style.left = "-100%"
		}
	}else if("add"){
		for (let i = 0; i < input.length; i++) {	
			input[i].classList.add("left-animation")
		}
	}
}

function animationBarRegister(type){
	let div = document.querySelectorAll(".box-register>div")

	if(type == "remove"){
		for (let i = 0; i < div.length; i++) {	
			div[i].classList.remove("width-bar-animation")
			div[i].style.width = "0"
		}
	}else if("add"){
		for (let i = 0; i < div.length; i++) {	
			div[i].classList.add("width-bar-animation")
		}
	}
}

var init = true,
	ejecutRegister = true,
	ejecutLogin = true,
	ejec = true;

document.querySelector(".button-login").onclick = () =>{
	animationBarRegister("remove");
	animationInputRegister("remove");

	if(ejecutLogin == true){
		ejecutLogin = false
		ejecutRegister = false
		login();
	}

	if(ejec){
		ejec = false
		document.querySelector(".login").classList.remove("tmp")
	}
}

document.querySelector(".button-register").onclick = () =>{
	animationBarLogin("remove");
	animationInputLogin("remove");

	if(ejecutRegister == true){
		ejecutRegister = false
		ejecutLogin = false
		register();
	}

	if(ejec){
		ejec = false
		document.querySelector(".login").classList.remove("tmp")
	}
	
}

function login(){
	let btnLogin = document.querySelector(".button-login"),
		btnRegister = document.querySelector(".content-register-btn"),
		cntLogin = document.querySelector(".content-login-btn"),
		box_login = document.querySelector(".box-login"),
		login = document.querySelector(".login"),
		register = document.querySelector(".register")

	login.classList.remove("fade-out")
	cntLogin.style.display = "flex"
	register.classList.add("fade-out")
	cntLogin.classList.add("button-login-animation")

	setTimeout(()=>{
		cntLogin.style.display = "none"
		document.querySelector(".box-register-default").classList.remove("box-register-default")
		box_login.classList.add("box-animation")
		register.style.display = "none"
		register.classList.remove("fade-out")
		btnRegister.style.display = "flex"
		btnRegister.querySelector("i").classList.remove("fade-out")
		btnRegister.classList.add("btn-register-animation")
		login.style.display = "flex"
	},1000);

	setTimeout(()=>{
		btnRegister.classList.remove("btn-register-animation")
		document.querySelector(".box-login").classList.add("width-animation")
	},2000);

	setTimeout(()=>{		
		animationInputLogin("add");
	},3000);

	setTimeout(()=>{		
		animationBarLogin("add");
	},4000);

	setTimeout(()=>{
		ejecutLogin = true
		ejecutRegister = true
		box_login.classList.add("box-login-default")
		box_login.classList.remove("box-animation")
		box_login.classList.remove("width-animation")
		btnLogin.classList.remove("btn-login-animation")
		cntLogin.classList.remove("button-login-animation")
	},5000)
	
} 

function register(){
	let btnRegister = document.querySelector(".button-register"),
		content_register_btn = document.querySelector(".content-register-btn"),
		btnLogin = document.querySelector(".content-login-btn"),
		register = document.querySelector(".register"),
		box_register = document.querySelector(".box-register"),
		login = document.querySelector(".login")

	register.classList.remove("fade-out")
	content_register_btn.style.display = "flex"
	login.classList.add("fade-out")
	content_register_btn.classList.add("button-register-animation")

	setTimeout(()=>{
		content_register_btn.style.display = "none"
		document.querySelector(".box-login-default").classList.remove("box-login-default")
		box_register.classList.add("box-animation")
		login.style.display = "none"
		login.classList.remove("fade-out")
		btnLogin.style.display = "flex"
		btnLogin.querySelector("i").classList.remove("fade-out")
		btnLogin.classList.add("btn-login-animation")
		register.style.display = "flex"
	},1000);

	setTimeout(()=>{
		
		box_register.classList.add("width-animation")
	},2000);

	setTimeout(()=>{		
		animationInputRegister("add");
	},3000);

	setTimeout(()=>{		
		animationBarRegister("add");
	},4000);

	setTimeout(()=>{		
		ejecutLogin = true
		ejecutLogin = true
		box_register.classList.add("box-register-default")
		box_register.classList.remove("box-animation")
		box_register.classList.remove("width-animation")
		btnLogin.classList.remove("btn-login-animation")
		content_register_btn.classList.remove("button-register-animation")
	},4500);
}



function animationInputLogin(type){
	let input = document.querySelectorAll(".box-login .form-group")

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
	let div = document.querySelectorAll(".box-login .cont-input div"),
		icon = document.querySelectorAll(".box-login .form-group .icon")

	if(type == "remove"){
		for (let i = 0; i < div.length; i++) {	
			icon[i].classList.remove("top-animation")
			div[i].classList.remove("width-bar-animation")
			div[i].style.width = "0"
		}
	}else if("add"){
		for (let i = 0; i < div.length; i++) {	
			icon[i].classList.add("top-animation")
			div[i].classList.add("width-bar-animation")
		}
	}
	
}

function animationInputRegister(type){
	let input = document.querySelectorAll(".box-register .form-group")
	console.log(input)
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
	let div = document.querySelectorAll(".box-register .cont-input div"),
		icon = document.querySelectorAll(".box-register .form-group .icon")

	if(type == "remove"){
		for (let i = 0; i < div.length; i++) {	
			icon[i].classList.add("top-animation")
			div[i].classList.remove("width-bar-animation")
			div[i].style.width = "0"
		}
	}else if("add"){
		for (let i = 0; i < div.length; i++) {	
			icon[i].classList.add("top-animation")
			div[i].classList.add("width-bar-animation")
		}
	}
}
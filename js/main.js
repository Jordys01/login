
var init = true,
	ejecutRegister = true,
	ejecutLogin = true;

document.querySelector(".button-login").onclick = () =>{
	animationBarRegister("remove");
	animationInputRegister("remove");

	if(ejecutLogin == true){
		ejecutLogin = false
		ejecutRegister = false
		login();
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
	
}

function login(){
	let btnLogin = document.querySelector(".button-login"),
		btnRegister = document.querySelector(".button-register"),
		box_login = document.querySelector(".box-login"),
		login = document.querySelector(".login"),
		register = document.querySelector(".register")

	login.classList.remove("fade-out")
	register.classList.add("fade-out")
	btnLogin.classList.add("button-login-animation")
	btnLogin.querySelector("i").classList.add("fade-out")
	btnLogin.querySelector("span").classList.add("fade-out")

	setTimeout(()=>{
		register.style.display = "none"
		document.querySelector(".box-register-default").classList.remove("box-register-default")
	},500)

	setTimeout(()=>{
		btnLogin.style.display = "none"
		login.style.display = "flex"
		btnRegister.style.opacity = "0"
		btnRegister.style.display = "flex"
		btnRegister.classList.add("btn-register-animation")
		box_login.classList.add("box-animation")
	},1000);

	setTimeout(()=>{
		document.querySelector(".box-login").classList.add("width-animation")
	},2000);

	setTimeout(()=>{		
		animationInputLogin("add");
	},3000);

	setTimeout(()=>{		
		animationBarLogin("add");
	},4000);

	setTimeout(()=>{
		ejecutRegister = true
		document.querySelector(".box-login").classList.add("box-login-default")
		btnRegister.style.opacity = "1"
		btnLogin.classList.remove("button-login-animation")
		btnLogin.querySelector("i").classList.remove("fade-out")
		btnLogin.querySelector("span").classList.remove("fade-out")
		btnRegister.classList.remove("btn-register-animation")
	},5000)
	
} 

function register(){
	let btnRegister = document.querySelector(".button-register"),
		btnLogin = document.querySelector(".button-login"),
		register = document.querySelector(".register"),
		box_register = document.querySelector(".box-register"),
		login = document.querySelector(".login")
	
	register.classList.remove("fade-out")
	login.classList.add("fade-out")
	btnRegister.classList.add("button-register-animation")
	btnRegister.querySelector("i").classList.add("fade-out")
	btnRegister.querySelector("span").classList.add("fade-out")

	setTimeout(()=>{
		login.style.display = "none"
		document.querySelector(".box-login-default").classList.remove("box-login-default")
	},500)

	setTimeout(()=>{
		btnRegister.style.display = "none"
		btnLogin.style.display = "flex"
		btnLogin.querySelector("i").classList.remove("fade-out")
		btnLogin.querySelector("span").classList.remove("fade-out")
		btnLogin.classList.add("btn-login-animation")

		document.querySelector(".register").style.display = "flex"
		box_register.classList.add("box-animation")
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
		box_register.classList.add("box-register-default")
		box_register.classList.remove("box-animation")
		box_register.classList.remove("width-animation")
		btnLogin.classList.remove("btn-login-animation")
		btnRegister.classList.remove("button-register-animation")
		btnRegister.querySelector("i").classList.remove("fade-out")
		btnRegister.querySelector("span").classList.remove("fade-out")
	},4500);
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

document.querySelector(".button-login").onclick = () =>{
	login();
}

function login(){
	let btnLogin = document.querySelector(".button-login")

	btnLogin.classList.add("button-login-animation")
	btnLogin.querySelector("i").classList.add("fade-out")
	btnLogin.querySelector("span").classList.add("fade-out")

	setTimeout(()=>{
		btnLogin.style.display = "none"
		
		document.querySelector(".login").style.display = "flex"
		document.querySelector(".box-login").classList.add("box-animation")
	},1000)
	
} 
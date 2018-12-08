
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

		setTimeout(()=>{
			document.querySelector(".box-login").classList.add("width-animation")
			setTimeout(()=>{
				let input = document.querySelectorAll(".box-login>input"),
					div = document.querySelectorAll(".box-login>input")

				for (var i = input.length - 1; i >= 0; i--) {
					input[i].classList.add("left-animation")
				}

				for (var i = div.length - 1; i >= 0; i--) {
					div[i].classList.add("left-animation")
				}
			},1000)
		},1000)
	},1000)
	
} 
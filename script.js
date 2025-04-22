//your JS code here. If required.
const name=document.getElementById('username')
const password=document.getElementById('password')
const checkbox=document.getElementById('checkbox')
const btn=document.getElementById('existing')
btn.style.display='none'
function myFunction(){
	if(!checkbox.checked){
		localStorage.clear();
		alert(`Logged in as ${name.value}`)
	}
	if(checkbox.checked){
		alert(`Logged in as ${name.value}`)
		localStorage.setItem('username',name.value)
		localStorage.setItem('password',password.value)
	}
}
if(localStorage.getItem('username')){
	btn.style.display='block'
}
btn.addEventListener('click',function(){
	alert(`Logged in as ${localStorage.getItem('username')}`);
})

function darkmode(){
    if (document.getElementById("dark-mode-checkbox").checked){
        document.getElementById("dark-mode").className = "dark-mode"
        localStorage.setItem("dark-mode", "on")
    }else{
        document.getElementById("dark-mode").className = "light-mode"
        localStorage.setItem("dark-mode", "off")
    }
}
window.onpageshow = ()=>{
    console.log(localStorage.getItem("dark-mode"))
    if (localStorage.getItem("dark-mode") === "on"){
        document.getElementById("dark-mode-checkbox").checked = true
    }else{
        document.getElementById("dark-mode-checkbox").checked = false
    }
    darkmode()
}
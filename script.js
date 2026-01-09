//Selection of the Elements

let add = document.querySelector("#add")
let remove = document.querySelector("#remove")
let h5 = document.querySelector("h5")
let btn=document.querySelector("button")


//Adding EventListeners and Logic Building

let flag = 0

add.addEventListener("click",function(){
    if(flag === 0){
        btn.innerHTML="Remove Friend"
        h5.innerHTML = "Friends"
        h5.style.color = "green"
        flag = 1
    }else{
        btn.innerHTML="Add Friend"
        h5.innerHTML = "Strangers"
        h5.style.color = "red"
        flag = 0
    }  
});


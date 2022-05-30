// Add the coffee to local storage with key "coffee"

function addtoCart(0){
    let item =document.getElementById("add_to_bucket").value 
    let item =JSON.parse(localStorage.getItem("coffee")) || [];

    item.push(coffee)

}
async function getData(){
    let url=`https://masai-mock-api.herokuapp.com/coffee/menu`;
    let resp= await fetch(url)
    let data=await resp.json();

    return data.results;

    
    console.log(data) 
}



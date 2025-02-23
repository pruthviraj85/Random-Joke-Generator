const jokesetup=document.querySelector("#joke-setup");
const jokespunchline=document.querySelector("#jokes-punchline");
const jokebtn=document.querySelector("#joke-btn");


   async function fetchjokes(){
        try{
            const response=await fetch("https://official-joke-api.appspot.com/random_joke");
            console.log(response);
            const data =  await response.json();
            console.log(data);
            jokesetup.textContent=data.setup;
            jokespunchline.textContent=data.punchline;
        }catch(erroe){ 
            console.error("Error fetching jokes",Error);
            jokesetup.textContent ="Error fetching jokes";
            jokespunchline.textContent ="please try again letar";
        }

    }   
jokebtn.addEventListener("click",fetchjokes); 
fetchjokes();
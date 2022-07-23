let photo1=document.querySelector("#slider img");
let h1=document.querySelector("#slider h1")

let button1=document.querySelector("#slider>button:nth-child(3)");
let button2=document.querySelector("#slider>button:nth-child(4)");
let button3=document.querySelector("#slider>button:nth-child(5)");
let button4=document.querySelector("#slider>button:nth-child(6)");
let button5=document.querySelector("#slider>button:nth-child(7)");

button1.style.backgroundColor="orange"
button1.addEventListener("click",function(){
    button1.style.backgroundColor="orange"
    photo1.src="https://images.firstpost.com/wp-content/uploads/fpranking/1658413338413.jpg";
    h1.innerText="Presidential poll 2022 results: Droupadi Murmu scripts history, becomes India's first tribal woman president";
    button2.style.backgroundColor="gray"
    button3.style.backgroundColor="gray"
    button4.style.backgroundColor="gray"
    button5.style.backgroundColor="gray"
})

button2.addEventListener("click",function(){
    button2.style.backgroundColor="orange"
    photo1.src="https://images.firstpost.com/wp-content/uploads/fpranking/1658589832166.jpg";
    h1.innerText="Monkeypox declared global health emergency by WHO after outbreak in over 70 countries";
    button1.style.backgroundColor="gray"
    button3.style.backgroundColor="gray"
    button4.style.backgroundColor="gray"
    button5.style.backgroundColor="gray"
})

button3.addEventListener("click",function(){
    button3.style.backgroundColor="orange"
    photo1.src="https://images.firstpost.com/wp-content/uploads/2022/07/Neeraj-Chopra.jpg?impolicy=website&width=640&height=363";
    h1.innerText="World Athletics Championships: Neeraj Chopra-Anderson Peters' rivalry headlines javelin throw final";
    button2.style.backgroundColor="gray"
    button1.style.backgroundColor="gray"
    button4.style.backgroundColor="gray"
    button5.style.backgroundColor="gray"
})

button4.addEventListener("click",function(){
    button4.style.backgroundColor="orange"
    photo1.src="https://images.firstpost.com/wp-content/uploads/2021/08/national-flag-640.jpg?impolicy=website&width=640&height=362";
    h1.innerText="Government tweaks Flag Code of India, now tricolour can be flown both day and night ";
    button2.style.backgroundColor="gray"
    button3.style.backgroundColor="gray"
    button1.style.backgroundColor="gray"
    button5.style.backgroundColor="gray"
})

button5.addEventListener("click",function(){
    button5.style.backgroundColor="orange"
    photo1.src="https://images.firstpost.com/wp-content/uploads/2022/07/odessa-2.jpg?impolicy=website&width=640&height=362";
    h1.innerText="Ukraine decries Russian strikes on Odessa port; Moscow denies, says Turkey";
    button2.style.backgroundColor="gray"
    button3.style.backgroundColor="gray"
    button4.style.backgroundColor="gray"
    button1.style.backgroundColor="gray"
})



let photo2=document.querySelector("#webstories>div:nth-child(1) img");
let photo3=document.querySelector("#webstories>div:nth-child(2) img");
let photo4=document.querySelector("#webstories>div:nth-child(3) img");
let h2=document.querySelector("#webstories>div:nth-child(1) h4");
let h3=document.querySelector("#webstories>div:nth-child(2) h4");
let h4=document.querySelector("#webstories>div:nth-child(3) h4");

let btn1=document.querySelector("#button>button:nth-child(1)");
let btn2=document.querySelector("#button>button:nth-child(2)");
let btn3=document.querySelector("#button>button:nth-child(3)");

btn1.style.backgroundColor="orange"
btn1.addEventListener("click",function(){
    btn1.style.backgroundColor="orange"
    btn2.style.backgroundColor="gray"
    btn3.style.backgroundColor="gray"

    photo2.src="https://images.news18.com/webstories/2022/07/cropped-640363-2022-07-21T161553.719.jpg";
    photo3.src="https://images.news18.com/webstories/2022/07/cropped-TGM_20210419_08349r.jpg";
    photo4.src="https://images.news18.com/webstories/2022/07/cropped-300375-37.jpg";
    h2.innerText="Once upon a Cinema";
    h3.innerText="Here's what Ryan Gosling has to say about The Gray Man";
    h4.innerText="Kareena Kapoor Khan shares picture from her family vaccation in italy";
})
btn2.addEventListener("click",function(){
    btn2.style.backgroundColor="orange"
    btn1.style.backgroundColor="gray"
    btn3.style.backgroundColor="gray"

    photo2.src="https://images.news18.com/webstories/2022/07/cropped-TGM_20210419_08349r.jpg";
    photo3.src="https://images.news18.com/webstories/2022/07/cropped-300375-37.jpg";
    photo4.src="https://images.news18.com/webstories/2022/07/cropped-300375-25.jpg";
    h2.innerText="Here's what Ryan Gosling has to say about The Gray Man";
    h3.innerText="Kareena Kapoor Khan shares picture from her family vaccation in italy";
    h4.innerText="Samantha Ruth Prabhu will attend IFFM 2022 as one of the key guest";
})
btn3.addEventListener("click",function(){
    btn3.style.backgroundColor="orange"
    btn2.style.backgroundColor="gray"
    btn1.style.backgroundColor="gray"

    photo2.src="https://images.news18.com/webstories/2022/07/cropped-300375-37.jpg";
    photo3.src="https://images.news18.com/webstories/2022/07/cropped-300375-25.jpg";
    photo4.src="https://images.news18.com/webstories/2022/07/cropped-640363-2022-07-18T132854.407.jpg";
    h2.innerText="Kareena Kapoor Khan shares picture from her family vaccation in italy";
    h3.innerText="Samantha Ruth Prabhu will attend IFFM 2022 as one of the key guest";
    h4.innerText="Remembering superstar Rajesh Khanna on his 10th death anniversary";
})


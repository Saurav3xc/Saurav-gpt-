/*let userText=document.getElementById('user-text');
let sendBtn=document.getElementById('send-btn');
let msgBox=document.querySelector('.message-section');
let scrollBtn=document.getElementById('scroll');
let prompt;
const conversationArr = [
  {
    role: 'system',
    content: 'You are a useful assistant.' // this is the instruction
    }
]
function creteChatBox() {
   prompt=userText.value;
   
  msgBox.innerHTML+=`
      <div class="user-msg  w-auto h-auto bg-green-400 flex items-center justify-start gap-4 px-2 py-1 rounded-lg">
        <img src="/user.jpeg" alt="" class="w-[40px] h-[40px] rounded-full">
        <h1>${prompt}</h1>
      </div>
            <div class=" waiting w-auto h-auto bg-gray-700 flex items-center justify-end gap-4 px-2 py-1 relative right-[-10%] rounded-lg">
              <img src="/ai.jpeg" alt="" class="w-[40px] h-[40px] rounded-full">
              <h1>Loading...</h1>
            </div>
  `;
  conversationArr.push({
    role:'user',
    content:prompt
  })
  userText.value=""
  
}
sendBtn.addEventListener('click',()=>{
  creteChatBox();
  fetchCompletion()
})
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';



async function fetchCompletion() {
    const requestBody = {
        model: 'gpt-3.5-turbo', // Use an available model, e.g., text-davinci-003
       "messages":conversationArr,
       // "messages": [{"role": "user", "content": prompt}],
        
        max_tokens:100,
        // Adjust max tokens as needed
    };
    

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestBody)
    };
    try{
      let res=await fetch(apiUrl,requestOptions);
      let data=await res.json();
      let waitBox=document.querySelector('.waiting');
      let aiMsg=data.choices[0].message.content;
      conversationArr.push(
        {
          role: 'assistant',
          content:aiMsg,
        }
      
      );
      console.log(conversationArr)
    waitBox.remove()
     msgBox.innerHTML+=`
      <div class="ai-msg w-auto h-auto bg-gray-700 flex items-center justify-end gap-4 px-2 py-1 relative right-[-5%] rounded-lg">
             <img src="/ai.jpeg" alt="" class="w-[40px] h-[40px] rounded-full">
             <h1>${aiMsg}</h1>
           </div>
     `
      
    }
    catch(e){
      
    }
}
function scrollfunc(){
  console.log(msgBox.scrollHeight)
  msgBox.scrollTo(0,msgBox.scrollTop)
}

scrollBtn.addEventListener('click',()=>{
  scrollfunc()
})


var number = 1714790342; // This is a number representing a timestamp in milliseconds.
var date = new Date(number); // Create a new Date object from the number.
var options = { timeZone: "Asia/Jakarta" }; // Create an options object with the time zone set to Asia/Jakarta.
var indianDate = date.toLocaleString("en-IN", options); // Convert the date to a string using the Indian locale and the Asia/Jakarta timezone.

console.log(indianDate);

let dates=new Date();
console.log(dates.getHours(),":",date.getUTCDate(),dates.getUTCDate(),dates.getMonth()+1,dates.getFullYear())*/

let userText=document.getElementById('user-text');
let sendBtn=document.getElementById('send-btn');
let msgBox=document.querySelector('.message-section');
let scrollBtn=document.getElementById('scroll');
let prompt;
const conversationArr = [
  {
    role: 'system',
    content: 'You are a useful assistant.' // this is the instruction
    }
]
function creteChatBox() {
   prompt=userText.value;
   
  msgBox.innerHTML+=`
      <div class="user-msg  w-auto h-auto bg-green-400 flex items-center justify-start gap-4 px-2 py-1 rounded-lg">
        <img src="/user.jpeg" alt="" class="w-[40px] h-[40px] rounded-full">
        <h1>${prompt}</h1>
      </div>
            <div class=" waiting w-auto h-auto bg-gray-700 flex items-center justify-end gap-4 px-2 py-1 relative right-[-5%] rounded-lg">
              <img src="/ai.jpeg" alt="" class="w-[40px] h-[40px] rounded-full">
              <h1>Loading...</h1>
            </div>
  `;
  conversationArr.push({
    role:'user',
    content:prompt
  })
  userText.value="";
  window.scrollBottom=msgBox.scrollHeight

  
}
sendBtn.addEventListener('click',()=>{
  creteChatBox();
  fetchCompletion()
})
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';



async function fetchCompletion() {
    const requestBody = {
        model: 'gpt-3.5-turbo',
        "messages": conversationArr,
        max_tokens: 100,
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestBody)
    };

    try {
        let res = await fetch(apiUrl, requestOptions);
        let data = await res.json();
        let waitBox = document.querySelector('.waiting');
        let aiMsg = data.choices[0].message.content;
        conversationArr.push({
            role: 'assistant',
            content: aiMsg,
        });

        // Simulate typing effect
        waitBox.innerHTML = `<img src="/ai.jpeg" alt="" class="w-[40px] h-[40px] rounded-full">
         `; 
         waitBox.style.right = '-5%'; 
        for (let i = 0; i < aiMsg.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 20)); // Adjust typing speed (milliseconds)
            waitBox.innerHTML += aiMsg.charAt(i);
        }

        waitBox.classList.remove('waiting'); // Remove waiting class
        waitBox.classList.add('ai-msg'); 
        
        console.log(conversationArr);
    } catch (e) {
        console.error(e);
    }
}



let output=document.querySelector("#output");
let allInput=document.querySelectorAll(".leftPart textarea");


function myFunction() {
      let textarea=document.querySelectorAll(".leftPart textarea");
      textarea.forEach(function(textarea){

            textarea.classList.toggle("dark-mode");
      });
      
   }


let htmlCode='',cssCode='',jsCode='';

allInput.forEach((el,index)=>{
      el.addEventListener("keyup",()=>{

            if(index==0){
                  htmlCode=el.value;
                   
            }
            if(index==1){
                  cssCode=el.value;
            }
            if(index==2){
                  jsCode=el.value;
            }
            
            output.contentDocument.body.innerHTML=htmlCode;
            output.contentDocument.head.innerHTML=`<style>${cssCode}</style>`;
            output.contentWindow.eval(jsCode);
          
       })

 })

 
      
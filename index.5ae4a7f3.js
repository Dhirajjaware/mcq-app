const e=async function(e){try{const t=await fetch(e);return t.json()}catch(e){throw e}},t={mcq:{},score:0},r=async function(){try{const r=await e("https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple");t.mcq=r.results.map((e=>({category:e.category,correctAnswer:e.correct_answer,question:e.question,incorrectAnswer:e.incorrect_answers}))),console.log(t.mcq)}catch(e){throw e}};var n=new class{#e=[];parentEl=document.querySelector(".quiz__container");_question=document.querySelector(".quiz__question");_optionsContainer=document.querySelectorAll(".quiz__options");_btnNext=document.querySelector(".btn__next");_btnPrevious=document.querySelector(".btn__previous");_scoreEl=document.querySelector(".score");render(e){this.#e=e,this.clear();const t=this.generateMarkup();this.parentEl.insertAdjacentHTML("afterbegin",t)}generateMarkup(){const[e]=this.#e;e.incorrectAnswer.push(e.correctAnswer);return`\n            <h6 class="quiz__question">${e.question}</h6>\n            <ol type="a" class="quiz__options">\n            ${e.incorrectAnswer.map((e=>`<li class="options">${e}</li>`))}\n            </ol>`}clear(){this.parentEl.innerHTML=""}checkAnswer(e){document.querySelectorAll(".options").forEach((t=>{t.innerText===e[0].correctAnswer&&t.classList.add("right")})),this.parentEl.addEventListener("click",(t=>{if(!t.target.closest(".options"))return;const r=t.target.innerText,n=e[0].correctAnswer;r===n&&(t.target.classList.add("green"),Number(++this._scoreEl.textContent)),r!==n&&(t.target.classList.add("wrong"),document.querySelectorAll(".options").forEach((t=>{t.innerText===e[0].correctAnswer&&t.classList.add("correct")})))}))}renderSpinner(){this.parentEl.insertAdjacentHTML("afterbegin",'<div class="spinner-border" role="status">\n    <span class="visually-hidden">Loading...</span>\n    </div>')}addHandlerRender(e){this._btnNext.addEventListener("click",e)}};const c=async function(){try{n.renderSpinner(),await r(),n.render(t.mcq),n.checkAnswer(t.mcq)}catch(e){console.error(e)}};c(),n.addHandlerRender(c);
//# sourceMappingURL=index.5ae4a7f3.js.map

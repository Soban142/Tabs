var tabTitle = document.querySelectorAll('.tab-title')
// console.log(tabTitle);
var content = document.querySelectorAll('.content-container')
var active = document.querySelectorAll('.active')
var hidden = document.querySelector('.hidden')

for(let i = 0; i < tabTitle.length; i++){
    tabTitle[i].addEventListener('click', function() {
                // My code
        // if(i){
        //     tabTitle[i].classList.add('active')
        //     console.log(tabTitle[i])
        // }
        // else{
        //   tabTitle    
        // }


        //         After little bit help from chat-gpt

        for (let j = 0; j < tabTitle.length; j++) {
            if (i === j) {
              tabTitle[j].classList.add('active');
            } 
            else {
              tabTitle[j].classList.remove('active');
            }
          }

        for (let k = 0; k < tabTitle.length; k++) {
            if (i === k) {
              content[k].classList.remove('hidden');
            } 
            else {
              content[k].classList.add('hidden');
            }
            console.log(content[k])
          }         
    })
}


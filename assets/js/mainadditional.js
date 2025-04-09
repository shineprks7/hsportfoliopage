const portfoliotabbuttons = document.querySelectorAll('.portfolio-tab-btn')

for(let i=0;i<portfoliotabbuttons.length;i++)

    {

        portfoliotabbuttons[i].addEventListener('click',function(event){
    let eventtarget = event.currentTarget;

    let tabtitle = eventtarget.dataset.tabtitle;


    const tabcontents = document.querySelectorAll('.portfolio-tab-content');
    const alltabtitles = document.querySelectorAll('.portfolio-tab-btn');

    alltabtitles.forEach((eltitle) => {

        eltitle.classList.remove('active');
         
    });
    eventtarget.classList.add('active');

    tabcontents.forEach((el) => {

        let tabcontent = el.dataset.tabcontent;

         if(tabcontent == tabtitle)
         {
            el.classList.add('active');

         }
         else
         {
         el.classList.remove('active');
         }
    });

   
    //close all other menus


   


})

}
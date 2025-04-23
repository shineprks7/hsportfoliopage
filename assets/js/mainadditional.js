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


const textToSpannedHeader = document.querySelectorAll('.typable-text-header')

textToSpannedHeader.forEach((el) => 
{
    let tcontent = el.textContent.trim();

    el.innerHTML = "";

    [...tcontent].forEach((char,index) => {
        const span = document.createElement("span");


        span.textContent = char === " "?"\u00A0":char;

        span.style.setProperty("--i",index);


        el.appendChild(span);

    })


})


const textToSpannedParagraph = document.querySelectorAll('.typable-text-paragraph')

textToSpannedParagraph.forEach((el) => 
{
    let tcontent = el.textContent.trim();

    el.innerHTML = "";

    let index = 0;
    tcontent.split(" ").forEach((word) => {
        const span = document.createElement("span");
        const space = document.createElement("span");

       if(word != "")
       {
        span.textContent = word;
        space.textContent = " ";

        span.style.setProperty("--i",index);


        el.appendChild(span);
        el.appendChild(space);

        index++;
       }

    })


})


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("active");

        }
    });
},{
    threshold:0.5
});

document.querySelectorAll(".typable-text-paragraph").forEach(el => observer.observe(el));
document.querySelectorAll(".typable-text-header").forEach(el => observer.observe(el));

document.querySelectorAll(".solution-list-animation .solution-list-item").forEach(el => observer.observe(el));

document.querySelectorAll(".image-reveal-animation").forEach(el => observer.observe(el));
document.querySelectorAll(".aboutus-image-reveal-animation").forEach(el => observer.observe(el));



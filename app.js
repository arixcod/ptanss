const navToggle=document.querySelector('.mobile_nav_toggle');
const priamryna=document.querySelector('.ul_flex_nav');

navToggle.addEventListener('click',()=>{
    const visibility=priamryna.getAttribute("data-visible")
    if(visibility==="false")
    {   priamryna.setAttribute("aria-expanded",true);
        
        priamryna.setAttribute("data-visible",true);
        priamryna.style.transform="translateX(0%)";
            
   
    }

   else if(visibility==="true"){
    priamryna.setAttribute("aria-expanded",false);
  
    priamryna.setAttribute("data-visible",false);
    priamryna.style.transform="translateX(100%)";
       
   } 
    console.log(priamryna.getAttribute("aria-expanded"));
})
























// const ham_menu=document.querySelector('.ham-menu');
// const mobile_menu=document.querySelector('.ham_mobile_menu');
// ham_menu.addEventListener('click',()=>{
//     if(ham_menu.classList.contains('open')){
//         ham_menu.classList.remove('open');
//         mobile_menu.style.display='none'; 
//     }
//     else if(ham_menu.classList!=('open'))
//     {
//         ham_menu.classList.add('open');
//         mobile_menu.style.display='block';       

//     }
    
// })

// console.log(document.querySelector('.info').getBoundingClientRect().width)



// const  image_container=document.getElementsByClassName('slide_show');
// console.log(image_container)

// /*Slide show Code */
//  const slides=document.querySelectorAll('.slide_show');
//  const pre=document.querySelector('.prev-btn');
//  const next=document.querySelector('.next-btn');
//  var slideIndex=0;
//  var slidelength=slides.length;
//  var timer;

// // //Automatic slideshow below
// const primary_na=document.querySelector(".primary");
// const mob_toggle=document.querySelector()



// pre.addEventListener('click',()=>{
  
//      if((slideIndex-1)>0)
//      {
//          slideIndex--;
//      }

//      for (i=0 ;i<slidelength;i++){
//          slides[i].style.display='none';
//      }
//      slides[slideIndex-1].style.display='block';
//  })

//  next.addEventListener('click',()=>{
// //     get the current slide index
//      if(slideIndex===(slidelength)){
//          slideIndex=0;
//      }
//      for (i=0 ;i<slidelength;i++){
//          slides[i].style.display='none';
//      }
//      console.log((slideIndex-1));
//      slideIndex++;
//      slides[(slideIndex-1)].style.display='block';
//  })



//   function slideshow(){
//       for (i=0 ;i<slidelength;i++){
//           slides[i].style.display='none';
//       }
//       if(slideIndex===slidelength){
//           slideIndex=0;
//       }
    
//       slides[slideIndex].style.display='block';
//       slideIndex++;
//       timer=setTimeout(slideshow,8000);
//   }

//  slideshow();

//for nav toggle





//to fix the navbar
// const top_nav=document.getElementById('top-blck');
// const navbar=document.getElementById('navbar-top');
// const toplink=document.getElementById('top-link');

// window.addEventListener('scroll',()=>{
//     const scrollHieght=window.pageYOffset;
//     const navHieght=navbar.getBoundingClientRect().height;
//     if(scrollHieght>navHieght){
//         navbar.classList.add('fixed-nav')

//         }
//     else{
//         navbar.classList.remove("fixed-nav");
      
//     }

//       //  pageYoffset returns the no of pixels scrolled in vertical direction & it is read only property.....

//       if(scrollHieght>500){
//         toplink.classList.add('show-link');
//     }
//     else{
//         toplink.classList.remove("show-link")}
// })

// toplink.addEventListener('click',()=>{

//     window.scrollTo({
//         left:0,
//         top:0,
//     })

// })

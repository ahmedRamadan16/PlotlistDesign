(function(){
    window.onscroll=function()
    {
        if(window.scrollY >= 100)
        {
            document.querySelector("header").classList.add("sticky");
            document.querySelector(".logo  img").src="../imgs/black-logo.png";
        }else{
            document.querySelector("header").classList.remove("sticky");
            document.querySelector(".logo  img").src="../imgs/white-logo.png";



        }
    };
    let tabs=document.querySelectorAll(".categories .links li");
    let divs=document.querySelectorAll(".categories-content .content");
    tabs.forEach(tab=>{
        tab.addEventListener("click",(e)=>{
            tabs.forEach(t=>{
                t.classList.remove("active");
            });
            e.target.classList.add("active");
            tabs.forEach(tabe=>{
                document.querySelector(tabe.dataset.source).classList.remove("active");
            });
            document.querySelector(e.target.dataset.source).classList.add("active");

        });
    });
    // 
    let swipperPagginetion=document.querySelectorAll(".recent-listing .swiper-pagination li");
    let cols=document.querySelectorAll(".recent-listing .swiper-container .col");
    swipperPagginetion.forEach(page=>{
        page.addEventListener("click",(e)=>{
            swipperPagginetion.forEach(swipper=>{
                swipper.classList.remove("active");
            });
            e.target.classList.add("active");
                if(e.target.classList.contains("active"))
                {
                  if(e.target.dataset.index == "0"){
                    
                    cols[0].style.left="0";
                    cols[1].style.left="1290px";
                
                  }else if(e.target.dataset.index == "1")
                  {
                        cols[0].style.left="-1290px";
                        cols[1].style.left="-1290px";
                    
                  }else if (e.target.dataset.index=="2")
                  {
                    cols[0].style.left="-1290px";
                    cols[1].style.left="-1290px";
                    cols[2].style.left=`-${1290 * 2}px`;
                  }
                }
        });
    });

    let swipperPagginetion2=document.querySelectorAll(".recent-listin .swiper-pagination li");
    let cols2=document.querySelectorAll(".recent-listin .swiper-container .col");
    swipperPagginetion2.forEach(page=>{
        page.addEventListener("click",(e)=>{
            swipperPagginetion2.forEach(swipper=>{
                swipper.classList.remove("active");
            });
            console.log(e.target);
            e.target.closest("li").classList.add("active");
                if(e.target.classList.contains("active"))
                {
                  if(e.target.dataset.index == "0"){
                    
                    cols2[0].style.left="0";
                    cols2[1].style.left="1000px";
                
                  }else if(e.target.dataset.index == "1")
                  {
                        cols2[0].style.left="-1000px";
                        cols2[1].style.left="-1000px";
                    
                  }else if (e.target.dataset.index=="2")
                  {
                    cols2[0].style.left="-1000px";
                    cols2[1].style.left="-1000px";
                    cols2[2].style.left=`-${1000 * 2}px`;
                  }
                }
        });
    });
let links =document.querySelectorAll(".listing-section .links li ");
links.forEach(li=>{
    li.addEventListener("click",(e)=>{
        links.forEach(link=>{
            link.classList.remove("active");
        });
    e.target.closest("li").classList.add("active");

    });
})





    //categories tab 
    let Ctabs=document.querySelectorAll(".categorie .links li");
    let categor=document.querySelectorAll(".categories-container .col");
    Ctabs.forEach(tab=>{
        tab.addEventListener("click",(e)=>{
            Ctabs.forEach(t=>{
                t.classList.remove("active");
            });
            e.target.classList.add("active");   
            categor.forEach(c=>{
                c.classList.remove("active");
            })
           document.querySelector(e.target.dataset.source).classList.add("active");
        });
    });


    //add class to bars to show nav in mobile screen 
    let bars =document.querySelector("header nav");
    let nav=document.querySelector("header nav ul");
    bars.addEventListener("click",(e)=>{
    nav.classList.toggle("apper");
    })

}());
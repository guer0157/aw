let navTabs=document.querySelectorAll("li.nav");
 console.log(navTabs);
navTabs.forEach(tab=>{
    tab.addEventListener("click",selectedTab);
})
function selectedTab(ev){
    let currentSelect=ev.currentTarget.getAttribute("id");
    
    switch(currentSelect){
        case productos_destacados:
            
catalogo
iKEY
inicio
registrar_producto
noticias
distribuidores
                        }
}
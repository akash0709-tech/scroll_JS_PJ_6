function debounce(func,wait=10,immediate=true){
let timeout
return function(){
  
  let later=function(){
    timeout=null
  }
  let callnow=immediate && !timeout
  clearTimeout(timeout)
  timeout=setTimeout(later,wait)
  if(callnow){ 
    func()
  }
}
}



function change(){

  const allimages=document.querySelectorAll('.slide-in')
  allimages.forEach((image)=>{

  const slideInAt=(window.scrollY+window.innerHeight)-image.height/2
   const imageBottom=image.offsetTop + image.height

  const ifHalfshown=slideInAt>image.offsetTop
  const isnotScrollPast=window.scrollY<imageBottom

  if(ifHalfshown && isnotScrollPast){
    image.classList.add('active')
  } else {
    image.classList.remove('active')
  }

})
}


  window.addEventListener('scroll',debounce(change))
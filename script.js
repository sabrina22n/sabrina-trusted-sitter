document.addEventListener('DOMContentLoaded', ()=>{
  const pets = [
    {id:'isha', name:'Isha', folder:'Isha', image:'photos/Isha/IMG_5506.jpeg', desc:'Perra tranquila, acostumbrada a paseos largos y compañía.'},
    {id:'cat', name:'Cat', folder:'cat', image:'photos/cat/IMG_4539.JPG', desc:'Gata casera, juguetona y curiosa.'},
    {id:'pampa', name:'Pampa', folder:'pampa', image:'photos/pampa/IMG_9370.jpeg', desc:'Perra sociable y cariñosa con niños.'},
    {id:'paris', name:'Paris', folder:'paris', image:'photos/paris/IMG_0321.jpeg', desc:'Perro activo, requiere paseos diarios y ejercicio.'},
    {id:'picu', name:'Picu', folder:'picu', image:'photos/picu/IMG_0279.jpeg', desc:'Pequeño y mimoso, buen compañero de sofá.'},
    {id:'puppy', name:'Puppy', folder:'puppy', image:'photos/puppy/IMG_5328.JPG', desc:'Cachorro juguetón, necesita supervisión.'},
    {id:'salem', name:'Salem & Merlin', folder:'salem-merlin', image:'photos/salem-merlin/4a732b29-4aa0-4cd0-8260-950e66c4960f.jpg', desc:'Pareja de perros con distintas necesidades médicas.'},
    {id:'tyrone', name:'Tyrone', folder:'tyrone', image:'photos/tyrone/IMG_0188.jpeg', desc:'Perro calmado y educado en casa.'}
  ];

  const petList = document.getElementById('pet-list');
  pets.forEach((p,i)=>{
    const card = document.createElement('article');
    // alternate shaped styles for playful variety
    card.className = 'pet-card' + (i%2===0 ? ' shaped' : ' shaped alt');
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="card-body">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </div>
    `;
    card.addEventListener('click', ()=> openLightbox(p));
    card.addEventListener('keypress', (e)=>{ if(e.key==='Enter') openLightbox(p); });
    petList.appendChild(card);
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.querySelector('.lightbox-content');
  const closeBtn = document.getElementById('close-lightbox');
  function openLightbox(p){
    lightboxContent.innerHTML = '';
    // try to show a video if exists (mp4/mov), otherwise image
    const ext = p.image.split('.').pop().toLowerCase();
    if(['mp4','mov','webm'].includes(ext)){
      const v = document.createElement('video'); v.controls = true; v.src = p.image; lightboxContent.appendChild(v);
    } else {
      const img = document.createElement('img'); img.src = p.image; img.alt = p.name; lightboxContent.appendChild(img);
    }
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lightbox.setAttribute('aria-hidden','true');
    lightboxContent.innerHTML = '';
    document.body.style.overflow = '';
  }
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeLightbox(); });

  // Simple hero carousel (fade)
  const carousel = document.getElementById('hero-carousel');
  if(carousel){
    const imgs = Array.from(carousel.querySelectorAll('img'));
    let idx = 0;
    imgs.forEach((im,i)=>{ im.style.opacity = i===0 ? '1':'0'; im.style.position='absolute'; im.style.left=0; im.style.top=0; im.style.transition='opacity 800ms';});
    setInterval(()=>{
      const prev = idx; idx = (idx+1)%imgs.length;
      imgs[prev].style.opacity = 0; imgs[idx].style.opacity = 1;
    },4000);
  }
});

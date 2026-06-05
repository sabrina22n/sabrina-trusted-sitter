/* ── Photo arrays ── */
const pampaPhotos = [
  'photos/pampa/IMG_9370.jpeg',
  'photos/pampa/IMG_9387.jpeg',
  'photos/pampa/IMG_9409.jpeg',
  'photos/pampa/IMG_2235.jpeg',
  'photos/pampa/0f160d91-444d-48f2-8a80-97663699a7c0.jpg',
  'photos/pampa/79167400-4c2d-4044-b434-0a2395b6c0d6.jpg',
  'photos/pampa/IMG_2362.jpeg',
  'photos/pampa/IMG_9388.jpeg',
  'photos/pampa/IMG_9413.jpeg',
  'photos/pampa/IMG_9605.jpeg',
  'photos/pampa/IMG_9670.jpeg',
  'photos/pampa/IMG_9687.jpeg',
];

const parisPhotos = [
  'photos/paris/IMG_0321.jpeg',
  'photos/paris/IMG_0331.jpeg',
  'photos/paris/IMG_0332.jpeg',
  'photos/paris/IMG_0680.jpeg',
  'photos/paris/IMG_0685.jpeg',
  'photos/paris/IMG_0718.jpeg',
  'photos/paris/IMG_0871.jpeg',
  'photos/paris/IMG_1342.jpeg',
  'photos/paris/IMG_1352.jpeg',
  'photos/paris/IMG_3863.jpeg',
  'photos/paris/IMG_3873.jpeg',
  'photos/paris/IMG_6839.jpeg',
  'photos/paris/IMG_9885.jpeg',
  'photos/paris/3e9bd022-612f-4491-b388-eb5da1b9ff7e.jpg',
];

const salemPhotos = [
  'photos/salem-merlin/IMG_2039.jpeg',
  'photos/salem-merlin/IMG_4062.jpeg',
  'photos/salem-merlin/IMG_5241.jpeg',
  'photos/salem-merlin/IMG_3782.jpeg',
  'photos/salem-merlin/IMG_0041.jpeg',
  'photos/salem-merlin/IMG_2585.jpeg',
  'photos/salem-merlin/IMG_2866.jpeg',
  'photos/salem-merlin/IMG_3842.jpeg',
  'photos/salem-merlin/IMG_5423.jpeg',
  'photos/salem-merlin/IMG_5515.jpeg',
  'photos/salem-merlin/IMG_5815.jpeg',
  'photos/salem-merlin/IMG_5924.jpeg',
  'photos/salem-merlin/IMG_6173.jpeg',
  'photos/salem-merlin/IMG_6905.JPG',
  'photos/salem-merlin/IMG_7936.jpeg',
  'photos/salem-merlin/IMG_8273.jpeg',
  'photos/salem-merlin/IMG_8277.jpeg',
  'photos/salem-merlin/IMG_9346.jpeg',
  'photos/salem-merlin/IMG_9374.jpeg',
  'photos/salem-merlin/IMG_9378.jpeg',
  'photos/salem-merlin/IMG_9289.jpeg',
];

const picuPhotos = [
  'photos/picu/IMG_0279.jpeg',
  'photos/picu/IMG_1275.jpeg',
  'photos/picu/IMG_1370.jpeg',
  'photos/picu/IMG_4398.jpeg',
  'photos/picu/IMG_5996.jpeg',
  'photos/picu/IMG_6289.jpeg',
  'photos/picu/IMG_6752.jpeg',
  'photos/picu/IMG_7356.jpeg',
  'photos/picu/IMG_7410.jpeg',
];

const tyronePhotos = [
  'photos/tyrone/IMG_0188.jpeg',
  'photos/tyrone/IMG_0266.jpeg',
  'photos/tyrone/IMG_0269.jpeg',
  'photos/tyrone/IMG_0529.jpeg',
  'photos/tyrone/IMG_0738.jpeg',
  'photos/tyrone/IMG_4224.jpeg',
  'photos/tyrone/IMG_4604.jpeg',
  'photos/tyrone/IMG_6319.jpeg',
];

const ishaPhotos = [
  'photos/Isha/IMG_8485.jpeg',
  'photos/Isha/IMG_0587.jpeg',
  'photos/Isha/IMG_5506.jpeg',
  'photos/Isha/4AED476C-E33D-416C-B981-A3B157968F85.jpg',
  'photos/Isha/IMG_0516.jpeg',
];

const catPhotos = [
  'photos/kit/IMG_4539.JPG',
  'photos/kit/IMG_5338.jpeg',
];

const merlinaPhotos = [
  'photos/merlina/IMG_0861.jpeg',
  'photos/merlina/IMG_0971.jpeg',
  'photos/merlina/IMG_1293.jpeg',
  'photos/merlina/IMG_1314.jpeg',
  'photos/merlina/IMG_1503.jpeg',
  'photos/merlina/IMG_4604.jpeg',
  'photos/merlina/IMG_4766.jpeg',
  'photos/merlina/d1ca7e4f-0e14-4c66-a413-167a6200927e.jpg',
];

/* ── Lightbox ── */
let lbPhotos = [], lbIdx = 0;

function lb_isVideo(src) {
  return /\.(mp4|mov)$/i.test(src);
}

function lb_show(src) {
  const img = document.getElementById('lb-img');
  const vid = document.getElementById('lb-video');
  if (lb_isVideo(src)) {
    img.style.display = 'none';
    vid.style.display = 'block';
    vid.src = src;
    vid.load();
  } else {
    vid.style.display = 'none';
    vid.pause();
    vid.src = '';
    img.style.display = 'block';
    img.style.opacity = '0';
    setTimeout(() => { img.src = src; img.style.opacity = '1'; }, 120);
  }
  lb_counter();
}

function lb_open(photos, idx) {
  lbPhotos = photos;
  lbIdx    = idx;
  lb_show(photos[idx]);
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function lb_close() {
  const vid = document.getElementById('lb-video');
  vid.pause();
  vid.src = '';
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lb_bgclose(e) {
  if (e.target === document.getElementById('lightbox')) lb_close();
}

function lb_nav(dir) {
  lbIdx = (lbIdx + dir + lbPhotos.length) % lbPhotos.length;
  lb_show(lbPhotos[lbIdx]);
}

function lb_counter() {
  document.getElementById('lb-counter').textContent =
    (lbIdx + 1) + ' / ' + lbPhotos.length;
}

document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowLeft')  lb_nav(-1);
  if (e.key === 'ArrowRight') lb_nav(1);
  if (e.key === 'Escape')     lb_close();
});

/* smooth image transition */
document.getElementById('lb-img').style.transition = 'opacity .12s';

/* ── Mobile menu ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* ── Nav active highlight ── */
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
const sections = document.querySelectorAll('section[id], div[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    const match = a.getAttribute('href') === '#' + current;
    a.style.color = match ? 'var(--teal)' : '';
  });
}, { passive: true });

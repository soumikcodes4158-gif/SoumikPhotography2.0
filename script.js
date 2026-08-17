const menu = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(({isIntersecting,target}) => { if (isIntersecting) { target.classList.add('revealed'); observer.unobserve(target); }}), {threshold:.18});
document.querySelectorAll('.blur-text').forEach(el => { el.innerHTML = el.textContent.split(/(\s+)/).map((word,i) => word.trim() ? `<span style="--i:${i}">${word}</span>` : word).join(''); observer.observe(el); });

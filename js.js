function showContent(id) {
  document.querySelectorAll('.content').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.topnav a').forEach(link => link.classList.remove('active'));
  const clickedLink = [...document.querySelectorAll('.topnav a')].find(link =>
    link.textContent.trim() === document.getElementById(id).previousElementSibling?.textContent?.trim() ||
    link.onclick?.toString().includes(`'${id}'`)
  );
  if (clickedLink) clickedLink.classList.add('active');
}

function toggleMenu() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

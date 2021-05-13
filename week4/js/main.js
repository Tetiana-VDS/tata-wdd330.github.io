document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();
document.getElementById("modify").textContent = document.lastModified;

const links = [
  {
    label: "Week4 notes",
    url: "week4/index.html"
  }
]

// const form = document.forms[0];
//const form = document.getElementsByTagname('form')[0];
//const form = document.forms['search'];

//const [input,button] = form.elements; --> returns an HTML collection of all the elements contained in the form

const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);
document.forms.hero.heroName.focus();
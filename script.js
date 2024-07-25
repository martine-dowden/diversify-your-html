const descriptionDialog = document.getElementById('descriptionDialog')
const dialogTitle = descriptionDialog.querySelector('h2')
const dialogDfn = descriptionDialog.querySelector('div.body dfn')
const dialogContent = descriptionDialog.querySelector('div.body span')
const dialogLink = descriptionDialog.querySelector('.link')

const definitions = {
  angular: {
    dt: 'Angular', 
    dd: 'Angular is a web framework that empowers developers to build fast, reliable applications.',
    link: 'https://angular.dev/overview'
  },
  css: { 
    dt: 'CSS',
    dd: 'CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.',
    link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS'
  },
  javascript: {
    dt: 'JavaScript',
    dd: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.',
    link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
  },
  node: {
    dt: 'Node',
    dd: 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.',
    link: 'https://nodejs.org/en'
  },
  react: {
    dt: 'React',
    dd: 'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    link: 'https://react.dev/',
  },
  sass: {
    dt: 'Sass',
    dd: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
    link: 'https://sass-lang.com/'
  },
  typescript: {
    dt: 'TypeScript',
    dd: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    link: 'https://www.typescriptlang.org/'
  },
  vue: {
    dt: 'vue',
    dd: 'Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.',
    link: 'https://vuejs.org/guide/introduction.html'
  },
  aria: {
    dt: 'wai',
    dd: 'WAI-ARIA, the Accessible Rich Internet Applications Suite, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with HTML, JavaScript, and related technologies.',
    link: 'https://www.w3.org/WAI/standards-guidelines/aria/'
  },
}

function openDialog(value) {
  if (!definitions[value]) { throw new Error('definition not found') }
  const { dt, dd, link } = definitions[value]
  console.log(descriptionDialog, value)
  dialogTitle.innerText = dt
  dialogDfn.innerText = dt
  dialogContent.innerText = dd
  dialogLink.innerHTML = `
    <a href="${link}" rel="noopener" target="_blank">
      Read more information about ${dt}
    </a>
  `
  descriptionDialog.showModal()
}

function closeDialog() {
  descriptionDialog.close()
}
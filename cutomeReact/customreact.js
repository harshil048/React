function customRender(reactElement, container){
  // const domelement = document.createElement(reactElement.type);
  // domelement.innerHTML = reactElement.children;
  // domelement.setAttribute('href',reactElement.props.href);
  // domelement.setAttribute('target',reactElement.props.taregt);

  const domelement = document.createElement(reactElement.type);
  domelement.innerHTML = reactElement.children;
  for (const it in reactElement.props) {
    domelement.setAttribute(`${it}`,reactElement.props[it]);
  }
  container.appendChild(domelement);
}

const reactElement = {
  type : 'a',
  props: {
    href: 'https://google.com',
    taregt: 'blank'
  },
  children: 'Click me to visit google'
}

const maincontainer = document.querySelector('#root');

customRender(reactElement, maincontainer);
const { companies, productMap } = require('./data');
const render = require('./render');

let curr = window.location.hash.slice(1) * 1;

const companyList = document.querySelector('#company-list');

const _render = () => {
  render({ companyList, companies, productMap, curr });
};

_render();

window.addEventListener('hashchange', () => {
  curr = window.location.hash.slice(1) * 1;
  _render();
});

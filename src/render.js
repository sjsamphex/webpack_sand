const render = ({ companyList, companies, productMap, curr }) => {
  const html = `
  ${companies
    .map(
      (comp, idx) => `
      <li>
      <a href = '#${idx}'> ${comp}</a>
      ${
        curr === idx
          ? `
        <ul>
          ${productMap[comp].map((prod) => `<li>${prod}</li>`).join('')}
        </ul>`
          : ''
      }
      </li>`
    )
    .join('')}`;

  companyList.innerHTML = html;
};

module.exports = render;

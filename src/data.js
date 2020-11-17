const faker = require('faker');

const companies = new Array(50)
  .fill(' ')
  .map((name) => faker.company.companyName());

const productMap = companies.reduce((acc, company) => {
  acc[company] = new Array(3)
    .fill('')
    .map((name) => faker.commerce.productName());
  return acc;
}, {});

module.exports = { companies, productMap };

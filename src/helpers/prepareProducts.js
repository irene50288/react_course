const prepareProducts = (products) => {
  let ids = [];
  if(products) {
    products.map(product => {
      ids.push(product.id)
    })
    return JSON.stringify(ids);
  }
  return;
}

export default prepareProducts;
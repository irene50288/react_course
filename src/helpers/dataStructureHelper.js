export function changeData({body: {items}}) {
  const products = [];
  items.map((item) =>{
    // the id of the product is inside item.sys.id
    const product = Object.assign(item.fields);
    product.id = item.sys.id;
    products.push(product);
  });
  return products;
}

export function changeProduct({body}) {
  const product = body.fields;
  product.id = body.sys.id;
  return product;
}
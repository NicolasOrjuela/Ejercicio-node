const fs = require('fs');
var list = null;
var newlist = [];

fs.readFile('products-ecommerce.json', 'utf-8', (err, data) => {
  list = JSON.parse(data);
  transform(list);

  fs.writeFile('ejercicionodo.json', newlist, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

})

function transform(lista)
{
  lista.items.forEach(element => {
    if(element.price.amount < 10000) newlist.push(element);    
  });
  newlist = JSON.stringify(newlist, null, 2);
}



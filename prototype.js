/// <reference path="../Prototype/main.js"/>

//add new property
products.prototype.discount="5%";

//add new method
products.prototype.displayDiscount=function()
{
    console.log(`Discount :${this.discount}`)
}
obj.displayDiscount();

delete products.prototype.discount;
let obj2=new products();
obj2.displayDiscount();

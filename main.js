//use prototype for adding property and method in class
function products()
{
    this.productName="Gold",
    this.gst="18%"
     
    this.display=function()
    {
        console.log(`${this.productName} ${this.gst}`);
    }
}

let obj=new products();
obj.display();

//add new property
products.prototype.price=30000;

//add new method
products.prototype.displayPrice=function()
{
    console.log(`${this.productName} : ${this.price}`);
}

obj.displayPrice();


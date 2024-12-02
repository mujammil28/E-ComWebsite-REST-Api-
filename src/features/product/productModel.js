import userModel from '../user/userModel.js'

export default class productModel{


        constructor(id,name,desc,image,category,price,sizes){

            this.id=id;
            this.name=name;
            this.desc=desc;
            this.image=image;
            this.category=category;
            this.price=price;
            this.sizes=sizes;
        }
        static get(id) {
            const product = products.find(
              (i) => i.id == id
            );
            return product;
          }

  static add(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }
        static getAll(){
            return products;
        }
        static filter(minPrice, maxPrice, category) {
            const result = products.filter((product) => {
              return (
                (!minPrice ||
                  product.price >= minPrice) &&
                (!maxPrice ||
                  product.price <= maxPrice) &&
                (!category ||
                  product.category == category)
              );
            });
            return result;
          }
          
            static ratingProduct(userId,productId,rating){

                console.log(userId)
              const user=userModel.getAll().find((u)=>u.id===Number(userId))
                console.log(user)
                if(!user){
                    return "user Not Found"
                }

                const productCheck=products.find((p)=>p.id===Number(productId))
                if(!productCheck){
                    return "product not found"
                }

                if(!products.rating){
                    products.rating=[];
                    products.rating.push({userId:userId, rating:rating});
                }
                    else{
                        const existingRating=products.rating.findIndex((r)=>r.userId===userId)
                   
                        if(existingRating>=0){

                            products.ratings[existingRating]={
                                userId:userId,
                                rating:rating,
                            }

                        }
                        else{
                            products.rating.push({userId:userId, rating:rating});
                        }
                        
                   
                    }

            }
}
var products=[
                new productModel(   1,
                    'Product 1',
                    'Description for Product 10',
                    19.99,
                    'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
                    'Category1'),
                new productModel(    2,
                    'Product 2',
                    'Description for Product 2',
                    29.99,
                    'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
                    'Category2',
                    ['M', 'XL']),                 
                 new productModel(   3,
                    'Product 3',
                    'Description for Product 3',
                    39.99,
                    'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
                    'Category3',
                    ['M', 'XL', 'S']),

]
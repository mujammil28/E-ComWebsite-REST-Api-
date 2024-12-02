import productModel from './productModel.js'

export default class productController{

            getProduct(req,res){

                const products=productModel.getAll();

                res.status(200).send(products);
            }

            addProduct(req,res){   

             
                console.log(req.body)
                const { name, price, sizes } = req.body;
                const newProduct = {
                  name,
                  price: parseFloat(price),
                  sizes:sizes.split(","),
                  imageUrl: req.file.filename,
                };
                const createdRecord = productModel.add(
                  newProduct
                );
                res.status(201).send(createdRecord);
            }
            rateProduct(req,res){

                    const userId=req.query.userId;
                    const productId=req.query.productId;

                    const rating=req.query.rating;

                    const error = productModel.ratingProduct(userId, productId,rating);

                    if(error){
                        return res.status(401).send(error)
                    }
                    else{
                        return res.status(200).send("Success")
                    }
            }

            addOneProduct(req,res){
                const id = req.params.id;
                const product = productModel.get(id);
                if (!product) {
                  res.status(404).send('Product not found');
                } else {
                  return res.status(200).send(product);
                }
            }

            filterProducts(req, res) {
                const minPrice = req.query.minPrice;
                const maxPrice = req.query.maxPrice;
                const category = req.query.category;
                const result = productModel.filter(
                  minPrice,
                  maxPrice,
                  category
                );
                res.status(200).send(result);
              }
}

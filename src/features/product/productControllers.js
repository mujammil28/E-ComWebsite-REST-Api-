import productModel from './productModel.js'

export default class productController{

            getProduct(req,res){

                const products=productModel.getAll();

                res.status(200).send(products);
            }

            addProduct(req,res){   

                console.log('Post Request Called!!!');
                res.status(200).send('Post Request')
                console.log(req.body)
            }
            rateProduct(){

            }

            addOneProduct(){

            }

}

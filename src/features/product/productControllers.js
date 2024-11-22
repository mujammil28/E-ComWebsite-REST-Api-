import productModel from './productModel.js'

export default class productController{

            getProduct(req,res){

                const products=productModel.getAll();

                res.status(200).send(products);
            }

            addProduct(){

            }
            rateProduct(){

            }

            addOneProduct(){

            }

}

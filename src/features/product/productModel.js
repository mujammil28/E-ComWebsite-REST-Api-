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

        static getAll(){
            return products;
        }
}


var products=[
                new productModel(  1,
                                'product1',
                                'this is desc of product1',
                                'https:imageLink',
                                'category1',),
                new productModel(  2,
                                    'product2',
                                    'this is desc of product2',
                                    'https:imageLink',
                                    'category2',['M','XL','L','S']),                 
                 new productModel(  3,
                                        'product3',
                                        'this is desc of product3',
                                        'https:imageLink',
                                        'category3',['M','XL','S']),

]
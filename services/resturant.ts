import restaurant from '../models/restaurant';
import product from '../models/product';


class restaurant {
    createrestaurant = (body: any) => {
        return new Promise((resolve, reject) => {
            new restaurant(body).save((error: any, result: unknown) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })

    }

    getAllrestaurant = () => {
        return new Promise((resolve, reject) => {
            restaurant.find((error: any, result: unknown) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    restaurantUpdate = (body: any, restaurantId: any) => {
        const query = {
            _id: restaurantId
        }
        return new Promise(async (resolve, reject) => {
            const data =await restaurant.updateOne(query, body);
            if(data){
                resolve(data);
            }
            else{
                reject({status:false,message:'Error occurred'});
            }
        })
    }

    createrestaurantProduct = (body: any) => {
        return new Promise((resolve, reject) => {
            new product(body).save((error: any, result: unknown) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })

    }

    restaurantProductsList = (id: any) => {
        const query = {
            restaurantId: id
        }
        return new Promise((resolve, reject) => {
            product.find(query ,(error: any, result: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }


    changerestaurantProduct = (body: any, productId: any) => {
        const query = {
            _id: productId
        }
        return new Promise(async (resolve, reject) => {
            const data = await product.updateOne(query, body)
            if(data){
                resolve(data);
            }
            else{
                reject({status:false,message:'Error occurred'});
            }
        })
    }

    deleteReturantProduct = (productId: any) => {
        const query = {
            _id: productId
        }
        return new Promise((resolve, reject) => {
            product.deleteOne(query,  (error: any, result: void) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        })
    }

}

export default  restaurant;
import restaurantService from '../services/restaurant';
const restaurant = new restaurantService();

const restro = {
 listrestaurant: (req: any, res: any) => {
        try {
            restaurant.getAllrestaurant().then((data: any) => {
                return res.status(200).send(data);
            });
        } catch (error) {
            return res.send(error);
        }
    },


 registerrestaurant: (req: any, res: any) => {
        try {
            const postData = req.body;

            if (!postData.name || !postData.address) {
                return res.send('fill all the details');
            }

            if (!req.files) {
                res.send({
                    status: false,
                    message: 'Add file to upload'
                });
            } else {
                const avatar = req.files.picture;
                avatar.mv('./uploads/restaurant/' + avatar.name);
                const path = './uploads/restaurant/' + avatar.name;
                postData.picture = path;
                if (path) {
                    restaurant.createrestaurant(postData).then((data: any) => {
                        return res.status(200).send(data);
                    });
                } else {
                    res.send({
                        status: false,
                        message: 'Please try again'
                    });
                }

            }

        } catch (error) {
            return res.send(error);
        }

    },

updaterestaurant : (req : any, res : any) => {
    try {
        const restaurantId =  req.param('_id');
        const postData = req.body;
        if (!restaurantId) {
            return res.send('Please send restaurant id in the params')
        }
        if(req.files){
            const avatar = req.files.picture;
            avatar.mv('./uploads/restaurant/' + avatar.name);
            const path = './uploads/restaurant/' + avatar.name
            postData.picture = path;
            if (path) {
                restaurant.createrestaurant(postData).then((data: any) => {
                    return res.status(200).send(data)
                })
            } else {
                res.send({
                    status: false,
                    message: 'Please try again'
                });
            }

        }
        restaurant.restaurantUpdate(postData, restaurantId).then((data: any) => {
            return res.status(200).send(data)
        })

    } catch (error) {
        return res.send(error);
    }

},

restaurantProductsList : (req : any, res : any) => {
    try {
        const restaurantId = req.param('_id');
        if (!restaurantId) {
            return res.send('Please send restaurant id in the params')
        }
        restaurant.restaurantProductsList(restaurantId).then((data: any) => {
            return res.status(200).send(data)
        })
    } catch (error) {
        return res.send(error);
    }

},

createrestaurantProduct : (req : any, res : any) =>{
    try {
        const postData = req.body;
        const restaurantId = req.body.restaurantId;
        if (!restaurantId) {
            return res.send('Please send restaurant id in the body')
        }
        if (!postData.name || !postData.price || !postData.category) {
            return res.send('Fill all the details')
        }
        if (!req.files) {
            res.send({
                status: false,
                message: 'Add file to upload'
            });
        } else {
            const avatar = req.files.picture;
            avatar.mv('./uploads/product/' + avatar.name);
            const path = './uploads/product/' + avatar.name
            postData.picture = path;
            if (path) {
                restaurant.createrestaurantProduct(postData).then((data: any) => {
                    return res.status(200).send(data)
                })
            } else {
                res.send({
                    status: false,
                    message: 'Please try again'
                });
            }

        }


    } catch (error) {
        return res.send(error);
    }

},


changerestaurantProduct : (req : any, res : any) => {
    try {
        const productId = req.param('_id');
        const postData = req.body;
        if (!productId) {
            return res.send('Please send product id in the params')
        }
        if(req.files){
            const avatar = req.files.picture;
            avatar.mv('./uploads/product/' + avatar.name);
            const path = './uploads/product/' + avatar.name
            postData.picture = path;
            if (path) {
                restaurant.changerestaurantProduct(postData, productId).then((data: any) => {
                    return res.status(200).send(data)
                })
            } else {
                res.send({
                    status: false,
                    message: 'Please try again'
                });
            }

        }
        restaurant.changerestaurantProduct(postData, productId).then((data: any) => {
            return res.status(200).send(data)
        })
    } catch (error) {
        return res.send(error);
    }

},

deleterestaurantProduct : (req : any, res : any) => {
    try {
        const productId = req.param('_id');
        if (!productId) {
            return res.send('Please send product id in the params')
        }
        restaurant.deleteReturantProduct(productId).then((data: any) => {
            return res.status(200).send(data)
        })
    } catch (error) {
        return res.send(error);
    }

}
}

export default restro;
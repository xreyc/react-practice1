import axios from 'axios';

class ProductServices {
    // CREATE PRODUCT
    async createProduct(title, price, description, image, category) {
        try {
            const response = await axios.post(
                "https://fakestoreapi.com/products",
                JSON.stringify({
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                })
            );
            if(response.status == 200) {
                const productData = response.data;
                return { status: 200, message: "Successful", data: productData };
            } else {
                return { status: 500, message: "Something went wrong" };
            }
        } catch (err) {
            return {
                status: 500,
                message: "Something went wrong"
            }
        }
    }

    // UPDATE PRODUCT
    async updateProduct(id, title, price, description, image, category) {
        try {
            const response = await axios.put(
                "https://fakestoreapi.com/products/" + id,
                JSON.stringify({
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                })
            );
            if(response.status == 200) {
                const productData = response.data;
                return { status: 200, message: "Successful", data: productData };
            } else {
                return { status: 500, message: "Something went wrong" };
            }
        } catch (err) {
            return {
                status: 500,
                message: "Something went wrong"
            }
        }
    }

    // GET PRODUCTS
    async getProducts() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            if(response.status == 200) {
                const productData = response.data;
                return { status: 200, message: "Successful", data: productData };
            } else {
                return { status: 500, message: "Something went wrong" };
            }
        } catch (err) {
            return {
                status: 500,
                message: "Something went wrong"
            }
        }
    }

    // GET PRODUCT BY ID
    async getProductById(id) {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/' + id);
            if(response.status == 200) {
                const productData = response.data;
                return { status: 200, message: "Successful", data: productData };
            } else {
                return { status: 500, message: "Something went wrong" };
            }
        } catch (err) {
            return {
                status: 500,
                message: "Something went wrong"
            }
        }
    }

    // DELETE PRODUCT BY ID
    async deleteProductById(id) {
        try {
            const response = await axios.delete("https://fakestoreapi.com/products/" + id);
            if(response.status == 200) {
                return { status: 200, message: "Successful" };
            } else {
                return { status: 500, message: "Something went wrong"
                };
            }
        } catch (err) {
            return { status: 500, message: "Something went wrong" }
        }
    }
}


// POST - Create new data
// PUT - Update existing data
// GET - Get data
// DELETE - Delete data


export default ProductServices;
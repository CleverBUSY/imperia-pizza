import axios from "../axios";

class CategoryFood {
    async getCategoryFood(){
        const res = await axios.get('/categories').then(res => res.data);
        console.log(res, "products");
        return res;
    }
    getCategoriesById(id){}
    createCategories(data){}
    updateCategories(id){}
    deleteCategories(id){}
}

export default new CategoryFood();
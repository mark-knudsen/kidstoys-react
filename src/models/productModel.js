class Product {
    id;
    name;
    description;
    imagePath;
    price;
    categoryId;
    quantity;
    created_at;
    updated_at;

    constructor(id, name, description, imagePath, price, categoryId, quantity, created_at, updated_at) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price;
        this.categoryId = categoryId;
        this.quantity = quantity;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    toString() {
        return `Id: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
    }
    
}
export default Product;
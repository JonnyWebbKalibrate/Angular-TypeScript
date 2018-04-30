var app;
(function (app) {
    var domain;
    (function (domain) {
        var Product = /** @class */ (function () {
            function Product(productName, productId, productCode, releaseDate, price, description, imageUrl) {
                this.productName = productName;
                this.productId = productId;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            Product.prototype.calculateDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return Product;
        }());
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));

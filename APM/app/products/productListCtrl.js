var app;
(function (app) {
    var ProductList;
    (function (ProductList) {
        var ProductListCtrl = /** @class */ (function () {
            function ProductListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Product List";
                this.showImage = false;
                this.products = [];
                var productResource = dataAccessService.getProductResource();
                productResource.query(function (data) {
                    _this.products = data;
                });
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            ProductListCtrl.$inject = ["dataAccessService"];
            return ProductListCtrl;
        }());
        angular
            .module("productManagement")
            .controller("ProductListCtrl", ProductListCtrl);
    })(ProductList = app.ProductList || (app.ProductList = {}));
})(app || (app = {}));

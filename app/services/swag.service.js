angular.module("swagShop").service("swagSrvc", function($http) {
  this.swag = [
    {
      id: "0",
      title: "Skullcap",
      color: "Black",
      size: "M",
      price: 10
    },
    {
      id: "1",
      title: "T-Shirt",
      color: "Red",
      size: "L",
      price: 15
    },
    {
      id: "2",
      title: "Joggers",
      color: "Grey",
      size: "S",
      price: 20
    }
  ];
});

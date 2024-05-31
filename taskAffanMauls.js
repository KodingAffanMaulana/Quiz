// Task 1
// Fungsi untuk membalikkan string
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // Output: "olleh"
console.log(reverseString('world')); // Output: "dlrow"

// Fungsi untuk mencetak FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Contoh penggunaan
fizzBuzz(15);

// Fungsi untuk mencari angka terbesar kedua dalam array
function secondLargest(arr) {
  if (arr.length < 2) {
    return null; // Mengembalikan null jika array kurang dari dua elemen
  }
  let first = -Infinity,
    second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return second;
}

console.log(secondLargest([10, 5, 20, 8])); // Output: 10
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4

// Task 2
let products = [
  { id: 1, name: 'Product A', price: 1000, points: 10 },
  { id: 2, name: 'Product B', price: 2000, points: 25 },
  { id: 3, name: 'Product C', price: 5000, points: 50 },
  { id: 4, name: 'Product D', price: 8000, points: 100 },
];
let availablePoints = 150;

let purchasedProducts = [];
let totalSpent = 0;

// Fungsi untuk mendapatkan produk dengan poin tertinggi
function getMaxPointsProduct(products) {
  return products.reduce((maxProduct, currentProduct) => {
    return currentProduct.points > maxProduct.points ? currentProduct : maxProduct;
  }, products[0]);
}

// Fungsi untuk menghitung sisa poin setelah membeli produk dengan poin tertinggi
function calculateRemainingPoints(points, product) {
  return points - product.points;
}

// Fungsi untuk membeli produk-produk hingga poin habis atau tidak cukup untuk membeli produk lain
function redeemProducts(products, points) {
  // Mengurutkan produk berdasarkan poin tertinggi
  products.sort((a, b) => b.points - a.points);

  let remainingPoints = points;
  let totalSpent = 0;
  let purchasedProducts = [];

  for (let product of products) {
    if (remainingPoints >= product.points) {
      purchasedProducts.push(product);
      totalSpent += product.price;
      remainingPoints = calculateRemainingPoints(remainingPoints, product);
    }
  }

  return {
    purchasedProducts: purchasedProducts,
    totalSpent: totalSpent,
  };
}

// Contoh penggunaan
let result = redeemProducts(products, availablePoints);
console.log(result.purchasedProducts); // Output: Daftar produk yang dibeli
console.log(result.totalSpent); // Output: Total harga yang dihabiskan

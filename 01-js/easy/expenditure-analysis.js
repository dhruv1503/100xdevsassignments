/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const spendMap = new Map();
  let spendArr = []
  transactions.forEach(transaction => {
    if(spendMap.has(transaction.category)){
     const newSpendValue = spendMap.get(transaction.category) + transaction.price
     spendMap.set(transaction.category, newSpendValue)
    }
    else{
      spendMap.set(transaction.category, transaction.price)
    }
  })
  
  spendMap.forEach((value, key) => (spendArr.push({category : key, totalSpent : value})));

  return spendArr
  
  
}


module.exports = calculateTotalSpentByCategory;

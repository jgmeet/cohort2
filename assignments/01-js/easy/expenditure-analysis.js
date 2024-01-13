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
  let totalPrice = new Map()
  for(let i=0; i<transactions.length; i++) {
    let category = transactions[i].category
    let price = transactions[i].price
    totalPrice.set(category, (totalPrice.get(category)||0)+price)
  }

  const ans = []
  totalPrice.forEach((value, key) => {
    const elem = {
      category: key,
      totalSpent: value
    }
    ans.push(elem)
  })

  return ans;
}

module.exports = calculateTotalSpentByCategory;

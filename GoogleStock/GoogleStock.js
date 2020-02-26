function GoogleStock (prices) {
  let maxProfit = -1;
  let buyPrice = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    if (buyPrice <= prices[i]) {
      let profit = prices[i] - buyPrice;
      maxProfit = profit > maxProfit? profit : maxProfit;
    } else { 
      buyPrice = prices[i];
    }
  }
  
  return maxProfit;
}


function checkCashRegister(price, cash, cid) {

    // Obtaining the amount that is currently in the register.
    let totalInDrawer = 0;
    for (let i = 0; i < cid.length; i++) {
      totalInDrawer += cid[i][1];
    }
    
    // Calculating the required change
    let changeToBeGiven = cash - price;
    // Creating a copy
    let cTBG = changeToBeGiven;
    
    // Reversing the cid for ease of checking sufficient number of bills or coins in the drawer during the calculation of change
    let cashier = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      cashier.push(cid[i][1]);
    }
    
    // Calculating the amount of change to return
    const coinsAndBills = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.1, 0.05, 0.01]
    const currencyUnits = [["ONE HUNDRED"], ["TWENTY"], ["TEN"], ["FIVE"], ["ONE"], ["QUARTER"], ["DIME"], ["NICKEL"], ["PENNY"]];
    
    
    let count = 0;
    
    for (let i = 0; i < coinsAndBills.length; i++) {
      while (changeToBeGiven >= coinsAndBills[i] && cashier[i] > 0) {
        changeToBeGiven -= coinsAndBills[i];
        count++;
        cashier[i] -= coinsAndBills[i];
        changeToBeGiven = changeToBeGiven.toFixed(2);
        if (changeToBeGiven < coinsAndBills[i] || cashier[i] == 0) {
          currencyUnits[i].push((coinsAndBills[i] * count));
          count = 0;
        } else {
          continue;
        }
     }
    }
    
    // Extracting only those currency units that are required for the change
    let changeToReturn = [];
    let u = 0;
    for (let i = 0; i < currencyUnits.length; i++) {
      if (currencyUnits[i].length > 1) {
        changeToReturn.push(currencyUnits[i]);
        u += currencyUnits[i][1];
      }
    }
    
    // Required Object that shows all currency units in case of closed till
    let changeToReturnForClosedTill = [...currencyUnits];
    for (let i = (currencyUnits.length - 1); i >= 0; i--) {
      if (changeToReturnForClosedTill[i].length == 1)
        changeToReturnForClosedTill[i].push(0);
    }
    let cTRFCT = [];
    for (let i = (changeToReturnForClosedTill.length - 1); i >= 0; i--) {
        cTRFCT.push(changeToReturnForClosedTill[i]);
    }
    
    
    // Creating the object to return and sorting which will be returned based on how much is left in the drawer
    let changeEqualToMoneyInDrawer = {status: "CLOSED", change: cTRFCT};
    let moneyInDrawerExceedsChange = {status: "OPEN", change: changeToReturn};
    let changeGreaterThanMoneyInDrawer = {status: "INSUFFICIENT_FUNDS", change: []};
    
    
    if (cTBG == totalInDrawer && cTBG == u) {
      return changeEqualToMoneyInDrawer;
    } else if (cTBG == u && totalInDrawer > cTBG) {
      return moneyInDrawerExceedsChange;
    } else if (cTBG < u) {
      return moneyInDrawerExceedsChange;
    } else if (cTBG > u) {
      return changeGreaterThanMoneyInDrawer;
    }
    
    
    }
    
    
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
    
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
    
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
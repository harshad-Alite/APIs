const Binance = require("node-binance-api");
const binance = new Binance().options({
    APIKEY: "",
    APISECRET: "",
});

// Get bid/ask prices
binance.allBookTickers(function (error, json) {
    console.log("allBookTickers", json);
});

// Getting latest price of a symbol
binance.prices(function (error, ticker) {
    console.log("prices()", ticker);
    console.log("Price of BNB: ", ticker.BNBBTC);
});

// Getting list of current balances
binance.balance(function (error, balances) {
    console.log("balances()", balances);
    if (typeof balances.ETH !== "undefined") {
        console.log("ETH balance: ", balances.ETH.available);
    }
});

// Getting bid/ask prices for a symbol
binance.bookTickers(function (error, ticker) {
    console.log("bookTickers()", ticker);
    console.log("Price of BNB: ", ticker.BNBBTC);
});

// Get market depth for a symbol
binance.depth("SNMBTC", function (error, json) {
    console.log("market depth", json);
});

// Getting list of open orders
binance.openOrders("ETHBTC", function (error, json) {
    console.log("openOrders()", json);
});

// Check an order's status
//let orderid = "7610385";
binance.orderStatus("ETHBTC", orderid, function (error, json) {
    console.log("orderStatus()", json);
});

// Cancel an order
binance.cancel("ETHBTC", orderid, function (error, response) {
    console.log("cancel()", response);
});

// Trade history
binance.trades("SNMBTC", function (error, json) {
    console.log("trade history", json);
});

// Get all account orders; active, canceled, or filled.
binance.allOrders("ETHBTC", function (error, json) {
    console.log(json);
});

//Placing a LIMIT order
binance.buy(symbol, quantity, price);
binance.buy("ETHBTC", 1, 0.0679);
binance.sell("ETHBTC", 1, 0.069);

//Placing a MARKET order
binance.buy(symbol, quantity, price, type);
binance.buy("ETHBTC", 1, 0, "MARKET");
binance.sell(symbol, quantity, 0, "MARKET");

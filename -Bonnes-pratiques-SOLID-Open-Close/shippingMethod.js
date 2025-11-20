class ShippingMethod {
    constructor(calculate= (orderAmount) =>{} ) {
        this.calculate = calculate;
    };

    calculate(orderAmount) {
        return this.calculate(orderAmount);
    }
}

class StandardShipping extends ShippingMethod {
    constructor() {
        super((orderAmount) => {
            const amountThreshold = 50;
            const costBelowThreshold = 4.99;
            return orderAmount >= amountThreshold ? 0 : costBelowThreshold;
        });
    }
}

class ExpressShipping extends ShippingMethod {
    constructor() {
        super((orderAmount) => {
            const amountThreshold = 100;
            const costBelowThreshold = 9.99;
            return orderAmount >= amountThreshold ? 0 : costBelowThreshold;
        });
    }
}

class PickupShipping extends ShippingMethod {
    constructor() {
        super((orderAmount) => {
            const amountThreshold = 30;
            const costBelowThreshold = 2.99;
            return orderAmount >= amountThreshold ? 0 : costBelowThreshold;
        });
    }
}

class CustomShipping extends ShippingMethod {
    constructor() {} // Make package of 5 euros plus 3 euros fee
    calculate(orderAmount) {
        // Custom calculation logic here
        return orderAmount%5 + 3; // Example logic
    }
}

export { StandardShipping, ExpressShipping, PickupShipping };
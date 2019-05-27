function inventoryAllocator(o,i) {
    let order = o;
    let supplies = i;
    let allocation = [];

    //loop through supplies
    supplies.map(supplier => {
        let supplierInventory = Object.keys(supplier.inventory);
        supplierInventory.forEach(supply => {
            if(order[supply]) {
                
            }
        });
    });

}

inventoryAllocator(
    {apple: 5, banana: 5, orange: 5 },
    [{ name: "owd", inventory: { apple: 5, orange: 10 } }, { name: "dm", inventory: { banana: 5, orange: 10 } } ]
);


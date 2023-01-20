export interface Cart{
    items: Array<CartItem>;
}

export interface  CartItem{
    
        
userId: number;
constraintId: number;
quantity: [
      {
        quantity: number,
        mealId: number,
        menuId: number
      }
    ];
                
            
}
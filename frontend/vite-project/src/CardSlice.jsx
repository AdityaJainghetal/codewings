import { createSlice } from "@reduxjs/toolkit";
import { message } from 'antd';
const cartSlice= createSlice({
    name:"mycart",

    initialState:{
        cart:[]
    },

    reducers:{
        addtoCart:(state, actions)=>{
             let Data=state.cart.filter(key=>key.id==actions.payload.id);
             
             if (Data.length>=1)
             {
                message.error("Product Aleready Added!!");
             }
             else
             {
                state.cart.push(actions.payload);
             }
             
        },


        qntyIncrease:(state, actions)=>{
          
            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
            }
    
        },

        qntyDecrease:(state, actions)=>{
          
            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    if (state.cart[i].qnty<=1)
                    {
                        message.error("Quantity not less than 1");
                    }
                    else 
                    {
                        state.cart[i].qnty--;
                    }       
                }
            }
        },

        itemRemove:(state, actions)=>{
            state.cart=state.cart.filter(key=>key.id!=actions.payload.id);
        }
    }

   
})
export const  {addtoCart, qntyIncrease, qntyDecrease, itemRemove}  = cartSlice.actions;
export default cartSlice.reducer;
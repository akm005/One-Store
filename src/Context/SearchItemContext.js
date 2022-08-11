import {createContext,useContext,useState} from "react";

const ShoppingCartContext = createContext();

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
  }

  export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [CartStatus, setCartStatus] = useState(false)
        

    const increaseCartQuantity =  (item_id) =>{
        setCartItems(currItems => {
            if (currItems.find(item => item.item_id === item_id) == null) {
              return [...currItems, { item_id:item_id, quantity: 1 }]
            } else {
              return currItems?.map(item => {
                if (item.item_id === item_id) {
                  return { ...item, quantity: item.quantity + 1 }
                } else {
                  return item
                }
              })
            }
          }
          )
            }
            
    const decreaseCartQuantity = (item_id) =>{
        setCartItems(currItems => {
            if (currItems?.find(item => item.item_id === item_id)?.quantity === 1) {
              return currItems.filter(item => item.item_id !== item_id)
            } else {
              return currItems?.map(item => {
                if (item.item_id === item_id) {
                  return { ...item, quantity: item.quantity - 1 }
                } else {
                  return item
                }
              })
            }
          }
          )
        }

    const cartQuantity = cartItems?.reduce(
            (quantity, item) => item.quantity + quantity,
            0
          )

    const openCart = () => setCartStatus(true)
    const closeCart = () => setCartStatus(false)         
    
    const getItemQuantity = (item_id) => {
            return cartItems?.find(item => item.item_id === item_id)?.quantity || 0
        }

    const removeFromCart = (item_id) => {
        setCartItems(currItems => {
          return currItems.filter(item => item.item_id !== item_id)
        })
      }
    const cartstate =()=> setCartStatus(true);
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        cartstate,
      }}
    >
      {children}
      <div>find where i am</div>
      {/* <ShoppingCart isOpen={isOpen} /> */}
    </ShoppingCartContext.Provider>
  )
}
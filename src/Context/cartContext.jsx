import {useState, createContext, useEffect} from 'react';



export const ContextoCarrito= createContext({}); //esto es el contexto

export const  CartProvider  = ({ children }) => { //sigueindo el ejemplo de la clase acá tenemos el provider
 
    const [Cards, setCards] = useState([]) //se inicia el estado del provider
const [isEmpty, setIsEmpty] = useState(true) //
   
    const CantidadCarrito = () => {
        if(Cards.length > 0) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
        return Cards.length;  
    };

    const AddItem = (product) => {

        setCards(Cards=>[...Cards, product])
        console.log(Cards)           
    }



      return (
        <ContextoCarrito.Provider 
        value={{ 
            Cards, 
        isEmpty, 
        setIsEmpty, 
        CantidadCarrito, 
        AddItem,}}
        >
            {children}
        </ContextoCarrito.Provider>
    );
    
    
};


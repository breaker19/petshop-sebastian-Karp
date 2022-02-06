import {useState, createContext} from 'react'


export const contextoCarrito= createContext(); //esto es el contexto

export const  CarritoProvider = ({ children }) => { //sigueindo el ejemplo de la clase acá tenemos el provider
    const [cards, setCards] = useState([]) //se inicia el estado del provider

 
    const CantidadCarrito = () => {
        return cards.length



        
    }

    const AddItem = (product) => {
        setCards([...cards, product])
        console.log(cards)           
    }




    return (
        <contextoCarrito.Provider value={{cards, CantidadCarrito, AddItem}}>
            {children}
        </contextoCarrito.Provider>
    )
}


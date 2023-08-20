import { useContext } from 'react';
import { BiCart } from 'react-icons/bi'; // Importa el ícono de carrito de compras de react-icons
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block':'none'}}>
        {/* <img className='CartImg' src={<BiCart size={40} />} alt='cart-widget'/> */}
        <img className='CartImg' src={BiCart} alt='cart-widget' width={40} height={40} />
        {totalQuantity}
        </Link>
    )
}

export default CartWidget;
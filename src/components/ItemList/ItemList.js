import '../../App.css'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <div className="row">
          {products.map((prod) => (
            <div key={prod.id} className="col-sm-3 col-md-3 col-lg-3">
              <Item {...prod} />
            </div>
          ))}
        </div>
    );
  };

export default ItemList
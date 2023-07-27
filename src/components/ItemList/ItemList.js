import '../../App.css'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <div className="row">
          {products.map((prod) => (
            <div key={prod.id} className="col-sm-12 col-md-6 col-lg-4 mx-auto d-flex justify-content-center">
              <Item {...prod} />
            </div>
          ))}
        </div>
    );
  };

export default ItemList
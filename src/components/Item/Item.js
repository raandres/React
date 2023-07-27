import '../../App.css'
const Item = ({ id, name, img, price, stock }) => {
    return (
      <div >
        <article className="CardItem">
          <header className="Header">
            <h2 className="ItemHeader"> {name} </h2>
          </header>
          <picture>
            <img src={img} alt={name} className="ItemImg" />
          </picture>
          <section>
            <p className="Info"> Precio: ${price} </p>
            <p className="Info"> Stock Disponible: {stock}</p>
          </section>
          <footer className="ItemFooter">
            <button className="Option">Ver detalle</button>
          </footer>
        </article>
      </div>
    );
  };

export default Item
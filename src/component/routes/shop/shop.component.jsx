import SHOP_DATA from '../../../shop-data.json'
import ProductCard from '../../product-card/product-card.component'
import './shop.styles.scss'
const Shop = () => {
    return (
        <div className='products-container'>
            {
                SHOP_DATA.map(product => {
                    return(
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </div>
    )
}

export default Shop
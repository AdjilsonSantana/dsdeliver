import { formatPrice } from './helpers';
import { Product } from './types';

type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected:boolean;
}

function ProductCard({ product, onSelectProduct, isSelected }: Props) {
    return (
        <div className={`order-card-container ${isSelected ? 'selected' : '' }`}
            onClick={() => onSelectProduct (product)}
        >
            <h4 className="order-card-title">
                {product.name}
            </h4>
            <img src={product.imageUri} className="order-card-image"
                alt={product.name}
            />
            <h4 className="order-card-price">
                 {formatPrice(product.price)}
            </h4>
            <div className="order-card-description">
                <h4>Description</h4>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    )
}

export default ProductCard;
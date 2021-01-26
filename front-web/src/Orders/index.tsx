import './styles.css';
import { toast } from 'react-toastify';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';


function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  console.log(products)

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => {
        toast.warning('Error Listing order');
      })
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product)

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {

    const productsIds = selectedProducts.map(({ id }) => ({ id }));
  
    if (productsIds.length <= 0) {
      toast.warning('Please, select unless 1 product');
    } else {
      if (orderLocation === undefined) {
        toast.warning('we cannot continue without your address');
      } else {
        const payload = {
          ...orderLocation!,
          products: productsIds
        }

        saveOrder(payload).then((response) => {
          toast.error(`Done, your order was sent! Nº ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro sending order');
          })
      }
    }
  }

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  )
}

export default Orders;
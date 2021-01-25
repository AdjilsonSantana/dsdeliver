import {Product} from "./types";

export function checkIsSelected (selectedProducts: Product[], product: Product){
    return selectedProducts.some(item => item.id === product.id);
}

export function formatPrice(price: number){
    const formater =new Intl.NumberFormat('pl-PL', {
        style:'currency',
        currency: 'PLN',
        minimumFractionDigits:2
    });

    return formater.format(price);
}
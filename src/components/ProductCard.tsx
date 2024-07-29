import styles from "../styles/styles.module.css";
import React, { createContext, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/Interfaces";

export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount: initialValues?.maxCount
        }}>
            <div style={style} className={`${styles.productCard} ${className}`}>

                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                })}

            </div>
        </Provider>
    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
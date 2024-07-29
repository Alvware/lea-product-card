import React from "react";
import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
    title?: string;
    className?: string;
    style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext(ProductContext);

    let titleToShow;

    if (title) titleToShow = title;
    else if (product.title) titleToShow = product.title
    else titleToShow = 'No title';

    return (
        <span style={style} className={`${styles.productDescription} ${className}`}>{titleToShow}</span>
    )
}
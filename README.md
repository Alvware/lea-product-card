# LEA-Product-Card

Este es un paquete de pruebas de despliegue en NPM


### Luis Alvarez

## Ejemplo

```
import {} from 'lea-product-card';
```

```
 <ProductCard
        product={product}
        initialValues={{
            count: 4,
            maxCount: 15,
        }}
    >
        {(args) => (<>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>)}
    </ProductCard>
```
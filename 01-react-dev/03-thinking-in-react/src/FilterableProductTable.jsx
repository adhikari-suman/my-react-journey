import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";
import { useState } from "react";

export function FilterableProductTable({products}){
    const [filterText, setFilterText] = useState('fruit');
    const [inStockOnly, setInStockOnly] = useState(false);
    
    return (
    <div>
        <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
            products={products} 
            filterText={filterText} 
            inStockOnly={inStockOnly} />
    </div>
);
}
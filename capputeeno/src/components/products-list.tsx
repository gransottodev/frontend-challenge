"use client"

import { useProducts } from "@/hooks/useProdutcs"
import { ProductCard } from "./products-card";
import { styled } from "styled-components";


const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;

  margin-top: 32px;
`

export function ProductsList(){

  const { data } = useProducts()
  console.log(data);
  return(
    <ListContainer>
      {data?.map(product => 
        <ProductCard 
          key={product.id}
          title={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        />
      )}
    </ListContainer>
  )
}
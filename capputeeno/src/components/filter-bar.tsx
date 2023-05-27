"use client"

import { styled } from 'styled-components'
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from './filter-by-priority';

interface FilterProps {

}

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`

export function FilterBar(props : FilterProps){
  return(
    <Container>
      <FilterByType/>
      <FilterByPriority/>
    </Container>
  )
}
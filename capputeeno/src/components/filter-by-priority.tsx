import { styled } from "styled-components"
import { ArrowIcon } from "./icons/arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-types"

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 999;

  button{
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    border: none;
    background: transparent;
    cursor: pointer;

    display: flex;
    align-items: center;
    text-align: center;
    color: var(--text-dark);

    svg{
      margin-left: 16px;
    }
  }
`

const PriorityFilter = styled.ul`
  position: absolute;
  width: 176px;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  padding: 12px 16px;
  list-style: none;
  top: 100%;

  li{
    color: var(--text-dark);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`

export function FilterByPriority(props: FilterByPriorityProps){
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  
  const handlePriority = (value : PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }


  return(
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon/>
      </button>
      {isOpen && 
        <PriorityFilter>
          <li onClick={() => handlePriority(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handlePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
          <li onClick={() => handlePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
          <li onClick={() => handlePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
        </PriorityFilter>
      }
    </FilterContainer>
  )
}
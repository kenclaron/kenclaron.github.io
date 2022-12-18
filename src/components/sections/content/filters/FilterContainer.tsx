import React from "react";

import { FilterItem } from "./FilterItem";
import styled from "@emotion/styled";
import RepositoriesSettings from "content/repositories.json";

import { FieldSet } from "components/atoms/FieldSet";
import { Stack } from "components/atoms/Stack";

type FilterContainerProps = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export function FilterContainer({ filter, setFilter }: FilterContainerProps) {
  const [scrolling, setScrolling] = React.useState<number>(0);
  const filters = RepositoriesSettings.filters;

  const onChangeFilter = (value: string) => {
    if (scrolling) return;

    setFilter(value);
    handleClick(`item-${filters.findIndex((filter) => filter.name === value)}`);
  };

  return (
    <Container id="projects-tabs" role="tabpanel">
      <FieldSet
        className="fieldset-filter"
        hide={true}
        legend="Filter by"
        name="filter"
      >
        {filters.map((item, index) => (
          <FilterItem
            checked={item.name === filter}
            itemId={index}
            key={index}
            onChange={onChangeFilter}
            setScrolling={setScrolling}
            value={item.name}
          >
            {item.name}
          </FilterItem>
        ))}
      </FieldSet>
    </Container>
  );
}

export default FilterContainer;

export const Container = styled(Stack)`
  max-width: 100% !important;
  width: 100% !important;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;

  & input:active {
    background-color: red;
  }
`;

const handleClick = (id: string) => {
  const parent = document.getElementById(id)?.parentElement;
  const x = parent?.offsetLeft;
  const container = document.getElementsByClassName(
    "fieldset-filter"
  )[0] as HTMLDivElement;

  if (container && x) {
    container.style.scrollBehavior = "smooth";
    container.scrollLeft = x - 64;
  }
};

import styled from "styled-components";

export const SearchInput = styled.input`
  color: ${(props) => `black`};
  width: 100%;
  height: 100%;
  border: 0px;
  font-size: 1em;
  background: url(search.svg)  no-repeat scroll 7px 0px;
  padding-left: 2.5rem;
  /* caret-color: transparent; */
  &:focus {
    outline: none;
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: searchfield-cancel-button;
  }
  &::after {
    background: url(search.svg) no-repeat scroll 7px 0px;
    content: '';
  }
`;

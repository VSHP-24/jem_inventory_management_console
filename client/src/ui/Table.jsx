import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-700);
  align-self: center;
  justify-self: center;

  font-size: 1.4rem;
  background-color: var(--color-gold-200);
  border-radius: 7px;
  overflow: hidden;
  width: 100%;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  /* column-gap: 1.2rem; */
  transition: none;
  align-items: center;
  padding: 0.5rem 1.2rem;
`;

const StyledHeader = styled(CommonRow)`
  /* padding: 0.75rem 1.6rem; */

  background-color: var(--color-gold-400);
  border-bottom: 1px solid var(--color-grey-700);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-800);
`;

const StyledRow = styled(CommonRow)`
  /* padding: 1.2rem 2.4rem; */
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-600);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}
function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;

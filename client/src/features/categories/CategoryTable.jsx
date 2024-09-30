import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CategoryRow from "./CategoryRow";
import Button from "../../ui/Button";

import { useGetCategories } from "./useGetCategories";

const StyledButton = styled(Button)`
  width: 15rem;
`;

function CategoryTable() {
  const { isPending, categories } = useGetCategories();

  function handleClick() {
    console.log(categories.filter((category) => category.isDeleted));
  }

  if (isPending) return <Spinner />;

  return (
    <>
      <Table columns=".5fr 1fr  .5fr">
        <Table.Header>
          <div>Sl No.</div>
          <div>Name</div>
        </Table.Header>

        <Table.Body
          data={categories.filter((category) => !category.isDeleted)}
          render={(category, i) => (
            <CategoryRow
              category={category}
              index={i}
              key={category.id}
              id={category.id}
            />
          )}
        />
      </Table>
      <StyledButton size="medium" variation="danger" onClick={handleClick}>
        Deleted Items
      </StyledButton>
    </>
  );
}

export default CategoryTable;

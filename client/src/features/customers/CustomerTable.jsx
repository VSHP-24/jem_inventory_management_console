import { useSearchParams } from "react-router-dom";
import { useGetCustomers } from "./useGetCustomers";
import Table from "../../ui/Table";
import CustomerRow from "./CustomerRow";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function CustomersTable() {
  const { isPending, customers } = useGetCustomers();
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");

  let sortedCustomers;
  let filterDeletedCustomers = [];
  let filterAvailableCustomers = [];

  if (!isPending) {
    // SORT
    sortedCustomers = customers.sort((a, b) => {
      if (direction === "asc") {
        if (
          a.user[field].toUpperCase() >
          b.user[field].toUpperCase().toUpperCase()
        )
          return 1;

        if (b.user[field].toUpperCase() > a.user[field].toUpperCase())
          return -1;
      }
      if (direction === "desc") {
        if (a.user[field].toUpperCase() > b.user[field].toUpperCase())
          return -1;
        if (b.user[field].toUpperCase() > a.user[field].toUpperCase()) return 1;
      }
      return null;
    });

    // Filter Deleted Customers
    filterDeletedCustomers = sortedCustomers.filter(
      (customer) => !customer.user.active
    );
    // Filter Available Customers
    filterAvailableCustomers = sortedCustomers.filter(
      (customer) => customer.user.active
    );
  }

  function DeletedCustomers() {
    return (
      <Table
        columns={".5fr 1.5fr 2fr .5fr"}
        modalWindowedTable={true}
        menuListRequired={false}
      >
        <Table.Header>
          <div>Sl No.</div>
          <div>Name</div>
          <div>Email</div>
        </Table.Header>
        <Table.Body
          data={filterDeletedCustomers}
          render={(customer, i) => (
            <CustomerRow
              customer={customer}
              index={i}
              key={customer.id}
              id={customer.id}
              deletedTable={true}
            />
          )}
        />
      </Table>
    );
  }

  if (isPending) return <Spinner />;

  return (
    <Table
      deletedTableContent={<DeletedCustomers />}
      columns={".5fr 1fr 1fr 1fr.5fr"}
    >
      <Table.Header>
        <div>Sl No.</div>
        <div>Name</div>
        <div>Email</div>
        <div>Phone Number</div>
      </Table.Header>

      <Table.Body
        data={filterAvailableCustomers}
        render={(customer, i) => (
          <CustomerRow
            customer={customer}
            index={i}
            key={customer.id}
            id={customer.id}
          />
        )}
      />

      <Table.Footer>
        <Pagination count={filterAvailableCustomers.length} />
      </Table.Footer>
    </Table>
  );
}

export default CustomersTable;

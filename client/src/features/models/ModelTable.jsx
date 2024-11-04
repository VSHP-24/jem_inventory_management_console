import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ModelRow from "./ModelRow";

import { useGetModels } from "./useGetModels";

function ModelTable() {
  const { isPending, models } = useGetModels();
  const [searchParams] = useSearchParams();

  let filteredBrands =
    searchParams.get("brand")?.split(",") || searchParams.get("brand") || "";

  const sortBy = searchParams.get("sortBy") || "brand-asc";
  const [field, direction] = sortBy.split("-");

  let sortedModels;
  if (!isPending) {
    sortedModels = models.sort((a, b) => {
      if (direction === "asc" && field === "brand") {
        if (a[field].name.toUpperCase() > b[field].name.toUpperCase()) return 1;
        if (b[field].name.toUpperCase() > a[field].name.toUpperCase())
          return -1;
      }
      if (direction === "desc" && field === "brand") {
        if (a[field].name.toUpperCase() > b[field].name.toUpperCase())
          return -1;
        if (b[field].name.toUpperCase() > a[field].name.toUpperCase()) return 1;
      }
      if (direction === "asc") {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        if (b.name.toUpperCase() > a.name.toUpperCase()) return -1;
      }
      if (direction === "desc" && field !== "price") {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
        if (b.name.toUpperCase() > a.name.toUpperCase()) return 1;
      }

      return null;
    });
  }

  function DeletedModels() {
    return (
      <Table
        columns=".5fr 1fr 1fr 1fr .5fr .5fr"
        modalWindowedTable={true}
        menuListRequired={false}
      >
        <Table.Header>
          <div>Sl No.</div>
          <div>Brand</div>
          <div>Bike Model</div>
          <div>Version</div>
          <div>Year</div>
        </Table.Header>

        <Table.Body
          data={sortedModels.filter(
            (model) => model.isDeleted || model.brand.isDeleted
          )}
          render={(model, i) => (
            <ModelRow
              model={model}
              index={i}
              key={model.id}
              id={model.id}
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
      deletedTableContent={<DeletedModels />}
      columns=".5fr 1fr 1fr .75fr .5fr .5fr"
    >
      <Table.Header>
        <div>Sl No.</div>
        <div>Brand</div>
        <div>Bike Model</div>
        <div>Version</div>
        <div>Year</div>
      </Table.Header>

      <Table.Body
        data={sortedModels.filter(
          (model) =>
            !model.isDeleted &&
            !model.brand.isDeleted &&
            (filteredBrands === "" ||
              filteredBrands.includes(String(model.brand.id)))
        )}
        render={(model, i) => (
          <ModelRow model={model} index={i} key={model.id} id={model.id} />
        )}
      />
    </Table>
  );
}

export default ModelTable;

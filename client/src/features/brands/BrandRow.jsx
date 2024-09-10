import Table from "../../ui/Table";
import TableMenuButton from "../../ui/TableMenuButton";
import TableMenuList from "../../ui/TableMenuList";
import { useDeleteBrand } from "./useDeleteBrand";

function BrandRow({
  brand,
  index,
  openId,
  close,
  open,
  setPosition,
  position,
  id,
}) {
  const { name } = brand;
  const { isDeleting, deleteBrand } = useDeleteBrand();

  function handleViewDetails() {
    console.log(`handleViewDetails in BrandTable`);
    close();
  }
  function handleEdit() {
    console.log(`handleEdit in BrandTable`);
    close();
  }
  function handleDelete() {
    deleteBrand(id);
    close();
  }

  return (
    <Table.Row>
      <div>
        {(index <= 8 && `0${index + 1}`) ||
          (index === 9 && `${index + 1}`) ||
          index + 1}
      </div>
      <div>{name}</div>

      <TableMenuButton
        id={id}
        openId={openId}
        close={close}
        open={open}
        setPosition={setPosition}
      />
      {openId === id && (
        <TableMenuList
          id={id}
          openId={openId}
          position={position}
          onHandleViewDetails={handleViewDetails}
          onHandleEdit={handleEdit}
          onHandleDelete={handleDelete}
          isDeleting={isDeleting}
        />
      )}
    </Table.Row>
  );
}

export default BrandRow;

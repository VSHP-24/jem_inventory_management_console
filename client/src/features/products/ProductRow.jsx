import Table from "../../ui/Table";
import ProductDetailPage from "./ProductDetailPage";
import ProductForm from "./ProductForm";
import RestoreButton from "../../ui/RestoreButton";

import { useDeleteProduct } from "./useDeleteProduct";
import { useEditProduct } from "./useEditProduct";
import toast from "react-hot-toast";
import styled, { css } from "styled-components";
import { device } from "../../utils/devices";

const columnType = {
  productDetails: css`
    @media ${device.laptopL} {
      grid-column: 3;
    }
    @media ${device.mobileM} {
      grid-column: 3;
    }
  `,

  heading: css`
    font-weight: 600;
    display: none;

    @media ${device.laptopL} {
      grid-column: 2;
      display: block;
    }
  `,
};

const StyledColumnLaptopL = styled.div`
  ${(props) => columnType[props.type]}
`;

function ProductRow({ product, index, id, deletedTable }) {
  const { name, brand, model, category, subCategory, price } = product;
  const { isDeleting, deleteProduct } = useDeleteProduct();
  const { editProduct } = useEditProduct();

  function handleRestoreButtonClick() {
    if (!product.isDeleted) {
      if (product.brand.isDeleted)
        return toast.error(
          `${product.brand.name} brand is deleted. Restore Brand first !`
        );
      if (product.model.isDeleted)
        return toast.error(
          `${product.model.name} bike model is deleted. Restore Bike Model first !`
        );
      if (product.category.isDeleted)
        return toast.error(
          `${product.category.name} category is deleted. Restore Category first !`
        );
      if (product.subCategory.isDeleted)
        return toast.error(
          `${product.subCategory.name} subCategory is deleted. Restore SubCategory first !`
        );
      if (product.brand.isDeleted)
        return toast.error(
          `${product.brand.name} brand is deleted. Restore Brand first !`
        );
    }
    editProduct({ ...product, isDeleted: false });
  }

  return (
    <Table.Row
      id={id}
      isDeleting={isDeleting}
      contentType="Product"
      detailPageContent={<ProductDetailPage product={product} />}
      editFormContent={<ProductForm productToEdit={product} />}
      deleteContentFrom={deleteProduct}
    >
      <div>
        {(index <= 8 && `0${index + 1}`) ||
          (index === 9 && `${index + 1}`) ||
          index + 1}
      </div>

      {!deletedTable && (
        <>
          <StyledColumnLaptopL as="header" type="heading">
            Brand
          </StyledColumnLaptopL>
          <StyledColumnLaptopL type="productDetails">
            {brand.name}
          </StyledColumnLaptopL>

          <StyledColumnLaptopL as="header" type="heading">
            Model
          </StyledColumnLaptopL>
          <StyledColumnLaptopL type="productDetails">
            {model.name}
          </StyledColumnLaptopL>

          <StyledColumnLaptopL as="header" type="heading">
            Category
          </StyledColumnLaptopL>
          <StyledColumnLaptopL type="productDetails">
            {category.name}
          </StyledColumnLaptopL>

          <StyledColumnLaptopL as="header" type="heading">
            SubCategory
          </StyledColumnLaptopL>
          <StyledColumnLaptopL type="productDetails">
            {subCategory.name}
          </StyledColumnLaptopL>

          <StyledColumnLaptopL as="header" type="heading">
            Price
          </StyledColumnLaptopL>
          <StyledColumnLaptopL type="productDetails">
            ₹ {price}
          </StyledColumnLaptopL>
        </>
      )}

      {deletedTable && (
        <>
          <div>{name}</div>
          <RestoreButton
            onHandleRestoreButtonClick={handleRestoreButtonClick}
          />
        </>
      )}
    </Table.Row>
  );
}

export default ProductRow;

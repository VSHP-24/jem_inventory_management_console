import styled, { css } from "styled-components";
import RestoreButton from "../../ui/RestoreButton";
import Table from "../../ui/Table";
import CreateNewStaffForm from "../authentication/CreateNewStaffForm";
import { useDeleteUser } from "./useDeleteUser";
import { useEditUser } from "./useEditUser";
import UserDetailPage from "./UserDetailPage";
import { device } from "../../utils/devices";

const columnType = {
  userDetails: css`
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

function UserRow({ user, index, id, deletedTable }) {
  const { name, email, role } = user;
  const { isDeleting, deleteUser } = useDeleteUser();

  const { editUser } = useEditUser();

  function handleRestoreButtonClick() {
    editUser({ ...user, active: true });
  }

  return (
    <Table.Row
      id={id}
      isDeleting={isDeleting}
      contentType="User"
      detailPageContent={<UserDetailPage user={user} />}
      editFormContent={<CreateNewStaffForm userToEdit={user} />}
      deleteContentFrom={deleteUser}
    >
      <div>
        {(index <= 8 && `0${index + 1}`) ||
          (index === 9 && `${index + 1}`) ||
          index + 1}
      </div>
      {!deletedTable && (
        <>
          <StyledColumnLaptopL as="header" type="heading">
            Name
          </StyledColumnLaptopL>
          <StyledColumnLaptopL type="userDetails">{name}</StyledColumnLaptopL>

          <StyledColumnLaptopL as="header" type="heading">
            Email
          </StyledColumnLaptopL>
          <StyledColumnLaptopL type="userDetails">{email}</StyledColumnLaptopL>

          <StyledColumnLaptopL as="header" type="heading">
            Role
          </StyledColumnLaptopL>
          <StyledColumnLaptopL type="userDetails">{role}</StyledColumnLaptopL>
        </>
      )}
      {deletedTable && (
        <>
          <div>{email}</div>

          <RestoreButton
            onHandleRestoreButtonClick={handleRestoreButtonClick}
          />
        </>
      )}
    </Table.Row>
  );
}

export default UserRow;

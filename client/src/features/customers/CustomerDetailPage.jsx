import styled from "styled-components";
import Heading from "../../ui/Heading";
import { formatDate, formatStatus } from "../../utils/helpers";
import Table from "../../ui/Table";

const StyledDetailPage = styled.div`
  border: 1px solid var(--color-grey-700);
  display: grid;
  grid-template-columns: 50rem 20rem;
  font-size: 1.4rem;
  padding: 2rem;
  width: 100%;
`;

const StyledCustomerDetails = styled.main``;

const StyledRow = styled.div`
  padding-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 12.5rem 1fr;
  align-items: center;
`;

const StyledHeader = styled.div`
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-800);
`;

const StyledDetails = styled.div`
  font-weight: 300;
`;

const StyledHeading = styled(Heading)`
  padding-bottom: 2rem;
`;

const StyledStatus = styled.span`
  background-color: ${(props) =>
    props.status === "order_delivered" && "#00ff00"};

  background-color: ${(props) =>
    props.status === "order_confirmed" && "#E9C111"};

  background-color: ${(props) => props.status === "order_shipped" && "#FF7440"};

  color: ${(props) => props.status === "order_placed" && "#FFFFFF"};

  background-color: ${(props) => props.status === "order_placed" && "#FF0000"};
  color: ${(props) => props.status === "order_placed" && "#FFFFFF"};

  background-color: ${(props) =>
    props.status === "cancelled" && "var(--color-grey-500)"};

  padding: 0 0.5rem;
  font-weight: 600;
  border-radius: 0.4rem;
  justify-self: center;
`;

function CustomerDetailPage({ customer }) {
  const {
    user,
    shippingAddress,
    shippingCity,
    shippingState,
    shippingPostCode,
    shippingCountry,
    billingAddress,
    billingCity,
    billingState,
    billingPostCode,
    billingCountry,
    phoneNumber,
    orderHistory,
  } = customer;

  return (
    <StyledDetailPage>
      <StyledCustomerDetails>
        <StyledHeading as="h2">CUSTOMER DETAILS</StyledHeading>

        <StyledRow>
          <StyledHeader>Name</StyledHeader>
          <StyledDetails>{user.name ? user.name : "--- NA ---"}</StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Email</StyledHeader>
          <StyledDetails>
            {user.email ? user.email : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Shipping Address</StyledHeader>
          <StyledDetails>
            {shippingAddress ? shippingAddress : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Shipping City</StyledHeader>
          <StyledDetails>
            {shippingCity ? shippingCity : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Shipping State</StyledHeader>
          <StyledDetails>
            {shippingState ? shippingState : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Shipping PostCode</StyledHeader>
          <StyledDetails>
            {shippingPostCode ? shippingPostCode : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Shipping Country</StyledHeader>
          <StyledDetails>
            {shippingCountry ? shippingCountry : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Billing Address</StyledHeader>
          <StyledDetails>
            {billingAddress ? billingAddress : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Billing City</StyledHeader>
          <StyledDetails>
            {billingCity ? billingCity : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Billing State</StyledHeader>
          <StyledDetails>
            {billingState ? billingState : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Billing PostCode</StyledHeader>
          <StyledDetails>
            {billingPostCode ? billingPostCode : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Billing Country</StyledHeader>
          <StyledDetails>
            {billingCountry ? billingCountry : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Phone Number</StyledHeader>
          <StyledDetails>
            {phoneNumber ? phoneNumber : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Password Modified On</StyledHeader>
          <StyledDetails>
            {user.passwordChagedAt
              ? formatDate(user.passwordChagedAt)
              : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Order History</StyledHeader>
          <StyledDetails>
            <Table
              columns="17.5rem 5rem 7.5rem 7.5rem 9rem 10rem"
              menuListRequired={false}
              modalWindowedTable={true}
            >
              <Table.Header>
                <div>Order Id</div>
                <div>Cost</div>
                <div>Payment Method</div>
                <div>Payment Status</div>
                <div>Order Status</div>
                <div>Ordered On</div>
              </Table.Header>
              <Table.Body
                data={orderHistory}
                render={(order) => (
                  <Table.Row
                    columns="17.5rem 5rem 7.5rem 7.5rem 9rem 10rem"
                    key={order.id}
                  >
                    <div>{order.id}</div>
                    <div>{order.cost}</div>
                    <div>{formatStatus(order.paymentMethod)}</div>
                    <div>{formatStatus(order.paymentStatus)}</div>
                    <StyledStatus status={order.orderStatus}>
                      {formatStatus(order.orderStatus)}
                    </StyledStatus>
                    <div>{formatDate(order.createdAt)}</div>
                  </Table.Row>
                )}
              />
            </Table>
          </StyledDetails>
        </StyledRow>
      </StyledCustomerDetails>
    </StyledDetailPage>
  );
}

export default CustomerDetailPage;

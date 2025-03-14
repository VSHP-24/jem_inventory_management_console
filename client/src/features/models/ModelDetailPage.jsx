import styled from "styled-components";

import Heading from "../../ui/Heading";

import { device } from "../../utils/devices";

const StyledDetailPage = styled.div`
  border: 1px solid var(--color-grey-700);
  font-size: 1.4rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const StyledModelDetails = styled.main``;

const StyledModelImages = styled.aside``;

const StyledRow = styled.div`
  padding-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${device.laptopL} {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
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

function ModelDetailPage({ model }) {
  const { name, brand, version, year, description, bikeImage } = model;

  return (
    <StyledDetailPage>
      <StyledModelDetails>
        <StyledHeading as="h2">BIKE MODEL DETAILS</StyledHeading>

        <StyledRow>
          <StyledHeader>Name</StyledHeader>
          <StyledDetails>{name ? name : "--- NA ---"}</StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Brand</StyledHeader>
          <StyledDetails>
            {brand.name ? brand.name : "--- NA ---"}
          </StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Version</StyledHeader>
          <StyledDetails>{version ? version : "--- NA ---"}</StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Year</StyledHeader>
          <StyledDetails>{year ? year : "--- NA ---"}</StyledDetails>
        </StyledRow>

        <StyledRow>
          <StyledHeader>Description</StyledHeader>
          <StyledDetails>
            {description ? description : "--- NA ---"}
          </StyledDetails>
        </StyledRow>
      </StyledModelDetails>

      <StyledModelImages>
        <img src={bikeImage} alt={name} />
      </StyledModelImages>
    </StyledDetailPage>
  );
}

export default ModelDetailPage;

import React from 'react';
import { AppBar, Card, Container, Typography, styled } from '@material-ui/core';
import UrlForm from './UrlForm';

function LandingPage() {
  return (
    <>
      <AppBar position="static">
        <HeaderTypography variant="h5" color="inherit">
          Shorty
        </HeaderTypography>
      </AppBar>
      <CardContainer>
        <FormCard raised>
          <Container>
            <UrlForm />
          </Container>
        </FormCard>
      </CardContainer>
    </>
  );
}

const CardContainer = styled(Container)({
  marginTop: '2em',
  display: 'flex',
  justifyContent: 'center'
});

const FormCard = styled(Card)({
  padding: '40px',
  margin: '100px',
  width: '50em',
  height: '4.5em',
  backgroundColor: '#3e54a3',
  color: '#FFFFFF',
  borderRadius: '.5em'
});

const HeaderTypography = styled(Typography)({
  padding: '.7em'
});

export default LandingPage;

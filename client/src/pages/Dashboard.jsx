import React, {useEffect} from 'react'
import styled from "styled-components";
import DashboardContainer from '../components/Main/DashboardContainer';
import SideNav from '../components/Main/SideNav';
import TopNav from '../components/Main//TopNav';

function Dashboard() {

  useEffect(() => {
    document.title = "Dashboard - Crud-App";
  });


  return (
      <Container>
      <main className='main row'>
        <SideNav/>
        <DashboardContainer/>
      </main>
    </Container>
  )
}

const Container = styled.div`
overflow: hidden;
main {
}
`;

export default Dashboard
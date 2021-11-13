import React from 'react';
import CreateListingForm from '../screens/CreateListingScreen';
import EditButton from '../components/EditButton';
import LogoutButton from '../components/logoutButton';
import { Link } from 'react-router-dom';
import myFetch from '../components/fetcher';

const HostedListingsScreen = () => {
  const testing = () => {
    myFetch('GET', 'listings', null)
      .then((data) => {
        data.listings.map(listing => (
          console.log(listing)
        ))
      })
  }
  return (
    <div>
      HostedListingsScreen
      <CreateListingForm></CreateListingForm>
      <EditButton id={354395729}></EditButton>
      {localStorage.getItem('token') !== 'null'
        ? <>
            <LogoutButton></LogoutButton>
            <Link to="/">Listings</Link>
            <Link to="/hostedListings">MyListings</Link>
          </>
        : <>
            {'Not LoggedIn'}
            {testing()}
          </>
      }
    </div>
  );
}

export default HostedListingsScreen;

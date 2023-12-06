import { Routes, Route } from "react-router";
import HomePage from "../Pages/HomePage";
import MarketplacePage from "../Pages/MarketplacePage";
import AccountsPage from "../Pages/AccountsPage";
import ArtistPage from "../Pages/ArtistPage";
import NftPage from "../Pages/NftPage";
import RankingPage from "../Pages/RankingPage";
import Wallets from "../Pages/Wallets";
//
// layout import
import Layout from "../Layouts/Layout";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/marketplace"
        element={
          <Layout>
            <MarketplacePage />
          </Layout>
        }
      />
      <Route
        path="/accounts"
        element={
          <Layout>
            <AccountsPage />
          </Layout>
        }
      />
      <Route
        path="/artists"
        element={
          <Layout>
            <ArtistPage />
          </Layout>
        }
      />
      <Route
        path="/nft"
        element={
          <Layout>
            <NftPage />
          </Layout>
        }
      />
      <Route
        path="/ranking"
        element={
          <Layout>
            <RankingPage />
          </Layout>
        }
      />
      <Route
        path="/wallets"
        element={
          <Layout>
            <Wallets />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Router;

import { Routes, Route } from "react-router";
import HomePage from "../Pages/HomePage";
import MarketplacePage from "../Pages/MarketplacePage";
import AccountsPage from "../Pages/AccountsPage";
import ArtistPage from "../Pages/ArtistPage";
import NftPage from "../Pages/NftPage";
import RankingPage from "../Pages/RankingPage";
import Wallets from "../Pages/Wallets";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/accounts" element={<AccountsPage />} />
      <Route path="/artists" element={<ArtistPage />} />
      <Route path="/nft" element={<NftPage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/wallets" element={<Wallets />} />
    </Routes>
  );
};

export default Router;

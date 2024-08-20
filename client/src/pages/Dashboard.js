import React, { useEffect, useState } from "react";
import ContentList from "../components/Content/ContentList";
import ProposalList from "../components/Governance/ProposalList";
import CreateListing from "../components/Marketplace/CreateListing";
import Listing from "../components/Marketplace/Listing";
import TransactionList from "../components/Transactions/TransactionList";
import { useAuth } from "../hooks/useAuth";
import { useContent } from "../hooks/useContent";
import { useGovernance } from "../hooks/useGovernance";
import { useMarketplace } from "../hooks/useMarketplace";
import { useTransactions } from "../hooks/useTransactions";

const Dashboard = () => {
  const { user } = useAuth();
  const { contentItems, fetchAllContent } = useContent();
  const { proposals, fetchAllProposals } = useGovernance();
  const { listings, fetchAllListings } = useMarketplace();
  const { transactions, fetchUserTransactions } = useTransactions();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAllContent();
        await fetchAllProposals();
        await fetchAllListings();
        await fetchUserTransactions(user.id);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [
    user,
    fetchAllContent,
    fetchAllProposals,
    fetchAllListings,
    fetchUserTransactions,
  ]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Content</h2>
        {contentItems.length > 0 ? (
          <ContentList contentItems={contentItems} />
        ) : (
          <p>No content available.</p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Governance Proposals</h2>
        {proposals.length > 0 ? (
          <ProposalList proposals={proposals} />
        ) : (
          <p>No proposals available.</p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Marketplace Listings</h2>
        <CreateListing />
        {listings.length > 0 ? (
          listings.map((listing) => (
            <Listing key={listing.tokenId} listing={listing} />
          ))
        ) : (
          <p>No listings available.</p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Transactions</h2>
        {transactions.length > 0 ? (
          <TransactionList transactions={transactions} />
        ) : (
          <p>No transactions available.</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;

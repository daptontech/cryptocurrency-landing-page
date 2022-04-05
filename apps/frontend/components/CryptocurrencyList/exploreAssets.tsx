const ExploreAssets = () => {
  const options = [
    {
      name: "decentraland",
      logo: "https://cryptologos.cc/logos/decentraland-mana-logo.png?v=022"
    },
    {
      name: "avalanche",
      logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022"
    },
    {
      name: "bitcoin-cash",
      logo: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=022"
    },
    {
      name: "shiba-inu",
      logo: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=022"
    },
    {
      name: "kucoin-token",
      logo: "https://cryptologos.cc/logos/kucoin-token-kcs-logo.png?v=022"
    }
  ];

  return (
    <div className="p-6 md:flex items-center space-x-4">
      <div className="mt-3 flex -space-x-2 overflow-hidden">
        {options.map(token =>
          <img key={token.name} className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
               src={token.logo}
               alt={token.name}/>
        )}
      </div>
      <div className="my-6">
        <div className="font-medium text-black">Explore multiple other assets</div>
        <p className="text-slate-500">New assets are specially selected and added regularly.</p>
      </div>
    </div>
  );
}

export default ExploreAssets

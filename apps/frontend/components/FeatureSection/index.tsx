const FeatureSection = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold">Buy & Sell Digital<br/> Assets in the Mena Region</h1>
          <p className="py-6">CoinMEAN is the easiest, safest, ad fastest way to buy and sell
            cryptocurrency.<br/> Our goal is to provide direct and regulated access to the digital
            asset
            world.
          </p>
          <div className="relative py-6">
            <input type="text" placeholder="Email address"
                   className="input input-bordered w-full md:w-9/12 h-16 rounded-full"/>
            <div className="absolute top-8 right-2 md:right-[6.2rem]">
              <button className="btn btn-primary">Register now</button>
            </div>
          </div>
          <div className="badge badge-lg bg-white text-neutral text-sm mr-5 border-0">
            Licensed by Bank of Bahrain
          </div>
          <div className="badge badge-lg bg-white text-neutral text-sm border-0">
            No withdrawal limits
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeatureSection

import PageLink from "../components/PageLink";

function Home() {
  return (
    <section className={`flex h-screen items-center justify-center bg-home`}>
      <div className="text-center">
        <h1 className="text-xl">STATS.COM</h1>
        <h2 className="mt-2 text-xl">
          Optimise your webpage by getting detailed information about CSS
        </h2>
        <PageLink text="Get Started" to="/category/overview" size="large" />
      </div>
    </section>
  );
}

export default Home;

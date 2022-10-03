import PageLink from "../components/PageLink";

function Error() {
  return (
    <div className="mx-4 flex h-screen flex-col items-center justify-center">
      <div>
        <h2 className="text-8xl">404</h2>
        <h3 className="pt-4 text-2xl">Oops! This page could not be found</h3>
        <p className="pt-2">
          Sorry but the page you are looking for does not exist, have been
          removed, name changed or is temporarily unavailable
        </p>
        <PageLink text="Go To Homepage" to="/" size="regular" />
      </div>
    </div>
  );
}

export default Error;

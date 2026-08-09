import PageMeta from '../components/layout/PageMeta';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-8xl text-midway-red">404</p>
        <h1 className="mt-4 font-display text-3xl text-midway-navy">Looks like this ride is closed</h1>
        <p className="mt-3 max-w-md text-midway-navy/70">
          We couldn't find the page you were looking for. Let's get you back to the fun.
        </p>
        <Button to="/" variant="primary" className="mt-8">
          Back to Home
        </Button>
      </div>
    </>
  );
}

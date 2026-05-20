import Button from "@/components/ui/Button";

export default function BikeNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-primary px-6 pt-28 text-center">
      <h1 className="text-4xl font-bold text-white">Bike Not Found</h1>
      <p className="mt-4 text-gray-text">
        This model may no longer be available. Browse our full collection.
      </p>
      <div className="mt-8">
        <Button href="/collection">View Collection</Button>
      </div>
    </div>
  );
}

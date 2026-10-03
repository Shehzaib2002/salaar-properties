export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-32 px-6">
      <div className="container mx-auto max-w-[1400px]">
        <h1 className="text-4xl md:text-5xl font-light text-brand mb-4">Properties</h1>
        <p className="text-muted max-w-2xl mb-12">Browse available units across our portfolio.</p>
        <div className="flex items-center justify-center h-[40vh] border border-dashed border-border bg-surface">
          <p className="text-muted font-light">Inventory system is currently being updated. Please check back soon or contact our advisors.</p>
        </div>
      </div>
    </div>
  );
}

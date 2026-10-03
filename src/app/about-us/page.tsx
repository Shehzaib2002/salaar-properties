export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-32 px-6">
      <div className="container mx-auto max-w-[1000px]">
        <h1 className="text-5xl font-light text-brand mb-8 text-center">About Salaar Properties</h1>
        <div className="w-16 h-px bg-brand mx-auto mb-12"></div>
        <div className="prose prose-lg mx-auto text-muted font-light leading-relaxed">
          <p className="mb-6">
            Salaar Properties is a premier real estate advisory and management firm based in Lahore, Pakistan. We specialize in curating the finest luxury developments and high-yield investment properties for our discerning clientele.
          </p>
          <p className="mb-6">
            With a strict commitment to architectural excellence and legal transparency, every project we represent undergoes rigorous vetting to ensure it meets the highest standards of the Lahore Development Authority (LDA) and Defence Housing Authority (DHA).
          </p>
          <p>
            Our dedicated team of professionals provides end-to-end services, from initial investment consultation to final handover, ensuring a seamless and secure real estate experience.
          </p>
        </div>
      </div>
    </div>
  );
}

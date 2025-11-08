import Hero from '@/components/Hero';
import TransformationJourney from '@/components/TransformationJourney';
import NextPageButton from '@/components/NextPageButton';

export default function Home() {
  return (
    <>
      <Hero />
      <TransformationJourney />
      
      {/* Additional CTA Section */}
      <section className="py-20 bg-gradient-to-b from-acc-gray-800/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Contact Center?
          </h2>
          <p className="text-lg text-acc-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how Google CES Next with Agentic AI can revolutionize your customer experience operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/agentic/"
              className="btn-primary inline-flex items-center justify-center"
            >
              Explore How it Works
            </a>
            <a
              href="/roadmap/"
              className="px-6 py-3 bg-acc-gray-800 hover:bg-acc-gray-700 text-white rounded-lg font-semibold transition-colors border border-acc-gray-700 inline-flex items-center justify-center"
            >
              View Roadmap
            </a>
          </div>
          
          <NextPageButton href="/approach/" label="Approach" />
        </div>
      </section>
    </>
  );
}



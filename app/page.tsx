import Hero from '@/components/Hero';
import TransformationJourney from '@/components/TransformationJourney';
import NextPageButton from '@/components/NextPageButton';

export default function Home() {
  return (
    <>
      <Hero />
      <TransformationJourney />
      
      {/* Navigation to Next Section */}
      <section className="py-20 bg-gradient-to-b from-acc-gray-800/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <NextPageButton href="/approach/" label="Approach" />
        </div>
      </section>
    </>
  );
}



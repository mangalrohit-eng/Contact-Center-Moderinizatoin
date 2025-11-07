import { Building2, Shield, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-acc-purple">This Initiative</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            Accenture partners with Google Cloud to modernize enterprise contact centers at scale.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-acc-gray-400 mb-4">
              Traditional intent-based conversational AI systems like Dialogflow struggle with:
            </p>
            <ul className="space-y-2 text-acc-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-acc-purple">•</span>
                <span>High fallback rates due to rigid intent matching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-acc-purple">•</span>
                <span>Manual maintenance of hundreds of intents and entities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-acc-purple">•</span>
                <span>Limited ability to handle multi-turn, complex scenarios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-acc-purple">•</span>
                <span>Lack of proactive guidance and clarifying questions</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-acc-gray-400 mb-4">
              Google CES Next with Agentic AI delivers:
            </p>
            <ul className="space-y-2 text-acc-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-acc-purple">•</span>
                <span>Goal-oriented flows that adapt to customer needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-acc-purple">•</span>
                <span>Specialized agents with tool access and domain expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-acc-purple">•</span>
                <span>Intelligent orchestration with guardrails and policies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-acc-purple">•</span>
                <span>Real-time telemetry and continuous optimization</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center">
            <Building2 className="w-10 h-10 text-acc-purple mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Google Cloud Partner</h3>
            <p className="text-sm text-acc-gray-400">Premier partnership with deep CES Next expertise</p>
          </div>

          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center">
            <Shield className="w-10 h-10 text-acc-purple mx-auto mb-3" />
            <h3 className="font-semibold mb-2">SOC 2 & ISO Certified</h3>
            <p className="text-sm text-acc-gray-400">Enterprise-grade security and compliance</p>
          </div>

          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center">
            <Users className="w-10 h-10 text-acc-purple mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Telecom Expertise</h3>
            <p className="text-sm text-acc-gray-400">Decades of experience in carrier operations</p>
          </div>

          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center">
            <Award className="w-10 h-10 text-acc-purple mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Responsible AI Leaders</h3>
            <p className="text-sm text-acc-gray-400">Committed to ethical AI development</p>
          </div>
        </div>

        {/* Team */}
        <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
          <p className="text-acc-gray-400 text-center max-w-3xl mx-auto">
            This initiative is led by Accenture's Cloud &amp; AI practice in partnership with Google Cloud's
            Conversational AI team. Our cross-functional experts bring deep domain knowledge in telecommunications,
            conversational design, machine learning engineering, and responsible AI governance.
          </p>
        </div>
      </div>
    </div>
  );
}



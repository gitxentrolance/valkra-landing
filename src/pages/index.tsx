import React, { useState } from 'react';

export default function ValkraLanding() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/80 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-red-600 to-red-700 grid place-items-center shadow-lg shadow-red-900/40">
              <span className="text-xl leading-none">ᚢ</span>
            </div>
            <span className="text-xl font-bold tracking-tight">valkra</span>
            <span className="text-[10px] text-neutral-500 border border-neutral-800 rounded px-1.5 py-0.5">PATENT PENDING</span>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <a href="#features" className="text-neutral-400 hover:text-white transition">Features</a>
            <a href="#technology" className="text-neutral-400 hover:text-white transition">Technology</a>
            <a href="#security" className="text-neutral-400 hover:text-white transition">Security</a>
            <a href="#coverage" className="text-neutral-400 hover:text-white transition">Coverage</a>
            <a href="#pricing" className="text-neutral-400 hover:text-white transition">Pricing</a>
            <a href="#waitlist" className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold hover:bg-red-500 transition">Get Early Access</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-neutral-400">Production Ready • 95%+ Test Coverage • Quantum-Resistant</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              AI-Powered Security for <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Multi-Chain</span> Smart Contracts
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-3xl mx-auto">
              Patent-pending ensemble AI analysis across 35+ blockchains, 27+ languages, and 45 frameworks. Reduce false positives by 70% with our 8-step validation pipeline.
            </p>
            <form id="waitlist" action="https://formspree.io/f/mzzanvel" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
              <input
                type="email"
                name="email"
                required
                placeholder="your@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-600 transition"
              />
              <button type="submit" className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold hover:bg-red-500 transition shadow-lg shadow-red-600/20">
                Join Waitlist
              </button>
            </form>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>35+ Blockchains</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>27+ Languages</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>200+ Vulnerabilities</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>10-15% False Positives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-neutral-800 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">$7B+</div>
              <div className="text-xs text-neutral-500">Lost to Smart Contract Exploits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">70%</div>
              <div className="text-xs text-neutral-500">Reduction in False Positives</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">3-5x</div>
              <div className="text-xs text-neutral-500">Faster Than Manual Audits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">95%+</div>
              <div className="text-xs text-neutral-500">Test Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Step Pipeline */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">8-Step Validation Pipeline</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Patent-pending ensemble analysis that combines static, dynamic, and AI-powered techniques to achieve industry-leading accuracy</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Static Analysis", desc: "Slither, Mythril, Clippy integration", icon: "🔍" },
              { num: "02", title: "Pattern Detection", desc: "200+ vulnerability patterns", icon: "🎯" },
              { num: "03", title: "LLM Ensemble", desc: "Multi-AI cross-validation", icon: "🤖" },
              { num: "04", title: "AST Analysis", desc: "Semantic code understanding", icon: "🌳" },
              { num: "05", title: "Unit Test Gen", desc: "Automated test coverage", icon: "✅" },
              { num: "06", title: "Quality Analysis", desc: "Code metrics & complexity", icon: "📊" },
              { num: "07", title: "Fuzzing", desc: "Property-based & mutation testing", icon: "⚡" },
              { num: "08", title: "Dynamic Runtime", desc: "Transaction simulation", icon: "🔄" }
            ].map((step) => (
              <div key={step.num} className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-red-600/50 transition">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-xs text-neutral-500 font-mono mb-2">STEP {step.num}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-400">{step.desc}</p>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-600/10 text-red-500 text-xs font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-LLM Ensemble */}
      <section className="py-20 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-xs bg-red-600/10 text-red-500 border border-red-600/20 rounded-full px-3 py-1 mb-4">PATENT PENDING</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Multi-LLM Ensemble Validation</h2>
              <p className="text-neutral-400 mb-6">Traditional single-LLM analysis suffers from hallucinations and inconsistency. Our ensemble approach cross-validates across multiple AI models to achieve 70% reduction in false positives.</p>
              <div className="space-y-4">
                {[
                  { title: "Cross-Model Validation", desc: "Parallel analysis across OpenAI, Claude, Gemini, and local models" },
                  { title: "Confidence Scoring", desc: "Agreement-based confidence calculation with weighted voting" },
                  { title: "Smart Deduplication", desc: "Intelligent aggregation of similar findings across models" },
                  { title: "Adaptive Learning", desc: "Continuously improving accuracy based on validation results" }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/10 text-red-500 flex items-center justify-center text-xs font-bold">✓</div>
                    <div>
                      <div className="font-semibold mb-1">{item.title}</div>
                      <div className="text-sm text-neutral-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
              <div className="text-sm font-mono text-neutral-500 mb-4">Ensemble Results</div>
              <div className="space-y-4">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">GPT-4</span>
                    <span className="text-xs text-green-500">HIGH</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-400" style={{ width: '92%' }} />
                  </div>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Claude 3</span>
                    <span className="text-xs text-green-500">HIGH</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-400" style={{ width: '88%' }} />
                  </div>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Gemini</span>
                    <span className="text-xs text-yellow-500">MEDIUM</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400" style={{ width: '76%' }} />
                  </div>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Local Model</span>
                    <span className="text-xs text-green-500">HIGH</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-400" style={{ width: '85%' }} />
                  </div>
                </div>
                <div className="border-t border-neutral-800 pt-4 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Ensemble Confidence</span>
                    <span className="text-xl font-bold text-green-500">89%</span>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">Agreement across 4 models</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section id="security" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quantum-Resistant Security</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Zero-trust architecture with hybrid encryption combining classical and post-quantum cryptography</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-2xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-3">Multi-Tenant Isolation</h3>
              <p className="text-sm text-neutral-400 mb-4">Cryptographic data separation with per-tenant encryption keys and namespace isolation</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-500">
                  <span className="w-1 h-1 rounded-full bg-green-500" />
                  <span>AES-256-GCM encryption</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <span className="w-1 h-1 rounded-full bg-green-500" />
                  <span>Argon2 key derivation</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <span className="w-1 h-1 rounded-full bg-green-500" />
                  <span>Namespace-based storage</span>
                </div>
              </div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-2xl mb-4">🔐</div>
              <h3 className="text-lg font-semibold mb-3">Hybrid Cryptography</h3>
              <p className="text-sm text-neutral-400 mb-4">Classical + post-quantum algorithms for future-proof protection against quantum computers</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-500">
                  <span className="w-1 h-1 rounded-full bg-green-500" />
                  <span>RSA-4096 + Kyber-1024</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <span className="w-1 h-1 rounded-full bg-green-500" />
                  <span>Dilithium signatures</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <span className="w-1 h-1 rounded-full bg-green-500" />
                  <span>SHA3-256 hashing</span>
                </div>
              </div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-2xl mb-4">📝</div>
              <h3 className="text-lg font-semibold mb-3">Audit Trails</h3>
              <p className="text-sm text-neutral-400 mb-4">Tamper-proof logging of all data access with RBAC and compliance reporting</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-500">
                  <span className="w-1 h-1 rounded-full bg-green-500" />
                  <span>Immutable access logs</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <span className="w-1 h-1 rounded-full bg-green-500" />
                  <span>Role-based access control</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <span className="w-1 h-1 rounded-full bg-green-500" />
                  <span>SOC 2 / GDPR ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Chain Coverage */}
      <section id="coverage" className="py-20 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Multi-Chain Support</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">35+ blockchains, 27+ programming languages, and 45 development frameworks</p>
          </div>
          <div className="flex border-b border-neutral-800 mb-8">
            {["Blockchains", "Languages", "Frameworks"].map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 text-sm font-medium transition ${
                  activeTab === idx
                    ? "text-white border-b-2 border-red-600"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {activeTab === 0 && [
              "Ethereum", "Solana", "Polygon", "BSC", "Avalanche", "Cardano",
              "Polkadot", "Cosmos", "Near", "Tron", "Fantom", "Tezos",
              "Hedera", "ICP", "Aptos", "Sui", "Sei", "Arbitrum",
              "Optimism", "Base", "zkSync", "Starknet", "Flow", "Algorand"
            ].map((chain) => (
              <div key={chain} className="bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-center text-sm hover:border-red-600/50 transition">
                {chain}
              </div>
            ))}
            {activeTab === 1 && [
              "Solidity", "Rust", "Move", "Vyper", "Go", "Python",
              "Haskell", "Cairo", "Cadence", "Clarity", "Scilla", "Michelson",
              "TEAL", "Plutus", "FunC", "Reach", "Daml", "Pact",
              "LIGO", "JavaScript", "TypeScript", "C++", "AssemblyScript", "Motoko"
            ].map((lang) => (
              <div key={lang} className="bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-center text-sm hover:border-red-600/50 transition">
                {lang}
              </div>
            ))}
            {activeTab === 2 && [
              "Hardhat", "Truffle", "Foundry", "Anchor", "Substrate", "CosmWasm",
              "Starknet-devnet", "Protostar", "Brownie", "Embark", "DappTools", "Buidler",
              "OpenZeppelin", "Waffle", "Scaffold-ETH", "Tenderly", "Remix", "Sourcify"
            ].map((framework) => (
              <div key={framework} className="bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-center text-sm hover:border-red-600/50 transition">
                {framework}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Production-Ready Architecture</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Built with Rust for performance, security, and reliability</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-600/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Rust Backend</h3>
              <p className="text-sm text-neutral-400">Axum web framework with async workers for maximum performance</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🗄️</div>
              <h3 className="font-semibold mb-2">PostgreSQL + Redis</h3>
              <p className="text-sm text-neutral-400">Reliable data persistence with fast job queuing</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-600/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold mb-2">Distributed Workers</h3>
              <p className="text-sm text-neutral-400">Horizontal scaling with RSA-authenticated workers</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-600/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🐳</div>
              <h3 className="font-semibold mb-2">Docker Ready</h3>
              <p className="text-sm text-neutral-400">Containerized deployment with orchestration support</p>
            </div>
          </div>
          <div className="mt-12 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">95%+</div>
                <div className="text-sm text-neutral-400">Test Coverage</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">3-5x</div>
                <div className="text-sm text-neutral-400">Faster Processing</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">∞</div>
                <div className="text-sm text-neutral-400">Horizontal Scalability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built For Your Workflow</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">From individual developers to enterprise audit firms</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-semibold mb-3">Developers</h3>
              <p className="text-neutral-400 mb-4">Catch vulnerabilities before deployment with CI/CD integration</p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li>• GitHub Actions integration</li>
                <li>• Pre-commit hooks</li>
                <li>• VS Code extension</li>
                <li>• Local analysis mode</li>
              </ul>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">DeFi Protocols</h3>
              <p className="text-neutral-400 mb-4">Continuous monitoring and pre-deployment audits at scale</p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li>• Automated weekly scans</li>
                <li>• Runtime monitoring</li>
                <li>• Multi-repo support</li>
                <li>• Custom rulesets</li>
              </ul>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Audit Firms</h3>
              <p className="text-neutral-400 mb-4">Accelerate manual audits with AI-powered initial analysis</p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li>• White-label reports</li>
                <li>• Custom branding</li>
                <li>• Team collaboration</li>
                <li>• Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Start with our private alpha, scale as you grow</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
              <div className="text-sm text-neutral-500 mb-2">DEVELOPER</div>
              <div className="text-4xl font-bold mb-4">Free</div>
              <p className="text-neutral-400 text-sm mb-6">For individual developers</p>
              <button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg px-4 py-3 text-sm font-semibold transition">
                Coming Soon
              </button>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>5 audits/month</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>Basic analysis pipeline</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>Community support</span></li>
                <li className="flex items-start gap-2"><span className="text-neutral-600">✗</span><span>CI/CD integration</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 border-2 border-red-600 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                PRIVATE ALPHA
              </div>
              <div className="text-sm text-neutral-300 mb-2">PROFESSIONAL</div>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <p className="text-neutral-300 text-sm mb-6">For teams & protocols</p>
              <a href="#waitlist" className="block w-full bg-red-600 hover:bg-red-500 text-white rounded-lg px-4 py-3 text-sm font-semibold transition text-center">
                Request Access
              </a>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>Unlimited audits</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>Full 8-step pipeline</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>CI/CD integration</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>Priority support</span></li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
              <div className="text-sm text-neutral-500 mb-2">ENTERPRISE</div>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <p className="text-neutral-400 text-sm mb-6">For audit firms</p>
              <a href="mailto:yevhen@redasgard.com" className="block w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg px-4 py-3 text-sm font-semibold transition text-center">
                Contact Sales
              </a>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>Everything in Pro</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>White-label reports</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>Custom branding</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>Dedicated support</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-neutral-900/30">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What makes Valkra different from Slither or Mythril?",
                a: "While tools like Slither and Mythril focus on single-method static analysis, Valkra combines 8 different analysis techniques including multi-LLM ensemble validation, achieving 70% fewer false positives. We also support 35+ blockchains vs. just Ethereum."
              },
              {
                q: "How does the multi-LLM ensemble work?",
                a: "We run your contract through multiple AI models (GPT-4, Claude, Gemini, local models) in parallel, then cross-validate their findings. This dramatically reduces AI hallucinations and improves accuracy through consensus-based confidence scoring."
              },
              {
                q: "Is my code secure during analysis?",
                a: "Yes. We use quantum-resistant hybrid encryption (RSA-4096 + Kyber-1024), multi-tenant isolation, and zero-trust architecture. Your code is encrypted at rest and in transit, with per-tenant encryption keys."
              },
              {
                q: "What's the patent about?",
                a: "Our U.S. Provisional Patent covers the multi-LLM ensemble validation system, 8-step hybrid analysis pipeline, auto-discovery plugin architecture, and RSA-authenticated distributed worker system."
              },
              {
                q: "Can I integrate Valkra into my CI/CD pipeline?",
                a: "Yes! We provide REST API, webhooks, and plan to release GitHub Actions and GitLab CI integrations. You can automate security checks on every commit or pull request."
              },
              {
                q: "How long does an audit take?",
                a: "Typical analysis completes in 5-15 minutes depending on codebase size and complexity. Our distributed worker architecture allows horizontal scaling for faster processing."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-red-600/50 transition">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-red-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-neutral-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 border border-red-600/30 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Smart Contracts?</h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join our private alpha and be among the first to experience patent-pending AI-powered security analysis
            </p>
            <form action="https://formspree.io/f/xldwqlba" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                required
                placeholder="your@company.com"
                className="flex-1 rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-600 transition"
              />
              <button type="submit" className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold hover:bg-red-500 transition shadow-lg shadow-red-600/20">
                Request Access
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-4">
              We'll reach out from <span className="text-neutral-400">yevhen@redasgard.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-red-600 to-red-700 grid place-items-center">
                  <span className="text-lg leading-none">ᚢ</span>
                </div>
                <span className="text-lg font-bold">valkra</span>
              </div>
              <p className="text-sm text-neutral-500">AI-powered smart contract security analysis for the multi-chain future</p>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Product</div>
              <div className="space-y-2 text-sm text-neutral-500">
                <div><a href="#features" className="hover:text-white transition">Features</a></div>
                <div><a href="#security" className="hover:text-white transition">Security</a></div>
                <div><a href="#pricing" className="hover:text-white transition">Pricing</a></div>
                <div><a href="#" className="hover:text-white transition">Roadmap</a></div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Resources</div>
              <div className="space-y-2 text-sm text-neutral-500">
                <div><a href="#" className="hover:text-white transition">Documentation</a></div>
                <div><a href="#" className="hover:text-white transition">API Reference</a></div>
                <div><a href="#" className="hover:text-white transition">Blog</a></div>
                <div><a href="#" className="hover:text-white transition">Status</a></div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Company</div>
              <div className="space-y-2 text-sm text-neutral-500">
                <div><a href="#" className="hover:text-white transition">About</a></div>
                <div><a href="mailto:yevhen@redasgard.com" className="hover:text-white transition">Contact</a></div>
                <div><a href="#" className="hover:text-white transition">Privacy</a></div>
                <div><a href="#" className="hover:text-white transition">Terms</a></div>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>© 2025 Asgard Technologies LLC (DBA: Red Asgard). Patent Pending (U.S. Provisional No. 63/895,904).</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

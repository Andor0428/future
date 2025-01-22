"use client";

import { Section } from "@/components/ui/code.demo";
import { NavWrapper } from "@/components/ui/nav-wrapper";
import { motion } from "framer-motion";
import { FC } from 'react';
import { BackgroundBeamsDemo } from "@/components/ui/code.demo";
import Image from 'next/image';

const HomePage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavWrapper />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container relative mx-auto px-6 py-24"
          >
            <div className="text-center space-y-8">
              <div className="inline-block animate-pulse px-4 py-1 rounded-full text-sm bg-purple-500/10 border border-purple-500/20 text-purple-300">
                Revolutionizing Infrastructure Management
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
                End the $1T Infrastructure Maintenance Crisis
              </h1>
              <p className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-200">
                See the Invisible. Prevent the Inevitable.
              </p>
              <p className="text-xl mb-8 text-purple-100/80 max-w-2xl mx-auto">
                40% of infrastructure failures occur due to invisible problems behind walls. Our patented technology eliminates costly exploratory demolition and prevents catastrophic failures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 transition-all duration-200">
                  <span className="absolute inset-0 rounded-full bg-purple-600/30 animate-ping"></span>
                  <span className="relative">Investment Deck</span>
                </button>
                <button className="px-8 py-3 rounded-full border border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200">
                  Book Meeting
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Market Opportunity Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
          <div className="container relative mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
                Industry Challenges We Solve
              </h2>
              <p className="mt-4 text-purple-200/70 max-w-2xl mx-auto">
                Transforming how the world manages critical infrastructure
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                  <div className="text-3xl mb-4">💰</div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 mb-2">$350B</div>
                  <div className="text-lg font-semibold text-purple-100 mb-2">Hidden Costs</div>
                  <p className="text-purple-200/70">Lost annually due to hidden infrastructure failures</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                  <div className="text-3xl mb-4">🔨</div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 mb-2">73%</div>
                  <div className="text-lg font-semibold text-purple-100 mb-2">Reactive Losses</div>
                  <p className="text-purple-200/70">Of repairs require costly exploratory demolition</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                  <div className="text-3xl mb-4">🎯</div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 mb-2">89%</div>
                  <div className="text-lg font-semibold text-purple-100 mb-2">Prevention Rate</div>
                  <p className="text-purple-200/70">Of failures prevented with predictive maintenance</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                  <div className="text-3xl mb-4">📈</div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 mb-2">5.2x</div>
                  <div className="text-lg font-semibold text-purple-100 mb-2">ROI Impact</div>
                  <p className="text-purple-200/70">Average return on investment in first year</p>
                </div>
              </motion.div>
            </div>

            {/* Problem Solution Section */}
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                  <div className="h-12 w-12 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-100">Blind Maintenance</h3>
                  <p className="text-purple-200/70">
                    Traditional methods rely on guesswork and destructive inspection, leading to unnecessary costs and delays
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                  <div className="h-12 w-12 mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-100">Reactive Repairs</h3>
                  <p className="text-purple-200/70">
                    Current systems wait for failures to occur, resulting in emergency repairs that cost 3-5x more than planned maintenance
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                  <div className="h-12 w-12 mb-4 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-100">Data Blindness</h3>
                  <p className="text-purple-200/70">
                    No real-time monitoring means critical issues are discovered too late, leading to catastrophic failures
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
          <div className="container relative mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
                Traditional vs SmartTrace™
              </h2>
              <p className="mt-4 text-purple-200/70 max-w-2xl mx-auto">
                The evolution of infrastructure management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Methods */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative p-8 rounded-xl border border-red-500/20 bg-black/50 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6 text-red-400">
                    <span className="mr-2">⚠️</span>
                    Traditional Methods
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✕</span>
                      <div>
                        <h4 className="font-semibold text-red-300 mb-1">🔨 Inspection Method</h4>
                        <p className="text-red-200/70">Destructive wall opening required ($5,000-15,000 per incident)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✕</span>
                      <div>
                        <h4 className="font-semibold text-red-300 mb-1">⚡ Response Time</h4>
                        <p className="text-red-200/70">Reactive repairs at 3-5x emergency costs</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✕</span>
                      <div>
                        <h4 className="font-semibold text-red-300 mb-1">📊 Data Accuracy</h4>
                        <p className="text-red-200/70">40% error rate in maintenance records</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✕</span>
                      <div>
                        <h4 className="font-semibold text-red-300 mb-1">🔍 Monitoring</h4>
                        <p className="text-red-200/70">No real-time data or early warning system</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✕</span>
                      <div>
                        <h4 className="font-semibold text-red-300 mb-1">📈 Success Rate</h4>
                        <p className="text-red-200/70">25% annual failure rate, high maintenance costs</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* SmartTrace Technology */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                    <span className="mr-2">🚀</span>
                    SmartTrace™ Technology
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-1">🔍 Non-Invasive VR</h4>
                        <p className="text-purple-200/70">See through walls with millimeter precision</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-1">⚡ Instant Response</h4>
                        <p className="text-purple-200/70">89% of issues prevented before failure</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-1">📊 Digital Twin</h4>
                        <p className="text-purple-200/70">Real-time 3D mapping with automatic updates</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-1">🔍 24/7 Monitoring</h4>
                        <p className="text-purple-200/70">Continuous data collection with instant alerts</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-1">📈 Proven ROI</h4>
                        <p className="text-purple-200/70">5.2x ROI with 73% cost reduction in year one</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Sections */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
          <div className="container relative mx-auto px-6">
            {/* SmartTrace System */}
            <div className="mb-32">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
                  SmartTrace™ System
                </h2>
                <p className="mt-4 text-purple-200/70 max-w-2xl mx-auto">
                  Advanced infrastructure tracking and visualization platform
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Visualization */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <div className="relative rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm overflow-hidden">
                    <div className="aspect-video relative p-8 flex items-center justify-center">
                      {/* Infrastructure Network Visualization */}
                      <div className="relative w-full h-full">
                        {/* Horizontal Pipes */}
                        <div className="absolute top-1/4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent" />
                        <div className="absolute top-3/4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
                        
                        {/* Vertical Pipes */}
                        <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-gradient-to-b from-transparent via-blue-500/70 to-transparent" />
                        <div className="absolute right-1/4 top-0 bottom-0 w-2 bg-gradient-to-b from-transparent via-purple-500/70 to-transparent" />
                        
                        {/* Diagonal Pipes */}
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-cyan-500/70 to-transparent origin-top-left rotate-45 translate-x-1/2" />
                        <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-transparent via-purple-500/70 to-transparent origin-top-right -rotate-45 -translate-x-1/2" />
                        
                        {/* Connection Points */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-cyan-500/70 shadow-lg shadow-cyan-500/50 animate-pulse" />
                        <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-purple-500/70 shadow-lg shadow-purple-500/50 animate-pulse" />
                        <div className="absolute top-3/4 left-1/4 w-4 h-4 rounded-full bg-blue-500/70 shadow-lg shadow-blue-500/50 animate-pulse" />
                        <div className="absolute top-3/4 right-1/4 w-4 h-4 rounded-full bg-purple-500/70 shadow-lg shadow-purple-500/50 animate-pulse" />
                        
                        {/* Scanning Effect */}
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="absolute top-0 -left-full right-full h-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform animate-[scan_3s_linear_infinite] pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* System Features */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                      <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                        Blueprint Integration
                      </h3>
                      <p className="text-purple-200/70">
                        Seamlessly integrates with existing building blueprints, providing real-time overlay of infrastructure data.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                      <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                        3D Visualization
                      </h3>
                      <p className="text-purple-200/70">
                        Advanced VR interface for real-time infrastructure visualization through walls and structures.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                      <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                        Predictive Analytics
                      </h3>
                      <p className="text-purple-200/70">
                        AI-powered monitoring system that predicts maintenance needs and potential issues before they occur.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Smart Infrastructure Products */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
                  Smart Infrastructure Products
                </h2>
                <p className="mt-4 text-purple-200/70 max-w-2xl mx-auto">
                  Next-generation pipes and wires with embedded tracking technology
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Neural Wiring */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                    <div className="h-12 w-12 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-100">Neural Wiring</h3>
                    <ul className="space-y-2 text-purple-200/70">
                      <li>• Quantum location tracking</li>
                      <li>• Real-time power monitoring</li>
                      <li>• Auto-healing circuits</li>
                      <li>• EMF shielding</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Smart Pipes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                    <div className="h-12 w-12 mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-2xl">🌊</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-100">Smart Pipes</h3>
                    <ul className="space-y-2 text-purple-200/70">
                      <li>• Flow optimization</li>
                      <li>• Leak detection</li>
                      <li>• Temperature monitoring</li>
                      <li>• Pressure regulation</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Connection Hubs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                    <div className="h-12 w-12 mb-4 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                      <span className="text-2xl">🔌</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-100">Connection Hubs</h3>
                    <ul className="space-y-2 text-purple-200/70">
                      <li>• Data aggregation</li>
                      <li>• Wireless connectivity</li>
                      <li>• Power distribution</li>
                      <li>• System diagnostics</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <BackgroundBeamsDemo />

        {/* Features Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
          <div className="container relative mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
              Future of Infrastructure
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                    <div className="text-purple-400 mb-4 text-3xl">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-100">{feature.title}</h3>
                    <p className="text-purple-200/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
          <div className="container relative mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
              Partnership Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <div className="relative p-8 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-200">
                    <h3 className="text-2xl font-bold mb-4 text-purple-100">{plan.name}</h3>
                    <div className="text-sm text-purple-300/70 mb-6">{plan.description}</div>
                    <ul className="mb-8 space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="text-purple-200/70 flex items-center gap-2">
                          <span className="text-purple-400">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white' 
                        : 'border border-purple-500/30 hover:bg-purple-500/10 text-purple-100'
                    }`}>
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="container relative mx-auto px-6 py-16 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
              Join the Smart Infrastructure Revolution
            </h2>
            <p className="mb-8 text-purple-100/80 max-w-2xl mx-auto">
              Limited investment opportunities available for qualified partners. Schedule a meeting with our executive team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 transition-all duration-200">
                <span className="absolute inset-0 rounded-full bg-purple-600/30 animate-ping"></span>
                <span className="relative">Request Investment Details</span>
              </button>
              <button className="px-8 py-3 rounded-full border border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200">
                View Executive Summary
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-lg animate-pulse"></div>
                  <div className="absolute inset-[2px] bg-black rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 relative">
                      <div className="absolute inset-0 border-2 border-transparent border-t-purple-500 border-r-blue-500 rounded-full animate-[spin_3s_linear_infinite]"></div>
                      <div className="absolute inset-[2px] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                  SmartTrace™
                </h3>
              </div>
              <p className="text-purple-200/70">
                Revolutionary infrastructure visualization technology for the modern world
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-100">Products</h4>
              <ul className="space-y-2 text-purple-200/70">
                <li>Smart Wiring</li>
                <li>Neural Pipes</li>
                <li>VR Systems</li>
                <li>Enterprise Solutions</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-100">Resources</h4>
              <ul className="space-y-2 text-purple-200/70">
                <li>Documentation</li>
                <li>Case Studies</li>
                <li>Support</li>
                <li>Training</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-100">Contact</h4>
              <ul className="space-y-2 text-purple-200/70">
                <li>Sales</li>
                <li>Partnerships</li>
                <li>Press</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <div className="text-center text-purple-200/50 text-sm">
              © 2024 SmartTrace™. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

const features = [
  {
    icon: '🔍',
    title: 'X-Ray Vision',
    description: 'See through walls in real-time with our advanced VR visualization technology and precise 3D mapping.'
  },
  {
    icon: '🔌',
    title: 'Neural Infrastructure',
    description: 'AI-powered microchip network that provides real-time data, predictive maintenance, and instant alerts.'
  },
  {
    icon: '📱',
    title: 'Holographic Interface',
    description: 'Control and monitor your infrastructure through intuitive holographic displays and VR integration.'
  }
];

const pricingPlans = [
  {
    name: 'Enterprise Pilot',
    description: 'Initial deployment for enterprise validation',
    features: [
      'Full-scale pilot implementation',
      'Custom integration support',
      'Dedicated project manager',
      '24/7 priority support'
    ]
  },
  {
    name: 'Strategic Partner',
    description: 'For industry leaders and early adopters',
    popular: true,
    features: [
      'Multi-site deployment license',
      'Custom AI model training',
      'API access and white-labeling',
      'Joint PR and case studies'
    ]
  },
  {
    name: 'Investment Partner',
    description: 'Strategic investment opportunities',
    features: [
      'Board observer rights',
      'Strategic partnership terms',
      'Early access to new tech',
      'Co-development options'
    ]
  }
];

const techFeatures = [
  {
    title: "Quantum Microchip Technology",
    description: "Our proprietary microchips use quantum computing principles to process and transmit location data with unprecedented accuracy, enabling real-time 3D mapping of infrastructure."
  },
  {
    title: "Neural Network Integration",
    description: "Smart wires and pipes form a neural network that continuously learns and adapts, providing predictive maintenance alerts and optimizing resource distribution."
  },
  {
    title: "Advanced VR Visualization",
    description: "Military-grade VR technology renders infrastructure in real-time, allowing you to see through walls with millimeter precision and interact with holographic controls."
  },
  {
    title: "Secure Quantum Communication",
    description: "All data is encrypted using quantum cryptography, making the system completely secure against any current or future hacking attempts."
  }
];

import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell
} from 'recharts';
import { 
  Briefcase, GraduationCap, Code, Database, BarChart3, 
  TrendingUp, FileText, Mail, Linkedin, Github, 
  ChevronRight, ExternalLink, Search, LayoutDashboard,
  Settings, BookOpen, Cpu, Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Data based on your resume and skills
const skillData = [
  { name: 'Financial Analysis', value: 95 },
  { name: 'MS Excel', value: 90 },
  { name: 'Power BI', value: 85 },
  { name: 'Tally & GST', value: 85 },
  { name: 'GenAI Strategy', value: 80 },
];

const academicData = [
  { term: 'SSC', value: 95 },
  { term: 'Inter', value: 93 },
  { term: 'B.Com', value: 83.9 },
  { term: 'MBA', value: 90.8 },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen flex bg-[#F8F9FA] font-sans selection:bg-black selection:text-white">
      {/* Sidebar Navigation */}
      <nav className="w-20 lg:w-64 border-r border-black/5 bg-white flex flex-col sticky top-0 h-screen z-50">
        <div className="p-6 border-b border-black/5 flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold">
            TM
          </div>
          <span className="hidden lg:block font-bold tracking-tight text-sm uppercase">Tejaswi Portfolio</span>
        </div>
        
        <div className="flex-1 py-6 space-y-2 px-3">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
            { id: 'experience', icon: Briefcase, label: 'Experience & Edu' },
            { id: 'skills', icon: Cpu, label: 'Tech Stack' },
            { id: 'research', icon: Search, label: 'Research & Awards' },
            { id: 'contact', icon: Mail, label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                activeTab === item.id 
                  ? "bg-black text-white shadow-lg shadow-black/10" 
                  : "text-gray-500 hover:bg-gray-100 hover:text-black"
              )}
            >
              <item.icon size={20} className={cn(activeTab === item.id ? "text-white" : "group-hover:scale-110 transition-transform")} />
              <span className="hidden lg:block text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6 border-t border-black/5">
          <div className="hidden lg:block">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium">Seeking Finance Roles</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-black/5 bg-white/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <span>MADIPADIGE TEJASWI</span>
            <ChevronRight size={12} />
            <span className="text-black uppercase">{activeTab}</span>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Hero Section */}
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-2">
                      <h1 className="text-5xl font-bold tracking-tighter">
                        Finance & Strategy <span className="text-gray-400 italic font-serif font-normal">MBA</span>
                      </h1>
                      <p className="text-xl text-gray-500 font-light max-w-2xl">
                        Motivated professional bridging a strong foundation in business operations and Chartered Accountancy with modern data analytics to drive strategic decisions.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {['Power BI', 'GenAI', 'Capital Markets', 'TallyPrime', 'GST Reconciliation', 'Financial Analysis'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white border border-black/5 rounded-full text-xs font-medium text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black text-white p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                      <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest mb-4">Core Focus</p>
                      <p className="text-lg font-serif italic leading-relaxed">
                        Combining traditional accounting principles with modern data visualization to optimize structural business frameworks.
                      </p>
                    </div>
                    <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                      <TrendingUp size={200} />
                    </div>
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'MBA CGPA', value: '9.08', icon: GraduationCap },
                    { label: 'Quiz Podiums', value: '4', icon: Award },
                    { label: 'Certifications', value: '3', icon: FileText },
                    { label: 'Core Tools', value: '5+', icon: Database },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-black/5 hover:border-black/20 transition-colors group">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                          <stat.icon size={18} />
                        </div>
                        <span className="text-[10px] font-mono text-gray-400">0{i+1}</span>
                      </div>
                      <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Charts Section */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-black/5 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm uppercase tracking-widest">Skill Proficiency Matrix</h3>
                      <BarChart3 size={16} className="text-gray-400" />
                    </div>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={skillData} layout="vertical">
                          <XAxis type="number" domain={[0, 100]} hide />
                          <YAxis 
                            dataKey="name" 
                            type="category" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 10, fill: '#666' }}
                            width={110}
                          />
                          <Tooltip cursor={{ fill: 'transparent' }} />
                          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                            {skillData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={index === 0 ? '#000' : '#E5E7EB'} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-black/5 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm uppercase tracking-widest">Academic Trajectory (Scores %)</h3>
                      <TrendingUp size={16} className="text-gray-400" />
                    </div>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={academicData}>
                          <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#000" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="term" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#999' }} />
                          <YAxis domain={[70, 100]} hide />
                          <Tooltip />
                          <Area type="monotone" dataKey="value" stroke="#000" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Professional & Academic Journey</h2>
                  <p className="text-gray-500 max-w-2xl">Balancing academic rigor with practical exposure in accounting and data analytics.</p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      role: 'Trainee / Junior Associate',
                      company: 'DK JAIN & Co (Chartered Accountancy Firm)',
                      period: 'Professional Experience',
                      desc: 'Performed data entry and bookkeeping using Tally. Assisted in GST return preparation, filing, and basic GST/ledger reconciliations. Supported the maintenance of critical accounting records.',
                      tags: ['Tally', 'GST Filing', 'Bookkeeping', 'Reconciliation']
                    },
                    {
                      role: 'Master of Business Administration (Finance & Strategy)',
                      company: 'Nizam College, Osmania University',
                      period: '2024 - 2026',
                      desc: 'Currently pursuing an MBA with a strong focus on corporate finance, structural data analysis, and strategic management. Maintained a 9.08/10 CGPA.',
                      tags: ['Corporate Finance', 'Strategy', 'Capital Markets']
                    },
                    {
                      role: 'Chartered Accountancy (CA)',
                      company: 'ICAI',
                      period: '2022 - 2025',
                      desc: 'Cleared CA Foundation in 2022. Reached Intermediate level with a specific exemption secured in Cost Accounting in 2025.',
                      tags: ['Accounting', 'Costing', 'Financial Reporting']
                    }
                  ].map((job, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-black/5 flex flex-col md:flex-row gap-8 hover:shadow-xl hover:shadow-black/5 transition-all">
                      <div className="md:w-48 shrink-0">
                        <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">{job.period}</p>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold">{job.role}</h3>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded inline-block">{job.company}</span>
                        <p className="text-gray-600 leading-relaxed">{job.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-mono border border-black/10 px-2 py-0.5 rounded uppercase">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="bg-white p-8 rounded-2xl border border-black/5 space-y-8">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Code size={20} /> Technical Stack
                  </h3>
                  <div className="space-y-6">
                    {[
                      { name: 'Microsoft Power BI (Certified)', level: 90 },
                      { name: 'MS Excel', level: 95 },
                      { name: 'TallyPrime', level: 85 },
                      { name: 'Generative AI Tools & Prompting', level: 85 },
                      { name: 'Data Modeling & Schema Design', level: 80 },
                    ].map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs font-medium uppercase tracking-wider">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-black" 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-black/5 space-y-8">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase size={20} /> Domain Expertise
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Financial Statement Analysis', 'Capital & Commodity Markets', 'GST Filing & Reconciliation',
                      'Bookkeeping', 'Cost Accounting', 'Research & Data Analysis',
                      'Logical Problem-Solving', 'Client-Oriented Management'
                    ].map((domain, i) => (
                      <div key={i} className="p-4 bg-gray-50 rounded-xl border border-black/5 text-sm font-medium hover:bg-black hover:text-white transition-colors">
                        {domain}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'research' && (
              <motion.div
                key="research"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="bg-black text-white p-12 rounded-3xl space-y-6 relative overflow-hidden">
                  <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-bold tracking-tight">Research & Competitions</h2>
                    <p className="text-gray-400 text-lg">
                      Applying classroom theories to real-world capital markets, competitive business quizzes, and academic financial studies.
                    </p>
                  </div>
                  <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-4 group">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded uppercase tracking-widest">Academic Study</span>
                      <BookOpen size={16} className="text-gray-400" />
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Financial Performance & Repayment Capacity of Green Bond Issuers</h4>
                    <p className="text-sm text-gray-500">In-depth research focusing on Adani Green Energy Limited and the impact of green bond issuance on corporate financial health.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-4 group">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded uppercase tracking-widest">Competition</span>
                      <Award size={16} className="text-gray-400" />
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Zerodha Varsity Quiz</h4>
                    <p className="text-sm text-gray-500">Secured 4th Place at the South Zonal Level (2025), demonstrating practical knowledge of capital markets and trading strategies.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-4 group">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded uppercase tracking-widest">Competition</span>
                      <Award size={16} className="text-gray-400" />
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Badruka BizCom: BizWiz</h4>
                    <p className="text-sm text-gray-500">Secured 2nd Prize in the 2024 Business Quiz, testing broad business acumen and corporate strategy.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-4 group">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded uppercase tracking-widest">Competition</span>
                      <Award size={16} className="text-gray-400" />
                    </div>
                    <h4 className="font-bold text-lg leading-tight">OU Blitzkrieg & CBIT</h4>
                    <p className="text-sm text-gray-500">2nd Prize in Marketing Management (CBIT, 2025) and 5th Prize in the Financial Freedom Track (OU Blitzkrieg, 2025).</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto text-center space-y-12 py-12"
              >
                <div className="space-y-4">
                  <h2 className="text-5xl font-bold tracking-tighter">Let's connect.</h2>
                  <p className="text-xl text-gray-500 font-light">
                    Interested in discussing corporate finance, data analysis, or exploring professional opportunities.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a href="mailto:tejaswi.madipadige@gmail.com" className="flex flex-col items-center gap-3 p-8 bg-white border border-black/5 rounded-2xl hover:bg-black hover:text-white transition-all group">
                    <Mail size={32} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Email</span>
                  </a>
                  <a href="https://linkedin.com/in/madipadige-tejaswi" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-8 bg-white border border-black/5 rounded-2xl hover:bg-black hover:text-white transition-all group">
                    <Linkedin size={32} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <div className="flex flex-col items-center gap-3 p-8 bg-white border border-black/5 rounded-2xl hover:bg-black hover:text-white transition-all group lg:col-span-1 md:col-span-2">
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300">Phone</span>
                    <span className="text-lg font-mono">+91-9381354182</span>
                  </div>
                </div>

                <div className="pt-12 border-t border-black/5">
                  <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">
                    Based in Hyderabad, Telangana • Open for Roles Pan-India
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
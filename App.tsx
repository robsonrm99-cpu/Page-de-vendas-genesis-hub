
import React, { useCallback } from 'react';
import { 
  BarChart3, 
  LayoutDashboard, 
  MessageSquare, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Target, 
  ShieldCheck, 
  Users,
  Copy,
  LineChart,
  ClipboardCheck,
  Award,
  Infinity,
  Flame,
  TrendingUp,
  Quote,
  Star
} from 'lucide-react';

const CHECKOUT_URL = "https://pay.kiwify.com.br/JshSk86";

// --- Custom Hook for Smooth Scroll ---
// Simplificado para evitar erros de Uncaught/SecurityError com pushState
const useSmoothScroll = () => {
  return useCallback((id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);
};

// --- Components ---

const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic tracking-tight uppercase leading-tight">{title}</h2>
    {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
  </div>
);

const Navbar: React.FC = () => {
  const scrollTo = useSmoothScroll();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f1a]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" onClick={scrollTo('home')} className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">
            GENESIS <span className="text-blue-500">HUB</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#problema" onClick={scrollTo('problema')} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors tracking-wide">Problema</a>
          <a href="#solucao" onClick={scrollTo('solucao')} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors tracking-wide">Solução</a>
          <a href="#depoimentos" onClick={scrollTo('depoimentos')} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors tracking-wide">Depoimentos</a>
          <a href="#preco" onClick={scrollTo('preco')} className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors tracking-wide">Preço</a>
        </div>
        
        <a 
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95"
        >
          Garantir Acesso
        </a>
      </div>
    </nav>
  );
};

const DashboardPreview: React.FC = () => (
  <div className="relative w-full max-w-5xl mx-auto mt-16 bg-white rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden text-slate-800 p-6 md:p-10 animate-float border border-white/20">
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 border-b border-slate-100 pb-8">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-black uppercase tracking-widest text-slate-400 mb-1 italic">Relatório Consolidado de Performance</h3>
        <p className="text-slate-400 text-sm font-bold">Unidade Genesis Hub • Atualizado agora</p>
      </div>
      <div className="flex gap-4">
         <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 min-w-[160px] text-center shadow-sm">
           <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">VGV Global</p>
           <p className="text-2xl font-black text-blue-600">R$ 3.220.000</p>
         </div>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {[
        { label: 'Anúncios', val: '6.596' },
        { label: 'Ligações', val: '2.993' },
        { label: 'Agend.', val: '342' },
        { label: 'Visitas', val: '142' }
      ].map((m, i) => (
        <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-transform hover:scale-105">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
          <p className="text-3xl font-black text-slate-800 tracking-tighter">{m.val}</p>
        </div>
      ))}
    </div>

    <div>
      <h4 className="text-xs font-black uppercase text-slate-400 mb-6 flex items-center gap-2 tracking-[0.2em]">
        <Award className="w-4 h-4 text-emerald-500" /> Ranking Individual de Performance
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 uppercase font-black text-[10px] tracking-widest">
              <th className="py-4 px-2">Vendedor</th>
              <th className="py-4 px-2">Anúncios</th>
              <th className="py-4 px-2">Ligações</th>
              <th className="py-4 px-2">Visitas</th>
              <th className="py-4 px-2">Fech.</th>
              <th className="py-4 px-2 text-right">VGV Total</th>
            </tr>
          </thead>
          <tbody className="font-medium">
            {[
              { name: 'Erica Lima', ann: '2240', lig: '1120', vis: '84', fech: '56', vgv: 'R$ 1.450.000' },
              { name: 'Richarlysson', ann: '1730', lig: '816', vis: '28', fech: '28', vgv: 'R$ 920.000' },
              { name: 'Matheus', ann: '2626', lig: '1057', vis: '30', fech: '29', vgv: 'R$ 850.000' }
            ].map((v, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors cursor-default">
                <td className="py-5 px-2 font-black text-slate-900">{v.name}</td>
                <td className="py-5 px-2 text-slate-500">{v.ann}</td>
                <td className="py-5 px-2 text-slate-500">{v.lig}</td>
                <td className="py-5 px-2 text-slate-500">{v.vis}</td>
                <td className="py-5 px-2 font-black text-blue-600">{v.fech}</td>
                <td className="py-5 px-2 text-right font-black text-emerald-600">{v.vgv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex flex-col items-center scroll-mt-24">
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-10 text-blue-400 text-xs font-black uppercase tracking-[0.3em] backdrop-blur-md">
          <Award className="w-4 h-4 fill-blue-400/20" /> Specialist Sales Ops for Consortium
        </div>
        
        <h1 className="text-4xl md:text-[5.5rem] font-black mb-10 leading-[1] max-w-5xl mx-auto tracking-tighter uppercase italic">
          Transforme relatórios <br />
          caóticos do WhatsApp em <br />
          <span className="text-highlight inline-block my-2 not-italic">Inteligência de Vendas</span> <br />
          em segundos
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
          Copie e cole os relatórios da sua equipe e receba automaticamente um dashboard profissional com métricas de funil, ranking de vendedores e faturamento (VGV).
        </p>
        
        <div className="flex flex-col items-center gap-8 mb-24">
          <a 
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-14 py-6 rounded-2xl font-black text-xl md:text-2xl transition-all flex items-center justify-center gap-4 shadow-2xl glow-blue transform hover:scale-105 active:scale-95 uppercase italic tracking-tight group"
          >
            Quero Gestão Inteligente Agora
            <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform" />
          </a>
          
          <div className="flex items-center gap-6 text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Licença Vitalícia</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-blue-500" /> Resultados Imediatos</span>
          </div>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
};

const Problem: React.FC = () => (
  <section id="problema" className="py-32 px-6 bg-[#0d1221] scroll-mt-24">
    <div className="max-w-7xl mx-auto">
      <SectionTitle 
        title="O pesadelo de todo Gestor Comercial" 
        subtitle="Você gasta horas tentando entender o que está acontecendo na sua equipe enquanto os relatórios se acumulam no WhatsApp."
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <MessageSquare className="text-red-400" />, title: "Formatos Variados", desc: "Cada vendedor envia o relatório de um jeito, com abreviações diferentes e falta de padrão." },
          { icon: <Clock className="text-red-400" />, title: "Perda de Tempo", desc: "Horas perdidas compilando dados manualmente em planilhas que ninguém gosta de preencher." },
          { icon: <BarChart3 className="text-red-400" />, title: "Erros de Soma", desc: "O erro humano é inevitável. Números errados levam a decisões erradas sobre o seu faturamento." },
          { icon: <Users className="text-red-400" />, title: "Visibilidade Zero", desc: "Dificuldade em enxergar rapidamente quem está performando e quem precisa de ajuda no funil." },
          { icon: <LineChart className="text-red-400" />, title: "Funil sem Estratégia", desc: "Você sabe quanto vendeu, mas não sabe onde os leads estão travando no processo comercial." },
          { icon: <Target className="text-red-400" />, title: "Gestão no Escuro", desc: "Sem dados claros, você gerencia por 'feeling', não por inteligência operacional." }
        ].map((item, i) => (
          <div key={i} className="glass-card p-10 rounded-3xl hover:border-red-500/40 transition-all border border-transparent group">
            <div className="bg-red-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Solution: React.FC = () => {
  return (
    <section id="solucao" className="py-32 px-6 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
              A simplicidade que <br />sua <span className="text-blue-500">gestão precisa.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              O Genesis Hub foi desenhado para a realidade brutal do mercado de consórcios. Ele interpreta automaticamente os dados crus, elimina o retrabalho e entrega a verdade sobre o seu funil em tempo real.
            </p>
            
            <div className="space-y-8 mb-12">
              {[
                { title: "Inteligência Automatizada", desc: "Nossa IA reconhece padrões de texto e transforma mensagens desorganizadas em dados estruturados." },
                { title: "Dashboard Profissional", desc: "Chega de planilhas cinzas. Visualize sua operação com design de alto nível." },
                { title: "Copiou → Colou → Pronto", desc: "Sem integrações complexas. Funciona com o que você já usa: o WhatsApp." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="bg-emerald-500/20 p-2 rounded-xl mt-1 group-hover:bg-emerald-500/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase italic tracking-tight group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-blue-500 font-black uppercase italic tracking-widest hover:text-blue-400 transition-colors group"
            >
              Garantir Licença Vitalícia <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-3 backdrop-blur-sm shadow-2xl">
              <div className="bg-[#0b0f1a] rounded-[2rem] p-8 border border-white/5">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-black text-gray-500 ml-3 uppercase tracking-widest">genesis-parser.v1</span>
                </div>
                <div className="space-y-6 font-mono text-sm leading-relaxed">
                  <p className="text-emerald-400 font-bold opacity-80">// Mensagem WhatsApp recebida</p>
                  <div className="bg-white/5 p-6 rounded-2xl text-gray-400 select-all border border-dashed border-white/20 italic">
                    EQUIPE ALFA <br />
                    *JOÃO VENDEDOR* <br />
                    Anúncios: 1240 <br />
                    Ligações: 650 <br />
                    Visitas: 12 <br />
                    Fechamentos: 08
                  </div>
                  <div className="flex justify-center py-6">
                     <div className="bg-blue-600/20 p-4 rounded-full animate-bounce">
                        <ArrowRight className="w-8 h-8 text-blue-500 rotate-90" />
                     </div>
                  </div>
                  <div className="bg-blue-600/10 p-6 rounded-2xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                    <p className="text-blue-400 font-black mb-4 uppercase tracking-[0.2em] text-xs">Dados Inteligentes Extraídos:</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-bold">Taxa Conv. Visita:</span>
                        <span className="text-white font-black text-lg tracking-tighter">66.7%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-bold">Status Performance:</span>
                        <span className="text-emerald-400 font-black uppercase italic tracking-widest text-xs">Acima da Média</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks: React.FC = () => (
  <section id="como-funciona" className="py-32 px-6 bg-[#0b0f1a] scroll-mt-24">
    <div className="max-w-7xl mx-auto text-center">
      <SectionTitle title="A gestão em 3 passos" subtitle="O fluxo mais otimizado do mercado para consolidar sua operação comercial em segundos." />
      
      <div className="grid md:grid-cols-3 gap-16 relative mt-20">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-20"></div>
        
        {[
          { 
            step: "01", 
            icon: <MessageSquare className="w-10 h-10 text-blue-500" />, 
            title: "Receba no Zap", 
            desc: "Seus vendedores enviam os relatórios diários como já estão acostumados." 
          },
          { 
            step: "02", 
            icon: <Copy className="w-10 h-10 text-blue-500" />, 
            title: "Copie e Cole", 
            desc: "Copie as mensagens e cole em nosso interpretador de dados inteligente." 
          },
          { 
            step: "03", 
            icon: <LayoutDashboard className="w-10 h-10 text-blue-500" />, 
            title: "Visualize Tudo", 
            desc: "Em segundos, o dashboard gera o VGV, ranking e métricas de conversão." 
          }
        ].map((item, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center group">
            <div className="text-8xl font-black text-white/5 absolute -top-16 left-1/2 -translate-x-1/2 select-none tracking-tighter group-hover:text-blue-500/10 transition-colors">{item.step}</div>
            <div className="bg-[#0f172a] border border-blue-500/20 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl glow-blue transform group-hover:rotate-6 transition-all duration-500">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black mb-4 italic tracking-tight uppercase">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed max-w-xs font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MetricsGrid: React.FC = () => (
  <section className="py-20 px-6 bg-[#0b0f1a]">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "VGV Processado", value: "R$ 42M+", icon: <TrendingUp className="w-6 h-6 text-emerald-500" /> },
          { label: "Dados Analisados", value: "150k+", icon: <MessageSquare className="w-6 h-6 text-blue-500" /> },
          { label: "Equipes Ativas", value: "85+", icon: <Users className="w-6 h-6 text-purple-500" /> },
          { label: "Processamento", value: "< 5s", icon: <Zap className="w-6 h-6 text-yellow-500" /> }
        ].map((m, i) => (
          <div key={i} className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all group shadow-xl">
            <div className="mb-6 group-hover:scale-125 transition-transform duration-500">{m.icon}</div>
            <div className="text-3xl md:text-4xl font-black mb-2 italic tracking-tighter text-white">{m.value}</div>
            <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section id="depoimentos" className="py-32 px-6 bg-[#0d1221] scroll-mt-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] -z-10"></div>
    <div className="max-w-7xl mx-auto">
      <SectionTitle title="A voz de quem lidera" subtitle="Quem vive o campo de batalha do consórcio todos os dias não gerencia mais sem o Genesis Hub." />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            quote: "Antes era um caos. Recebia relatório no WhatsApp de todo jeito. Perdendo tempo, errando conta, sem visão real da equipe. Com o Genesis Hub eu só copio, colo e tenho tudo organizado em segundos.",
            name: "Carlos M.",
            role: "Gestor Comercial",
            highlight: "Antes era um caos."
          },
          {
            quote: "Isso mudou minha gestão. Antes eu dependia de planilha e muito retrabalho. Hoje tenho ranking, métricas e faturamento claros sem esforço. Vale cada centavo da licença vitalícia.",
            name: "Renato A.",
            role: "Diretor de Consórcios",
            highlight: "Mudou minha gestão."
          },
          {
            quote: "Economizo pelo menos 1 hora por dia. O Genesis Hub transformou algo chato e manual em um processo simples. Minha energia vai pra estratégia, não pra planilha.",
            name: "Fernanda L.",
            role: "Supervisora Comercial",
            highlight: "Economizo 1 hora/dia."
          },
          {
            quote: "Finalmente tenho controle real do funil. Antes eu achava que tinha controle. Agora eu tenho dados. Vejo anúncios, ligações, agendamentos, visitas e fechamentos em um único lugar.",
            name: "Marcos P.",
            role: "Líder de Vendas",
            highlight: "Controle real do funil."
          },
          {
            quote: "Simples, rápido e funcional. Não precisei aprender nada complicado. A ferramenta já pensa como gestor. Em minutos eu tenho uma visão que antes demorava horas.",
            name: "Juliano R.",
            role: "Coordenador Comercial",
            highlight: "Simples e funcional."
          }
        ].map((t, i) => (
          <div key={i} className="glass-card p-10 rounded-[2.5rem] border-white/5 flex flex-col hover:border-blue-500/40 transition-all group relative overflow-hidden shadow-2xl">
            <Quote className="absolute -top-6 -right-6 w-32 h-32 text-white/5 group-hover:text-blue-500/10 transition-colors" />
            
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              ))}
            </div>

            <h4 className="text-2xl font-black mb-5 text-white group-hover:text-blue-400 transition-colors italic tracking-tight uppercase italic">“{t.highlight}”</h4>
            
            <p className="text-gray-400 leading-relaxed mb-10 flex-grow italic font-medium tracking-tight">
              {t.quote}
            </p>

            <div className="flex items-center gap-5 mt-auto pt-8 border-t border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center font-black text-sm text-white uppercase shadow-xl transform group-hover:rotate-3 transition-transform">
                {t.name.split(' ')[0][0]}{t.name.split(' ')[1]?.[0] || ''}
              </div>
              <div>
                <p className="font-black text-white tracking-tight text-lg">{t.name}</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing: React.FC = () => {
  return (
    <section id="preco" className="py-32 px-6 relative scroll-mt-24">
      <div className="absolute inset-0 bg-blue-600/5 -z-10"></div>
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 px-8 py-3 rounded-full mb-10 text-blue-400 font-black animate-pulse uppercase tracking-[0.3em] text-xs">
          <Flame className="w-4 h-4 fill-blue-400" /> Oferta de Lançamento – Vagas Limitadas
        </div>
        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
          Pague uma vez. <br /><span className="text-blue-500">Use para sempre.</span>
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-20 leading-relaxed font-medium">
          Esqueça mensalidades abusivas. Tenha uma ferramenta robusta de Sales Ops focada exclusivamente no mercado de consórcio.
        </p>

        <div className="max-w-xl mx-auto">
          <div className="glass-card rounded-[3rem] overflow-hidden border-2 border-blue-500/40 shadow-[0_0_80px_rgba(59,130,246,0.25)]">
            <div className="bg-blue-600 py-5 text-center shadow-lg">
              <p className="text-white font-black uppercase tracking-[0.3em] text-xs italic">Acesso Vitalício de Fundador</p>
            </div>
            
            <div className="p-12 md:p-16 text-center">
              <div className="flex items-center justify-center gap-5 mb-10">
                <span className="text-gray-600 line-through text-2xl font-black italic opacity-50">R$ 997</span>
                <div className="bg-emerald-500/15 text-emerald-400 px-4 py-1.5 rounded-xl font-black text-xs uppercase tracking-widest border border-emerald-500/20">
                  Lote Promo
                </div>
              </div>
              
              <div className="mb-14">
                <span className="text-gray-500 text-3xl font-black align-top mt-3 inline-block mr-1 tracking-tighter">R$</span>
                <span className="text-8xl md:text-[8rem] font-black text-white tracking-tighter italic leading-none">397</span>
                <p className="text-blue-400 font-black mt-4 uppercase tracking-[0.4em] text-[10px]">Pagamento Único Especial</p>
              </div>

              <div className="space-y-6 mb-16 text-left max-w-[260px] mx-auto">
                {[
                  { text: "Licença Vitalícia (Lifetime)", icon: <CheckCircle className="w-5 h-5 text-emerald-500" /> },
                  { text: "Todas atualizações futuras", icon: <CheckCircle className="w-5 h-5 text-emerald-500" /> },
                  { text: "Equipes e Vendedores Ilimitados", icon: <CheckCircle className="w-5 h-5 text-emerald-500" /> },
                  { text: "Suporte VIP via Comunidade", icon: <CheckCircle className="w-5 h-5 text-emerald-500" /> },
                  { text: "Sem mensalidades ocultas", icon: <Infinity className="w-5 h-5 text-blue-400" />, highlight: true }
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-4 ${item.highlight ? 'text-blue-400 font-black italic' : 'font-bold'}`}>
                    {item.icon}
                    <span className="tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>

              <a 
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-7 rounded-[2rem] font-black text-2xl md:text-3xl transition-all shadow-2xl glow-blue transform hover:scale-105 active:scale-95 uppercase italic tracking-tight shadow-blue-600/30"
              >
                Garantir Licença Vitalícia
              </a>
              
              <p className="text-gray-600 text-[10px] mt-10 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3">
                <Clock className="w-4 h-4" /> Apenas 17 licenças restantes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits: React.FC = () => (
  <section id="beneficios" className="py-32 px-6 scroll-mt-24">
    <div className="max-w-7xl mx-auto">
       <div className="grid md:grid-cols-2 gap-24 items-center">
         <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { title: "Economia de Tempo", icon: <Clock /> },
                 { title: "Decisões Rápidas", icon: <Zap /> },
                 { title: "Mais Controle", icon: <ShieldCheck /> },
                 { title: "Visão do Funil", icon: <LineChart /> },
                 { title: "Profissionalismo", icon: <Award /> },
                 { title: "Menos Planilhas", icon: <ClipboardCheck /> }
               ].map((b, i) => (
                 <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all group shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left">
                   <div className="text-blue-500 mb-6 group-hover:scale-125 transition-transform duration-500">{b.icon}</div>
                   <h4 className="font-black uppercase italic tracking-tight text-lg">{b.title}</h4>
                 </div>
               ))}
            </div>
         </div>
         <div className="order-1 md:order-2">
           <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase italic tracking-tighter">
             Foque em <span className="text-emerald-500">liderar</span>, <br />não em preencher <span className="text-blue-500">tabelas.</span>
           </h2>
           <p className="text-gray-400 text-xl mb-12 leading-relaxed font-medium">
             Um gestor de consórcio não deve ser um digitador de dados. O Genesis Hub devolve o seu tempo para que você possa treinar sua equipe e fechar mais cotas.
           </p>
           <ul className="space-y-6">
             {[
               "Consolidação diária em menos de 1 minuto",
               "Identificação imediata de gargalos no funil",
               "Relatórios profissionais prontos para diretoria"
             ].map((txt, i) => (
               <li key={i} className="flex items-center gap-5 text-gray-300 font-bold text-lg">
                 <CheckCircle className="w-7 h-7 text-emerald-500 flex-shrink-0" />
                 <span>{txt}</span>
               </li>
             ))}
           </ul>
         </div>
       </div>
    </div>
  </section>
);

const Authority: React.FC = () => (
  <section className="py-32 px-6 border-y border-white/5 bg-[#0d1221]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-[3rem] flex items-center justify-center p-1.5 shadow-2xl glow-blue transform -rotate-6">
        <div className="bg-[#0b0f1a] w-full h-full rounded-[2.8rem] flex items-center justify-center overflow-hidden">
          <Zap className="w-16 h-16 text-blue-500 animate-pulse fill-blue-500/20" />
        </div>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-3xl md:text-5xl font-black mb-8 italic tracking-tighter uppercase">“Feito por quem entende de <br className="hidden md:block" />gestão comercial de verdade.”</h3>
        <p className="text-gray-400 text-xl max-w-3xl leading-relaxed font-medium italic">
          O Genesis Hub não é apenas código. É a materialização de processos reais de Sales Ops, focado em alta performance. Pensado para a rotina bruta de quem lidera times de consórcio.
        </p>
      </div>
    </div>
  </section>
);

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-40 px-6 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-blue-600/[0.03] -z-10"></div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-[6rem] font-black mb-10 leading-[0.9] uppercase italic tracking-tighter">
          Domine sua gestão <br />com <span className="gradient-text">inteligência.</span>
        </h2>
        <p className="text-gray-400 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
          Transforme sua operação em uma máquina de vendas profissional. Lidere com dados, não com palpites.
        </p>
        
        <div className="flex flex-col items-center gap-10">
          <a 
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl md:text-4xl transition-all shadow-2xl glow-blue transform hover:scale-105 uppercase italic tracking-tight shadow-blue-600/40"
          >
            Garantir Licença Vitalícia
          </a>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-[11px] font-black uppercase tracking-[0.4em]">
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Compra 100% Segura</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden md:block"></span>
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-blue-500" /> Ativação Imediata</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden md:block"></span>
            <span className="flex items-center gap-2"><Infinity className="w-5 h-5 text-purple-500" /> Sem Mensalidades</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  const scrollTo = useSmoothScroll();
  return (
    <footer className="bg-[#0b0f1a] border-t border-white/10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <a href="#home" onClick={scrollTo('home')} className="flex items-center gap-3 cursor-pointer group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">
              GENESIS <span className="text-blue-500">HUB</span>
            </span>
          </a>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <a href="#problema" onClick={scrollTo('problema')} className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Problema</a>
            <a href="#solucao" onClick={scrollTo('solucao')} className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Solução</a>
            <a href="#depoimentos" onClick={scrollTo('depoimentos')} className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Depoimentos</a>
            <a href="#preco" onClick={scrollTo('preco')} className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Preço</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-16 border-t border-white/10">
          <div className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left leading-loose">
            © 2024 GENESIS HUB – SPECIALIST SALES OPS FOR CONSORTIUM. <br className="md:hidden" />
            TODOS OS DIREITOS RESERVADOS. <br />
            FOCO TOTAL EM PERFORMANCE E RESULTADO.
          </div>
          
          <div className="flex items-center gap-10">
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Políticas</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Termos</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0f1a] selection:bg-blue-600 selection:text-white text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <MetricsGrid />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Authority />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;

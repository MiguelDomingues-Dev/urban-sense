const Dot = ({ color, x, y, size = 10 }: { color: string; x: number; y: number; size?: number }) => (
  <circle cx={x} cy={y} r={size} fill={color} opacity={0.7} />
);

const HeroDashboardMockup = () => (
  <div className="relative">
    {/* Browser frame */}
    <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-[11px] text-muted-foreground">painel.urbansense.com.br</span>
      </div>

      <div className="flex min-h-[280px] md:min-h-[340px]">
        {/* Sidebar */}
        <div className="w-14 md:w-16 bg-navy flex flex-col items-center py-4 gap-4 shrink-0">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`w-7 h-7 rounded-md ${i === 0 ? 'bg-cyan/30' : 'bg-white/10'}`} />
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-3 md:p-5 space-y-4">
          {/* KPI cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { label: "Total", value: "284", color: "text-navy" },
              { label: "Em análise", value: "47", color: "text-yellow-600" },
              { label: "Resolvidos", value: "189", color: "text-green-600" },
              { label: "Usuários", value: "150", color: "text-cyan" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-muted/40 rounded-lg p-2.5 md:p-3">
                <p className="text-[10px] text-muted-foreground">{kpi.label}</p>
                <p className={`text-lg md:text-xl font-bold ${kpi.color}`}>{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* Map area */}
          <div className="bg-muted/30 rounded-lg p-3 relative overflow-hidden" style={{ minHeight: 140 }}>
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 140" preserveAspectRatio="xMidYMid slice">
              {/* Grid lines */}
              {[30, 70, 110, 150, 190, 230, 270].map((x) => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="140" stroke="#2C3E47" strokeOpacity="0.06" />
              ))}
              {[30, 60, 90, 120].map((y) => (
                <line key={`h${y}`} x1="0" y1={y} x2="300" y2={y} stroke="#2C3E47" strokeOpacity="0.06" />
              ))}
              {/* Dots */}
              <Dot color="#ef4444" x={80} y={45} />
              <Dot color="#ef4444" x={95} y={55} size={7} />
              <Dot color="#f59e0b" x={180} y={70} />
              <Dot color="#f59e0b" x={200} y={50} size={8} />
              <Dot color="#22c55e" x={140} y={100} />
              <Dot color="#22c55e" x={230} y={90} size={7} />
              <Dot color="#ef4444" x={250} y={35} size={6} />
              <Dot color="#22c55e" x={60} y={110} size={8} />
            </svg>
            <div className="relative z-10 flex items-center gap-3 mt-[110px]">
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" /> Urgente
              </span>
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" /> Médio
              </span>
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Baixo
              </span>
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground font-medium">Chamados recentes</p>
        </div>
      </div>
    </div>

    {/* Floating badge */}
    <div className="absolute -bottom-4 left-4 md:left-6 bg-amber-100 text-amber-900 text-xs font-medium px-4 py-2 rounded-full shadow-lg border border-amber-200 animate-pulse">
      ● IA detectou 3 grupos de chamados similares →
    </div>
  </div>
);

export default HeroDashboardMockup;

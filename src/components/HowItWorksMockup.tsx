const HowItWorksMockup = () => (
  <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
    {/* Browser bar */}
    <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
      <div className="w-3 h-3 rounded-full bg-red-400" />
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
      <div className="w-3 h-3 rounded-full bg-green-400" />
    </div>

    <div className="flex flex-col md:flex-row min-h-[360px]">
      {/* Mobile form */}
      <div className="md:w-1/2 flex justify-center items-start p-6 md:p-10 border-b md:border-b-0 md:border-r border-border">
        <div className="w-full max-w-[260px] bg-muted/30 rounded-2xl p-5 border border-border">
          <p className="text-sm font-bold text-navy mb-4">Novo Chamado</p>
          {["Categoria", "Descrição"].map((label) => (
            <div key={label} className="mb-3">
              <p className="text-[10px] text-muted-foreground mb-1">{label}</p>
              <div className="h-8 bg-white rounded-md border border-border" />
            </div>
          ))}
          <div className="mb-3">
            <p className="text-[10px] text-muted-foreground mb-1">Foto</p>
            <div className="h-16 bg-white rounded-md border border-dashed border-border flex items-center justify-center text-[10px] text-muted-foreground">
              📷 Arraste ou clique
            </div>
          </div>
          <div className="mb-4">
            <p className="text-[10px] text-muted-foreground mb-1">Localização</p>
            <div className="h-8 bg-white rounded-md border border-border flex items-center px-2">
              <span className="text-[10px] text-cyan font-medium">📍 Detectar automaticamente</span>
            </div>
          </div>
          <div className="h-9 bg-cyan rounded-md flex items-center justify-center text-white text-xs font-semibold">
            Enviar Chamado
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div className="md:w-1/2 p-5 md:p-8 space-y-4">
        <p className="text-sm font-bold text-navy">Painel de Controle</p>

        <div className="flex gap-2">
          {[
            { label: "Novos", value: "12", bg: "bg-red-100 text-red-700" },
            { label: "Análise", value: "8", bg: "bg-yellow-100 text-yellow-700" },
            { label: "Resolvidos", value: "45", bg: "bg-green-100 text-green-700" },
          ].map((p) => (
            <span key={p.label} className={`text-[11px] font-semibold px-3 py-1 rounded-full ${p.bg}`}>
              {p.value} {p.label}
            </span>
          ))}
        </div>

        {/* Mini map */}
        <div className="bg-muted/30 rounded-lg h-28 relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 110" preserveAspectRatio="xMidYMid slice">
            {[40, 80, 120, 160].map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="110" stroke="#0A2540" strokeOpacity="0.05" />
            ))}
            {[30, 60, 90].map((y) => (
              <line key={`h${y}`} x1="0" y1={y} x2="200" y2={y} stroke="#0A2540" strokeOpacity="0.05" />
            ))}
            <circle cx="50" cy="40" r="6" fill="#ef4444" opacity="0.7" />
            <circle cx="90" cy="60" r="5" fill="#f59e0b" opacity="0.7" />
            <circle cx="140" cy="35" r="7" fill="#22c55e" opacity="0.7" />
            <circle cx="160" cy="80" r="5" fill="#ef4444" opacity="0.7" />
          </svg>
        </div>

        {/* List rows */}
        <div className="space-y-2">
          {[
            { dot: "bg-red-500", text: "Buraco na Rua das Flores — Bairro Centro" },
            { dot: "bg-yellow-500", text: "Iluminação com defeito — Av. Brasil" },
            { dot: "bg-green-500", text: "Poda realizada — Praça da Paz" },
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-2 bg-white rounded-md px-3 py-2 border border-border">
              <span className={`w-2 h-2 rounded-full ${r.dot} shrink-0`} />
              <span className="text-[11px] text-navy/80 truncate">{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorksMockup;

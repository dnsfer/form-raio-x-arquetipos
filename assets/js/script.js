const BIA_IG = "https://instagram.com/biancarodrigues.sm";

const ARC = {
  inocente: {
    name: "Inocente",
    sym: "◯",
    tag: "Pureza · Otimismo · Simplicidade",
    c4: "#BA7517",
    desc: "Marcas que enxergam o melhor no mundo e transmitem esperança genuína. Comunicam com clareza, sem exagero, e constroem confiança por serem exatamente o que parecem.",
    voz: "Leve, positiva e direta. Nunca forçada.",
    forte:
      "Constrói confiança rapidamente — as pessoas acreditam porque percebem que é real.",
    desafio:
      "Pode parecer ingênua se não tiver profundidade de posicionamento.",
    ex: "Dove · Natura · Simple",
    kw: ["autenticidade", "clareza", "esperança", "pureza"],
  },
  explorador: {
    name: "Explorador",
    sym: "◇",
    tag: "Liberdade · Autenticidade · Descoberta",
    c4: "#639922",
    desc: "Marcas que expandem horizontes e inspiram o público a encontrar seus próprios caminhos.",
    voz: "Aventureiro, autêntico e que convida. Não impõe — inspira.",
    forte:
      "Cria comunidade fiel de pessoas que se identificam com o estilo de vida da marca.",
    desafio: "Pode perder foco tentando abraçar muitas direções.",
    ex: "Patagonia · The North Face · Jeep",
    kw: ["liberdade", "autenticidade", "descoberta", "independência"],
  },
  sabio: {
    name: "Sábio",
    sym: "△",
    tag: "Conhecimento · Verdade · Expertise",
    c4: "#378ADD",
    desc: "Marcas que guiam pelo conhecimento profundo. São os consultores de confiança que entregam clareza onde antes havia confusão.",
    voz: "Educativo, analítico e com profundidade. Fundamentado em experiência real.",
    forte: "Autoridade percebida — quando fala, as pessoas param para ouvir.",
    desafio: "Pode ser percebido como distante ou hermético demais.",
    ex: "Google · McKinsey · Harvard",
    kw: ["expertise", "credibilidade", "análise", "verdade"],
  },
  heroi: {
    name: "Herói",
    sym: "✦",
    tag: "Coragem · Superação · Determinação",
    c4: "#D85A30",
    desc: "Marcas que existem para ajudar as pessoas a serem melhores. Lideram pelo exemplo e provam que a superação é sempre possível.",
    voz: "Motivacional, direto e focado em resultados. Fala para quem quer agir.",
    forte:
      "Inspira ação concreta — o público se sente capaz depois de consumi-lo.",
    desafio: "Pode soar arrogante sem vulnerabilidade e humanidade.",
    ex: "Nike · Adidas · Under Armour",
    kw: ["coragem", "superação", "determinação", "conquista"],
  },
  rebelde: {
    name: "Rebelde",
    sym: "☓",
    tag: "Ruptura · Provocação · Liberdade Radical",
    c4: "#7F77DD",
    desc: "Marcas que existem para sacudir o que está acomodado. Questionam, provocam e abrem espaço para o que vem depois do status quo.",
    voz: "Ousado, sem filtro e provocativo. Questiona o óbvio sem pedir licença.",
    forte: "Memorabilidade — é impossível de ignorar.",
    desafio: "Pode alienar públicos conservadores e limitar parcerias.",
    ex: "Harley-Davidson · Diesel · Virgin",
    kw: ["disrupção", "liberdade", "provocação", "ousadia"],
  },
  mago: {
    name: "Mago",
    sym: "⬡",
    tag: "Transformação · Visão · Intuição",
    c4: "#D4537E",
    desc: "Marcas que operam transformações profundas. Fazem o impossível parecer possível e criam experiências que ficam gravadas na memória.",
    voz: "Inspirador, visionário e com um quê de mistério. Promete — e entrega — o extraordinário.",
    forte: "Cria lealdade intensa — clientes viram evangelistas da marca.",
    desafio: "Precisa entregar o que promete, ou a credibilidade não resiste.",
    ex: "Apple · Disney · TED",
    kw: ["transformação", "visão", "mistério", "possibilidade"],
  },
  pessoaComum: {
    name: "Pessoa Comum",
    sym: "⬟",
    tag: "Pertencimento · Empatia · Conexão Real",
    c4: "#1D9E75",
    desc: "Marcas que se conectam profundamente porque parecem gente como a gente. Sem pedestal, sem firula — só conexão genuína.",
    voz: "Próximo e descomplicado. Fala como o cliente fala — nunca acima dele.",
    forte: "Empatia instantânea — as pessoas se sentem entendidas de verdade.",
    desafio: "Pode perder diferenciação se não tiver um ponto de vista único.",
    ex: "IKEA · Havaianas · Submarino",
    kw: ["pertencimento", "empatia", "conexão", "acessibilidade"],
  },
  amante: {
    name: "Amante",
    sym: "♡",
    tag: "Paixão · Beleza · Conexão Profunda",
    c4: "#E24B4A",
    desc: "Marcas que criam desejo e experiências sensoriais memoráveis. Fazem a pessoa se sentir especial — como se a marca existisse só para ela.",
    voz: "Sensorial, emocional e íntimo. Cada detalhe gera sensação.",
    forte:
      "Cria desejo genuíno — as pessoas querem fazer parte do universo da marca.",
    desafio:
      "Pode parecer superficial se não tiver propósito além da estética.",
    ex: "Chanel · Victoria's Secret · Häagen-Dazs",
    kw: ["beleza", "desejo", "paixão", "exclusividade"],
  },
  comediante: {
    name: "Comediante",
    sym: "☽",
    tag: "Alegria · Humor · Leveza",
    c4: "#BA7517",
    desc: "Marcas que transformam qualquer assunto em algo prazeroso e memorável. O humor é o veículo — o conteúdo é o destino.",
    voz: "Descontraído, espontâneo e criativo. Nunca leva muito a sério — mas não é leviano.",
    forte:
      "Memorabilidade e compartilhamento — ninguém esquece quem faz rir do jeito certo.",
    desafio: "O humor precisa ser inteligente para não banalizar a marca.",
    ex: "Old Spice · Skittles · Innocent Drinks",
    kw: ["humor", "leveza", "alegria", "espontaneidade"],
  },
  cuidador: {
    name: "Cuidador",
    sym: "◎",
    tag: "Proteção · Generosidade · Serviço",
    c4: "#0F6E56",
    desc: "Marcas que colocam o outro em primeiro lugar. Existem para proteger, nutrir e garantir que ninguém fique para trás.",
    voz: "Acolhedor, humano e cheio de calor. Faz a pessoa se sentir vista e genuinamente cuidada.",
    forte:
      "Lealdade profunda — clientes que se sentem cuidados raramente saem.",
    desafio: "Pode criar dependência emocional se não empoderar o cliente.",
    ex: "Johnson & Johnson · UNICEF · Pampers",
    kw: ["cuidado", "proteção", "empatia", "generosidade"],
  },
  criador: {
    name: "Criador",
    sym: "✿",
    tag: "Inovação · Expressão · Originalidade",
    c4: "#993C1D",
    desc: "Marcas que existem para criar algo que ainda não existe. Têm uma visão estética e conceitual única — e o processo já é parte do produto.",
    voz: "Criativo, visionário e com ponto de vista claro. Apresenta soluções que ninguém imaginou.",
    forte:
      "Diferenciação natural — o que entrega não existe em mais nenhum lugar.",
    desafio:
      "Pode se perder na estética e esquecer de comunicar o resultado real.",
    ex: "Adobe · Lego · Pixar",
    kw: ["criatividade", "originalidade", "expressão", "inovação"],
  },
  governante: {
    name: "Governante",
    sym: "◈",
    tag: "Autoridade · Ordem · Liderança",
    c4: "#5F5E5A",
    desc: "Marcas que lideram pelo exemplo e são sinônimo de excelência e status. Criam o padrão que todos os outros no mercado seguem.",
    voz: "Assertivo, refinado e seguro. Não precisa gritar — a autoridade está no modo de existir.",
    forte:
      "Posicionamento premium natural — o preço alto é percebido como justo.",
    desafio: "Pode ser percebido como arrogante ou inacessível.",
    ex: "Rolex · Mercedes-Benz · American Express",
    kw: ["autoridade", "excelência", "liderança", "status"],
  },
};

const QS = [
  {
    q: "Qual dessas frases descreve melhor o coração do seu negócio?",
    opts: [
      {
        t: "Oferecer cuidado genuíno — as pessoas sempre em primeiro lugar",
        s: { cuidador: 2, pessoaComum: 1 },
      },
      {
        t: "Criar algo original que o mercado ainda não viu",
        s: { criador: 2, mago: 1 },
      },
      {
        t: "Gerar resultados reais e transformadores para quem me contrata",
        s: { heroi: 2, mago: 1 },
      },
      {
        t: "Ser a referência mais confiável do meu nicho",
        s: { sabio: 2, governante: 1 },
      },
    ],
  },
  {
    q: "O que mais te move quando você pensa no seu trabalho?",
    opts: [
      {
        t: "Ver o impacto real que causo na vida das pessoas",
        s: { cuidador: 2, heroi: 1 },
      },
      {
        t: "A liberdade de criar e experimentar sem limites",
        s: { criador: 2, explorador: 1 },
      },
      {
        t: "Questionar o status quo e mudar como as coisas são feitas",
        s: { rebelde: 2, mago: 1 },
      },
      {
        t: "Construir algo sólido, com autoridade e legado real",
        s: { governante: 2, sabio: 1 },
      },
    ],
  },
  {
    q: "Como seu público costuma te descrever?",
    opts: [
      {
        t: "Próxima, acessível e fácil de se conectar",
        s: { pessoaComum: 2, cuidador: 1 },
      },
      {
        t: "Criativa, original e sempre surpreendendo",
        s: { criador: 2, comediante: 1 },
      },
      {
        t: "Especialista, confiável e que domina o assunto",
        s: { sabio: 2, governante: 1 },
      },
      {
        t: "Inspiradora — faz acreditar no que parecia impossível",
        s: { heroi: 2, mago: 1 },
      },
    ],
  },
  {
    q: "Qual dessas palavras melhor representa o seu posicionamento?",
    opts: [
      {
        t: "Autenticidade — ser exatamente quem sou, sem filtro",
        s: { explorador: 2, rebelde: 1 },
      },
      {
        t: "Transformação — mudo o antes e depois de quem me contrata",
        s: { mago: 2, heroi: 1 },
      },
      {
        t: "Leveza — facilito o que parecia complicado",
        s: { inocente: 2, comediante: 1 },
      },
      {
        t: "Excelência — padrão impecável em tudo que entrego",
        s: { governante: 2, sabio: 1 },
      },
    ],
  },
  {
    q: "Como você se comunica com o seu público?",
    opts: [
      {
        t: "Com calor humano, empatia e muita proximidade",
        s: { cuidador: 2, pessoaComum: 1 },
      },
      {
        t: "Com dados, argumentos sólidos e profundidade real",
        s: { sabio: 2, governante: 1 },
      },
      {
        t: "Com humor, leveza e criatividade inesperada",
        s: { comediante: 2, criador: 1 },
      },
      {
        t: "Com provocação — questiono o óbvio e incomodo o acomodado",
        s: { rebelde: 2, explorador: 1 },
      },
    ],
  },
  {
    q: "Se sua marca fosse um personagem, ela seria...",
    opts: [
      {
        t: "O mentor sábio que guia com conhecimento e experiência",
        s: { sabio: 2, governante: 1 },
      },
      {
        t: "O herói determinado que nunca desiste de quem está ao lado",
        s: { heroi: 2, cuidador: 1 },
      },
      {
        t: "O artista apaixonado pelo que cria e pelo impacto que gera",
        s: { amante: 2, criador: 1 },
      },
      {
        t: "O mágico que transforma o comum em algo extraordinário",
        s: { mago: 2, inocente: 1 },
      },
    ],
  },
  {
    q: "O que genuinamente te diferencia no mercado?",
    opts: [
      {
        t: "Minha metodologia única e os resultados que comprovo",
        s: { sabio: 2, heroi: 1 },
      },
      {
        t: "Minha estética, sensibilidade e olhar diferenciado",
        s: { amante: 2, criador: 1 },
      },
      {
        t: "Minha capacidade de transformar pessoas de dentro para fora",
        s: { mago: 2, cuidador: 1 },
      },
      {
        t: "Minha postura autêntica que não segue os padrões do mercado",
        s: { rebelde: 2, explorador: 1 },
      },
    ],
  },
  {
    q: "Qual dessas missões mais ressoa com o que você faz?",
    opts: [
      {
        t: "Trazer clareza e simplicidade para um mundo confuso",
        s: { inocente: 2, sabio: 1 },
      },
      {
        t: "Conectar pessoas e construir comunidade genuína",
        s: { pessoaComum: 2, cuidador: 1 },
      },
      {
        t: "Liderar pelo exemplo e inspirar quem está ao redor",
        s: { heroi: 2, governante: 1 },
      },
      {
        t: "Expandir horizontes e mostrar que existe outro caminho",
        s: { explorador: 2, mago: 1 },
      },
    ],
  },
  {
    q: "Como você lida com erros ou momentos difíceis no negócio?",
    opts: [
      {
        t: "Analiso com cuidado, aprendo e melhoro o processo",
        s: { sabio: 2, criador: 1 },
      },
      {
        t: "Enfrento de frente — mostro que sou capaz de superar qualquer coisa",
        s: { heroi: 2, governante: 1 },
      },
      {
        t: "Transformo em aprendizado e recomeço com mais sabedoria",
        s: { mago: 2, explorador: 1 },
      },
      {
        t: "Uso leveza e humor para não deixar pesar",
        s: { comediante: 2, pessoaComum: 1 },
      },
    ],
  },
  {
    q: "Que tipo de cliente você mais atrai — e mais gosta de atender?",
    opts: [
      {
        t: "Quem quer pertencer a algo maior e se sentir acolhido",
        s: { pessoaComum: 2, cuidador: 1 },
      },
      {
        t: "Quem quer resultados concretos e está pronto para agir",
        s: { heroi: 2, governante: 1 },
      },
      {
        t: "Quem está em busca de uma transformação profunda e real",
        s: { mago: 2, amante: 1 },
      },
      {
        t: "Quem quer experiências únicas e memoráveis",
        s: { criador: 2, explorador: 1 },
      },
    ],
  },
  {
    q: "Como você percebe o valor do seu trabalho?",
    opts: [
      {
        t: "Quero ser acessível — todo mundo merece o que ofereço",
        s: { inocente: 2, pessoaComum: 1 },
      },
      {
        t: "Entrego transformação real — meu preço reflete isso",
        s: { mago: 2, governante: 1 },
      },
      {
        t: "Construo relações duradouras — o preço justo vem disso",
        s: { cuidador: 2, amante: 1 },
      },
      {
        t: "Sou referência — o alto valor é parte do meu posicionamento",
        s: { sabio: 2, heroi: 1 },
      },
    ],
  },
  {
    q: "Qual o tom predominante do seu conteúdo?",
    opts: [
      {
        t: "Educativo e aprofundado — gosto de ensinar com substância",
        s: { sabio: 2, governante: 1 },
      },
      {
        t: "Inspiracional — faço as pessoas acreditarem no potencial delas",
        s: { heroi: 2, mago: 1 },
      },
      {
        t: "Leve, divertido e próximo — como conversa de amigo",
        s: { comediante: 2, pessoaComum: 1 },
      },
      {
        t: "Sensível e estético — cuido de cada detalhe visual e emocional",
        s: { amante: 2, criador: 1 },
      },
    ],
  },
  {
    q: "Se você escolhesse uma metáfora para o seu negócio, qual seria?",
    opts: [
      {
        t: "Um farol — ilumino o caminho de quem está perdido",
        s: { sabio: 2, heroi: 1 },
      },
      {
        t: "Um jardim — cuido, nutro e acompanho o crescimento",
        s: { cuidador: 2, inocente: 1 },
      },
      {
        t: "Uma explosão — chego causando impacto e sacudindo o que estava parado",
        s: { rebelde: 2, mago: 1 },
      },
      {
        t: "Uma bússola — ajudo a encontrar direção e autenticidade",
        s: { explorador: 2, sabio: 1 },
      },
    ],
  },
  {
    q: "O que você nunca abre mão na sua comunicação?",
    opts: [
      {
        t: "Honestidade e transparência absolutas — sem firula",
        s: { sabio: 2, inocente: 1 },
      },
      {
        t: "Impacto visual e experiência estética de alto nível",
        s: { amante: 2, criador: 1 },
      },
      {
        t: "Provocar reflexão — nunca quero ser fácil de ignorar",
        s: { rebelde: 2, mago: 1 },
      },
      {
        t: "Conexão genuína — quero que sintam que me conhecem",
        s: { pessoaComum: 2, cuidador: 1 },
      },
    ],
  },
  {
    q: "Como você quer que as pessoas se sintam depois de te seguir ou te contratar?",
    opts: [
      {
        t: "Empoderadas — prontas para agir e conquistar",
        s: { heroi: 2, governante: 1 },
      },
      {
        t: "Transformadas — diferentes por dentro, não só por fora",
        s: { mago: 2, sabio: 1 },
      },
      {
        t: "Acolhidas — como se finalmente encontraram o lugar certo",
        s: { cuidador: 2, pessoaComum: 1 },
      },
      {
        t: "Inspiradas — com vontade de ser mais autênticas e ousadas",
        s: { explorador: 2, rebelde: 1 },
      },
    ],
  },
];

let st = {
  phase: "welcome",
  name: "",
  brand: "",
  email: "",
  qi: 0,
  ans: [],
  sel: null,
  t3: [],
  enviado: false,
};

function set(p) {
  Object.assign(st, p);
  render();
}

function scores(a) {
  const s = {};
  Object.keys(ARC).forEach((k) => (s[k] = 0));
  a.forEach((oi, qi) => {
    Object.entries(QS[qi].opts[oi].s).forEach(
      ([k, v]) => (s[k] = (s[k] || 0) + v)
    );
  });
  return s;
}

function getTop3(a) {
  return Object.entries(scores(a))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([k, sc]) => {
      return { key: k, score: sc, ...ARC[k] };
    });
}

function montarRespostasDetalhadas(a) {
  return a.map((oi, qi) => ({
    pergunta: QS[qi].q,
    resposta: QS[qi].opts[oi].t,
  }));
}
async function submitNetlify(t3, pcts) {
  try {
    const body = new URLSearchParams({
      "form-name": "raio-x-arquetipos",
      nome: st.name,
      marca: st.brand || "—",
      email_cliente: st.email,
      arquetipos: `Principal: ${t3[0].name} (${pcts[0]}%) | Apoio 1: ${t3[1].name} (${pcts[1]}%) | Apoio 2: ${t3[2].name} (${pcts[2]}%)`,
    });

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    console.log("Netlify status:", res.status);
  } catch (e) {
    console.error("Erro no submit:", e); 
  }

  try {
    const respostas = montarRespostasDetalhadas(st.ans);
    const top3Payload = t3.map((arq, i) => ({
      name: arq.name,
      tag: arq.tag,
      pct: pcts[i],
    }));

    const resFn = await fetch("/.netlify/functions/enviar-relatorios", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: st.name,
        marca: st.brand,
        email: st.email,
        respostas,
        top3: top3Payload,
      }),
    });

    console.log("Envio do relatório PDF status:", resFn.status);
    return resFn.ok;
  } catch (e) {
    console.error("Erro ao enviar relatório PDF:", e);
  }
}

function next() {
  if (st.sel === null) return;
  const a = [...st.ans, st.sel];
  if (st.qi < QS.length - 1) {
    set({ ans: a, qi: st.qi + 1, sel: null });
  } else {
    const t3 = getTop3(a);
    set({ ans: a, sel: null, phase: "calc" });
    const tot = t3.reduce((s, a) => s + a.score, 0);
    const pcts = t3.map((a) => Math.round((a.score / tot) * 100));
    setTimeout(async () => {
      const ok = await submitNetlify(t3, pcts);
      set({ t3, phase: "results", enviado: ok });
    }, 1200);
  }
}

function rgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ].join(",");
}

function doInfo() {
  st.name = document.getElementById("fn").value.trim();
  st.brand = document.getElementById("fb").value.trim();
  st.email = document.getElementById("fe").value.trim();

  const erros = [];
  if (!st.name) erros.push("fn");
  if (!st.brand) erros.push("fb");
  if (!st.email || !st.email.includes("@")) erros.push("fe");

  document.querySelectorAll(".field").forEach((el) => {
    el.style.borderColor = "rgba(255,255,255,0.07)";
  });

  if (erros.length > 0) {
    erros.forEach((id) => {
      document.getElementById(id).style.borderColor = "#E24B4A";
    });
    return;
  }

  set({ phase: "quiz", qi: 0, ans: [], sel: null });
}

function setSel(i) {
  st.sel = i;
  document
    .querySelectorAll(".opt")
    .forEach((el, idx) => el.classList.toggle("sel", idx === i));
  const nb = document.getElementById("nxt");
  if (nb) nb.disabled = false;
}

function reset() {
  set({
    phase: "welcome",
    name: "",
    brand: "",
    email: "",
    qi: 0,
    ans: [],
    sel: null,
    t3: [],
    enviado: false,
  });
}

function render() {
  const r = document.getElementById("root");
  const { phase, name, brand, email, qi, sel, t3, enviado } = st;

  if (phase === "welcome") {
    r.innerHTML = `
<div style="animation:up .38s ease">
  <p class="tiny" style="margin-bottom:14px">por @biancarodrigues.sm · estratégia de marca</p>
  <div class="rule"></div>
  <h1 class="os" style="font-size:clamp(2.2rem,10vw,4rem);line-height:1.02;color:var(--y);margin-bottom:6px">RAIO-X<br>DA MARCA</h1>
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px">
    <div style="height:1px;background:var(--y);opacity:.3;flex:1"></div>
    <span class="os" style="font-size:.85rem;color:var(--c);opacity:.45;letter-spacing:.18em">ARQUÉTIPOS</span>
    <div style="height:1px;background:var(--y);opacity:.3;flex:1"></div>
  </div>
  <div style="background:#100e0c;border-left:3px solid var(--y);padding:18px 20px;margin-bottom:22px">
    <p style="font-size:11px;color:var(--y);font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-bottom:8px">O QUE É UM ARQUÉTIPO DE MARCA?</p>
    <p style="font-size:13px;color:rgba(237,227,204,.65);line-height:1.78;margin-bottom:8px">Arquétipos são padrões universais de personalidade que toda marca carrega — consciente ou não. Eles definem como você comunica, o que atrai e como as pessoas te percebem.</p>
    <p style="font-size:13px;color:rgba(237,227,204,.65);line-height:1.78">Descobrir os seus é o passo zero de qualquer estratégia de comunicação com identidade real.</p>
  </div>
  <p style="font-size:13px;color:var(--d);line-height:1.7;margin-bottom:28px">Em <strong style="color:var(--c)">15 perguntas</strong>, você descobre o arquétipo principal + 2 de apoio da sua marca.</p>
  <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
    <button class="btn" onclick="set({phase:'info'})">COMEÇAR →</button>
    <span class="tiny">≈ 5 minutos · gratuito</span>
  </div>
  <div style="margin-top:52px;display:flex;gap:18px;flex-wrap:wrap">
    ${["◯", "✦", "⬡", "♡", "◈", "✿", "△", "☓"]
      .map(
        (s) =>
          `<span style="font-size:1.6rem;color:var(--y);opacity:.18">${s}</span>`
      )
      .join("")}
  </div>
</div>`;
  } else if (phase === "info") {
    r.innerHTML = `
<div style="animation:up .38s ease">
  <p class="tiny" style="margin-bottom:16px">identificação</p>
  <h2 class="os" style="font-size:clamp(1.8rem,8vw,3rem);line-height:1.05;color:var(--y);margin-bottom:26px">QUEM<br>É VOCÊ?</h2>
  <div class="field-wrap"><label class="field-lbl">SEU NOME </label><input class="field" id="fn" placeholder="Como posso te chamar?" value="${name}"></div>
  <div class="field-wrap"><label class="field-lbl">MARCA OU NEGÓCIO</label><input class="field" id="fb" placeholder="Nome da marca" value="${brand}"></div>
  <div class="field-wrap"><label class="field-lbl">EMAIL</label><input class="field" id="fe" type="email" placeholder="para contato futuro" value="${email}"></div>
  <button class="btn fw" id="cont" ${
    !name.trim() ? "disabled" : ""
  } onclick="doInfo()" style="margin-top:8px">CONTINUAR →</button>
</div>`;
    document.getElementById("fn").addEventListener("input", (e) => {
      st.name = e.target.value;
      document.getElementById("cont").disabled = !st.name.trim();
    });
    document
      .getElementById("fb")
      .addEventListener("input", (e) => (st.brand = e.target.value));
    document
      .getElementById("fe")
      .addEventListener("input", (e) => (st.email = e.target.value));
  } else if (phase === "quiz") {
    const q = QS[qi];
    const pct = Math.round((qi / QS.length) * 100);
    r.innerHTML = `
<div style="animation:up .3s ease">
  <div class="prog-wrap">
    <div class="prog-meta"><span class="tiny">PERGUNTA ${String(
      qi + 1
    ).padStart(2, "0")} / ${
      QS.length
    }</span><span class="tiny">${name.toUpperCase()}</span></div>
    <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
  </div>
  <h2 style="font-size:clamp(1.15rem,3.5vw,1.55rem);font-weight:400;line-height:1.4;color:var(--c);margin-bottom:24px">${
    q.q
  }</h2>
  <div>${q.opts
    .map(
      (o, i) =>
        `<button class="opt${
          sel === i ? " sel" : ""
        }" onclick="setSel(${i})"><span class="opt-lt">${String.fromCharCode(
          65 + i
        )}.</span>${o.t}</button>`
    )
    .join("")}</div>
  <div style="display:flex;justify-content:flex-end;margin-top:10px">
    <button class="btn" id="nxt" ${
      sel === null ? "disabled" : ""
    } onclick="next()">${
      qi < QS.length - 1 ? "PRÓXIMA →" : "VER RESULTADO →"
    }</button>
  </div>
</div>`;
  } else if (phase === "calc") {
    r.innerHTML = `
<div style="text-align:center;padding:5rem 0;animation:up .38s ease">
  <span class="calc-sym">⬡</span>
  <h2 class="os" style="font-size:clamp(1.6rem,7vw,2.8rem);color:var(--y);margin-bottom:12px;line-height:1.05">CALCULANDO<br>SEUS ARQUÉTIPOS</h2>
  <p class="tiny" style="opacity:.5">mapeando sua essência...</p>
</div>`;
  } else if (phase === "results" && t3.length === 3) {
    const tot = t3.reduce((s, a) => s + a.score, 0);
    const pcts = t3.map((a) => Math.round((a.score / tot) * 100));
    const pa = t3[0];
    r.innerHTML = `
<div style="animation:up .38s ease">
  <p class="tiny" style="margin-bottom:8px">resultado · ${name}</p>
  <h2 class="os" style="font-size:clamp(1.8rem,8vw,3rem);color:var(--y);line-height:1.02;margin-bottom:6px">RAIO-X<br>DA MARCA</h2>
  ${
    enviado
      ? `<div class="sent-badge">✓ RESULTADOS ENVIADOS PARA A BIA</div>`
      : "<br>"
  }
  <div class="rule" style="margin:10px 0 22px"></div>

  <div class="arch-main">
    <div class="arch-top" style="background:${pa.c4}"></div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <p class="tiny" style="color:${pa.c4}">◈ ARQUÉTIPO PRINCIPAL</p>
      <span style="font-size:11px;font-weight:700;letter-spacing:.12em;color:${
        pa.c4
      };background:rgba(${rgb(pa.c4)},.12);padding:4px 12px">${pcts[0]}%</span>
    </div>
    <span class="arch-sym" style="color:${pa.c4}">${pa.sym}</span>
    <h3 class="os" style="font-size:clamp(1.9rem,7vw,2.8rem);color:${
      pa.c4
    };line-height:1;margin-bottom:6px">${pa.name}</h3>
    <p class="arch-tg">${pa.tag}</p>
    <p class="arch-desc">${pa.desc}</p>
    <p class="arch-dt"><span style="color:${
      pa.c4
    };font-weight:700">VOZ —</span> ${pa.voz}</p>
    <p class="arch-dt"><span style="color:${
      pa.c4
    };font-weight:700">PONTO FORTE —</span> ${pa.forte}</p>
    <p class="arch-dt" style="margin-bottom:0"><span style="color:${
      pa.c4
    };font-weight:700">ATENÇÃO —</span> ${pa.desafio}</p>
    <div class="sb-t"><div class="sb-f" style="width:${pcts[0]}%;background:${
      pa.c4
    }"></div></div>
    <p class="sb-l">REFERÊNCIAS — ${pa.ex}</p>
  </div>

  <div class="grid2">
    ${t3
      .slice(1)
      .map(
        (a, i) => `
    <div class="arch-sup">
      <div class="arch-top" style="background:${a.c4}"></div>
      <p class="tiny" style="color:${a.c4};margin-bottom:10px">APOIO ${
          i + 1
        }</p>
      <span class="arch-sym-sm" style="color:${a.c4}">${a.sym}</span>
      <h4 class="os" style="font-size:1.25rem;color:var(--c);line-height:1;margin-bottom:4px">${
        a.name
      }</h4>
      <p class="arch-tg">${a.tag}</p>
      <p class="arch-desc" style="font-size:12px">${a.desc}</p>
      <div>${a.kw.map((k) => `<span class="kw">${k}</span>`).join("")}</div>
      <div class="sb-t" style="margin-top:10px"><div class="sb-f" style="width:${
        pcts[i + 1]
      }%;background:${a.c4}"></div></div>
      <p class="sb-l">${pcts[i + 1]}% de compatibilidade</p>
    </div>`
      )
      .join("")}
  </div>

  <div class="cta-block">
    <p class="tiny" style="color:var(--y);margin-bottom:10px">QUER A ANÁLISE COMPLETA?</p>
    <h3 class="os" style="font-size:1.2rem;color:var(--c);margin-bottom:12px;line-height:1.2">Esses arquétipos revelam<br>muito sobre a sua marca.</h3>
    <p style="font-size:13px;color:rgba(237,227,204,.65);line-height:1.75;margin-bottom:20px">A análise estratégica aprofundada — com voz de comunicação, oportunidades únicas e ações práticas — é desenvolvida pela Bia de forma personalizada.</p>
    <div class="acts" style="margin-top:0">
      <a href="${BIA_IG}" class="btn" target="_blank">FALAR COM A BIA →</a>
    </div>
  </div>

  <div style="margin-top:20px">
    <button class="btn ghost" onclick="reset()">REFAZER O TESTE</button>
  </div>
  <p class="tiny" style="margin-top:22px;line-height:1.9">DESENVOLVIDO POR BIANCA RODRIGUES · @BIANCARODRIGUES.SM · ESTRATÉGIA DE MARCA</p>
</div>`;
  }
}

render();

const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const { Resend } = require("resend");

const resend = new resend(process.env.RESEND_API_KEY);

const EMAIL_DESTINO = "biancarodrigues.socialmedia@gmail.com";

const EMAIL_REMETENTE = "Raio-X da Marca <onboarding@resend.dev>";

function higCaracteres(texto) {
  if (!texto) return "";
  return String(texto)
    .replace(/→/g, "-")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
    .replace(/[^\x00-\xFF]/g, (char) => {
      return "";
    });
}

function quebrarTexto(font, texto, tamanho, larguraMax) {
  const palavras = texto.split(" ");
  const linhas = [];
  let linhaAtual = "";

  for (const palavra of palavras) {
    const teste = linhaAtual ? `${linhaAtual} ${palavra}` : palavra;
    const largura = font.widthOfTextAtSize(teste, tamanho);
    if (largura > larguraMax && linhaAtual) {
      linhas.push(linhaAtual);
      linhaAtual = palavra;
    } else {
      linhaAtual = teste;
    }
  }

  if (linhaAtual) linhaAtual.push(linhaAtual);
  return linhas;
}

async function gerarPDF(dados) {
  const { nome, marca, email, respostas, top3 } = dados;

  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StanderdFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margemEsq = 50;
  const larguraPagina = 595.28;
  const alturaPagina = 841.89;
  const larguraTexto = larguraPagina - marginEsq * 2;

  let page = pdfDoc.addPage([larguraPagina, alturaPagina]);
  let y = alturaPagina - 60;

  function novaPaginaSeNacessario(espacoNecessario) {
    if (y - espacoNecessario < 60) {
      page = pdfDoc.addPage([larguraPagina, alturaPagina]);
      y = alturaPagina - 60;
    }
  }

  function escreverTitulo(texto, tamanho = 18) {
    novaPaginaSeNecesserio(tamanho, +10);
    page.drawText(texto, {
      x: margemEsq,
      y,
      size: tamanho,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= tamanho + 10;
  }

  function escreveTexto(
    texto,
    tamanho = 11,
    bold = false,
    cor = rgb(0.2, 0.2, 0.2)
  ) {
    const font = bold ? fontBold : fontRegular;
    const linhas = quebrarTexto(font, texto, tamanho, larguraTexto);
    for (const linha of linhas) {
      novaPaginaSeNecessario(tamanho + 6);
      page.drawText(linha, {
        x: margemEsq,
        y,
        size: tamanho,
        font,
        color: cor,
      });
      y -= tamanho + 6;
    }
  }

  function linhasSeparadora() {
    novaPaginaSeNecessario(15);

    y -= 4;
    page.drawLine({
      start: { x: margemEsq, y },
      end: { x: larguraPagina - margemEsq, y },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8, 0.8),
    });
    y -= 14;
  }

  escreverTitulo("Raio-X da Marca", 22);
  escreverTexto(
    "Relatório completo de respostas - Arquétipos de Marca",
    11,
    false,
    rgb(0.4, 0.4, 0.4, 0.4)
  );
  y -= 10;
  linhasSeparadora();

  escreverTitulo("Dados do Cliente", 13);
  escreverTexto(`Nome: ${higCaracteres(nome)}`, 11, true);
  escreverTexto(`Marca\Negócio: ${higCaracteres(marca) || "-"}`, 11);
  escreverTexto(`E-mail: ${higCaracteres(email) || "-"}`, 11);

  y -= 6;

  linhasSeparadora();

  escreverTitulo("Respostas Detalhadas", 13);
  y -= 4;

  respostas.forEach((r, i) => {
    novaPaginaSeNecessario(50);
    escreverTexto(
      `${i + i}. ${higCaracteres(r.pergunta)}`,
      11,
      true,
      rgb(0.1, 0.1, 0.1)
    );
    escreverTexto(
      `- ${higCaracteres(r.resposta)}`,
      10.5,
      false,
      rgb(0.3, 0.3, 0.3)
    );

    y -= 8;
  });

  linhasSeparadora();
  escreverTexto(
    "Relatório gerado automaticamente pelo Raio-X da Marca - @biancarodrigues.sm",
    9,
    false,
    rgb(0.55, 0.55, 0.55)
  );
  y -= 10;
  linhasSeparadora();

  escreverTitulo("Dados do Cliente:", 13);
  escreverTexto(`Nome: ${higCaracteres(nome)}`, 11, true);
  escreverTexto(`Marca/Negócio: ${higCaracteres(marca) || "-"}`, 11);
  escreverTexto(`E-mail: ${higCaracteres(email) || "-"}`, 11);

  y -= 6;
  linhasSeparadora();

  escreverTitulo("Resultado - Arquétipos", 13);
  const labels = ["Principal", "Apoio 1", "Apoio 2"];
  top3.forEach((arq, i) => {
    escreverTexto(
      `${labels[i]}: ${higCaracteres(arq.name)} (${arq.pct}%)`,
      12,
      true
    );
    escreverTexto(higCaracteres(arq.tag), 10, false, rgb(0.45, 0.45, 0.458));

    y -= 4;
  });

  y -= 6;
  linhasSeparadora();

  escreverTexto("Respostas Detalhadas", 13);
  y -= 4;

  respostas.forEach((r, i) => {
    novaPaginaSeNacessario(50);
    escreveTexto(
      `${i + 1}. ${higCaracteres.apply(r.pergunta)}`,
      11,
      true,
      rgb(0.1, 0.1, 0.1)
    );
    escreverTexto(`- ${hig(r.resposta)}`, 10.5, false, rgb(0.3, 0.3, 0.3));

    y -= 8;
  });

  linhasSeparadora();
  escreverTexto(
    "Relatório gerado automaticamente pelo Raio-X da Marca - @biancarodrigues.sm",
    9,
    false,
    rgb(0.55, 0.55, 0.55)
  );

  const pdfBytes = await pdfDoc.save();
  return ArrayBuffer.from(pdfBytes);
}

exports.handler = async (event) => {
  if (event.httpMethon !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const dados = JSON.parse(event.body);
    const { nome, marca, email, respostas, top3 } = dados;

    if (!nome || !respostas || top3) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Dados incompletos." }),
      };
    }

    const pdfBuffer = await gerarPDF({
      nome,
      marca,
      email,
      respostas,
      top3,
    });
    const pdfBase64 = pdfBuffer.toString("base64");
    const { data, error } = await resend.emails.send({
      from: EMAIL_REMETENTE,
      to: EMAIL_DESTINO,
      subject: `Novo Raio-X: ${nome}`,
      hmtl: `
  <p>Novo resultado do quiz <strong>Raio-X da Marca</strong>.</p>
        <p><strong>Nome:</strong> ${nome}<br/>
        <strong>Marca:</strong> ${marca || "—"}<br/>
        <strong>E-mail:</strong> ${email || "—"}<br/>
        <strong>Arquétipo principal:</strong> ${top3[0].name} (${
        top3[0].pct
      }%)</p>
        <p>O relatório completo com todas as respostas está em anexo (PDF).</p>`,
      attachments: [
        {
          filename: `
            raio-x-${nome.replace(/\s+/g, "-").toLowerCase()}.pdf`,
          content: pdfBase64,
        },
      ],
    });

    if (error) {
      console.error("Error Resend:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Falha ao enviar e-mail.",
          detalhe: error,
        }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, id: data?.id }),
    };
  } catch (e) {
    console.error("Erro na function enviar-relatorio:", e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erro interno.",
        detalhe: e.message,
      }),
    };
  }
};

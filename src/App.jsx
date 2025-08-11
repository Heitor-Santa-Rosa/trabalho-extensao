import React from "react";

function Header() {
  return (
    <header className="bg-yellow-500 px-6 py-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-32" />
        <span className="text-lg font-semibold">
          Sabor que conquista o Floresta!
        </span>
      </div>
      <div className="flex gap-2 mt-3 md:mt-0">
        {["Promoção", "Sobre", "Info", "Cardápio"].map((btn) => (
          <button
            key={btn}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
          >
            {btn}
          </button>
        ))}
      </div>
    </header>
  );
}

function Promo() {
  return (
    <section className="bg-[#f4a73b] px-8 py-9 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Promoção do dia 🤤🔥</h2>
      <div className="bg-white rounded-lg shadow p-4 text-center max-w-xl">
        <img
          src="/promo-carne3.png"
          alt="Espetinho de Carne"
          className="rounded-lg mb-2"
        />
        <p className="text-lg font-semibold">Espetinho de Carne - R$ 7,00 🤑 </p>
      </div>
    </section>
  );
}

function MenuRanking() {
  const items = [
    { nome: "Espetinho de Frango", preco: "R$ 8,00", img: "/frango.png" },
    { nome: "Espetinho de Coraçãozinho", preco: "R$ 9,00", img: "/calabresa.png" },
    { nome: "Espetinho de Camarão", preco: "R$ 10,00", img: "/camarao.png" },
  ];
  return (
    <section className="bg-[#f4a73b] px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Menu de ranking dos mais vendidos 👌🏻</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.nome} className="bg-white rounded-lg shadow p-4 text-center">
            <img src={item.img} alt={item.nome} className="rounded-lg mb-2" />
            <p className="font-semibold">{item.nome}</p>
            <p className="text-gray-700">{item.preco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CardapioCompleto() {
  const cardapio = [
    { nome: "Espetinho de Carne 🐮", preco: "R$ 8,00" },
    { nome: "Espetinho de Frango 🐔", preco: "R$ 8,00" },
    { nome: "Espetinho de Coraçãozinho 🤎", preco: "R$ 9,00" },
    { nome: "Espetinho de Camarão 🦐", preco: "R$ 10,00" },
  ];
  return (
    <section className="bg-[#f4a73b] px-6 py-8 grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Cardápio completo 😋</h2>
        <div className="bg-white rounded-lg shadow p-4">
          <ul className="space-y-2">
            {cardapio.map((item, i) => (
              <li key={i} className="flex justify-between">
                <span>{item.nome}</span>
                <span>{item.preco}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4 flex justify-center">
        <img
          src="/cardapio.png"
          alt="Cardápio"
          className="rounded-lg border-2 border-gray-400"
        />
      </div>
    </section>
  );
}

function Recomendacoes() {
  const recs = [
    { nome: "Espetinho de Camarão", desc: "Porção de 6 unidades p/ prato, acompanhando legumes e vinagrete", img: "/rec-camarao.png" },
    { nome: "Espetinho de Coraçãozinho", desc: "Porção de 6 unidades p/ prato, acompanhando legumes e farofinha", img: "/rec-carne.png" },
  ];
  return (
    <section className="bg-[#f4a73b] px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Recomendações do Sérgio 👈🏻</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {recs.map((rec) => (
          <div key={rec.nome} className="bg-white rounded-lg shadow flex">
            <img src={rec.img} alt={rec.nome} className="w-1/2 rounded-l-lg" />
            <div className="p-4">
              <p className="font-semibold">{rec.nome}</p>
              <p className="text-sm text-gray-600">{rec.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Avaliacoes() {
  const reviews = [
    { texto: "Um lugar incrível!", autor: "Maria" },
    { texto: "Um espetinho fantástico!", autor: "João" },
    { texto: "Só recomendações!", autor: "Carlos" },
  ];
  return (
    <section className="bg-[#f4a73b] px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Avaliações Google 🥰🥰</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow">
            <p>"{rev.texto}"</p>
            <p className="text-sm text-gray-500 mt-2">— {rev.autor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 px-6 py-8">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <p className="font-bold">Fale conosco</p>
          <p>Sérgio Assados</p>
          <p>Rua Porto Rico, 644, Floresta</p>
          <p>Tel: (47) 99659-5839</p>
        </div>
        <a
          href="https://wa.me/5500000000000"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4 md:mt-0"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Promo />
      <MenuRanking />
      <CardapioCompleto />
      <Recomendacoes />
      <Avaliacoes />
      <Footer />
    </div>
  );
}
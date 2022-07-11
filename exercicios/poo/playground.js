class Livro {
  nome;
  categoria;
  autor;
  preco;
  constructor(nome, categoria, autor, preco) {
    this.nome = nome;
    this.categoria = categoria;
    this.autor = autor;
    this.preco = preco.toFixed(2);
  }

  mostraLivro() {
    console.log(`Nome do Livro: ${this.nome}\nCategoria: ${this.categoria}\nAutor: ${this.autor}\nPreço: R$${this.preco}\n`);
  }

  desconto(percentual) {
    console.log(`Antes o livro custava ${this.preco} e agora custa ${(this.preco - (this.preco * (percentual / 100))).toFixed(2)}, devido ao desconto.`);
  }
}

const AmorGelato = new Livro('Amor & Gelato', 'Romance', 'Jenna Evans Welch', 41.90);

AmorGelato.mostraLivro();

AmorGelato.desconto(5);
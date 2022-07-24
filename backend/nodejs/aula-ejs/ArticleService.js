const articles = [
  {
    id: 1,
    title: 'Inovação digital: conheça 9 setores em que ela é muito forte',
    description: 'A inovação digital está com tudo. Onde quer que você olhe, é provável que enxergue ao menos um pequeno impacto causado pela mudança do que antes era apenas analógico, seja por sua implementação nos processos tradicionais ou pela completa substituição do antigo pelo novo.'
  },
  {
    id: 2,
    title: 'O TikTok é o novo Google?',
    description: 'Se antes o Instagram era quem se preocupava abertamente com a “rede vizinha” (e continua, falaremos sobre isso abaixo), agora o Google entrou para a lista das empresas que estão com o modelo de negócios ameaçado pelo app chinês.'
  }
];

function getArticles() {
  return articles;
}

function getArticleById(articleId) {
  return articles.find(article => {
    article.id === Number(articleId);
  });
}

export { getArticles, getArticleById };
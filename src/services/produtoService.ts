import type { Produto, RespostaApi, InfoPreco } from '../types/produto';

const URL_API = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export const buscarProdutos = async (): Promise<Produto[]> => {
  try {
    const resposta = await fetch(URL_API);
    
    if (!resposta.ok) {
      throw new Error(`Erro HTTP! status: ${resposta.status}`);
    }
    
    const dados: RespostaApi = await resposta.json();
    
    if (!dados.success) {
      throw new Error('API retornou sucesso: false');
    }
    
    return dados.products;
  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    throw erro;
  }
};

export const formatarPreco = (centavos: number): string => {
  return (centavos / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

export const obterPrecoComDesconto = (
  preco: number,
  percentualDesconto: number = 4
): number => {
  return Math.round(preco * (1 - percentualDesconto / 100));
};

export const obterInfoPreco = (preco: number): InfoPreco => {
  const precoComDesconto = obterPrecoComDesconto(preco, 4);
  const valorParcela = Math.round(precoComDesconto / 2);
  
  return {
    original: formatarPreco(preco),
    comDesconto: formatarPreco(precoComDesconto),
    parcelamento: formatarPreco(valorParcela),
    valorParcela: formatarPreco(valorParcela)
  };
};

export const filtrarProdutosPorCategoria = (
  produtos: Produto[],
  categoria: string
): Produto[] => {
  if (categoria === 'VER TODOS' || !categoria) {
    return produtos;
  }
  return produtos;
};

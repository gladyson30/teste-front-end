import type { Produto } from '../../types/produto';
import { obterInfoPreco } from '../../services/produtoService';
import './CardProduto.scss';

interface CardProdutoProps {
  produto: Produto;
  aoClicar?: () => void;
}

export const CardProduto = ({ produto, aoClicar }: CardProdutoProps) => {
  const infoPreco = obterInfoPreco(produto.price);

  return (
    <div className="card-produto" onClick={aoClicar}>
      <div className="card-imagem">
        <img src={produto.photo} alt={produto.productName} />
      </div>
      
      <div className="card-conteudo">
        <p className="card-descricao">{produto.descriptionShort}</p>
        
        <div className="card-preco">
          <span className="preco-original">{infoPreco.original}</span>
          <span className="preco-destaque">{infoPreco.comDesconto}</span>
        </div>

        <p className="card-parcelamento">
          ou 2x de <strong>{infoPreco.parcelamento}</strong> sem juros
        </p>

        <div className="card-frete">
          <span>Frete grátis</span>
        </div>

        <button className="botao-comprar">COMPRAR</button>
      </div>
    </div>
  );
};
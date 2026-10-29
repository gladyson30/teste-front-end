import type { Produto } from '../../types/produto';
import { CardProduto } from '../CardProduto/CardProduto';
import './GradeProdutos.scss';

interface GradeProdutosProps {
  produtos: Produto[];
  onCardClick?: (produto: Produto) => void;
}

export const GradeProdutos = ({ produtos, onCardClick }: GradeProdutosProps) => {
  return (
    <div className="grade-produtos">
      <div className="grade-container">
        {produtos.map((produto, index) => (
          <CardProduto
            key={index}
            produto={produto}
            aoClicar={() => onCardClick?.(produto)}
          />
        ))}
      </div>
    </div>
  );
};
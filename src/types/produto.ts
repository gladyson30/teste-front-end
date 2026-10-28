export interface Produto {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface RespostaApi {
  success: boolean;
  products: Produto[];
}

export interface InfoPreco {
  original: string;
  comDesconto: string;
  parcelamento: string;
  valorParcela: string;
}

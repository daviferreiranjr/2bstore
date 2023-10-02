
<img src="https://raw.githubusercontent.com/daviferreiranjr/2bstore/44f91f15a91e38f76efd6af4c4d74b03b10e34e3/src/assets/logotipo.svg" alt="Logo 2bStore">

## Visão Geral

A 2b Store é uma loja online de moda onde os usuários podem navegar e comprar uma ampla variedade de produtos de moda, incluindo roupas, calçados e acessórios. Esta aplicação é projetada para fornecer uma experiência de compra conveniente e eficiente aos usuários, permitindo que eles visualizem detalhes do produto, adicionem itens ao carrinho, removam produtos e acompanhem o valor total faturado para seus pedidos.

## Funcionalidades

### Listagem dos Produtos

- Os usuários podem visualizar uma lista de produtos disponíveis para compra.
- Cada produto é exibido com uma imagem, nome, preço e outras informações relevantes.
- Os produtos são organizados em categorias para facilitar a navegação.

### Página de Detalhamento do Produto

- Os usuários podem clicar em um produto para ver mais detalhes.
- Na página de detalhamento do produto, os usuários podem ver imagens adicionais, descrição, tamanhos disponíveis, preço original e preço atual (com desconto, se aplicável).

### Adição e Remoção de Itens no Carrinho

- Os usuários podem adicionar produtos ao carrinho clicando no botão "Adicionar ao Carrinho" na página de detalhamento do produto.
- Os produtos adicionados são exibidos no carrinho de compras no canto superior direito.
- Os usuários podem remover produtos do carrinho clicando no ícone "Lixeira" ao lado do produto no carrinho.

### Contabilização de Itens Iguais no Carrinho

- Itens idênticos adicionados ao carrinho são agrupados em uma única entrada com a contagem de quantidade.
- Por exemplo, se um usuário adicionou 3 camisetas iguais, o carrinho exibirá "Camiseta X3" com um total de 3 camisetas no carrinho.

### Soma do Valor Total Consumido

- O carrinho de compras exibe o valor total da compra, que é atualizado automaticamente quando os produtos são adicionados ou removidos.
- Os preços são somados com base na quantidade de cada item no carrinho.

## Como Rodar o Projeto Localmente

Para rodar a aplicação 2b Store localmente em sua máquina, siga estas etapas:

1. **Clone o Repositório**:
   - Abra seu terminal.
   - Navegue até o diretório onde deseja clonar o projeto.
   - Execute o seguinte comando:

   ```bash
   git clone https://github.com/seu-usuario/2b-store.git
   ```

2. **Instale as Dependências**:
   - Navegue até o diretório do projeto:

   ```bash
   cd 2b-store
   ```

   - Execute o seguinte comando para instalar as dependências:

   ```bash
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento**:
   - Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

   ```bash
   npm start
   ```

4. **Acesse a Aplicação**:
   - Abra seu navegador da web e acesse [http://localhost:3000](http://localhost:3000).
   - Você deve ver a aplicação 2b Store em execução localmente.

## Tecnologias Utilizadas

- [React](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces de usuário.
- [React Router](https://reactrouter.com/): Biblioteca de roteamento para criar páginas de detalhamento de produtos e navegação.
- [Styled Components](https://styled-components.com/): Biblioteca para estilização de componentes.

## Autor

- [Davi Ferreira](https://github.com/daviferreiranjr)
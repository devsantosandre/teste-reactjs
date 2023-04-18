# Instruções para execução do teste:

Este teste tem como objetivo avaliar as habilidades do candidato em desenvolvimento de aplicações com React JS. O candidato deverá completar algumas tarefas práticas que envolvem o uso de componentes, rotas, requisições HTTP, gerenciamento de estado e outros conceitos chave do React. 

Ao concluir o teste, o candidato deverá fornecer o código fonte e uma descrição das decisões de design e escolhas técnicas que foram feitas durante o desenvolvimento no arquivo `README.md`.

**O teste deve ser entregue  até dia 22/04/2023 às 12:00**


***O iniciar o teste deverá seguir os seguintes passos:***
 1. Deve-se fazer o download da pasta com o projeto compactado.
 2. Descompactar a pasta
 3. Acessar a pasta do projeto e executar o comando `git init`.
 3. A partir do iniciado realizar uma cópia do arquivo `.env.exampl`e `para .env`.
 4. Instalar as dependências utilizando `npm install`.
 5. Executar a aplicação utilizando `npm run start`.

## Desafio do teste:

***O desafio consiste em:***
1. Deve ser criado na tela inicial do projeto um input de pesquisa de serviços e um botão para iniciar a busca.
2. O usuário após digitar parte do nome (ou nome completo) do serviço deve clicar no botão de busca e ser redirecionado para uma página com a listagem de serviços encontrados.
 ***Informações que devem serem mostradas:
	Nome do serviço, lista de públicos específicos, nome do órgão, total de avaliação e última atualização.***
4. O usuário poderá interagir com a lista clicando em um serviço e sendo direcionado para uma nova página contendo  as informações detalhadas do serviço. 
	***Informações que devem serem mostradas:
	Nome do serviço, lista de públicos específicos, se o serviço é agendável, nome do órgão, descrição, categoria, requisitos,  publico, tempos  do serviço, custos, lista da jornada do serviço,  lista de unidades que atendem  e total de avaliação .***
5. É importante manter em todas as páginas um input de pesquisa facilitando a usabilidade assim o usuário não precisa voltar a página inicial para fazer uma nova busca.

    ***Observações sobre UI/UX:***
	Para construção UI sinta-se a vontade para montar as telas de acordo com suas preferência porém o uso dos componentes da biblioteca  [MATERIAL-UI](https://v4.mui.com/pt/) é **obrigatório**, a mesma já está inserida como dependência do projeto na **versão  4**

***Desafios extras (Para melhorar sua colocação):***
1. Criar um filtro para ordenar a lista de serviços por ordem alfabética.
2. Criar um filtro para ordenar a lista de serviços por ordem de avaliação.
3. Criar um filtro para ordenar a lista de serviços por ordem de atualização.
4. Adicionar recursos de paginação.
5. Utilização de Context API.
6. Portar o projeto para o framework [NextJS](https://nextjs.org/)
## Sobre a entrega:
O projeto deve ser entregue via [gitlab](https://gitlab.com/) em um reposítório privado e o candidato deve adicionar os seguintes usuários para realizar a avaliação: 
 - [@martinsgpgabriel](https://gitlab.com/martinsgpgabriel)
 - [@juniorsntsdev](https://gitlab.com/juniorsntsdev)
 - [@vitorHugo](https://gitlab.com/vitorHugo)
 - [@mausilva828](https://gitlab.com/mausilva828)
**O teste deve ser entregue  até dia 22/04/2023 às 12:00**
Importante confirmar responder o confirmando que o projeto foi entregue.


## Informações técnicas para execução do desafio:

** CREDENCIAIS**
|API DE SERVIÇOS| |
|--|--|
| URL | https://sgservicos-master.govone.digital/api/cms/servicos/  |
|Chave de API| Api-Key Gtu26bKx.vfEpmpViYKg9vnqYqV7LZYd9zVwdgnL3 |

 - Para consultar os serviços é necessário passar como parâmetros `search` com nome completo ou parte do nome do serviço e a flag `ativo=true`  e o opcional `page` com o número da página para listar apenas o serviços ativos . A url de consulta será **[GET]**

> Campos do header para requisição:

| **Campo** | **Valor** |
|--|--|
|Content-Type  | application/json |
|Authorization| Api-Key token|

 > Parâmetros para consultar serviço:

|Campo| Valor |
|--|--|
| ativo | true |
| search|  Nome ou parte do nome do serviço que deseja buscar|
| page |  número da página|


| Exemplo de URL  |
|--|
| https://sgservicos-master.govone.digital/api/cms/servicos/?search=CARTEIRA&ativo=true&page=1 |

 - Para mostrar os dados de um serviço específico é necessário passar como parâmetro `slug` com o slug de identificação do serviço. A url de consulta será **[GET]**

> Campos do header para requisição:

| **Campo** | **Valor** |
|--|--|
|Content-Type  | application/json |
|Authorization| Api-Key token|

 > Parâmetros para pegar o serviço específico:

|Campo| Valor |
|--|--|
| slug|  slug de identificação do serviço|

| Exemplo de URL  |
|--|
| https://sgservicos-master.govone.digital/api/cms/servicos/?slug=emitir-carteira-nacional-de-habilitacao-cnh-definitiva172|

**Outros aspectos avaliados:** 

 - Adaptabilidade ao projeto já iniciado.
 - O código deve ser limpo, organizado e bem documentado. Os nomes das variáveis, funções e componentes devem ser descritivos.
 - Uso do git. (Commit bem descritos).
 - Refatoração e apontamento de melhorias no projeto.


**Dúvidas responder este email (vitor.hugo@govone.digital):** 
___

**Não tenha medo de colocar seus conhecimentos à prova e continuar aprendendo e evoluindo como desenvolvedor. Boa sorte!"**
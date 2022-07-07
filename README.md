# API usando Websocket com Socket.IO

![GitHub repo size](https://img.shields.io/github/repo-size/neanderdev/ignite-node-websocket?style=for-the-badge)
![GitHub languages](https://img.shields.io/github/languages/count/neanderdev/ignite-node-websocket?style=for-the-badge)
![GitHub language top](https://img.shields.io/github/languages/top/neanderdev/ignite-node-websocket?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/neanderdev/ignite-node-websocket?style=for-the-badge)

> 🚀 Aplicação desenvolvida no Ignite curso da Rocketseat na trila de NodeJs, desenvolvida uma API com Express e Socket.IO para comunicação em tempo real, com banco de dados MongoDB rodando no Docker.

## 🚀 Tecnologias
[![NODEJS](https://img.shields.io/badge/Node-green?style=for-the-badge&logo=NODE.js&logoColor=white)](https://nodejs.org/en/)
[![TYPESCRIPT](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)
[![EXPESS](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/pt-br/)
[![DOCKER](https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/)
[![MONGODB](https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/docs/)

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão mais recente de `<GIT / NodeJS / Yarn / Docker>`.
* Você tem uma máquina `<Windows / Linux / Mac>`.

## 🚀 Rodando API na sua máquina

Para rodar a api na sua máquina, siga estas etapas:

Clone this repository
```
$ git clone https://github.com/neanderdev/ignite-node-websocket.git
```

Go into the repository
```
$ cd ignite-node-websocket
```

Install dependencies
```
$ yarn
```

Antes de iniciar a aplicação, criar uma imagem do mongodb no docker, comando abaixo:
```
# Run the image mongodb
$ docker run --name mongodb -p 27017:27017 -d -t mongo
```

Inicialar a aplicação
```
# Run the app
$ yarn dev
```

## 📫 Contribuindo para a API
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir com a API, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars3.githubusercontent.com/u/62663706" width="100px;" alt="Foto do Neander de Souza no GitHub"/><br>
        <sub>
          <b>Neander de Souza</b>
        </sub>
      </a>
    </td>    
  </tr>
</table>

# Guia de Infraestrutura: Raspberry Pi + Next.js

Este guia mostra como subir a sua aplicação no Raspberry Pi usando Docker, com atualização contínua automatizada (Watchtower) e como expor para a internet usando o domínio `moodle-tutorial.rasppi.cloud`.

## 1. Subindo o App no Raspberry Pi

Conecte-se via SSH no seu Raspberry Pi e certifique-se de que o **Docker** e **Docker Compose** estão instalados.
Copie o arquivo `docker-compose.yml` deste projeto para uma pasta no Raspberry, por exemplo `~/moodle-app/`.

Dentro dessa pasta, rode:
```bash
docker-compose up -d
```

O que isso faz?
- **Serviço Web:** Baixa a imagem `ghcr.io/SEU-USUARIO/moodle-tutorial:latest` (compilada pelas Github Actions) e a roda na porta `9800`.
- **Watchtower:** Fica monitorando o Github Container Registry. Se o Github Actions subir uma nova imagem (porque você fez um `git push`), o Watchtower baixa a nova imagem e reinicia o serviço automaticamente em cerca de 5 minutos!

*Nota: Não esqueça de alterar `SEU-USUARIO` no `docker-compose.yml` para o seu usuário do Github real.*

## 2. Expondo na Internet (Cloudflare Tunnels)

Como seu Raspberry Pi muito provavelmente está atrás de um roteador doméstico (NAT), a melhor forma e mais segura de expor a porta 9800 para o domínio `moodle-tutorial.rasppi.cloud` é usar o **Cloudflare Tunnels** (Zero Trust).

1. Crie uma conta no [Cloudflare Zero Trust](https://one.dash.cloudflare.com/).
2. Vá em **Access > Tunnels** e clique em **Create a tunnel**.
3. Escolha o ambiente "Debian/Ubuntu 64-bit ARM" (para o Raspberry Pi 4).
4. O Cloudflare gerará um comando (começa com `cloudflared service install...`). Rode esse comando no terminal do seu Raspberry Pi.
5. Na tela seguinte do painel do Cloudflare (Public Hostname):
   - **Subdomain:** (deixe em branco ou coloque www)
   - **Domain:** Selecione `moodle-tutorial.rasppi.cloud` (o domínio deve estar registrado no Cloudflare).
   - **Service:** Type: `HTTP` | URL: `localhost:9800`
6. Salve! 

Pronto, seu Raspberry Pi agora serve a página globalmente com certificado SSL grátis do Cloudflare! Nenhuma porta precisa ser aberta no seu roteador.

## 3. Fluxo de Trabalho (CI/CD)

Sempre que você quiser atualizar o código (mudar um texto, adicionar um capítulo):
1. Altere os arquivos localmente.
2. Faça o commit e push para a branch `main`:
   ```bash
   git add .
   git commit -m "Nova atualização"
   git push origin main
   ```
3. A **GitHub Action** (configurada em `.github/workflows/deploy.yml`) vai compilar o Docker especificamente para processadores ARM64.
4. O **Watchtower** no Raspberry Pi detecta a mudança, puxa a imagem e reinicia o serviço sozinho.
5. Acesse `http://moodle-tutorial.rasppi.cloud` e veja a mágica!

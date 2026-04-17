# Identidade Visual e Parâmetros - Preventiva Este

## 1. Identidade Visual

### Cores Principais
- **Primária (Amarelo)**: `#EAB308` | Tailwind: `yellow-500`
- **Secundária (Vinho)**: `#4d2a36`
- **Texto Principal**: `#374151` | Tailwind: `gray-700`
- **Texto Claro**: `#F3F4F6` | Tailwind: `gray-100`

### Logo
- **Arquivo**: `/public/logo-preventiva-este.png` *(adaptar do logo Centro)*
- **Alt Text**: "Logo Preventiva Este"

---

## 2. Informações de Contato
- **Telefone/WhatsApp**: `+34 637 003 793`
- **Email**: `contacto@preventivaeste.com`
- **Website**: `https://preventivaeste.com`
- **Áreas de Atuação**: Barcelona, L'Hospitalet de Llobregat, Badalona, Sabadell, Terrassa, Sant Cugat del Vallès e Área Metropolitana de Barcelona.

---

## 3. TODOs antes de publicar

### Obrigatório:
- [ ] Fazer upload do **logo** adaptado como `/public/logo-preventiva-este.png` *(atualmente usa placeholder do preventivasur)*
- [x] Copiar imagens do preventivasur: `gallery-1.jpg` até `gallery-6.jpg`, `hero-new.jpg`, `img-1.jpg` até `img-6.jpg`, vídeo `.mp4`
- [ ] Configurar **Supabase** separado e criar `.env.local` com as credenciais (ver `.env.example`)
- [ ] Criar conta em **web3forms.com** para `contacto@preventivaeste.com` e atualizar `access_key` em `ContactSection.tsx`
- [ ] Criar **Google Tag Manager** e substituir `GTM-PLACEHOLDER` em `layout.tsx`
- [ ] Configurar **Google Sheets** script e atualizar `YOUR_GOOGLE_SHEETS_SCRIPT_URL` em `ContactSection.tsx`

### Opcional:
- [x] Adicionar Instagram próprio da Preventiva Este no `Footer.tsx` e `Gallery.tsx` *(links apuntam a @preventivaeste)*
- [ ] Adicionar token de verificação do Google Search Console em `layout.tsx`

---

## 4. Configuração Técnica
- **Framework**: Next.js 16+ (App Router)
- **Estilização**: Tailwind CSS v4
- **Analytics**: GTM-PLACEHOLDER *(substituir pelo ID real)*

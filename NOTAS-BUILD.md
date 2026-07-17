# passportofficefinder.com — BUILD COMPLETO (madrugada 17/07/2026)

## Estado: listo para deploy — commit 331c7b87, repo quiwistore/passportofficefinder

- 13.400 paginas: 7.471 /facility/ + 5.832 /[estado]/[ciudad]/ + 57 /[estado]/ + 27 /agency/ + 6 guias + hub agencias + search + core
- Identidad diferenciada de la red: navy #1c2e4a / dorado #b8933d / crema, Source Serif 4 + Public Sans, search-first, fichas sin sidebar (mapa arriba), cards horizontales, band "not the U.S. Department of State"
- Datos: facilities del JSON oficial iafdb (bitmask verificado contra codigo fuente), 27 agencias del JSON-LD oficial de travel.state.gov, fees 2026 verificados (book $130+$35, renewal $130, child $135, expedited +$60, delivery ~$23, agency 877-487-2778 / 14 dias / life-or-death 72h)
- QA: JSON-LD 0 errores (muestra 1.200 pags), paridad sitemap 13.399=13.399, 200s
- Clave IndexNow: a86a00548da847dca0033a9021f9365e (dentro del dist), payload data/indexnow-payload.json, scripts/indexnow.sh con guard

## Pendiente (Agus):
1. Cloudflare: passportofficefinder.com -> A 5.161.45.34, DNS-only
2. Runcloud (server US): webapp -> repo quiwistore/passportofficefinder -> public path /dist -> SSL -> Deploy Now
3. Avisar a Claude: verificacion 200s + IndexNow + GSC + Bing

## Mantenimiento futuro:
- Refresh del dataset: curl -A "Chrome UA" -e "https://iafdb.travel.state.gov/" https://iafdb.travel.state.gov/data/Facilities.json + re-procesar (script en historial de chat) + rebuild
- Fees: revisar travel.state.gov ante cambios de fee schedule

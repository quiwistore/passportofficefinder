# passportofficefinder.com — estado al 17/07/2026

## Listo en disco
- data/facilities-clean.json: 7.471 facilities decodificadas (57 estados, 5.832 ciudades, horarios legibles, flags accessible/photoOnsite/photoNearby confirmados contra el codigo fuente oficial: bit0/1/2, tel formateado, flag usps)
- data/facilities.json: crudo oficial (iafdb.travel.state.gov/data/Facilities.json — actualizacion = un curl con UA Chrome + referer)
- data/agencies-list.json: 27 agencias regionales (scrapear ficha por ficha: direccion/tel/horario en travel.state.gov, Akamai requiere Chrome con espera de challenge)

## Pendiente del build (sesion nueva)
1. Scrape 27 fichas de agencias via Chrome (batch navigate+extract)
2. Verificar fees oficiales 2026 (execution $35, book $130 adulto, expedited +$60, online renewal) + processing times actuales — 1 busqueda con fuentes travel.state.gov
3. Build Astro con IDENTIDAD NUEVA (diferenciacion pedida por Agus):
   - Paleta pasaporte US: navy #1c2e4a + dorado #b8933d + crema; serif display para titulos
   - Search-first: hero con buscador ZIP/ciudad; fichas SIN sidebar, 1 columna, mapa arriba
   - Cards horizontales tipo lista (no grid 3-col)
   - URLs: /[stateSlug]/ (57) + /[stateSlug]/[citySlug]/ (5.832) + /facility/[slug]/ (7.471) + /agency/[slug]/ (27)
   - Badges: Accessible / Photo on-site / link directo scheduler USPS por facility
   - Guias (CPC oro): /expedited-passport/ /passport-appointment/ /walk-in-passport/ /passport-fees/ /how-long-does-a-passport-take/ /passport-at-the-post-office/ + hub agencias
   - ~13.400 paginas — el mayor de la red
4. Clave IndexNow ANTES del deploy; repo quiwistore/passportofficefinder; server US 5.161.45.34

## Research (cerrado)
- Directorio: acceptance facility near me 6.800/KD2 + walk-in 7.800/KD3 + ciudades KD0-10 CPC $45-160
- Oro: expedited ~35.000 sumado KD5-30 CPC $160-350; appointment 37.000/KD7
- SERPs: .gov + bibliotecas DR35 + nicheros en AIO — hiperlocal blando

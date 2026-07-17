import facilities from '../data/facilities.json';
import agencies from '../data/agencies.json';
import { guides } from '../data/guides.js';
const BASE = 'https://passportofficefinder.com';
export function GET() {
  const r = ['/', '/search/', '/regional-passport-agencies/', '/about/', '/contact/', '/privacy/'];
  for (const g of guides) r.push(`/${g.slug}/`);
  for (const a of agencies) r.push(`/agency/${a.slug}/`);
  const st = new Set(), ci = new Set();
  for (const f of facilities) {
    r.push(`/facility/${f.slug}/`);
    st.add(f.stateSlug);
    ci.add(`${f.stateSlug}/${f.citySlug}`);
  }
  for (const s of st) r.push(`/${s}/`);
  for (const c of ci) r.push(`/${c}/`);
  const u = [...new Set(r)];
  const today = new Date().toISOString().split('T')[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    u.map(x => `<url><loc>${BASE}${x}</loc><lastmod>${today}</lastmod></url>`).join('\n') + `\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}

/**
 * Static prerender step, run after the client and SSR builds.
 * Injects the server-rendered markup into dist/index.html so crawlers
 * (and users on slow connections) receive the full page content immediately.
 */
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST_DIR = path.resolve('dist');
const SSR_DIR = path.resolve('dist-server');
const ROOT_PLACEHOLDER = '<div id="root"></div>';

const { render } = await import(pathToFileURL(path.join(SSR_DIR, 'entry-server.js')).href);
const template = await readFile(path.join(DIST_DIR, 'index.html'), 'utf-8');

if (!template.includes(ROOT_PLACEHOLDER)) {
  throw new Error(`Prerender failed: "${ROOT_PLACEHOLDER}" not found in dist/index.html`);
}

const html = template.replace(ROOT_PLACEHOLDER, () => `<div id="root">${render()}</div>`);
await writeFile(path.join(DIST_DIR, 'index.html'), html);
await rm(SSR_DIR, { recursive: true, force: true });

console.log('Prerendered dist/index.html');

// Packages the theme as dist/for-women-who.zip, ready to upload in Ghost › Settings › Design › Change theme › Upload.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const out = path.join(dist, 'for-women-who.zip');
fs.mkdirSync(dist, { recursive: true });
if (fs.existsSync(out)) fs.unlinkSync(out);

const include = ['package.json', 'README.md', 'routes.yaml', 'assets', 'partials'].concat(
    fs.readdirSync(root).filter((f) => f.endsWith('.hbs'))
);
execFileSync('zip', ['-r', '-q', out].concat(include).concat(['-x', '*.DS_Store']), { cwd: root, stdio: 'inherit' });
console.log('Created ' + path.relative(root, out));

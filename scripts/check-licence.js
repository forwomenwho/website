// Refuses to test or package the theme if the Mélodrame font file is present,
// unless the owner has confirmed the licence covers website use.
// Usage once confirmed: MELODRAME_LICENSED=yes npm run zip
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const found = [];

(function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (['node_modules', '.git', 'dist'].includes(entry.name)) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (/m[eé]lodrame/i.test(entry.name) && /\.(woff2?|ttf|otf|eot)$/i.test(entry.name)) found.push(path.relative(root, full));
    }
})(root);

if (found.length && process.env.MELODRAME_LICENSED !== 'yes') {
    console.error('\nStopped: the Relationship of Mélodrame font file is in the theme:\n  ' + found.join('\n  '));
    console.error('\nIts licence is personal use only until the designer confirms website use.');
    console.error('Remove the file, or once the licence is confirmed run: MELODRAME_LICENSED=yes npm run zip\n');
    process.exit(1);
}
console.log(found.length ? 'Mélodrame font included (licence confirmed).' : 'Licence check: no Mélodrame font file in the theme.');

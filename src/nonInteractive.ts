import * as fs from 'fs';
import { fmt, printEquation, solve } from './utils';

function nonInteractive(filePath: string): void {
    if (!fs.existsSync(filePath)) {
        console.log(`file ${filePath} does not exist`);
        process.exit(1);
    }

    let content: string;
    try {
        content = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        console.log(`invalid file format`);
        process.exit(1);
    }

    const parts = content.trim().split(/\s+/);
    if (parts.length !== 3) {
        console.log(`invalid file format`);
        process.exit(1);
    }

    const [sa, sb, sc] = parts;
    const a = parseFloat(sa);
    const b = parseFloat(sb);
    const c = parseFloat(sc);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log(`invalid file format`);
        process.exit(1);
    }
    if (a === 0) {
        console.log(`Error. a cannot be 0`);
        process.exit(1);
    }

    printEquation(a, b, c);
    const roots = solve(a, b, c);
    if (roots.length === 0) {
        console.log(`There are 0 roots`);
    } else if (roots.length === 1) {
        console.log(`There are 1 roots x1 = ${fmt(roots[0])}`);
    } else {
        console.log(`There are 2 roots x1 = ${fmt(roots[0])} x2 = ${fmt(roots[1])}`);
    }
}

export default nonInteractive;
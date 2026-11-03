import { items } from './data.js';
import { byCategory, search, top } from './catalog.js';
import { writeFile } from 'node:fs/promises';

const [cmd, filter] = process.argv.slice(2);

// Commands

switch(cmd) {
    case 'list':
        console.log(items);
        break;

    case 'category':
        console.log(byCategory(items, filter));
        break;

    case 'search':
        console.log(search(items, filter));
        break;

    case 'top':
        console.log(top(items, Number(filter)));
        break;

    case 'report': {
        const categories = items.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
        }, {});

        const report = {
            count: items.length,
            total: items.reduce((sum, item) => sum + item.price, 0),
            categories,
            top3: top(items, 3)
        };

        await writeFile(
            'report.json',
            JSON.stringify(report, null, 2),
            'utf8'
        );
        break;
    }

    default:
        console.log('Commands: list, category, search, top, report');
}


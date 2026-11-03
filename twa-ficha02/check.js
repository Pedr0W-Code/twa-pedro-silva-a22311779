import assert from 'node:assert/strict';

import { items } from './data.js';
import { byCategory, search, top } from './catalog.js';

// Test byCategory
assert.equal(byCategory(items, 'book').length, 4);

// Test search
assert.equal(search(items, 'Clean Code').length, 1);

// Test top
assert.equal(top(items, 3).length, 3);
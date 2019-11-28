import refreshList from './components/menu.js';
import data from './db/menu.json';
import refs from './utils/refs.js';
import changeTheme from './components/theme.js';

refreshList(data, refs.menu);



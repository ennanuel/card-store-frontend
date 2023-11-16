export function getPathTitle (path) {
    const paths = handlePath(path);
    const pathTitle = paths[paths.length - 1]?.title;
    return pathTitle;
}

function handlePath(path) {
    return handlePathType(path);
};

function handlePathType(path) { 
    let paths = [];
    if (/\/cards\//.test(path)) paths = handleCardsPath(path);
    if (/\/card\//.test(path)) paths = handleSingleCardPath(path);
    if (/\/order\//.test(path)) paths = handleSingleOrderPath(path);
    if (/\/orders\//.test(path)) paths = handleOrdersPath(path);
    if (/\/search\//.test(path)) paths = handleSearchPath(path);
    if (/\/add-card/.test(path)) paths = [{ title: 'Add Card', link: path }];
    if (/\/cart/.test(path)) paths = [{ title: 'Your Cart', link: path }];
    if (/\/pay/.test(path)) paths = [{ title: 'Check Out', link: path }];
    if (/\/success/.test(path)) paths = [{ title: 'Payment Successful', link: path }];
    if (/\/user\/details/.test(path)) paths = [{ title: 'Account Details', link: path }];
    if (/\/user\/edit/.test(path)) paths = [{ title: 'Edit Your Details', link: path }];
    if (/\/login/.test(path)) paths = [{ title: 'Card Store - Login', link: path }];
    if (/\/register/.test(path)) paths = [{ title: 'Card Store - Register', link: path }];
    return createPath(paths);
};
function handleSingleCardPath(path) { 
    const matchName = path.match(/\/(\w|\d)+(\+(\w|\d)+)*$/i);
    const playerName = matchName[0].replace(/(\W)+/g, ' ');
    const cardsPath = { title: 'Cards', link: `/cards/first/${playerName[1]}` };
    const cardPath = { title: `${playerName} Card`, link: path };
    const createdPaths = [cardsPath, cardPath]
    return createdPaths;
};
function handleCardsPath(path) { 
    const fetchType = path.match(/(first|middle|last|rating|price|team|sport)/);
    const typeName = fetchType[0];
    const capitalizedTitle = typeName[0].toUpperCase() + typeName.substring(1,);
    const pathTitle = /(first|middle|last)/.test(typeName) ? `${capitalizedTitle} Name` : capitalizedTitle;
    const title = `Cards by ${pathTitle}`;
    const createdPaths = [{ title, link: path }];
    return createdPaths;
};
function handleSingleOrderPath(path) { 
    const orderId = path.match(/\/(\w|\W|\d)+$/i)[0];
    const orderPath = { title: `${orderId.replace('/', '')}`, link: path };
    const ordersPath = { title: 'Your Orders', link: '/orders/all/0' };
    const createdPaths = [ordersPath, orderPath]
    return createdPaths;
};
function handleOrdersPath(path) { 
    const ordersPath = { title: 'Your Orders', link: '/orders/all/0' };
    return [ordersPath];
};
function handleSearchPath(path) { 
    const searchValue = path.match(/\/(\w|\W|\d)+$/i)[0];
    const searchPath = { title: `${searchValue.replace('/', '')}`, link: path };
    return [searchPath];
};
function createPath(paths) {
    return [{ title: 'Card Store', link: '/' }, ...paths];
}

export default handlePath
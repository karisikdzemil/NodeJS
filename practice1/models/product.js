
const items = [];

export const postItem = (el) => {
    items.push(el);
}

export const getItems = () => {
    return items;
}
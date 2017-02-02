import Anime from './Anime.html';

const createDom = () => {
    const ele = document.createElement('div');
    const body = document.body;
    body.insertBefore(ele, body.firstChild);
    return ele;
};

export const init = options => {
    const target = options.target || createDom();

    const animeComponent = new Anime(Object.assign(options, {target: target}));
};
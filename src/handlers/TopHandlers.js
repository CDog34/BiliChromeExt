import {BilibiliService as biliServ} from '../services/BilibiliService';
import {init as initAnimePageComponent} from '../pageComponets/anime/entrance';

export const topHandlers = {
    anime: async(uri) => {
        const json = await biliServ.loadBgm(uri.split('/')[ 0 ]);
        const bangumi = json.result;
        console.info(bangumi);
        // alert(`检测到番组：${bangumi[ 'bangumi_title' ]}\n============================\n${bangumi[ 'evaluate' ]}`);
        initAnimePageComponent({
            data: {bangumi: bangumi}
        });
    }
};
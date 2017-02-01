import {BilibiliService as biliServ} from '../services/BilibiliService';

export const topHandlers={
    anime:async (uri)=>{
        const json= await biliServ.loadBgm(uri.split('/')[0]);
        const bangumi=json.result;
        console.info(bangumi);
        alert(`检测到番组：${bangumi['bangumi_title']}\n============================\n${bangumi['evaluate']}`);
    }
};
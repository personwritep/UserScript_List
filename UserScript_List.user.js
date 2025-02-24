// ==UserScript==
// @name        UserScript List
// @namespace        http://tampermonkey.net/
// @version        0.8
// @description        Tampermonkey の登録スクリプトのリストを表示
// @author        Personwritep
// @match        https://*/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @noframes
// @grant        none
// @updateURL        https://github.com/personwritep/UserScript_List/raw/main/UserScript_List.user.js
// @downloadURL        https://github.com/personwritep/UserScript_List/raw/main/UserScript_List.user.js
// ==/UserScript==


let data; // バックアップデータの中身
let get=[]; // リストディスプレイ用の配列
let list0=[]; // 左リスト0 のデータ保持配列
let list1=[]; // 右リスト1 のデータ保持配列
let snap=1; // スナップスクロール「0:無効」「1:有効」
let list_reverce=0; // 配列の降順表示「0: 昇順」「1:降順」


display();

file_read(0);
file_read(1);




function display(){

    let snap_SVG=
        '<svg viewBox="0 0 530 530" style="height: 24px; fill: #00b2a5;">'+
        '<path d="M112 67L112 185L417 185L417 67L112 '+
        '67M17 158L17 236C45 228 70 207 98 198C93 192 83 189 76 186C57 176 37 165'+
        ' 17 158M431 196L431 198C458 208 484 230 512 236L512 158C484 166 457 184 '+
        '431 196M112 208L112 326L417 326L417 208L112 208M17 299L17 377C44 369 74 '+
        '352 98 338C90 332 80 329 71 324C54 316 35 305 17 299M431 339C459 349 484'+
        ' 370 512 377L512 299C492 305 474 317 455 326C448 329 436 332 431 339M112'+
        ' 349L112 466L417 466L417 349L112 349z"></path>'+
        '</svg>';

    let rev_SVG=
        '<svg viewBox="0 0 530 530" style="height: 22px; padding-top: 1px;">'+
        '<path style="fill: #04a0ec;" d="M109 306L46 306C36 306 26 305 20 31'+
        '5C11 330 31 343 40 352L119 431C126 438 139 457 150 457C161 457 174 438 1'+
        '81 431L260 352C269 343 289 330 280 315C274 305 264 306 254 306L191 306L1'+
        '91 153C191 131 196 103 190 82C189 77 185 73 179 71C164 68 147 71 132 71C'+
        '125 71 118 70 113 75C108 80 109 87 109 94L109 136L109 306M340 231L340 40'+
        '1L340 443C340 450 339 457 344 462C349 467 356 466 363 466C378 466 395 46'+
        '9 410 466C416 464 420 460 421 455C427 434 422 406 422 384L422 231L485 23'+
        '1C495 231 505 232 511 222C519 207 499 194 490 185L411 106C404 99 391 80 '+
        '381 80C371 80 358 99 351 106L272 185C263 194 243 207 251 222C257 232 267'+
        ' 231 277 231L340 231z"></path>'+
        '</svg>';


    let panel=
        '<div id="panel_USL">'+
        '<input class="avatar" type="submit" value="▷">'+
        '<div class="main_panel">'+

        '<div class="wap">'+
        '<div class="file_reader_USL file0">'+
        '<input class="sw1" type="submit" value="File">'+
        '<input class="sw2" type="file">'+
        '<span class="fname"></span>'+
        '<input class="sw3" type="submit" value="Compare" '+
        'title="左右のリストを比較\n青: 一致　黄色: バージョン違い　白: 一致なし">'+
        '</div>'+
        '<div class="us_list l0">'+
        '<ul></ul>'+
        '</div></div>'+

        '<div class="wap">'+
        '<div class="file_reader_USL file1">'+
        '<input class="sw1" type="submit" value="File">'+
        '<input class="sw2" type="file">'+
        '<span class="fname"></span>'+
        '<button class="sw4" type="submit">'+ snap_SVG +'</button>'+
        '<button class="sw5" type="submit">'+ rev_SVG +'</button>'+
        '<input class="sw6" type="submit" value="◁">'+

        '</div>'+
        '<div class="us_list l1">'+
        '<ul></ul>'+
        '</div></div>'+
        '</div>'+

        '<style>'+
        '@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap"); '+
        'html { overflow: hidden; } '+
        '#panel_USL { font-size: 85%; font-family: "Roboto", "sans-serif"; } '+
        '#panel_USL { position: fixed; top: 0; left: 0; z-index: calc(infinity); '+
        'overflow-y: hidden; overflow-x: scroll; scrollbar-width: none; width: 100vw; '+
        'color: #666; box-sizing: border-box; border: 1px solid #aaa; } '+
        '#panel_USL .main_panel { display: flex; padding: 2px 34px 4px 15px; width: 1075px; '+
        'background: #73a9d4; } '+
        '.wap { position: relative; height: auto; padding: 0 3px; } '+

        '.file_reader_USL { position: relative; z-index: 1; display: flex; align-items: center; '+
        'padding: 0 15px; height: 40px; margin-bottom: 3px; color: #000; background: #fff; } '+
        '.file_reader_USL >* { font: normal 16px/27px Meiryo; } '+
        '#panel_USL .sw1 { height: 26px; width: 40px; padding: 0 6px; line-height: 24px; } '+
        '#panel_USL .sw2 { display: none; } '+
        '#panel_USL .sw5, #panel_USL .sw3, #panel_USL .sw6, #panel_USL .sw4, '+
        '#panel_USL .avatar { position: absolute; width: 26px; height: 26px; padding: 0; '+
        'border: 1px solid #aaa; border-radius: 2px; } '+
        '#panel_USL .sw5 { top: 7px; right: 15px; } '+
        '#panel_USL .sw3 { top: 7px; right: 15px; width: 80px; } '+
        '#panel_USL .sw6 { top: 7px; right: -32px; } '+
        '#panel_USL .sw4 { top: 7px; right: 48px; } '+
        '#panel_USL .fname { font-size: 14px; margin: 0 12px; height: 26px; } '+
        '#panel_USL .avatar { font: normal 16px/27px Meiryo; top: 0; right: 0; display: none; } '+

        '#panel_USL .us_list { width: 530px; margin: 0; height: calc(100vh - 50px); '+
        'color: #000; background: #fff; overflow-y: scroll; overflow-x: hidden; } '+
        '#panel_USL .us_list ul { padding: 0; margin: 0; } '+
        '#panel_USL .us_list li { line-height: 21px; height: 23.2px; box-sizing: content-box; '+
        'padding: 12px 0 8px 4px; border-bottom: 1px solid #ccc; list-style: none; } '+
        '#panel_USL .us_list li >* { display: inline-block; } '+
        '#panel_USL .dp { width: 55px; text-align: center; } '+
        '#panel_USL .de { width: 45px; text-align: left; } '+
        '#panel_USL .dn { width: 300px; white-space: nowrap; } '+
        '#panel_USL .dv { width: 80px; padding: 0 6px; margin: 0 -20px 2px 15px; } '+
        '.far { height: 17px; vertical-align: -3px; } '+
        '</style>'+

        '<style class="avatar_style">'+
        'html { overflow: scroll; } '+
        '#panel_USL { height: 40px; width: 25px; box-shadow: none; } '+
        '#panel_USL .avatar { padding: 5px 0; height: 38px; display: block; } '+
        '#panel_USL .main_panel { display: none; } '+
        '</style>'+

        '</div>';

    if(!document.querySelector('#panel_USL')){
        document.body.insertAdjacentHTML('beforeend', panel); }

    if(document.querySelector('.avatar_style')){
        document.querySelector('.avatar_style').disabled=true; }

    snap_scroll(1); // スナップスクロールの適用

} // display()




function file_read(n){
    let sw1=document.querySelector('.file'+ n +'>.sw1');
    let sw2=document.querySelector('.file'+ n +'>.sw2');
    sw1.onclick=()=>{
        sw2.value=null; // 同じファイルの再読み込みを可能にする
        sw2.click(); }

    sw2.addEventListener("change" , function(){
        if(!(sw2.value)) return; // ファイルが選択されない場合
        let file_list=sw2.files;
        if(!file_list) return; // ファイルリストが選択されない場合
        let file=file_list[0];
        if(!file) return; // ファイルが無い場合

        let fname=document.querySelector('.file'+ n +'>.fname');
        fname.textContent=file_time(file.name);

        let file_reader=new FileReader();
        file_reader.readAsText(file);
        file_reader.onload=function(){
            let data_in=JSON.parse(file_reader.result);
            data=JSON.stringify(data_in); // 読込み
            extract_data(n, data); } // データの表示
    });


    function file_time(filename){
        if(filename){
            let full=filename.split('T');
            let tail=full[1];
            if(tail){
                tail=tail.substring(0, 5);
                return full[0] +' T'+ tail; }}}


    let sw3=document.querySelector('#panel_USL .sw3');
    sw3.onclick=function(){
        if(list0.length!=0 && list1.length!=0){
            compare(); }}


    let sw4=document.querySelector('#panel_USL .sw4');
    sw4.onclick=function(){
        let svg4=sw4.querySelector('svg');
        if(snap==1){
            snap=0;
            svg4.style.opacity='0.2';
            snap_scroll(1); }
        else{
            snap=1;
            svg4.style.opacity='1';
            snap_scroll(1); }}


    let sw5=document.querySelector('#panel_USL .sw5');
    if(sw5){
        sw5.onclick=()=>{
            nor_rev(); }}


    let sw6=document.querySelector('#panel_USL .sw6');
    sw6.onclick=function(){
        if(document.querySelector('.avatar_style')){
            document.querySelector('.avatar_style').disabled=false; }}


    let avatar=document.querySelector('#panel_USL .avatar');
    avatar.onclick=function(){
        if(document.querySelector('.avatar_style')){
            document.querySelector('.avatar_style').disabled=true; }}

} //  file_read()




function extract_data(n, dat){
    if(n==0){
        list0=[]; } // 初期化
    else if(n==1){
        list1=[]; } // 初期化


    let all=dat.split('"name":"');
    let tmp=all.shift();
    for(let k=0; k<all.length; k++){
        if(all[k].includes('SaveFrom.net')){
            all.splice(k, k); }}

    for(let k=0; k<all.length; k++){
        let name=all[k].substring(0, all[k].indexOf('","options":'));

        let enabled=
            all[k].substring(all[k].indexOf('"enabled":') +10, all[k].indexOf('"enabled":') +14);

        let position=all[k].substring(all[k].indexOf('"position":') +11);
        position=position.substring(0, position.indexOf(',"'));

        let source=
            all[k].substring(all[k].indexOf('"source":"')+10, all[k].indexOf('"source":"')+300);

        let decoded;
        let version;
        if(source){
            try {
                decoded=atob(source);
                let decoded_array=
                    new Uint8Array(Array.prototype.map.call(decoded, c => c.charCodeAt()));
                decoded=new TextDecoder().decode(decoded_array);

                let ver=decoded.substring(decoded.indexOf('// @version')+12);
                ver=ver.substring(0, ver.indexOf('// @'));
                version=ver.trim(); }
            catch {
                version=''; }}

        if(n==0){
            list0.push([position, enabled, name, version]); }
        else if(n==1){
            list1.push([position, enabled, name, version]); }}


    if(n==0){
        if(list0.length>0){
            if(list_reverce==1){
                list0.reverse(); }
            disp_list(0); }}
    else if(n==1){
        if(list1.length>0){
            if(list_reverce==1){
                list1.reverse(); }
            disp_list(1); }}

} // extract_data()




function nor_rev(){
    if(list_reverce==0){
        list_reverce=1;
        sort_reverse(); } // 降順
    else{
        list_reverce=0;
        sort_normal(); } // 昇順


    function sort_reverse(){
        if(list0.length>1){
            if(list0[0][0]<list0[1][0]){
                list0.reverse();
                disp_list(0); }}
        if(list1.length>1){
            if(list1[0][0]<list1[1][0]){
                list1.reverse();
                disp_list(1); }}}


    function sort_normal(){
        if(list0.length>1){
            if(list0[0][0]>list0[1][0]){
                list0.reverse();
                disp_list(0); }}
        if(list1.length>1){
            if(list1[0][0]>list1[1][0]){
                list1.reverse();
                disp_list(1); }}}

} // nor_rev()




function disp_list(n){
    let toggle_G=
        '<svg class="far" viewBox="0 0 240 168">'+
        '<path style="fill: gray;" d="M67 7C55 9 43 14 33 22C3 48 3 96 '+
        '32 122C54 142 84 138 112 138C125 138 138 140 151 138C163 136 175 131 1'+
        '85 123C215 97 215 49 186 23C164 3 134 7 106 7C93 7 80 5 67 7z"></path>'+
        '<path style="fill: #fff;" d="M70 23C62 25 55 27 48 32C13'+
        ' 56 24 113 66 122C72 123 78 123 84 123C92 121 99 119 106 114C141 90 13'+
        '0 33 88 24C82 23 76 23 70 23z"></path></svg>';

    let toggle_R=
        '<svg class="far" viewBox="0 0 240 168">'+
        '<path style="fill: red;" d="M76 20C64 22 52 27 42 35C12 61 12'+
        ' 109 41 135C63 155 93 151 121 151C134 151 147 153 160 151C172 149 184 '+
        '144 194 136C224 110 224 62 195 36C173 16 143 20 115 20C102 20 89 18 76'+
        ' 20z"></path>'+
        '<path style="fill: #fff;" d="M143 35C135 37 128 39 121 4'+
        '4C86 68 97 125 139 134C145 135 151 135 157 135C165 133 172 131 179 126'+
        'C214 102 203 45 161 36C155 35 149 35 143 35z"></path></svg>';


    get=[]; // 初期化
    if(n==0){
        for(let k=0; k<list0.length; k++){
            get.push([list0[k][0], list0[k][1], list0[k][2], list0[k][3]]); }}
    else if(n==1){
        for(let k=0; k<list1.length; k++){
            get.push([list1[k][0], list1[k][1], list1[k][2], list1[k][3]]); }}

    let ul=document.querySelector('#panel_USL .us_list.l'+ n +' ul');
    let li='';
    if(ul){
        ul.innerHTML=''; // 書込みをクリア

        for(let k=0; k<get.length; k++){
            li+=
                '<li><span class="dp">'+ get[k][0] +'</span>';

            if(get[k][1]=='true'){
                li+='<span class="de">'+ toggle_R +'</span>'; }
            else{
                li+='<span class="de">'+ toggle_G +'</span>'; }

            li+=
                '<span class="dn">'+ get[k][2] +'</span>'+
                '<span class="dv">'+ get[k][3] +'</span></li>'; }

        ul.insertAdjacentHTML('beforeend', li ); }

    last(n); // リスト末尾のmargin最適化

    catch_line();

} // disp_list()




window.addEventListener('resize', function(){
    if(list0.length>0){
        last(0); }

    if(list1.length>0){
        last(1); }});


function last(n){
    let list=document.querySelector('.us_list.l'+n);
    let list_li=document.querySelectorAll('.us_list.l'+ n +' li');
    if(list && list_li){
        let height_li=list_li[0].getBoundingClientRect().height;
        let margin_last=(list.getBoundingClientRect().height)%height_li;
        list_li[list_li.length-1].style.marginBottom=margin_last +'px'; }}




function compare(){
    mark_reset();


    let vv0=[];
    for(let k=0; k<list1.length; k++){
        let name=list1[k][2];
        let result0_nvv=list0.filter( function(elem){
            return elem[2]==name; }); // name一致

        for(let r=0; r<result0_nvv.length; r++){
            vv0.push(result0_nvv[r][0]); }} // name一致 の position 総計

    let new_vv0=Array.from(new Set(vv0)); // 重複を整理


    let v0=[];
    for(let k=0; k<list1.length; k++){
        let name=list1[k][2];
        let version=list1[k][3];
        let result0_nv=list0.filter( function(elem){
            return elem[2]==name && elem[3]==version; }); // name・version一致

        for(let r=0; r<result0_nv.length; r++){
            v0.push(result0_nv[r][0]); }} // name・version一致 の position 総計

    let new_v0=Array.from(new Set(v0)); // 重複を整理　name・version一致 の position 配列
    new_vv0=new_vv0.filter(i=>new_v0.indexOf(i)==-1); // version違いの position 配列

    mark0(new_v0, '#c0dfed');
    mark0(new_vv0, '#fff9c4');



    let vv1=[];
    for(let k=0; k<list0.length; k++){
        let name=list0[k][2];
        let result1_nvv=list1.filter( function(elem){
            return elem[2]==name; }); // name一致

        for(let r=0; r<result1_nvv.length; r++){
            vv1.push(result1_nvv[r][0]); }} // name一致 の position 総計

    let new_vv1=Array.from(new Set(vv1)); // 重複を整理


    let v1=[];
    for(let k=0; k<list0.length; k++){
        let name=list0[k][2];
        let version=list0[k][3];
        let result1_nv=list1.filter( function(elem){
            return elem[2]==name && elem[3]==version; }); // name・version一致

        for(let r=0; r<result1_nv.length; r++){
            v1.push(result1_nv[r][0]); }} // name・version一致 の position 総計

    let new_v1=Array.from(new Set(v1)); // 重複を整理　name・version一致 の position 配列
    new_vv1=new_vv1.filter(i=>new_v1.indexOf(i)==-1); // version違いの position 配列

    mark1(new_v1, '#c0dfed');
    mark1(new_vv1, '#fff9c4');

} // compare()



function mark_reset(){
    let items0=document.querySelectorAll('.us_list.l0 li');
    for(let k=0; k<items0.length; k++){
        items0[k].style.background='#fff'; }

    let items1=document.querySelectorAll('.us_list.l1 li');
    for(let k=0; k<items1.length; k++){
        items1[k].style.background='#fff'; }}


function mark0(new_list, color){
    let items0=document.querySelectorAll('.us_list.l0 li');
    for(let k=0; k<items0.length; k++){
        let dp=items0[k].querySelector('.dp').textContent;
        if(new_list.includes(dp)){
            items0[k].style.background=color; }}}


function mark1(new_list, color){
    let items1=document.querySelectorAll('.us_list.l1 li');
    for(let k=0; k<items1.length; k++){
        let dp=items1[k].querySelector('.dp').textContent;
        if(new_list.includes(dp)){
            items1[k].style.background=color; }}}



function catch_line(){
    let items1=document.querySelectorAll('.us_list.l1 li');
    for(let k=0; k<items1.length; k++){
        items1[k].onclick=function(){
            catch_up(items1[k]); }}


    function catch_up(item){
        let s_count=0; // スクロール動作のカウント
        item.style.boxShadow='inset 15px 0 0 0 red';
        setTimeout(()=>{
            item.style.boxShadow='';
        }, 800);

        let name_span1=item.querySelector('.dn');
        if(name_span1){
            let name=name_span1.textContent;

            let scroll_box=document.querySelector('.us_list.l0');
            let items0=document.querySelectorAll('.us_list.l0 li');
            for(let k=0; k<items0.length; k++){
                let name_span0=items0[k].querySelector('.dn');
                if(name_span0){
                    if(name==name_span0.textContent){
                        s_count+=1; // 最初のヒットのみスクロール
                        seek_act(items0[k], item, s_count);
                    }}}


            function seek_act(elem0, elem1, count){
                elem0.style.boxShadow='inset -15px 0 0 0 red';
                snap_scroll(0);

                if(count==1){
                    let reach=
                        elem0.getBoundingClientRect().top - elem1.getBoundingClientRect().top;
                    setTimeout(()=>{
                        if(-2<reach && reach<2 ){
                            reach=0; }
                        scroll_box.scrollBy(0, reach); // 最初のヒットのみスクロール
                    }, 100); }

                setTimeout(()=>{
                    elem0.style.boxShadow='';
                    snap_scroll(1);
                }, 800); } // seek_act()

        }} // catch_up()

} // catch_line()




function snap_scroll(n){
    let s_style=
        '<style class="snap_style">'+
        '#panel_USL .us_list { scroll-snap-type: y mandatory; } '+
        '#panel_USL .us_list li { scroll-snap-align: start; }</style>';

    let panel_USL=document.querySelector('#panel_USL');
    if(panel_USL){
        if(n==1 && snap==1){
            panel_USL.insertAdjacentHTML('beforeend', s_style); }
        else{
            if(panel_USL.querySelector('.snap_style')){
                panel_USL.querySelector('.snap_style').remove(); }}}

} // snap_scroll()




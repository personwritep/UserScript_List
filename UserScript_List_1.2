// ==UserScript==
// @name        UserScript List
// @namespace        http://tampermonkey.net/
// @version        1.2
// @description        Tampermonkey の登録スクリプトのリストを表示　ショートカット「F10」
// @author        Personwritep
// @match        https://*/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @noframes
// @grant        none
// @updateURL        https://github.com/personwritep/UserScript_List/raw/main/UserScript_List.user.js
// @downloadURL        https://github.com/personwritep/UserScript_List/raw/main/UserScript_List.user.js
// ==/UserScript==


if(!location.hostname.includes('example.com')){
    window.addEventListener('keydown', check_key);
    function check_key(event){
        if(event.keyCode==121){ // ショートカット「F10」
            event.preventDefault();
            event.stopImmediatePropagation();
            let win_apper='left=100, top=100, width=1104, height=800';
            window.open('https://example.com/', null , win_apper); }}}


if(location.hostname.includes('example.com')){
    env();
    main(); }




function env(){
    let head=document.head;
    if(head){
        let lang='<meta http-equiv="Content-Language" content="ja">';
        head.insertAdjacentHTML('beforeend', lang);

        let pre_style=head.querySelector('style');
        if(pre_style){
            pre_style.remove(); }}

    let pre_div=document.querySelector('body > div');
    if(pre_div){
        pre_div.remove(); }}




function main(){
    let data; // バックアップデータの中身
    let get=[]; // リストディスプレイ用の配列
    let list0=[]; // 左リスト0 のデータ保持配列
    let list1=[]; // 右リスト1 のデータ保持配列
    let usl_set=[]; //「UserScript List」のコントロール「wrap_select, snap, list_reverce」
    let wrap_select; // 左右リストの表示「0:両方」「1:左のみ」「2:右のみ」
    let snap; // スナップスクロール「0:無効」「1:有効」
    let list_reverce; // 配列の降順表示「0:昇順」「1:降順」
    let search=0; // 検索パネルの表示フラグ


    let read_json=localStorage.getItem('USList'); // ストレージ 保存名
    usl_set=JSON.parse(read_json);
    if(usl_set==null){
        usl_set=[0, 1, 0]; } //「shrink, snap, list_reverce, wrap_select」初期値

    wrap_select=usl_set[0];
    snap=usl_set[1];
    list_reverce=usl_set[2];


    display();
    environ();

    file_read(0);
    file_read(1);




    function display(){
        let help_url='https://ameblo.jp/personwritep/entry-12888168235.html';

        let search_SVG=
            '<svg viewBox="0 0 512 512" style="height: 16px; padding: 4px; fill: #666;">'+
            '<path d="M416 208c0 46-15 88-40 123L503 457c13 13 13 33 0 45s-33 13-45 0'+
            'L331 376c-34 25-77 40-123 40C93 416 0 323 0 208S93 0 208 0S416 93 416 20'+
            '8zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>'+
            '</svg>';

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
            '<div class="main_panel">'+

            '<div class="wrap">'+
            '<div class="file_reader_USL file0">'+
            '<button class="sw0 sw" type="submit">×</button>'+
            '<input class="sw1 sw" type="submit" value="File">'+
            '<input class="sw2" type="file">'+
            '<span class="fname"></span>'+
            '<button class="sw6 sw" type="submit">'+ search_SVG +'</button>'+
            '<input class="sw3 sw" type="submit" value="Equal" '+
            'title="左右のリストを比較\n青: 一致　黄色: バージョン違い　白: 一致なし">'+
            '</div>'+
            '<div class="us_list l0">'+
            '<ul></ul>'+
            '</div></div>'+

            '<div class="wrap">'+
            '<div class="file_reader_USL file1">'+
            '<button class="sw0 sw" type="submit">×</button>'+
            '<input class="sw1 sw" type="submit" value="File">'+
            '<input class="sw2" type="file">'+
            '<span class="fname"></span>'+
            '<button class="sw4 sw" type="submit">'+ snap_SVG +'</button>'+
            '<button class="sw5 sw" type="submit">'+ rev_SVG +'</button>'+
            '<button class="sw7 sw" type="submit">'+
            '<a href="'+ help_url +'" target="_blank" rel="noopener noreferrer"><b>？</b>'+
            '</a></button>'+
            '</div>'+
            '<div class="us_list l1">'+
            '<ul></ul>'+
            '</div></div>'+
            '</div>'+

            '<style>'+
            '@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap"); '+
            'html { overflow: hidden; } '+
            '#panel_USL { font-size: 85%; font-family: "Roboto", "sans-serif"; } '+
            '#panel_USL { position: fixed; top: 0; left: 0; z-index: 0; '+
            'overflow-y: hidden; overflow-x: scroll; scrollbar-width: none; width: 100vw; '+
            'color: #666; box-sizing: border-box; } '+
            '#panel_USL .main_panel { '+
            'display: flex; position: relative; width: fit-content; padding: 4px 15px 5px; '+
            'background: #73a9d4; box-shadow: 0 0 0 100vw #b6d2df; } '+
            '.wrap { position: relative; height: auto; padding: 0 3px; } '+
            '.file_reader_USL { position: relative; z-index: 1; display: flex; align-items: center; '+
            'padding: 0 15px; height: 40px; margin-bottom: 3px; color: #000; background: #fff; } '+

            '#panel_USL .sw { font: normal 16px/27px Meiryo; width: 26px; height: 26px; '+
            'padding: 0; border: 1px solid #aaa; border-radius: 2px; } '+
            '#panel_USL .sw0 { width: 16px; margin-right: 8px; } '+
            '#panel_USL .sw1 { height: 26px; width: 38px; } '+
            '#panel_USL .sw2 { display: none; } '+
            '#panel_USL .sw6 { position: absolute; top: 7px; right: 78px; cursor: pointer; } '+
            '#panel_USL .sw3 { position: absolute; top: 7px; right: 15px; width: 56px; } '+
            '#panel_USL .sw4 { position: absolute; top: 7px; right: 78px; } '+
            '#panel_USL .sw4 svg { opacity: 0.2; } '+
            '#panel_USL .sw5 { position: absolute; top: 7px; right: 45px; } '+
            '#panel_USL .sw7 { position: absolute; top: 10px; right: 12px; color: #999; '+
            'width: 21px; height: 21px; line-height: 22px; border-radius: 30px; } '+
            '#panel_USL .sw7 a { text-decoration: none; } '+
            '#panel_USL .fname { font: normal 15px/30px Meiryo; margin: 0 12px; height: 26px; } '+

            '#panel_USL .us_list { position: relative; z-index: 2; '+
            'width: 530px; height: calc(100vh - 52px); overflow-y: scroll; overflow-x: hidden; '+
            'color: #000; background: #fff; outline: none; } '+
            '#panel_USL .us_list ul { padding: 0; margin: 0; } '+
            '#panel_USL .us_list li { line-height: 21px; height: 23.2px; box-sizing: content-box; '+
            'padding: 12px 0 8px 4px; border-bottom: 1px solid #ccc; list-style: none; } '+
            '#panel_USL .us_list li:hover { box-shadow: inset 0 0 0 40px #aaaaaa20; } '+
            '#panel_USL .us_list li >* { display: inline-block; } '+
            '#panel_USL .dp { width: 55px; text-align: center; } '+
            '#panel_USL .de { width: 45px; text-align: left; } '+
            '#panel_USL .dn { width: 300px; white-space: nowrap; } '+
            '#panel_USL .dv { width: 80px; padding: 0 6px; margin: 0 -20px 2px 15px; } '+
            '.far { height: 17px; vertical-align: -3px; } '+
            '</style>'+

            '<style class="snap_style">'+
            '#panel_USL .us_list { scroll-snap-type: y mandatory; } '+
            '#panel_USL .us_list li { scroll-snap-align: start; } '+
            '#panel_USL .sw4 svg { opacity: 1; } '+
            '</style>'+
            '</div>';

        if(!document.querySelector('#panel_USL')){
            document.body.insertAdjacentHTML('beforeend', panel); }


        select_view(wrap_select);
        snap_set(snap);

    } // display()




    function environ(){
        window.addEventListener('resize', function(){
            if(list0.length>0){
                last(0); }
            if(list1.length>0){
                last(1); }});


        document.addEventListener("keydown", (event)=>{
            let s_list=document.querySelectorAll('#panel_USL .us_list');
            if(s_list.length==2){
                if(event.keyCode==38){ //「⇧」キー入力
                    focus_list(); }

                else if(event.keyCode==40){ //「⇩」キー入力
                    focus_list(); }

                else if(event.keyCode==37){ //「⇦」リストのフォーカス切換え
                    event.preventDefault();
                    focus_list_lr(0); }

                else if(event.keyCode==39){ //「⇨」リストのフォーカス切換え
                    event.preventDefault();
                    focus_list_lr(1); }

                else if(event.keyCode==33){ //「PageUp」
                    event.preventDefault();
                    Page_list(0); }

                else if(event.keyCode==34){ //「PageDown」
                    event.preventDefault();
                    Page_list(1); }


                function focus_list(){
                    if(s_list[0]!=document.activeElement && s_list[1]!=document.activeElement){
                        s_list[1].focus();
                        s_list[1].style.boxShadow='0 -6px 0 0 #00b0ff';
                        setTimeout(()=>{
                            s_list[1].style.boxShadow='unset';
                        }, 800); } // 右リストを優先

                    setTimeout(()=>{ //「⇧・⇩」キーの長押しでスクロール加速
                        snap_scroll(0);
                    }, 200);

                    document.addEventListener("keyup", ()=>{
                        setTimeout(()=>{ //「⇧・⇩」キーUPでスナップを「ON」に戻す
                            snap_scroll(1);
                        }, 200); }); }


                function focus_list_lr(n){
                    if(n==0){
                        s_list[0].focus();
                        s_list[0].style.boxShadow='0 -6px 0 0 #00b0ff';
                        setTimeout(()=>{
                            s_list[0].style.boxShadow='unset';
                        }, 800); }
                    else{
                        s_list[1].focus();
                        s_list[1].style.boxShadow='0 -6px 0 0 #00b0ff';
                        setTimeout(()=>{
                            s_list[1].style.boxShadow='unset';
                        }, 800); }}


                function Page_list(n){
                    let reach=s_list[0].clientHeight - 80;
                    if(n==0){
                        s_list[0].scrollBy(0, -reach);
                        s_list[1].scrollBy(0, -reach); }
                    else{
                        s_list[0].scrollBy(0, reach);
                        s_list[1].scrollBy(0, reach); }}
            }});

    } // environ()




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
                extract_data(n, data_in); }}); // データの表示


        function file_time(filename){
            if(filename){
                let full=filename.split('T');
                full[0]=full[0].replace('tampermonkey', 'TM');
                let tail=full[1];
                if(tail){
                    tail=tail.substring(0, 5);
                    return full[0] +'　T'+ tail; }}}


        let sw6=document.querySelector('#panel_USL .sw6');
        sw6.onclick=function(){
            name_search(); }


        let sw3=document.querySelector('#panel_USL .sw3');
        sw3.onclick=function(){
            if(list0.length!=0 && list1.length!=0){
                compare(); }}


        let sw4=document.querySelector('#panel_USL .sw4');
        sw4.onclick=function(){
            if(snap==0){
                snap_set(1); }
            else{
                snap_set(0); }}


        let sw5=document.querySelector('#panel_USL .sw5');
        if(sw5){
            sw5.onclick=()=>{
                nor_rev(); }}


        let sw0=document.querySelectorAll('#panel_USL .sw0');
        if(sw0.length==2){
            sw0[0].onclick=()=>{
                select_set(0); }
            sw0[1].onclick=()=>{
                select_set(1); }}

    } //  file_read()




    function extract_data(n, dat){
        if(n==0){
            list0=[]; } // 初期化
        else if(n==1){
            list1=[]; } // 初期化


        let scripts=dat.scripts;
        for(let k=0; k<scripts.length; k++){
            let enabled=scripts[k].enabled;
            let name=scripts[k].name;
            let position=scripts[k].position;
            let source=scripts[k].source;
            source=source.substring(0, 300);

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

                if(get[k][1]==true){
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




    function last(n){
        let list=document.querySelector('.us_list.l'+n);
        let list_li=document.querySelectorAll('.us_list.l'+ n +' li');
        if(list && list_li){
            let height_li=list_li[0].getBoundingClientRect().height;
            let margin_last=(list.getBoundingClientRect().height)%height_li;
            list_li[list_li.length-1].style.marginBottom=margin_last +'px'; }}




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
                            seek_act(items0[k], item, s_count); }}}


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

        mark0(new_v0, '#e1f5fe'); // 一致の配色 🟠
        mark0(new_vv0, '#fef7ec'); // バージョン違いの配色 🟠


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

        mark1(new_v1, '#e1f5fe'); // 一致の配色 🟠
        mark1(new_vv1, '#fef7ec'); // バージョン違いの配色 🟠

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
            let dp=items0[k].querySelector('.dp').textContent/1;
            if(new_list.includes(dp)){
                items0[k].style.background=color; }}}


    function mark1(new_list, color){
        let items1=document.querySelectorAll('.us_list.l1 li');
        for(let k=0; k<items1.length; k++){
            let dp=items1[k].querySelector('.dp').textContent/1;
            if(new_list.includes(dp)){
                items1[k].style.background=color; }}}




    function snap_set(n){
        if(n==0){
            snap=0;
            snap_scroll(1); }
        else{
            snap=1;
            snap_scroll(1); }

        usl_set[1]=snap;
        let write_json=JSON.stringify(usl_set);
        localStorage.setItem('USList', write_json); } // ローカルストレージ名



    function snap_scroll(n){
        let s_style=document.querySelector('.snap_style');
        if(s_style){
            if(n==1 && snap==1){
                s_style.disabled=false; }
            else{
                s_style.disabled=true; }}

    } // snap_scroll()




    function nor_rev(){
        if(list_reverce==0){
            list_reverce=1;
            sort_reverse(); } // 降順
        else{
            list_reverce=0;
            sort_normal(); } // 昇順

        usl_set[2]=list_reverce;
        let write_json=JSON.stringify(usl_set);
        localStorage.setItem('USList', write_json); // ローカルストレージ名


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




    function select_view(n){

        let wide_SVG=
            '<svg viewBox="0 0 300 300" style="width: 14px; height: 14px;">'+
            '<path style="fill: rgb(0, 0, 0);" d="M89 57C80 58 73 72 67 79C55 96 42 1'+
            '13 29 129C23 138 15 147 16 159C17 166 22 172 27 178C34 188 41 197 49 207'+
            'C58 220 68 232 77 245C81 250 86 256 93 254C107 250 101 232 97 223C92 213'+
            ' 87 204 83 194C75 172 74 148 80 126C85 109 95 95 100 79C103 71 102 54 89'+
            ' 57M207 57C193 61 200 80 204 89C208 98 213 107 217 117C225 139 226 163 2'+
            '20 185C215 201 205 216 200 232C197 240 198 257 211 255C220 253 227 240 2'+
            '32 233C245 216 258 199 271 182C277 173 285 165 284 153C283 145 278 138 2'+
            '73 132L252 104C242 91 233 78 223 66C219 61 214 55 207 57z"></path>'+
            '</svg>';


        let wrap=document.querySelectorAll('#panel_USL .wrap');
        let sw0=document.querySelectorAll('#panel_USL .sw0');
        if(sw0.length==2 && wrap.length==2){
            if(n==0){
                wrap[0].style.display='block';
                sw0[0].textContent='×';
                wrap[1].style.display='block';
                sw0[1].textContent='×'; }
            else if(n==1){
                wrap[0].style.display='block';
                sw0[0].innerHTML=wide_SVG;
                wrap[1].style.display='none'; }
            else if(n==2){
                wrap[0].style.display='none';
                wrap[1].style.display='block';
                sw0[1].innerHTML=wide_SVG; }}}



    function select_set(n){
        if(wrap_select==0){
            if(n==0){
                wrap_select=2; }
            else{
                wrap_select=1; }}
        else if(wrap_select==1){
            wrap_select=0; }
        else if(wrap_select==2){
            wrap_select=0; }

        select_view(wrap_select);

        usl_set[0]=wrap_select;
        let write_json=JSON.stringify(usl_set);
        localStorage.setItem('USList', write_json); } // ローカルストレージ名




    function name_search(){
        let s_panel=
            '<div id="search_panel">'+
            'Script name: <input type="text" class="ns">'+
            '<style>'+
            '#search_panel * { font: normal 16px Meiryo; } '+
            '#search_panel { position: fixed; z-index: 1; top: 5px; left: 198px; '+
            'padding: 6px 12px; color: #fff; background: #333; } '+
            '.ns { width: 80px; height: 20px; padding: 2px 6px 0; margin: 0 2px; } '+
            '.ns:focus-visible { outline: 1px solid #4FC3F7; } '+
            '</style>'+
            '</div>';

        if(search==0){
            search=1;
            if(!document.querySelector('#search_panel')){
                document.body.insertAdjacentHTML('beforeend', s_panel); }

            let ns=document.querySelector('.ns');
            if(ns){
                ns.oninput=()=>{
                    search_do(ns); }}

            document.addEventListener('keydown', function(event){
                if(event.keyCode==27){ //「ESC」で検索終了
                    end_name_search(); }});
        }
        else{
            end_name_search(); }



        function search_do(ns){
            let ask=ns.value;

            let list_l0=document.querySelector('.us_list.l0');
            if(list_l0){
                search_list(list_l0, ask); }

            let list_l1=document.querySelector('.us_list.l1');
            if(list_l1){
                search_list(list_l1, ask); }


            function search_list(list, ask){
                let items=list.querySelectorAll('li');
                for(let k=0; k<items.length; k++){
                    let dn=items[k].querySelector('.dn')
                    if(dn){
                        if(dn.textContent.startsWith(ask)){
                            items[k].style.display=''; }
                        else{
                            items[k].style.display='none'; }}
                    else{
                        items[k].style.display='none'; }}}

        } // search_do()



        function end_name_search(){
            search=0;

            let list_l0_li=document.querySelectorAll('.us_list.l0 li');
            for(let k=0; k<list_l0_li.length; k++){
                list_l0_li[k].style.display=''; }

            let list_l0=document.querySelector('.us_list.l0');
            if(list_l0){
                list_l0.scrollTop=0; }

            let list_l1_li=document.querySelectorAll('.us_list.l1 li');
            for(let k=0; k<list_l1_li.length; k++){
                list_l1_li[k].style.display=''; }

            let list_l1=document.querySelector('.us_list.l1');
            if(list_l1){
                list_l1.scrollTop=0; }

            if(document.querySelector('#search_panel')){
                document.querySelector('#search_panel').remove(); }}

    } // name_search()


} // main()

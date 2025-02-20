// ==UserScript==
// @name        UserScript List
// @namespace        http://tampermonkey.net/
// @version        0.3
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
let list0=[]; // リスト0用のデータ保持配列
let list1=[]; // リスト1用のデータ保持配列


display();

file_read(0);
file_read(1);




function display(){
    let panel=
        '<div id="panel_USL">'+

        '<div class="wap">'+
        '<div class="file_reader_USL file0">'+
        '<input class="button2" type="file">'+
        '<input class="button4" type="submit" value="　">'+
        '</div>'+
        '<div class="us_list l0">'+
        '<ul></ul>'+
        '</div></div>'+

        '<div class="wap">'+
        '<div class="file_reader_USL file1">'+
        '<input class="button2" type="file">'+
        '<input class="button3" type="submit" value="✖">'+
        '</div>'+
        '<div class="us_list l1">'+
        '<ul></ul>'+
        '</div></div>'+


        '<style>'+
        'body { font-family: "Roboto", "LocalRoboto", "Helvetica Neue", "Helvetica", "sans-serif"; '+
        'font-size: 85%; overflow: hidden; } '+
        '#panel_USL { position: absolute; top: 0; left: 0; z-index: calc(infinity); '+
        'display: flex; flex-direction: row; justify-content: space-between; width: auto; '+
        'padding: 2px 12px; color: #666; background: #73a9d4; '+
        'border: 1px solid #aaa; border-radius: 2px; box-shadow: 0 0 0 100vw #00000080; } '+
        '.wap { position: relative; height: calc(100vh - 10px); padding: 0 3px; } '+

        '#panel_USL .us_list { width: 530px; margin: 0; height: calc(100% - 45px); '+
        'color: #000; background: #fff; overflow-y: scroll; scroll-snap-type: y mandatory; } '+
        '#panel_USL .us_list ul { padding: 0; margin: 0; } '+
        '#panel_USL .us_list li { line-height: 21px; height: 23.2px; box-sizing: content-box; '+
        'padding: 12px 0 8px 4px; border-bottom: 1px solid #ccc; list-style: none; '+
        'scroll-snap-align: start; } '+
        '#panel_USL .us_list li >* { display: inline-block; background: #fff; } '+
        '#panel_USL .dn { width: 55px; text-align: center; } '+
        '#panel_USL .de { width: 45px; text-align: left; } '+
        '#panel_USL .d0 { width: 250px; white-space: nowrap; } '+
        '#panel_USL .d0:hover { width: auto; } '+
        '#panel_USL .d1 { width: 70px; padding: 0 15px; } '+
        '.far { height: 17px; vertical-align: -3px; } '+

        '.file_reader_USL { position: relative; z-index: 1; display: flex; align-items: center; '+
        'padding: 0 15px; height: 40px; margin-bottom: 3px; color: #000; background: #fff; } '+
        '#panel_USL .button2 { width: -webkit-fill-available; } '+
        '#panel_USL .button3, #panel_USL .button4 { position: absolute; top: 7px; right: 15px; '+
        'width: 26px; height: 26px; border: 1px solid #aaa; border-radius: 2px; '+
        'box-shadow: -12px 0 0 #fff; } '+
        '</style>'+
        '</div>';

    if(!document.querySelector('#panel_USL')){
        document.body.insertAdjacentHTML('beforeend', panel); }

} // display()




function file_read(n){
    let button2=document.querySelector('.file'+ n +'>.button2');
    button2.addEventListener("change" , function(){
        if(!(button2.value)) return; // ファイルが選択されない場合
        let file_list=button2.files;
        if(!file_list) return; // ファイルリストが選択されない場合
        let file=file_list[0];
        if(!file) return; // ファイルが無い場合

        let file_reader=new FileReader();
        file_reader.readAsText(file);
        file_reader.onload=function(){
            let data_in=JSON.parse(file_reader.result);
            data=JSON.stringify(data_in); // 読込み

            sort_data(n, data); } // データの表示

    });


    let button3=document.querySelector('.button3');
    button3.onclick=function(){
        let list_panel=document.querySelector('#panel_USL');
        if(list_panel){
            list_panel.remove(); }}

} //  file_read()




function sort_data(n, dat){
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

        let enabled=all[k].substring(all[k].indexOf('"enabled":') +10, all[k].indexOf('"enabled":') +14);

        let position=all[k].substring(all[k].indexOf('"position":') +11);
        position=position.substring(0, position.indexOf(',"'));

        let source=all[k].substring(all[k].indexOf('"source":"')+10, all[k].indexOf('"source":"')+300);

        let decoded;
        let version;
        if(source){
            try {
                decoded=atob(source);
                let decoded_array=new Uint8Array(Array.prototype.map.call(decoded, c => c.charCodeAt()));
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
            disp_list(0); }}
    else if(n==1){
        if(list1.length>0){
            disp_list(1); }}

} // sort_data()




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
                '<li><span class="dn">'+ get[k][0] +'</span>';

            if(get[k][1]=='true'){
                li+='<span class="de">'+ toggle_R +'</span>'; }
            else{
                li+='<span class="de">'+ toggle_G +'</span>'; }

            li+=
                '<span class="d0">'+ get[k][2] +'</span>'+
                '<span class="d1">'+ get[k][3] +'</span></li>'; }

        ul.insertAdjacentHTML('beforeend', li ); }

} // disp_list()

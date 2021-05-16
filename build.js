const util = require('util');
const exec = util.promisify(require('child_process').exec);

let build = async () => {
    console.log("executing the build process");
    try{
        var {stdout, stderr} = await exec("dir");
        console.log("cleaning ...");
        await exec("gatsby clean");
        console.log("building static files...");
        await exec("gatsby build --prefix-paths");
        console.log("build completed!, removing duplicate assets");
        var {stdout, stderr} = await exec("dir /b /o:gn",{cwd: process.cwd() + "/public/assets"});
        const asset_files = stdout.split("\n").filter((value) => {return value.includes(".")});
        const asset_folders = stdout.split("\n").filter((value) => {return !value.includes(".")});
        var {stdout, stderr} = await exec("type sw.js",{cwd: process.cwd() + "/public"});
        const regexp = new RegExp(/precacheManifest[\s\S]*concat/);
        var result = regexp.exec(stdout)[0];
        result = result.replace("\n","");
        result = result.replace(".concat","");
        result = result.replace("precacheManifest = ","");
        const sw = JSON.parse(result);
        var sw_files = [];
        sw.forEach(element => {
            sw_files.push(element.url);
        });
        asset_files.forEach( async (file) => {
            file = file.replace("\r","");
            if(!sw_files.includes(file)){
                await exec("del " + file, {cwd: process.cwd() + "/public"});
            }
        });
        asset_folders.forEach( async (folder) => {
            if(folder != ""){
                folder = folder.replace("\r","");
                await exec("RMDIR /S /Q " + folder, {cwd: process.cwd() + "/public"});
            }
        });
        console.log("successfully completed the build procedure.");
    }
    catch(e){
        console.log("BAHHH");
        console.log(e);
    }
}

build();
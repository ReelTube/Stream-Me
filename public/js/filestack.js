
let upload = document.getElementById('video');

upload.addEventListener("click", () =>{
    const client = filestack.init('AGadG7rQXRh2gFASA6GoJz');
    const options = {
  fromSources: ["local_file_system","instagram","facebook"],
};

client.picker(options).open();
});
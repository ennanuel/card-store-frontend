export const getImageSrc = (file) => new Promise(
    function (resolve, reject) {
        if (!file) reject('No file found');
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onloadend = () => fileReader.result ? resolve(fileReader.result) : reject();
    }
)
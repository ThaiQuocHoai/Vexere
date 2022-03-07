//upload file


const mkdirp = require("mkdirp");
const multer = require("multer");
const uploadImage = (type) => {
    const made = mkdirp.sync(`./public/images/${type}`);
    const storage = multer.diskStorage({
        
        destination: function(req, file, callback){
            callback(null, `./public/images/${type}`); //set up chỗ cần lưu file
        },
        filename: function(req, file, callback){
            callback(null, Date.now() + "_" + file.originalname); //đặt lại tên cho file
        }
    })
    const upload = multer({
        storage,
        fileFilter: function(req, file, callback) {
            const extensions = [".png", ".jpg"];
            const extension = file.originalname.slice(-4);
            const check = extensions.includes(extension);
            if(check) {
                callback(null, true);
            } else {
                callback(new Error('Extension is invalid!!!'))
            }
        }
    });
    return upload.single(type);
}

module.exports = uploadImage;
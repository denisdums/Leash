import supabase from "../config/supabaseConfig";
import uuid from 'react-native-uuid';
import {manipulateAsync, SaveFormat} from "expo-image-manipulator";

const ImageService = {
    async uploadImage(imageObject, path = '/', bucketName = 'images') {
        /***
         * Uploads image to Supabase storage
         */
        const imageData = imageObject['assets'][0];
        const uri = imageData['uri'];
        const type = imageData['type'];

        const compressedImage = await manipulateAsync(uri, [{resize: {width: 400}}], {compress: 0.5});
        const fileExtension = compressedImage.uri.split('.').pop();

        const name = `${uuid.v4()}.${fileExtension}`;
        const imagePath = `${path}${name}`;

        const imageToUpload = new FormData();
        imageToUpload.append('file', {uri, type, name});

        const {data, error} = await supabase.storage.from(bucketName).upload(imagePath, imageToUpload);

        /***
         * Returns false if error
         */
        if (error) {
            console.error(error);
            return false;
        }

        /***
         * Else returns image path
         */
        const urlData = supabase.storage.from(bucketName).getPublicUrl(imagePath);
        return urlData.data.publicUrl;
    }
}

export default ImageService
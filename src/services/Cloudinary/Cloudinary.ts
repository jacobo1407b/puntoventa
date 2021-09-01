import { cloud } from 'conect/cloudinary';
import { UploadApiResponse } from 'cloudinary';


export default class Cloud {
    foldermain:string = `${process.env.MAIN_FOLDER}`;

    async uploadImageProducto(image: string,name:string): Promise<UploadApiResponse> {
        return await cloud.uploader.upload(image, { public_id: `${this.foldermain}/${process.env.PRODUCTO_FOLDER}/${name}` })
    }

    async uploasImageUser(image: string,name:string): Promise<UploadApiResponse> {
        return await cloud.uploader.upload(image,{public_id:`${this.foldermain}/${process.env.USER_FOLDER}/${name}`})
    }
}
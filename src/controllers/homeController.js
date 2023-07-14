import { fileURLToPath } from 'url';
import path,{dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const homeController = {
    getHome: (req,res)=>{
        try {            
            res.status(200).sendFile(path.join(__dirname, '../pages/home.html'));
        } catch (e) {
            console.log(e);
            res.status(404).send('es error')
        }
    },
    getDocumentation: (req,res)=>{
        try {
            res.status(200).sendFile(path.join(__dirname, '../pages/documentation.html'))
        } catch (e) {
            res.status(404).send(e)
        }
    }
}

export default homeController;
import icon from '../../assets/img/notification-icon.svg'; // importa a imagem
import './styles.css'; // importa o css que está na mesma pasta. 
import axios from "axios";
import { BASE_URL } from '../../utils/request';

type Props = {
    saleId: number;
}

function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(Response => {
        console.log("Sucesso")
    })
}

function NotificationButton({saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />  
        </div>
    )
}

export default NotificationButton;
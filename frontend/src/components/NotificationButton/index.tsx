import icon from '../../assets/img/notification-icon.svg' // importa a imagem
import './styles.css' // importa o css que está na mesma pasta. 
function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />  
        </div>
    )
}

export default NotificationButton
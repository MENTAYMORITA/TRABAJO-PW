import image from '../../assets/grrm-photo.jpg';

import './Aside.css'

const Aside = () => {
    return (
        <aside>
            <div className="divAside">
                <div>
                    <img src={image} />
                </div>
                <p >
                This blog is the only place for official communication from George R.R. Martin. For press inquiries, please contact David Moench
                </p>
            </div>
        </aside>
    )
}

export default Aside
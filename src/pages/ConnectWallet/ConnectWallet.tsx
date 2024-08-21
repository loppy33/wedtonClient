import './ConnectWallet.sass'
import { TonConnectButton } from '@tonconnect/ui-react';


export default function ConnectWallet() {
    return (
        <div className="ConnectWallet container">
            <div className="info__container">
                <img src="images/logo.png" alt="Unicorn logo" />
                <h2>LEVELLING UP</h2>
                <p>Connect your wallet to access upcoming crypto features. Our team is working hard to bring them to you soon!</p>
            </div>
            <TonConnectButton className='ton__button' />
        </div>
    )
}
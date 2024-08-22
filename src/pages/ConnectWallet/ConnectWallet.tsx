import './ConnectWallet.sass'
import {
    TonConnectButton,
    useTonAddress
} from '@tonconnect/ui-react';

export default function ConnectWallet() {
    const userFriendlyAddress = useTonAddress();
    // Может понадобится в будущем для сохранения в бд
    // const rawAddress = useTonAddress(false);

    return (
        <div className="ConnectWallet container">
            <div className="info__container">
                <img src="images/logo.png" alt="Unicorn logo" />
                <h1>LEVELLING UP</h1>
                <p>Connect your wallet to access upcoming crypto features. Our team is working hard to bring them to you soon!</p>
            </div>
            {
                !userFriendlyAddress ?
                    <>
                        <TonConnectButton className='ton__button' />
                    </>
                    :
                    <>
                        <div className='ton__button connected'>
                            <span>{userFriendlyAddress}</span>
                        </div>
                    </>
            }
        </div>
    )
}
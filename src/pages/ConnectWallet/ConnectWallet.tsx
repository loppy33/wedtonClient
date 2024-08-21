import './ConnectWallet.sass'
import {
    TonConnectButton,
    useTonAddress
    // useTonConnectUI 
} from '@tonconnect/ui-react';

export default function ConnectWallet() {
    // const [tonConnectUI] = useTonConnectUI();
    const userFriendlyAddress = useTonAddress();
    // const rawAddress = useTonAddress(false);

    return (
        <div className="ConnectWallet container">
            <div className="info__container">
                <img src="images/logo.png" alt="Unicorn logo" />
                <h2>LEVELLING UP</h2>
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

            {/* <button onClick={async () => {
                await tonConnectUI.disconnect();
            }}>test</button> */}
        </div>
    )
}
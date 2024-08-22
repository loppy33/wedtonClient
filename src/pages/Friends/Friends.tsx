import './Friends.sass'

interface FriendData {
    name: string;
    friendInvited: number;
    bp: number;
}

function Avatar({ name }: { name: string }) {
    return (
        <div className="avatar">
            {/* TODO Проверка на наличие аватарки если нету то вот это */}
            <span>{name.charAt(0).toUpperCase()}</span>
        </div>
    );
}

function Friend({ friend }: { friend: FriendData }) {
    return (
        <div className="info">
            <Avatar name={friend.name} />
            <div className="details">
                <div className="left">
                    <div className="name">{friend.name}</div>
                    <span><img src="icons/profile.svg" alt="" /> + 10</span>
                </div>
                <div className="bp">{friend.bp.toLocaleString('en-US')} BP</div>
            </div>
        </div>
    );
}

export default function Friends() {
    const friendsData: FriendData[] = [
        { name: 'OyVeyLaVey', friendInvited: 10, bp: 89923 },
        { name: 'sonicx123', friendInvited: 10, bp: 89923 },
        { name: 'sonicx123', friendInvited: 10, bp: 89923 },
        { name: 'OyVeyLaVey', friendInvited: 10, bp: 89923 },
        { name: 'sonicx123', friendInvited: 10, bp: 89923 },
        { name: 'OyVeyLaVey', friendInvited: 10, bp: 89923 },
        { name: 'OyVeyLaVey123', friendInvited: 10, bp: 89923 }
    ];

    return (
        <div className="Friends container">
            <p>Score 10% from buddies + 2.5% from their referrals. <br /> Get a <img src="icons/ticket.png" alt="" /> play pass for each fren.</p>
            <h3>10 frens</h3>
            <div className="list__container">
                <div className="list">
                    {friendsData.map((friend, index) => (
                        <Friend key={index} friend={friend} />
                    ))}
                </div>
                <a href='#/' className="invite__button">Invite a fren</a>
            </div>
        </div>
    );
}

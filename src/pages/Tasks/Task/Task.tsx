import { useParams } from 'react-router-dom';
import './Task.sass'

export default function Task() {
    const { id } = useParams();
    // Запрос в бд

    return (
        <div className="Task container">
            <div className="title">
                <h1>WEED</h1>
                <p>Familiarize yourself with the token and receive
                    DMT token reward. Do not sell tokens before
                    airdrop or you will not get the reward.</p>
            </div>

            <div className="info">
                <h2>Reward:</h2>
                <span>0.05 DMT</span>
            </div>

            <div className="info">
                <h2>Completed:</h2>
                <span>0 out of 200</span>
                <p>This task has a limited number of winners who will receive a reward</p>
            </div>
            <ul>
                <li >
                    <div>
                        <h3>1. Text</h3>
                        <p>text</p>
                    </div>
                    {/* <a className='link' target='_blank' href="https://google.com">Start</a> */}
                    <img className='link' src="/icons/check.svg" alt="" />
                </li>
                <li>
                    <div>
                        <h3>2. Text</h3>
                        <p>text</p>
                    </div>
                    <a className='link' target='_blank' href="https://google.com">Start</a>
                </li>
                <li>
                    <div>
                        <h3>3. Text</h3>
                        <p>text</p>
                    </div>
                    <a className='link' target='_blank' href="https://google.com">Start</a>
                </li>
            </ul>

        </div>
    )
}
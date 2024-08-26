import { useState } from "react"
import './Tasks.sass'
import { Link } from "react-router-dom";

interface TaskData {
    id: number;
    name: string;
    icon: string;
    reward: number;
    rewardType: string;
    tasks: [{ description: string, link: string }];
}

function Avatar({ icon }: { icon: string }) {
    return (
        <div className="avatar">
            {/* TODO Проверка на наличие иконки если нету то вот это */}
            {icon ?
                <>
                    <img src={icon} alt="" />
                </> : <>
                    <img src="icons/global.svg" alt="" />
                </>}
        </div>
    );
}

function Task({ task }: { task: TaskData }) {
    return (
        <Link to={"/task/" + task.id} className="info">
            <Avatar icon={task.icon} />
            <div className="details">
                <div className="left">
                    <div className="name">{task.name}</div>
                    <span>{task.reward} {task.rewardType}</span>
                </div>
                <div className="bp"><img src="icons/arrow.svg" alt="" /></div>
            </div>
        </Link>
    );
}


export default function Tasks() {
    const [tasksType, setTaskType] = useState<string>('daily')
    const [dailyClaim, setDailyCalim] = useState<boolean>(true)

    const taskData: TaskData[] = [
        {
            id: 1,
            name: 'Nuka Cola',
            reward: 0.04,
            icon: '',
            rewardType: "DMT",
            tasks: [{ description: 'Sub tg channel for exmpl', link: 'https://google.com' }]
        },
        {
            id: 2,
            name: 'Nuka Cola', reward: 0.04,
            icon: '',

            rewardType: "DMT",
            tasks: [{ description: 'Sub tg channel for exmpl', link: 'https://google.com' }]
        },
        {
            id: 3,
            name: 'Nuka Cola', reward: 0.04,
            icon: '',
            rewardType: "DMT",
            tasks: [{ description: 'Sub tg channel for exmpl', link: 'https://google.com' }]
        },
        {
            id: 4,
            name: 'Nuka Cola', reward: 0.04,
            icon: '',
            rewardType: "DMT",
            tasks: [{ description: 'Sub tg channel for exmpl', link: 'https://google.com' }]
        },
        {
            id: 5,
            name: 'Nuka Cola', reward: 0.04,
            icon: '',

            rewardType: "DMT",
            tasks: [{ description: 'Sub tg channel for exmpl', link: 'https://google.com' }]
        },
        {
            id: 5,
            name: 'Nuka Cola', reward: 0.04,
            icon: '',
            rewardType: "DMT",
            tasks: [{ description: 'Sub tg channel for exmpl', link: 'https://google.com' }]
        },
        {
            id: 5,
            name: 'Nuka Cola', reward: 0.04,
            icon: '',
            rewardType: "DMT",
            tasks: [{ description: 'Sub tg channel for exmpl', link: 'https://google.com' }]
        },
        {
            id: 5,
            name: 'Nuka Cola', reward: 0.04,
            icon: '',

            rewardType: "DMT",
            tasks: [{ description: 'Sub tg channel for exmpl', link: 'https://google.com' }]
        },
        {
            id: 5,
            name: 'Nuka Cola123', reward: 0.04,
            icon: '',
            rewardType: "DMT",
            tasks: [{ description: 'Sub tg channel for exmpl', link: 'https://google.com' }]
        },
    ];

    const dailyRewards = [0.1, 0.3, 0.5, 0.8, 1.2, 1.7, 2.3, 3, 3.8, 5]

    const tasksRender = () => {
        switch (tasksType) {
            case 'daily':
                return (
                    <div className="daily__container">
                        {/* <h1>DAILY REWARDS</h1>
                        <img src="icons/calendar.svg" alt="" />
                        <p>Accrue coins for logging into the game daily
                        without skipping</p> */}
                        <div className="rewards">
                            {dailyRewards.map((reward, index) => (
                                <div className={index == 0 ? "day active" : "day" } key={index}>
                                    <h3>Day {index + 1}</h3>
                                    <img src='icons/weedCoin.svg' alt='' />
                                    <span>{reward}</span>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setDailyCalim(!dailyClaim)} className={!dailyClaim ? "disabled" : ""}>Claim</button>
                    </div>
                )
            case 'main':
                return (
                    <div className="list__container">
                        <div className="list">
                            {taskData.map((task, index) => (
                                <Task key={index} task={task} />
                            ))}
                        </div>
                    </div>
                )


            default:
                return null
        }
    }

    return (
        <div className="Tasks container">
            <div className="title">
                <h1>TASKS</h1>
                <div className="choice__container">
                    <span onClick={() => setTaskType('daily')} className={tasksType === 'daily' ? 'active' : ''}>Daily</span>
                    <span onClick={() => setTaskType('main')} className={tasksType === 'main' ? 'active' : ''}>Main</span>
                </div>
            </div>
            {tasksRender()}
        </div>
    )
}
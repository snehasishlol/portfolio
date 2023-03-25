"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const items = [
    {
        date: '25th March, 2023',
        title: 'made this website.',
        description: 'i started making this terminal-like portfolio website using next.js 13.4.2 and css.'
    }
]

export default function TimelinePage() {

    const router = useRouter();

    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            const commandEl = document.getElementById("command");
            const commandV = document.getElementById("command").value;
            const response = document.getElementById("response");

            const command = commandV.toLowerCase();

            if (!command) return response.innerHTML = `<span class="red">snehasishkun: command not found.</span>`;

            if (command === "home") {
                response.innerHTML = `Redirecting you to <span class="aqua">/</span>...
                `;
                router.push("/");
            }
            else if (command === "activity") {
                response.innerHTML = `Redirecting you to <span class="aqua">/activity</span>...`;
                router.push("/activity");
            }
            else if (command === "knowledge") {
                response.innerHTML = `Redirecting you to <span class="aqua">/knowledge</span>...`;
                router.push("/knowledge");
            }
            else if (command === "projects") {
                response.innerHTML = `Redirecting you to <span class="aqua">/projects</span>...`;
                router.push("/projects");
            }
            else if (command === "socials") {
                response.innerHTML = `Redirecting you to <span class="aqua">/socials</span>...`;
                router.push("/socials");
            }
            else {
                response.innerHTML = `<span class="red">snehasishkun: command '${command}' not found.</span>`;
                commandEl.value = null;
            }
        }
    }

    return (
        <>
            <div className="center">
                <div className="hero">
                    <div id="navbar" className="horizontal">
                        <Link href="/" className="link">home</Link>
                        <Link href="/activity" className="link">activity</Link>
                        <Link href="/knowledge" className="link">knowledge</Link>
                        <Link href="/projects" className="link">projects</Link>
                        <Link href="/socials" className="link">socials</Link>
                    </div>
                    <h2 className="title">timeline</h2>
                    <p className="subtitle">achievements, contributions and milestones.</p>
                </div>
                <div className="divider"></div>
                {
                    items.map((item) => (
                        <p className="description" key={item.title}>
                            <span className="blue">::</span> <span className="purple">{item.date}</span> - <span className="aqua">{item.title}</span> <br/> <span className="green">{item.description}</span>
                        </p>
                    ))
                }
                <div className="divider"></div>
                <div className="terminal">
                    <h4 className="terminal-title">snehasishkun:$ where do you wish to go?</h4>
                    <p className="option">{">>"} home / activity / knowledge / projects / socials</p>
                    <div className="horizontal">
                        <p className="label"><span className="blue">~/timeline</span><span className="color">$</span></p>
                        <input type="text" id="command" className="input" autoComplete="off" autoFocus={true} onKeyDown={handleKeypress} placeholder={"....."} />
                    </div>
                    <div className="horizontal">
                        <p className="response" id="response"></p>
                    </div>
                </div>
            </div>
        </>
    )
}

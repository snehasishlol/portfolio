"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {

    const router = useRouter();

    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            const commandEl = document.getElementById("command");
            const command = document.getElementById("command").value;
            const response = document.getElementById("response");

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
            else if (command === "socials") {
                response.innerHTML = `Redirecting you to <span class="aqua">/socials</span>...`;
                router.push("/socials");
            }
            else if (command === "timeline") {
                response.innerHTML = `Redirecting you to <span class="aqua">/timeline</span>...`;
                router.push("/timeline");
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
                        <Link href="/socials" className="link">socials</Link>
                        <Link href="/timeline" className="link">timeline</Link>
                    </div>
                    <h2 className="title">projects</h2>
                    <p className="subtitle">some projects that i have contributed to.</p>
                </div>
                <div className="divider"></div>
                <p className="description">
                    <span className="blue">::</span> <a href="//xtfz.tech" target="_blank" className="link">xtfz</a> - <span className="green">a development community aimed at contributing to build useful platforms for people.</span>
                </p>
                <p className="description">
                    <span className="blue">::</span> <a href="//igma.vercel.app" target="_blank" className="link">igma</a> - <span className="green">a prompt based image generator using open-ai api key.</span>
                </p>
                <div className="divider"></div>
                <div className="terminal">
                    <h4 className="terminal-title">snehasishkun:$ where do you wish to go?</h4>
                    <p className="option">{">>"} home / activity / knowledge / socials / timeline</p>
                    <div className="horizontal">
                        <p className="label"><span className="blue">~/projects</span><span className="color">$</span></p>
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

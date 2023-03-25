"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function KnowledgePage() {

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
            else if (command === "projects") {
                response.innerHTML = `Redirecting you to <span class="aqua">/projects</span>...`;
                router.push("/projects");
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
                        <Link href="/projects" className="link">projects</Link>
                        <Link href="/socials" className="link">socials</Link>
                        <Link href="/timeline" className="link">timeline</Link>
                    </div>
                    <h2 className="title">knowledge</h2>
                    <p className="subtitle">learning <a href="//brain.js.org" className="link">brain.js</a>,<a href="//reactnative.dev" className="link">react native</a>and<a href="//python.org" className="link">python</a>.</p>
                </div>
                <div className="divider"></div>
                <p className="description">
                    i am experienced in - <span className="green"><a href="//nodejs.org" className="link">node.js</a> <a href="//expressjs.com" className="link">express.js</a> <a href="//reactjs.org" className="link">react.js</a> <a href="//nextjs.org" className="link">next.js</a> <a href="//electronjs.org" className="link">electron.js</a> <a href="//mongodb.com" className="link">mongo db</a> <a href="//chakra-ui.com" className="link">chakra-ui</a></span>.
                </p>
                <p className="description">
                    i am currently in 11th grade, studying at <a href="#" className="link">school</a>, pursuing - <span className="green">physics, mathematics, chemistry and biology.</span>
                </p>
                <div className="divider"></div>
                <div className="terminal">
                    <h4 className="terminal-title">snehasishkun:$ where do you wish to go?</h4>
                    <p className="option">{">>"} home / activity / projects / socials / timeline</p>
                    <div className="horizontal">
                        <p className="label"><span className="blue">~/knowledge</span><span className="color">$</span></p>
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

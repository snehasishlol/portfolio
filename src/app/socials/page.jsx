"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SocialsPage() {

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
            else if (command === "projects") {
                response.innerHTML = `Redirecting you to <span class="aqua">/projects</span>...`;
                router.push("/projects");
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
                        <Link href="/projects" className="link">projects</Link>
                        <Link href="/timeline" className="link">timeline</Link>
                    </div>
                    <h2 className="title">socials</h2>
                    <p className="subtitle">any account not listed in here is not mine.</p>
                </div>
                <div className="divider"></div>
                <p className="description">
                    <span className="blue">::</span> <a href="//github.com/snehasishlol" target="_blank" className="link">github</a>
                </p>
                <p className="description">
                    <span className="blue">::</span> <a href="//twitter.com/snehasishlol" target="_blank" className="link">twitter</a>
                </p>
                <p className="description">
                    <span className="blue">::</span> <a href="//youtube.com/@snehasishlol" target="_blank" className="link">youtube</a>
                </p>
                <p className="description">
                    <span className="blue">::</span> <a href="//open.spotify.com/user/31momuam5cf3a6gdw6r47sdcs55q" target="_blank" className="link">spotify</a>
                </p>
                <p className="description">
                    <span className="blue">::</span> <a href="//instagram.com/snehasishlol" target="_blank" className="link">instagram</a>
                </p>
                <p className="description">
                    <span className="blue">::</span> <a href="//pinterest.com/snehasishlol" target="_blank" className="link">pinterest</a>
                </p>
                <p className="description">
                    <span className="blue">::</span> <a href="//discord.gg/Mxczhv4p4M" target="_blank" className="link">discord</a>
                </p>
                <p className="description">
                    <span className="blue">::</span> <a href="//snehasishkun.tumblr.com" target="_blank" className="link">tumblr</a>
                </p>
                <div className="divider"></div>
                <div className="terminal">
                    <h4 className="terminal-title">snehasishkun:$ where do you wish to go?</h4>
                    <p className="option">{">>"} home / activity / knowledge / projects / timeline</p>
                    <div className="horizontal">
                        <p className="label"><span className="blue">~/socials</span><span className="color">$</span></p>
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

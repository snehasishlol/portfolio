"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ActivityPage() {

    const router = useRouter();

    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            const commandEl = document.getElementById("command");
            const command = document.getElementById("command").value;
            const response = document.getElementById("response");

            if (!command) return response.innerHTML = `<span class="red">snehasishkun: command not found.</span>`;

            if (command === "activity") {
                response.innerHTML = `Redirecting you to <span class="aqua">/activity</span>...
                `;
                router.push("/activity");
            }
            else if (command === "knowledge") {
                response.innerHTML = `Redirecting you to <span class="aqua">/projects</span>...`;
                router.push("/projects");
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
                        <Link href="/activity" className="link">activity</Link>
                        <Link href="/knowledge" className="link">knowledge</Link>
                        <Link href="/projects" className="link">projects</Link>
                        <Link href="/socials" className="link">socials</Link>
                        <Link href="/timeline" className="link">timeline</Link>
                    </div>
                    <h2 className="title">activity</h2>
                    <p className="subtitle">coding, spotify and discord activity and statistics.</p>
                </div>
                <div className="divider"></div>
                <h4 className="subtitle">coding</h4>
                <p className="subtitle">time</p>
                <div className="image-container centered">
                    <img className="image" src="https://wakatime.com/share/@22430477-f60f-4af5-bb01-103c4714180a/7934fb80-c76b-4bae-ad6f-a0f5a5684665.svg" />
                </div>
                <p className="subtitle">languages</p>
                <div className="image-container centered">
                    <img className="image" src="https://wakatime.com/share/@22430477-f60f-4af5-bb01-103c4714180a/befd2e27-65e7-464c-95c8-bb3216cb72ec.svg" />
                </div>
                <div className="divide"></div>
                <h4 className="subtitle">spotify</h4>
                <div className="image-container centered">
                    <img className="image" src="https://spotify-github-profile.vercel.app/api/view?uid=31momuam5cf3a6gdw6r47sdcs55q&cover_image=true&theme=default&show_offline=false&background_color=1b212c&interchange=true&bar_color_cover=true" />
                </div>
                <div className="divide"></div>
                <h4 className="subtitle">discord</h4>
                <div className="image-container centered">
                    <img className="image" src="https://lanyard.cnrad.dev/api/741292272661954651" />
                </div>
                <div className="divider"></div>
                <div className="terminal">
                    <h4 className="terminal-title">snehasishkun:$ where do you wish to go?</h4>
                    <p className="option">{">>"} activity / knowledge / projects / socials / timeline</p>
                    <div className="horizontal">
                        <p className="label"><span className="blue">~/home</span><span className="color">$</span></p>
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

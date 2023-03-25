"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import TypeIt from "typeit-react";

export default function HomePage() {
    
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
                    <h2 className="title">snehasishkun</h2>
                    <div className="subtitle">
                        <TypeIt
                            getBeforeInit={(instance) => {
                                instance.type(
                                    "a full stack web developer 🍆"
                                )
                                    .pause(750)
                                    .delete(2)
                                    .pause(250)
                                    .type(".");
                                return instance;
                            }}
                        />
                        &nbsp;
                    </div>
                    <div className="divider"></div>
                    <p className="description">
                        <span className="green">16 year old, 11th grade student, from india.</span>
                    </p>
                    <p className="description">
                        <span className="purple">hopeless weeb. sucks at gaming. epic music taste. </span>
                    </p>
                    <p className="description">
                        <span className="blue">currently learning: <Link href="//brain.js.org" target="_blank" className="link">brain.js</Link>,<Link href="//reactnative.dev" target="_blank" className="link">react native</Link>and<Link href="//python.org" target="_blank" className="link">python</Link>.</span>
                    </p>
                    <p className="description">
                        <span className="red">i usually watch animes, listen to music, or make stuff using code in my free time.</span>
                    </p>
                    <p className="description">
                        <span className="aqua">you can text me anytime on any of my <Link href="/socials" className="link">socials</Link>:D</span>
                    </p>
                    <div className="divider"></div>
                    <div className="terminal">
                        <h4 className="title">snehasishkun:$ where do you wish to go?</h4>
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
            </div>
        </>
    )
}

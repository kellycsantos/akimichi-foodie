import { NavLink } from "react-router-dom"
import './Header.css'
import Button from "../Button/Button";

interface INav {
    links: ILinks[]
}

interface ILinks {
    link: string;
    value: string
}

export default function Header({ links }: INav) {
    return (
        <header>
            <nav>
                <h2>Akimichi</h2>
                {
                    links.map((link, index) =>
                        <NavLink key={index} to={link.link}>{link.value}</NavLink>
                    )
                }
                <Button variant="booking" value="booking now"/>
            </nav>
        </header>
    )
}
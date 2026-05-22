import MenuItem from "./MenuItem";
import type { Active } from "../types";

interface CompanyMenuProps {
    active?: Active;
}

export default function CompanyMenu({ active }: CompanyMenuProps) {
    return (
        <ul>
            <li>
                <MenuItem
                    active={active}
                    href="/stillingsregistrering/stillingsannonser"
                    id="stillingsannonser"
                    rel="nofollow"
                >
                    Stillingsannonser
                </MenuItem>
            </li>
            <li className="arb-header-divider">
                <MenuItem href="/" id="for-jobbsokere">
                    For jobbsøkere
                </MenuItem>
            </li>
        </ul>
    );
}

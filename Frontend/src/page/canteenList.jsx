import { useContext } from "preact/hooks";
import { UsersContext } from "../app.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import ProfileLogo from "../components/profile/profileLogo.jsx";

function CanteenList() {
    const data = useContext(UsersContext);

    return (
        <div className="min-h-screen bg-bgcol px-4 pb-24 pt-6 sm:px-8 sm:pb-10 sm:pt-10">
            <div className="grid gap-4">
                {data.map((user) => (
                    <article key={user.id} className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:gap-5 sm:p-5">
                            <div className="flex min-w-0 items-center">
                                <ProfileLogo data={user} />
                            </div>
                            <button type="button" onClick={() => {
                                location.href = `/kantin/${user.id}`
                            }}  className="shrink-0 rounded-lg bg-primary px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-primary/90 focus:outline-2 focus:outline-offset-2 focus:outline-primary sm:px-4 sm:py-2.5 sm:text-sm">
                                Kunjungi
                            </button>
                        </article>
                    ))}
                </div>
            </div>
    )
}

export default CanteenList;
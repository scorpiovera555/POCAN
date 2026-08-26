import { useContext } from "preact/hooks";
import { UsersContext } from "../app.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import ProfilePic from "../components/profile/ProfilePicture.jsx";

function CanteenList() {
    const data = useContext(UsersContext);

    return (
        <div className="min-h-screen bg-bgcol px-4 pb-24 pt-6 sm:px-8 sm:pb-10 sm:pt-10">
            <div className="mx-auto max-w-5xl">
                <div className="mb-6 sm:mb-8">
                    <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">
                        Pilihan kantin
                    </p>
                    <h1 className="text-3xl font-bold text-primary sm:text-4xl">Temukan kantin favoritmu</h1>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                        Pilih kantin untuk melihat menu dan informasi selengkapnya.
                    </p>
                </div>

                <div className="grid gap-4">
                    {data.map((user) => (
                        <article key={user.id} className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:gap-5 sm:p-5">
                            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                <ProfilePic data={user} />
                                <span className="min-w-0">
                                    <p className="truncate text-lg font-semibold text-primary sm:text-xl">{`${user.firstName} ${user.lastName}`}</p>
                                    <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
                                        <FontAwesomeIcon className="text-green-500" icon={faCircle} />
                                        Buka
                                    </p>
                                </span>
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
        </div>
    )
}

export default CanteenList;
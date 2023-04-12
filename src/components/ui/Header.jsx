import { NavBar } from './NavBar';

export const Header = () => {
    return (
        <>
            <section className="col-12 col-md-5 mt-3">
                <p className="h1 text-primary ml-2">Blog de CraftianosPrivacy</p>
            </section>
            <section className="col-12 col-md-6 mt-3">
                <NavBar />
            </section>
        </>
    )
}

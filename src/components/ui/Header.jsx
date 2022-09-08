import { NavBar } from './NavBar';

export const Header = () => {
    return (
        <>
            <section className="col-12 col-md-4 mt-3">
                <p className="h1 text-primary ml-2">Blog de Craftianos</p>
            </section>
            <section className="col-12 col-md-8 mt-3">
                <NavBar />
            </section>
        </>
    )
}

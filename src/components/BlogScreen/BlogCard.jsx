export const BlogCard = ({
    category,
    date,
    description,
    image,
    link,
    title,
}) => {

    const descriptionMod = description.replaceAll(`|`, `&nbsp;`);
    const categoryName   = category.split('/')[1];

    return (
        <section className={ 'card' + categoryName + ' mb-3' } >
            <div className="row g-0">
                <div className="col-md-4">
                    <a href={ link }>
                        <img src={ image } className="card-img img-fluid rounded-start" alt={ title } />
                    </a>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <a href={ link }>
                            <h5 className="card-title">{ title }</h5>
                        </a>
                        <p className="card-description">{ descriptionMod }</p>
                        <p className="card-description">
                            Categoría: { category }
                        </p>
                        <small className="text-muted fw-bold ">{ date }</small>
                    </div>
                </div>
            </div>
        </section>
    );
}

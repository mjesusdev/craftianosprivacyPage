import React from 'react';

export const TicketsArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 class="h3 text-success mb-4">💸 Apps para ahorrar con tickets 💡</h1>
                <h2 class="h4 text-success mb-4">👑 Recibe dinero por tickets de supermercado ✅</h2>
                <p class="text-justify">
                    En esta sección os enseño como ganar dinero o ahorrar por hacer la compra en cualquier supermercado 🥰,
                    además de dar mi opinión sobre las apps, que permiten esto 🤗
                </p>
                <div class="card mb-3">
                    <div class="card-body">
                        <h3 class="h4 text-danger">✅ Promos App: Cupones válidos en cualquier supermercado</h3>
                        <p class="text-justify">
                            Promos es una app con la que podemos ganar dinero por comprar en cualquier supermercado.
                            Es una de las mejores porque hay mucha variedad de promociones y es muy intuitiva 🥰
                        </p>
                        <a class="btn btn-outline-success mb-4" href="../promos-app/" title="Mira más información de Promos">
                            Mira más información de Promos 👏
                        </a>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h3 class="h4 text-danger">✅ Tiendeo: Catálogo de supermercados, cashback y mucho MÁS</h3>
                        <p class="text-justify">
                            Tiendeo es una app con la que podemos ver el catálogo de los supermercados, 
                            subir tickets de la compra y ganar dinero con ellos, entre otras cosas. <br /><br />

                            Solo por registrarse puedes ganar 1€ GRATIS + 0.50€ por subir el primer ticket. <br /><br />

                            ¿Quieres recibir cashback por tus compras en tiendeo? <br />
                            Pulsa abajo para ver más información y registrarte 👇
                        </p>
                        <a class="btn btn-outline-success mb-4" href="../tiendeo/" title="Mira más información de Tiendeo">
                            Mira más información de Tiendeo 👏
                        </a>
                    </div>
                </div>
            </div>
            <div class="col col-md-3 mb-5">
                <div class="card">
                    <div class="card-body">
                        <h2 class="h5 text-danger">¿Cómo ahorrar con los tickets de compra?</h2>
                        <p class="text-justify">
                            En esta sección dejo algunas apps con las que subir los tickets del supermercado y ahorrar dinero.
                            Es muy fácil, solo hace descargarse alguna app, registrarse, elegir los productos que hemos comprado. <br /><br />
                            (En todas las apps, se actualizan los productos cada semana)
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
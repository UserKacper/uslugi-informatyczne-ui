import React from 'react'

export const Footer = () => {
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            O nas
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Blog
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Ekipa
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Cennik
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Kontakt
                        </a>
                    </div>
                </nav>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2021 SomeCompany, Inc. All rights reserved.
                </p>
            </div>
        </section>
    )
}


import Badge from "../Common/Badge"

const PortfolioCard = () => {
    return (
        <div class="bg-[#20202a] overflow-hidden h-full">
            <img
                src="projects/project1.png"
                alt="portfolio img"
                class="w-full object-cover h-32 sm:h-48 md:h-64"
            />
            <div>
                <div id="arrow" class="py-2 px-6 bg-[#20202a] hover:-translate-y-10 transition-all ease-in-out duration-500">
                    <div class="flex justify-between p-0 m-0 ">
                        <h3 class="mr-2 font-semibold pt-2 text-2xl text-white leading-tight sm:leading-normal">
                            <a
                                href="https://github.com/rawheel/fastapi-boilerplate"
                                target="_blank"
                            >
                                Nimbal
                            </a>
                        </h3>
                        <div class="text-white transition duration-500 hover:text-yellow transform hover:-translate-y-1 hover:scale-110 pt-4 text-base">
                            <a
                                href="https://github.com/rawheel/fastapi-boilerplate"
                                target="_blank"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="globe"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                    class="svg-inline--fa fa-globe fa-w-16"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                                        class=""
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <p class="text-xs text-gray-500 font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti
                        aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit,
                        eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!
                    </p>
                    <div class="text-sm flex flex-wrap gap-3 py-2">
                        <Badge title={'Reactjs'} />
                        <Badge title={'.net'} />
                        <Badge title={'Ant design'} />
                        <Badge title={'Tailwindcss'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard
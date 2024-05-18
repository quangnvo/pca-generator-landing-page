import { BarChartBig, ScatterChart, Table } from 'lucide-react'

function Features() {

    let data = [
        {
            id: 1,
            icon: <BarChartBig size="36px" />,
            title: 'Scree plot',
            description: 'Determine the number of principal components to retain in your analysis. This plot displays the proportion of total variance in the data for each principal component.'
        },
        {
            id: 2,
            icon: <ScatterChart size="36px" />,
            title: 'PCA plot 2D and 3D',
            description: 'PCA works by reducing the dimensionality of the data. It takes a dataset with many variables and simplifies it into just a few “principal components” that capture the majority of the variation in the data.'
        },
        {
            id: 3,
            icon: <Table size="36px" />,
            title: 'Loading table',
            description: 'To see which variables contribute how much to each principal component with loading table.'
        }
    ]

    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed text-center">Features</h2>
            <div className="card-list text-center md:text-left flex flex-wrap justify-center gap-10">
                {
                    data.map((content, i) => {
                        return (
                            <div id={"card-" + i} className="group hover:bg-midBlue rounded-lg p-8 w-[360px] border border-gray-800">
                                <span className='flex justify-center md:justify-start'>{content.icon}</span>
                                <h3 className="mt-8 text-2xl font-medium">{content.title}</h3>
                                <p className="content  my-4 text-sm leading-loose text-slate-700 ">{content.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Features
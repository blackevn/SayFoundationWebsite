import { ProjectsCards } from ".."

export interface ProjectsType {
    id?: number
    name: string
    image: string
    description: string
}

const ThirdSection = () => {

    const projects: ProjectsType[] = [
        {
        id: 1,
        name: 'School Provision',
        image: '/School.jpeg',
        description: ''
        },
        {
        id: 2,
        name: 'Single Business Help',
        image: '/Fan.jpeg',
        description: ''
        },
        {
        id: 3,
        name: 'Building Project',
        image: '/Building.png',
        description: ''
        },
  ]

  return <div className="p-4 space-y-4">
    <h1 className="text-7xl font-bold py-10">Projects</h1>
    <div className="flex flex-col lg:flex-row justify-between gap-4 lg:px-40 lg:py-20">
      {projects.map((card: ProjectsType) => (<ProjectsCards 
                                              key={card.id}
                                              name={card.name} 
                                              image={card.image} 
                                              description={card.description}/>))}
      </div>
  </div>
}

export default ThirdSection
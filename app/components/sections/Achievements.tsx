interface AchievementsTypes {
    title: string
    number: string
}

const Achievements = () => {



    const achievements = [
    {
        title: 'Our charity organization has made a meaningful impact in 5 countries.',
        number: '5'
    },
    {
        title: 'We are proud to announce that our organization has positively impacted over 400 lives.',
        number: '400+'
    },
    {
        title: 'Our charity organization thrives on the remarkable dedication of over 50 volunteers.',
        number: '50+'
    },

]

  return (
    <div className="flex flex-col lg:flex-row w-full justify-around py-8">{achievements.map(item => (
        <div key={item.number} className="grid place-items-center">
        <h1 className="text-7xl font-bold text-blue-500">{item.number}</h1>
        <h1 className="text-center p-4">{item.title}</h1>
      
    </div>))}</div>
  )
}

export default Achievements